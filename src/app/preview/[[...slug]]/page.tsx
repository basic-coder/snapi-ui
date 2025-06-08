import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

// Arrays to categorize components
const CENTERED_COMPONENTS = [
    "alert",
    "avatars",
    "backgrounds",
    "ai-input",
    "badges",
    "cards",
    "dropdowns",
    "inputs",
    "loading",
    "modals",
    "navigation",
    "progress",
    "tabs"
    // Add more small components here
];

// const FULL_WIDTH_COMPONENTS = ["hero"];

export default async function PreviewPage({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    if (!slug.length) return notFound();

    const componentName = slug.join("/");

    try {
        const Component = dynamic(
            () =>
                import(`@/snapiui/${componentName}`).catch(() =>
                    notFound()
                ),
            { ssr: true }
        );

        // Check if component should be centered
        const shouldCenter = CENTERED_COMPONENTS.some((component) =>
            componentName.startsWith(component)
        );

        return shouldCenter ? (
            <div className="min-h-screen flex items-center justify-center">
                <Component />
            </div>
        ) : (
            <Component />
        );
    } catch (error) {
        console.error("Error loading component:", error);
        // Handle the error gracefully
        // You can return a fallback UI or a not found page
        // For example, you can return a simple message or a custom 404 component
        return notFound();
    }
}