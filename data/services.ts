import type { ProjectCategory } from "./projects";

export interface Service {
    slug: string;
    title: string;
    description: string;
    helpsWith: string;
    deliverables: string[];
    categories: ProjectCategory[];
    relatedProjectSlugs: string[];
    cta: string;
}

export const services: Service[] = [
    {
        slug: "brand-identity",
        title: "Brand Identity",
        description: "I create visual identities that feel clear, distinctive, and ready to use across real brand touchpoints.",
        helpsWith: "Positioning a new brand, refreshing an existing identity, or building a more consistent visual system.",
        deliverables: ["Logo direction", "Color and type system", "Brand applications", "Guideline-ready assets"],
        categories: ["Branding", "Packaging", "Social Media"],
        relatedProjectSlugs: ["afa-brand-identity", "bastako-brand-proposal"],
        cta: "Discuss a brand identity",
    },
    {
        slug: "advertising-key-visuals",
        title: "Advertising & Key Visuals",
        description: "I design campaign visuals with strong composition, clear messaging, and flexible adaptation for different formats.",
        helpsWith: "Launching a campaign, promoting a product, or creating a memorable hero visual for digital and print.",
        deliverables: ["Main key visual", "Campaign layouts", "Social adaptations", "Production-ready exports"],
        categories: ["Advertising", "Key Visuals", "Creative Production"],
        relatedProjectSlugs: ["ponky-advertising-visual", "construction-visual-campaign"],
        cta: "Plan a campaign visual",
    },
    {
        slug: "ai-visual-production",
        title: "AI Visual Production",
        description: "I use AI as a controlled creative direction tool for mood exploration, visual concepts, and production acceleration.",
        helpsWith: "Exploring visual routes quickly while keeping the final direction strategic, polished, and brand-aware.",
        deliverables: ["Prompt direction", "AI concept visuals", "Image selection", "Finishing notes"],
        categories: ["AI Visuals", "Experimental", "Creative Production"],
        relatedProjectSlugs: ["ai-key-visual-experiments", "high-end-retouching-study"],
        cta: "Explore AI visuals",
    },
    {
        slug: "retouching-creative-production",
        title: "Retouching & Creative Production",
        description: "I refine, composite, and finish visuals so campaign artwork feels premium, clean, and production-ready.",
        helpsWith: "Improving image quality, preparing hero visuals, or building polished campaign assets from mixed sources.",
        deliverables: ["Image cleanup", "Compositing", "Color refinement", "Final artwork preparation"],
        categories: ["Retouching", "Creative Production", "Key Visuals"],
        relatedProjectSlugs: ["construction-visual-campaign", "high-end-retouching-study"],
        cta: "Refine a visual",
    },
    {
        slug: "packaging-print",
        title: "Packaging & Print",
        description: "I design printed and physical brand assets with careful hierarchy, production awareness, and a premium finish.",
        helpsWith: "Building packaging directions, presentation materials, or print-ready brand applications.",
        deliverables: ["Packaging direction", "Print layouts", "Presentation artwork", "Export-ready files"],
        categories: ["Packaging", "Branding", "Creative Production"],
        relatedProjectSlugs: ["bastako-brand-proposal", "afa-brand-identity"],
        cta: "Build packaging assets",
    },
    {
        slug: "social-media-systems",
        title: "Social Media Design Systems",
        description: "I build modular social design systems that make content faster to produce while staying visually consistent.",
        helpsWith: "Creating repeatable post, story, and campaign formats for brand-led communication.",
        deliverables: ["Post templates", "Story templates", "Content layout rules", "Campaign extensions"],
        categories: ["Social Media", "Advertising", "Branding"],
        relatedProjectSlugs: ["social-media-design-system", "ponky-advertising-visual"],
        cta: "Create a social system",
    },
];
