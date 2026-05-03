export const workCategories = [
    "All",
    "Branding",
    "Advertising",
    "Key Visuals",
    "AI Visuals",
    "Creative Production",
    "Retouching",
    "Packaging",
    "Social Media",
    "Experimental",
] as const;

export type WorkCategory = (typeof workCategories)[number];
export type ProjectCategory = Exclude<WorkCategory, "All">;

export interface Project {
    slug: string;
    title: string;
    year: string;
    categories: ProjectCategory[];
    services: string[];
    coverImage: string;
    summary: string;
    overview: string;
    challenge: string;
    creativeDirection: string;
    deliverables: string[];
    gallery: string[];
    processNotes?: string[];
    featured?: boolean;
    isAI?: boolean;
}

export const projects: Project[] = [
    {
        slug: "afa-brand-identity",
        title: "Afa Brand Identity",
        year: "2026",
        categories: ["Branding", "Packaging", "Social Media"],
        services: ["Brand Identity", "Visual System", "Brand Applications"],
        coverImage: "/images/Logo.jpg",
        summary: "A refined identity direction for a brand system that needs to stay clear across packaging, print, and social use.",
        overview: "A brand identity study focused on recognition, clean structure, and flexible application across everyday touchpoints.",
        challenge: "The identity needed to feel polished and usable without adding unnecessary visual noise.",
        creativeDirection: "I focused on a minimal visual language, controlled typography, and application rules that keep the brand consistent.",
        deliverables: ["Logo direction", "Color and type direction", "Brand applications", "Social layout direction"],
        gallery: ["/images/Logo.jpg", "/images/Artboard 7-100.jpg", "/images/bg-card.webp"],
        processNotes: ["Clarified the identity foundation before expanding applications.", "Tested how the system holds across print, packaging, and social layouts."],
        featured: true,
    },
    {
        slug: "bastako-brand-proposal",
        title: "Bastako Brand Proposal",
        year: "2026",
        categories: ["Branding", "Packaging", "Creative Production"],
        services: ["Brand Proposal", "Packaging Direction", "Presentation Design"],
        coverImage: "/images/1 v2.webp",
        summary: "A product-led brand proposal built to communicate value quickly and give the concept stronger commercial presence.",
        overview: "A proposal-style identity direction shaped for presentation, packaging potential, and future brand applications.",
        challenge: "The concept needed to feel memorable at first glance while still leaving room for practical rollout.",
        creativeDirection: "I used bold hierarchy, direct composition, and product-aware application thinking to make the proposal feel ready to expand.",
        deliverables: ["Brand proposal visuals", "Packaging direction", "Presentation layouts", "Application mockups"],
        gallery: ["/images/1 v2.webp", "/images/Artboard 1 copy 4-100.webp", "/images/visual_legacy_background.webp"],
        processNotes: ["Built a compact proposal flow around the strongest visual idea.", "Prepared application visuals that can evolve into a fuller identity system."],
        featured: true,
    },
    {
        slug: "ai-key-visual-experiments",
        title: "AI Key Visual Experiments",
        year: "2026",
        categories: ["AI Visuals", "Key Visuals", "Creative Production", "Experimental"],
        services: ["AI Visual Direction", "Prompt Development", "Image Finishing"],
        coverImage: "/images/freepik recreate.png",
        summary: "AI-assisted key visual exploration for campaign mood, cinematic composition, and commercial production routes.",
        overview: "A directed AI visual study where prompts, selection, and finishing are guided by a campaign-style creative objective.",
        challenge: "The project needed fast visual exploration without losing strategy, composition control, or brand usefulness.",
        creativeDirection: "I used AI to test atmosphere, lighting, and framing, then selected and refined only the routes with clear campaign potential.",
        deliverables: ["AI mood directions", "Prompt iterations", "Selected key visuals", "Retouching and finishing notes"],
        gallery: ["/images/freepik recreate.png", "/images/visual_legacy_background.webp", "/images/bg-card.webp"],
        processNotes: ["Built prompt routes from mood, use case, and visual hierarchy.", "Selected directions based on clarity, production potential, and campaign fit."],
        featured: true,
        isAI: true,
    },
    {
        slug: "ponky-advertising-visual",
        title: "PONKY Advertising Visual",
        year: "2026",
        categories: ["Advertising", "Key Visuals", "Creative Production", "Social Media"],
        services: ["Advertising Design", "Key Visual Design", "Campaign Adaptation"],
        coverImage: "/images/3.webp",
        summary: "A high-impact advertising visual shaped for quick recognition, simple message hierarchy, and social campaign use.",
        overview: "A campaign-led visual project focused on a strong central image, clear product presence, and adaptable layout structure.",
        challenge: "The visual needed to catch attention fast while staying readable across different sizes and placements.",
        creativeDirection: "I built the direction around a bold focal point, direct copy hierarchy, and flexible crops for campaign rollout.",
        deliverables: ["Main key visual", "Campaign layout direction", "Social adaptations", "Production-ready artwork"],
        gallery: ["/images/3.webp", "/images/Artboard 1 copy 4-100.webp", "/images/bg-card.webp"],
        processNotes: ["Prioritized a fast-read focal point and simple message order.", "Prepared the visual structure for multiple campaign placements."],
        featured: true,
    },
    {
        slug: "construction-visual-campaign",
        title: "Construction Visual Campaign",
        year: "2026",
        categories: ["Advertising", "Creative Production", "Retouching", "Key Visuals"],
        services: ["Campaign Visuals", "Compositing", "Retouching"],
        coverImage: "/images/Artboard 1 copy 4-100.webp",
        summary: "A construction campaign direction built around scale, credibility, and controlled production finishing.",
        overview: "A sector-specific campaign visual using strong imagery, structured messaging, and clean retouching to support trust.",
        challenge: "The category needs visual impact without losing credibility, detail, or message clarity.",
        creativeDirection: "I used a grounded composition style, restrained hierarchy, and controlled retouching to keep the campaign reliable and sharp.",
        deliverables: ["Campaign key visual", "Retouching direction", "Digital adaptations", "Presentation-ready visuals"],
        gallery: ["/images/Artboard 1 copy 4-100.webp", "/images/Artboard 7-100.jpg", "/images/visual_legacy_background.webp"],
        processNotes: ["Balanced visual scale with professional restraint.", "Kept the layout flexible for digital and print placements."],
        featured: true,
    },
    {
        slug: "social-media-design-system",
        title: "Social Media Design System",
        year: "2026",
        categories: ["Social Media", "Branding", "Advertising"],
        services: ["Social Media Design", "Content System", "Layout Direction"],
        coverImage: "/images/bg-card.webp",
        summary: "A modular social design system for faster content production, clearer hierarchy, and consistent brand communication.",
        overview: "A social media system built to make recurring content recognizable without forcing every post into the same layout.",
        challenge: "The content needed a repeatable structure that could support different messages, formats, and campaign moments.",
        creativeDirection: "I focused on reusable composition rules, strong type hierarchy, and flexible modules that keep the brand present.",
        deliverables: ["Post layout system", "Story layout direction", "Campaign layouts", "Design usage notes"],
        gallery: ["/images/bg-card.webp", "/images/1 v2.webp", "/images/3.webp"],
        processNotes: ["Created repeatable layout logic for common content needs.", "Designed the system to support quick production while staying brand-led."],
        featured: true,
    },
    {
        slug: "high-end-retouching-study",
        title: "High-End Retouching Study",
        year: "2026",
        categories: ["Retouching", "Creative Production", "AI Visuals"],
        services: ["Image Retouching", "AI-Assisted Cleanup", "Finishing"],
        coverImage: "/images/visual_legacy_background.webp",
        summary: "A finishing-focused image study combining detailed retouching, composition control, and restrained AI-assisted cleanup.",
        overview: "A production study focused on improving image quality while keeping the final result natural, premium, and campaign-ready.",
        challenge: "The image needed stronger polish without losing realism, texture, or believable lighting.",
        creativeDirection: "I treated AI as a support tool for cleanup and variation, then guided the final look through manual finishing decisions.",
        deliverables: ["Retouched visual", "Cleanup direction", "Color and detail refinement", "Final export preparation"],
        gallery: ["/images/visual_legacy_background.webp", "/images/freepik recreate.png", "/images/3.webp"],
        processNotes: ["Used restrained cleanup to preserve realism.", "Refined light, detail, and color for brand and campaign use."],
        isAI: true,
    },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const aiLabProjects = projects.filter((project) =>
    project.isAI ||
    project.categories.some((category) =>
        ["AI Visuals", "Creative Production", "Key Visuals", "Retouching"].includes(category)
    )
);

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
    const currentIndex = projects.findIndex((project) => project.slug === slug);
    if (currentIndex === -1) return undefined;
    return projects[(currentIndex + 1) % projects.length];
}
