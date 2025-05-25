export interface NavItem{
    id:string|number;
    title: string;
    href: string;
    description? : string;
    count?: number | string;
    isComingSoon?: boolean;
    isNew?:boolean;
    isLab?:boolean;
}

export interface NavSection{
    title: string;
    items: NavItem[]
}

export const navigationSections:NavSection[]=[
    {
        title: "Getting Started",
        items: [
            {
                id:"intro",
                title : "Installation",
                href: "/docs",
                description: "Introduction and usage guidelines"
            }
        ]
    },
    {
        title: "Components",
        items: [
            {
                id: 1,
                title : "AI Inputs",
                href: "/docs/components/ai-inputs",
                description: "modern ai inputs",
                count:10
            },
            {
                id:2,
                title : "Alerts",
                href: "/docs/components/alerts",
                description: "modern alerts",
                count:10
            },
            {
                id:3,
                title : "Avatars",
                href: "/docs/components/avatars",
                description: "modern avatars",
                count:10
            },
            {
                id:4,
                title : "Backgrounds",
                href: "/docs/components/backgrounds",
                description: "modern ai inputs",
                count:10
            },
            {
                id:5,
                title : "Badges",
                href: "/docs/components/badges",
                description: "modern Badge",
                count:10
            },
            {
                id:6,
                title : "Buttons",
                href: "/docs/components/buttons",
                description: "modern buttons",
                count:10
            },
            {
                id:7,
                title : "Cards",
                href: "/docs/components/cards",
                description: "modern cards",
                count:10
            },
            {
                id:8,
                title : "Dropdowns",
                href: "/docs/components/dropdowns",
                description: "modern dropdowns",
                count:10
            },
            {
                id:9,
                title : "Inputs",
                href: "/docs/components/inputs",
                description: "modern inputs",
                count:10
            },
            {
                id:10,
                title : "Loading",
                href: "/docs/components/loading",
                description: "modern loading",
                count:10
            },
            {
                id:11,
                title : "Modals",
                href: "/docs/components/modals",
                description: "modern inputs",
                count:10,
                isNew: true
            },
            {
                id:12,
                title : "Navigations",
                href: "/docs/components/navigations",
                description: "modern navigations",
                count:10
            },
            {
                id:13,
                title : "Progess",
                href: "/docs/components/progess",
                description: "modern progess",
                count:10
            },
            {
                id:14,
                title : "Tabs",
                href: "/docs/components/tabs",
                description: "modern tabs",
                count:10,
                isNew: true
            }
        ]
    }
]