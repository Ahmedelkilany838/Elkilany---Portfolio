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
        slug: "brand-identity-design",
        title: "Brand Identity Design",
        description: "I shape identity systems that make a brand easier to recognize, use, and apply across real touchpoints.",
        helpsWith: "New brands, identity refreshes, inconsistent visuals, or brands that need a clearer visual foundation.",
        deliverables: ["Logo direction", "Color and type system", "Visual rules", "Core brand applications"],
        categories: ["Branding", "Packaging", "Social Media"],
        relatedProjectSlugs: ["afa-brand-identity", "bastako-brand-proposal"],
        cta: "Discuss identity",
    },
    {
        slug: "advertising-design",
        title: "Advertising Design",
        description: "I design campaign visuals that communicate quickly, hold attention, and adapt cleanly across formats.",
        helpsWith: "Product launches, seasonal campaigns, promotional visuals, and paid or organic campaign assets.",
        deliverables: ["Campaign layout", "Message hierarchy", "Digital adaptations", "Print-ready artwork"],
        categories: ["Advertising", "Key Visuals", "Social Media"],
        relatedProjectSlugs: ["ponky-advertising-visual", "construction-visual-campaign"],
        cta: "Plan advertising",
    },
    {
        slug: "key-visual-design",
        title: "Key Visual Design",
        description: "I build hero visuals with a strong focal point, clear story, and enough flexibility for full campaign use.",
        helpsWith: "Hero campaign visuals, launch graphics, event visuals, and communication pieces that need one strong idea.",
        deliverables: ["Main key visual", "Composition direction", "Campaign crops", "Production-ready exports"],
        categories: ["Key Visuals", "Advertising", "Creative Production"],
        relatedProjectSlugs: ["ponky-advertising-visual", "ai-key-visual-experiments"],
        cta: "Shape a key visual",
    },
    {
        slug: "ai-visual-production",
        title: "AI Visual Production",
        description: "I use AI as a directed production tool for concept exploration, visual routes, and polished image development.",
        helpsWith: "Testing campaign moods, building visual concepts faster, and expanding production options before final finishing.",
        deliverables: ["Prompt direction", "AI concept visuals", "Image selection", "Finishing notes"],
        categories: ["AI Visuals", "Experimental", "Creative Production"],
        relatedProjectSlugs: ["ai-key-visual-experiments", "high-end-retouching-study"],
        cta: "Explore AI visuals",
    },
    {
        slug: "creative-direction",
        title: "Creative Direction",
        description: "I translate the brief into a clear visual route before design production starts, so the work has focus.",
        helpsWith: "Campaign direction, visual mood, brand tone, image style, and deciding what the project should feel like.",
        deliverables: ["Visual route", "Mood direction", "Reference logic", "Production guidance"],
        categories: ["Creative Production", "Key Visuals", "Advertising"],
        relatedProjectSlugs: ["ai-key-visual-experiments", "construction-visual-campaign"],
        cta: "Define direction",
    },
    {
        slug: "packaging-design",
        title: "Packaging Design",
        description: "I design packaging directions with clear hierarchy, shelf presence, and practical production awareness.",
        helpsWith: "Product presentation, packaging concepts, label systems, and physical brand touchpoints.",
        deliverables: ["Packaging direction", "Label layout", "Mockup visuals", "Print preparation"],
        categories: ["Packaging", "Branding", "Creative Production"],
        relatedProjectSlugs: ["bastako-brand-proposal", "afa-brand-identity"],
        cta: "Build packaging",
    },
    {
        slug: "social-media-design",
        title: "Social Media Design",
        description: "I create social layouts and campaign systems that keep content consistent without making it repetitive.",
        helpsWith: "Recurring content, campaign posts, story systems, paid social visuals, and branded communication layouts.",
        deliverables: ["Post layouts", "Story layouts", "Campaign extensions", "Usage notes"],
        categories: ["Social Media", "Advertising", "Branding"],
        relatedProjectSlugs: ["social-media-design-system", "ponky-advertising-visual"],
        cta: "Design social assets",
    },
    {
        slug: "retouching-visual-composition",
        title: "Retouching and Visual Composition",
        description: "I refine images, composites, and product visuals so the final artwork feels clean, premium, and controlled.",
        helpsWith: "Image cleanup, visual consistency, campaign finishing, composite realism, and high-end presentation.",
        deliverables: ["Image cleanup", "Compositing", "Color refinement", "Final artwork preparation"],
        categories: ["Retouching", "Creative Production", "Key Visuals"],
        relatedProjectSlugs: ["high-end-retouching-study", "construction-visual-campaign"],
        cta: "Refine imagery",
    },
    {
        slug: "brand-applications",
        title: "Brand Applications",
        description: "I extend identity systems into practical assets so the brand feels consistent in everyday use.",
        helpsWith: "Turning a visual identity into social, print, packaging, presentation, and communication materials.",
        deliverables: ["Social applications", "Stationery layouts", "Presentation assets", "Usage-ready exports"],
        categories: ["Branding", "Social Media", "Packaging"],
        relatedProjectSlugs: ["afa-brand-identity", "social-media-design-system"],
        cta: "Extend a brand",
    },
];
