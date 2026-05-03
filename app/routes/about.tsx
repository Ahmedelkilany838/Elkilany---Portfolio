import type { Route } from "./+types/about";
import AboutPage from "components/Pages/AboutPage";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About | Kilany — Brand, Advertising & AI Visual Production" },
        {
            name: "description",
            content:
                "Learn about Ahmed ElKilany, a graphic designer combining brand identity, advertising design, strategic visual thinking, and AI-enhanced production workflows.",
        },
    ];
}

export default function About() {
    return (
        <div className="relative w-full min-h-screen bg-[#050505] flex flex-col">

            <main className="flex-1 w-full flex flex-col">
                <AboutPage />
            </main>
        </div>
    );
}
