import Footer from "../../components/landing/Footer";
import Header from "../../components/landing/Header";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:{
        template:"Snapi UI = Open Source Components" ,
        default:"Snapi UI"
    }
}

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Header />
        <main className="relative w-full pt-0 md:pt-0">
            {children}
        </main>
        <Footer />
        </>
    );
}