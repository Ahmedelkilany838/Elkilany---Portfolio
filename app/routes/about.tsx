import type { Route } from "./+types/about";
import { useEffect } from "react";
import Navbar from "components/Navbar";
import AboutPage from "components/Pages/AboutPage";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About | Kilany — Senior Brand & Advertising Specialist" },
        {
            name: "description",
            content:
                "Learn about Ahmed Kilany — a senior brand and advertising specialist who combines strategic thinking with visual precision to build legacies for visionary brands.",
        },
    ];
}

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-[#050505] flex flex-col">
            {/* Global Navbar */}
            <Navbar />

            {/* Clean Slate for New Content */}
            <main className="flex-1 w-full flex flex-col">
                <AboutPage />
            </main>
        </div>
    );
}
