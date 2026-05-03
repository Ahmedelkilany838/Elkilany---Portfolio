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
        summary: "A clean identity direction built around clarity, recognition, and flexible brand use.",
        overview: "A baseline brand identity case focused on a confident visual system that can scale across print, digital, and social touchpoints.",
        challenge: "The brand needed a visual direction that felt polished without becoming overcomplicated.",
        creativeDirection: "I kept the system minimal, structured, and adaptable so the brand can stay consistent across everyday communication.",
        deliverables: ["Logo direction", "Color and typography direction", "Brand applications", "Social starter layouts"],
        gallery: ["/images/Logo.jpg", "/images/Artboard 7-100.jpg", "/images/bg-card.webp"],
        processNotes: ["Defined a simple identity foundation.", "Explored adaptable layout rules for future brand assets."],
        featured: true,
    },
    {
        slug: "bastako-brand-proposal",
        title: "Bastako Brand Proposal",
        year: "2026",
        categories: ["Branding", "Packaging", "Creative Production"],
        services: ["Brand Proposal", "Packaging Direction", "Presentation Design"],
        coverImage: "/images/1 v2.webp",
        summary: "A brand proposal direction for a product-led identity with strong commercial presence.",
        overview: "A proposal-style project shaped to help the brand feel clear, memorable, and ready for presentation.",
        challenge: "The concept needed to communicate value quickly while leaving room for future campaign and packaging applications.",
        creativeDirection: "I focused on bold hierarchy, refined composition, and practical brand touchpoints that can be expanded later.",
        deliverables: ["Brand proposal visuals", "Packaging direction", "Presentation layouts", "Application mockups"],
        gallery: ["/images/1 v2.webp", "/images/Artboard 1 copy 4-100.webp", "/images/visual_legacy_background.webp"],
        processNotes: ["Built a compact proposal structure.", "Prepared visuals that can evolve into a fuller identity system."],
        featured: true,
    },
    {
        slug: "ai-key-visual-experiments",
        title: "AI Key Visual Experiments",
        year: "2026",
        categories: ["AI Visuals", "Key Visuals", "Creative Production", "Experimental"],
        services: ["AI Visual Direction", "Prompt Development", "Image Finishing"],
        coverImage: "/images/freepik recreate.png",
        summary: "AI-assisted visual exploration for campaign moods, cinematic compositions, and production-ready directions.",
        overview: "A controlled AI visual study where AI is used as part of the creative direction process, not as random experimentation.",
        challenge: "The goal was to move fast through visual possibilities while keeping the final direction intentional and brand-ready.",
        creativeDirection: "I used AI to explore atmosphere, composition, lighting, and art direction before refining the strongest outputs.",
        deliverables: ["AI mood directions", "Prompt iterations", "Selected key visuals", "Retouching and finishing notes"],
        gallery: ["/images/freepik recreate.png", "/images/visual_legacy_background.webp", "/images/bg-card.webp"],
        processNotes: ["Explored visual routes with controlled prompts.", "Selected directions based on usability, clarity, and campaign potential."],
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
        summary: "A bold advertising visual direction designed for fast recognition across campaign formats.",
        overview: "A campaign-led visual project focused on strong composition, message clarity, and adaptable social use.",
        challenge: "The visual needed to catch attention quickly while staying usable across multiple sizes and placements.",
        creativeDirection: "I built the direction around a strong central visual, simple message hierarchy, and flexible campaign crops.",
        deliverables: ["Main key visual", "Campaign layout direction", "Social adaptations", "Production-ready artwork"],
        gallery: ["/images/3.webp", "/images/Artboard 1 copy 4-100.webp", "/images/bg-card.webp"],
        processNotes: ["Prioritized clear focal points.", "Prepared the visual structure for multiple campaign placements."],
        featured: true,
    },
    {
        slug: "construction-visual-campaign",
        title: "Construction Visual Campaign",
        year: "2026",
        categories: ["Advertising", "Creative Production", "Retouching", "Key Visuals"],
        services: ["Campaign Visuals", "Compositing", "Retouching"],
        coverImage: "/images/Artboard 1 copy 4-100.webp",
        summary: "A visual campaign direction built around scale, trust, and precise production finishing.",
        overview: "A construction-focused visual campaign baseline using strong imagery, structured messaging, and clean finishing.",
        challenge: "The category needs a balance of credibility, visual scale, and clarity without becoming visually crowded.",
        creativeDirection: "I used a grounded composition style with clean hierarchy and controlled retouching to make the message feel reliable.",
        deliverables: ["Campaign key visual", "Retouching direction", "Digital adaptations", "Presentation-ready visuals"],
        gallery: ["/images/Artboard 1 copy 4-100.webp", "/images/Artboard 7-100.jpg", "/images/visual_legacy_background.webp"],
        processNotes: ["Balanced visual impact with professional restraint.", "Kept the layout flexible for digital and print placements."],
        featured: true,
    },
    {
        slug: "social-media-design-system",
        title: "Social Media Design System",
        year: "2026",
        categories: ["Social Media", "Branding", "Advertising"],
        services: ["Social Media Design", "Content System", "Template Direction"],
        coverImage: "/images/bg-card.webp",
        summary: "A modular social media design system for consistent, fast, and brand-led content production.",
        overview: "A social design system built to make recurring content feel consistent without becoming repetitive.",
        challenge: "The brand needed a repeatable structure that could support different messages, formats, and campaign needs.",
        creativeDirection: "I focused on reusable composition rules, strong type hierarchy, and flexible visual modules.",
        deliverables: ["Post layout system", "Story layout direction", "Campaign templates", "Design usage notes"],
        gallery: ["/images/bg-card.webp", "/images/1 v2.webp", "/images/3.webp"],
        processNotes: ["Created repeatable layout logic.", "Designed the system to support quick content production."],
        featured: true,
    },
    {
        slug: "high-end-retouching-study",
        title: "High-End Retouching Study",
        year: "2026",
        categories: ["Retouching", "Creative Production", "AI Visuals"],
        services: ["Image Retouching", "AI-Assisted Cleanup", "Finishing"],
        coverImage: "/images/visual_legacy_background.webp",
        summary: "A finishing-focused image study combining careful retouching with controlled AI-assisted cleanup.",
        overview: "A production study focused on improving image quality while keeping the final result natural and campaign-ready.",
        challenge: "The image needed stronger polish without losing realism or over-processing the subject.",
        creativeDirection: "I treated AI as a support tool for cleanup and refinement, then guided the final look through manual finishing decisions.",
        deliverables: ["Retouched visual", "Cleanup direction", "Color and detail refinement", "Final export preparation"],
        gallery: ["/images/visual_legacy_background.webp", "/images/freepik recreate.png", "/images/3.webp"],
        processNotes: ["Used restrained cleanup to preserve realism.", "Refined the final image for brand and campaign use."],
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
