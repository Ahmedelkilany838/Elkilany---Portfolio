export interface SiteLink {
    label: string;
    href: string;
}

export interface SocialLink extends SiteLink {
    external?: boolean;
}

export interface WhatsAppContact {
    label: string;
    href: string | null;
    available: boolean;
    note: string;
}

export const siteProfile = {
    name: "Ahmed ElKilany",
    displayName: "KILANY",
    role: "Senior Brand & Advertising Specialist",
    tagline: "I design brand identities, advertising visuals, and AI-powered production assets with clarity and control.",
    email: "ahmed.elkilany11111@gmail.com",
    location: "Cairo, Egypt",
    availability: "Available for selected branding, advertising, and visual production projects.",
    responseTime: "I typically respond within 24 hours.",
    whatsapp: {
        label: "WhatsApp",
        href: null,
        available: false,
        note: "WhatsApp will be added soon.",
    } satisfies WhatsAppContact,
};

export const navLinks: SiteLink[] = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/works" },
    { label: "Services", href: "/services" },
    { label: "AI Lab", href: "/ai-lab" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const footerLinks: SiteLink[] = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/works" },
    { label: "Services", href: "/services" },
    { label: "AI Lab", href: "/ai-lab" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
    { label: "Facebook", href: "https://www.facebook.com/ahmed.elkilany", external: true },
    { label: "Instagram", href: "https://www.instagram.com/ahmed.elkilany", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-elkilany", external: true },
    { label: "X", href: "https://x.com/ahmed_elkilany", external: true },
];
