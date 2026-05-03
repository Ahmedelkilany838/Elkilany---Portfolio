// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION — Central store for all site-wide settings
// Single source of truth: edit this file to update site content.
// ─────────────────────────────────────────────────────────────────────────────

export interface SiteColors {
    // Backgrounds
    pageBg: string;           // Main page background (#050505)
    sectionBg: string;        // Section background (#050505)
    cardBg: string;           // Card background (#0a0a0a)
    navBg: string;            // Navbar background (scrolled)
    loaderBg: string;         // Preloader/loading screen background
    menuOverlayBg: string;    // Mobile menu overlay background

    // Text
    textPrimary: string;      // Primary text (white)
    textSecondary: string;    // Secondary text (white/60)
    textMuted: string;        // Muted text (white/40)

    // Accent & Buttons
    accent: string;           // Brand accent color (#ff4d29)
    accentHover: string;      // Accent hover state
    buttonBorder: string;     // Button border color

    // Borders & Dividers
    borderColor: string;      // Border color (white/5)
}

export interface SiteTypography {
    primaryFont: string;      // Primary font family
    headingFont: string;      // Heading font family
    baseFontSize: number;     // Base font size in px (16)
    headingWeight: number;    // Heading font weight (800)
    bodyWeight: number;       // Body font weight (500)
    letterSpacing: string;    // Default letter spacing (normal/tight/wide etc.)
    letterSpacingValue: number; // Letter spacing in em (0 = normal)
    // Line Heights
    headingLineHeight: number; // Line height for H1/H2/H3 (0.9)
    bodyLineHeight: number;    // Line height for body text (1.6)
    // Heading Size Scales (multiplier of base)
    h1Scale: number;          // H1 font size scale (e.g. 4.5 = 4.5rem)
    h2Scale: number;          // H2 font size scale (e.g. 2.5 = 2.5rem)
    h3Scale: number;          // H3 font size scale (e.g. 1.75 = 1.75rem)
    bodyFontSize: number;     // Body font size in px (16)
}

export interface SiteImages {
    heroImage: string;             // Home hero background
    aboutHeroImage: string;        // About page hero background
    worksHeroImage: string;        // Works page hero background
    parallaxBreakImage: string;    // Parallax break section image
    project1Image: string;         // Project 1 image
    project2Image: string;         // Project 2 image
    project3Image: string;         // Project 3 image
    project4Image: string;         // Project 4 image
    project5Image: string;         // Project 5 image
    project6Image: string;         // Project 6 image
}

export interface SiteSection {
    id: string;        // Internal ID matching the component
    name: string;      // Display name in the dashboard
    visible: boolean;  // Toggle visibility
    content: Record<string, any>; // Embedded content/settings specific to this section
}

export interface PageConfig {
    name: string;
    sections: SiteSection[];
}

export interface PageContent {
    // Home Hero
    heroHeadline: string;
    heroDescription: string;
    heroExpertiseTags: string[];

    // About Section (in home)
    aboutTitle: string;
    aboutSubtitle: string;

    // Works Section
    worksTitle: string;
    worksYearRange: string;

    // Site Meta
    siteTitle: string;
    siteTagline: string;

    // Navigation items visibility
    showNavHome: boolean;
    showNavAbout: boolean;
    showNavWorks: boolean;
    showNavContact: boolean;
}

export interface SiteConfig {
    colors: SiteColors;
    typography: SiteTypography;
    images: SiteImages;
    content: PageContent;
    pages: Record<string, PageConfig>;
}

// Default configuration matching the current site design
export const DEFAULT_CONFIG: SiteConfig = {
    colors: {
        pageBg: '#050505',
        sectionBg: '#050505',
        cardBg: '#0a0a0a',
        navBg: 'transparent',
        loaderBg: '#000000',
        menuOverlayBg: 'rgba(0,0,0,0.95)',
        textPrimary: '#ffffff',
        textSecondary: 'rgba(255,255,255,0.6)',
        textMuted: 'rgba(255,255,255,0.4)',
        accent: '#ff4d29',
        accentHover: '#ff6347',
        buttonBorder: 'rgba(255,255,255,0.2)',
        borderColor: 'rgba(255,255,255,0.05)',
    },
    typography: {
        primaryFont: 'Mona Sans',
        headingFont: 'Syne',
        baseFontSize: 16,
        headingWeight: 800,
        bodyWeight: 500,
        letterSpacing: 'normal',
        letterSpacingValue: 0,
        headingLineHeight: 0.9,
        bodyLineHeight: 1.6,
        h1Scale: 4.5,
        h2Scale: 2.5,
        h3Scale: 1.75,
        bodyFontSize: 16,
    },
    images: {
        heroImage: '/images/hero.png',
        aboutHeroImage: '/images/1 v2.webp',
        worksHeroImage: '/images/1 v2.webp',
        parallaxBreakImage: '/images/freepik recreate.png',
        project1Image: '/images/1 v2.webp',
        project2Image: '/images/3.webp',
        project3Image: '/images/Artboard 1 copy 4-100.webp',
        project4Image: '/images/Artboard 7-100.jpg',
        project5Image: '/images/bg-card.webp',
        project6Image: '/images/visual_legacy_background.webp',
    },
    content: {
        heroHeadline: 'BRAND VISUALS. BUILT TO COMMUNICATE.',
        heroDescription: 'I design brand identities, advertising visuals, and AI-powered visual production for brands that need clarity, presence, and polished execution.',
        heroExpertiseTags: ['Branding', 'Advertising', 'AI Visual Production', 'Retouching'],
        aboutTitle: 'About Me',
        aboutSubtitle: 'I combine strategic design thinking with practical production craft across branding, advertising, key visuals, retouching, packaging, and social campaign design.',
        worksTitle: 'Selected Work',
        worksYearRange: '2024 — 2026',
        siteTitle: 'Kilany | Senior Brand & Advertising Specialist',
        siteTagline: 'Brand identity, advertising design, and AI-powered visual production.',
        showNavHome: true,
        showNavAbout: true,
        showNavWorks: true,
        showNavContact: true,
    },
    pages: {
        home: {
            name: 'Home Page',
            sections: [
                {
                    id: 'hero', name: 'Hero Section', visible: true, content: {
                        headline: 'BRAND VISUALS. BUILT TO COMMUNICATE.',
                        description: 'I design brand identities, advertising visuals, and AI-powered visual production for brands that need clarity, presence, and polished execution.',
                        tags: ['Branding', 'Advertising', 'AI Visual Production', 'Retouching'],
                        image: '/images/hero.png',
                        animSpeed: 1.4
                    }
                },
                {
                    id: 'about', name: 'About (Intro)', visible: true, content: {
                        title: 'About Me',
                        subtitle: 'I combine strategic design thinking with practical production craft across branding, advertising, key visuals, retouching, packaging, and social campaign design.'
                    }
                },
                {
                    id: 'brands', name: 'Brands Marquee', visible: true, content: {
                        speed: 40,
                        direction: 'left'
                    }
                },
                {
                    id: 'works', name: 'Selected Works', visible: true, content: {
                        title: 'Selected Work',
                        yearRange: '2024 — 2026'
                    }
                },
                {
                    id: 'testimonials',
                    name: 'Client Testimonials',
                    visible: false,
                    content: {}
                },
                {
                    id: 'services', name: 'Services Accordion', visible: true, content: {
                        title: 'Creative Services',
                        description: 'Focused design support for brand, campaign, and production needs.'
                    }
                },
                {
                    id: 'experience', name: 'Stats & Impact', visible: true, content: {
                        stat1: { label: 'Brand Systems', value: 'Strategic' },
                        stat2: { label: 'Campaign Visuals', value: 'Clear' },
                        stat3: { label: 'Production Craft', value: 'Polished' }
                    }
                },
                {
                    id: 'process', name: 'Process Workflow', visible: true, content: {
                        title: 'Strategic Process'
                    }
                },
                {
                    id: 'faq', name: 'FAQ Section', visible: true, content: {
                        title: 'Common Questions'
                    }
                },
                {
                    id: 'cta', name: 'Final CTA', visible: true, content: {
                        headline: 'Ready to shape the next visual direction?',
                        buttonText: 'Let\'s Talk'
                    }
                },
                {
                    id: 'contact', name: 'Footer Contact', visible: true, content: {
                        email: 'ahmed.elkilany11111@gmail.com'
                    }
                }
            ]
        },
        about: {
            name: 'About Page',
            sections: [
                {
                    id: 'aboutHero', name: 'About Hero', visible: true, content: {
                        headline: 'Identity & Strategy',
                        image: '/images/1 v2.jpg'
                    }
                },
                {
                    id: 'manifesto', name: 'Manifesto', visible: true, content: {
                        text: 'I BUILD CLEAR VISUAL SYSTEMS FOR BRANDS, CAMPAIGNS, AND COMMERCIAL STORIES THAT NEED TO BE UNDERSTOOD QUICKLY.'
                    }
                },
                { id: 'timeline', name: 'Experience Timeline', visible: true, content: {} },
                {
                    id: 'parallax', name: 'Parallax Break', visible: true, content: {
                        text: 'DESIGNING WITH INTENTION.',
                        image: '/images/freepik recreate.png'
                    }
                },
                { id: 'methodology', name: 'Methodology Pillars', visible: true, content: {} },
                { id: 'stats', name: 'About Stats', visible: true, content: {} },
                { id: 'teamsBrands', name: 'Brands Marquee', visible: true, content: {} },
                { id: 'faq', name: 'FAQ', visible: true, content: {} },
                { id: 'cta', name: 'Final CTA', visible: true, content: {} },
                { id: 'contact', name: 'Footer Contact', visible: true, content: {} }
            ]
        },
        works: {
            name: 'Works Page',
            sections: [
                { id: 'worksHero', name: 'Works Hero', visible: true, content: {} },
                { id: 'workShowcase', name: 'Work Showcase Grid', visible: true, content: {} },
                { id: 'cta', name: 'Final CTA', visible: true, content: {} },
                { id: 'contact', name: 'Footer Contact', visible: true, content: {} }
            ]
        },
        contact: {
            name: 'Contact Page',
            sections: [
                { id: 'contactHero', name: 'Contact Form & Details', visible: true, content: {} }
            ]
        },
        projects: {
            name: 'Project Detail Pages (Dynamic)',
            sections: [
                { id: 'projectHero', name: 'Project Hero Cover', visible: true, content: {} },
                { id: 'projectDetails', name: 'Project Info & Challenge', visible: true, content: {} },
                { id: 'projectGallery', name: 'Project Image Gallery', visible: true, content: {} },
                { id: 'projectNext', name: 'Next Project CTA', visible: true, content: {} },
                { id: 'contact', name: 'Footer Contact', visible: true, content: {} }
            ]
        }
    }
};

// ─── Storage Keys ─────────────────────────────────────────────────────────────
const STORAGE_KEY = 'kilany_site_config';

export function loadConfig(): SiteConfig {
    if (typeof window === 'undefined') return DEFAULT_CONFIG;
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return DEFAULT_CONFIG;
        const parsed = JSON.parse(stored);
        // Deep merge with defaults to handle new keys
        return deepMerge(DEFAULT_CONFIG, parsed);
    } catch {
        return DEFAULT_CONFIG;
    }
}

export function saveConfig(config: SiteConfig): void {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
        console.error('Failed to save config');
    }
}

export function resetConfig(): SiteConfig {
    if (typeof window === 'undefined') return DEFAULT_CONFIG;
    localStorage.removeItem(STORAGE_KEY);
    return DEFAULT_CONFIG;
}

// Simple deep merge utility
function deepMerge<T>(target: T, source: Partial<T>): T {
    const result = { ...target };
    for (const key in source) {
        if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            result[key] = deepMerge(target[key] as any, source[key] as any);
        } else if (source[key] !== undefined) {
            result[key] = source[key] as any;
        }
    }
    return result;
}

// ─── Apply config to CSS variables ────────────────────────────────────────────
export function applyConfigToDOM(config: SiteConfig): void {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;

    // Colors
    root.style.setProperty('--site-page-bg', config.colors.pageBg);
    root.style.setProperty('--site-section-bg', config.colors.sectionBg);
    root.style.setProperty('--site-card-bg', config.colors.cardBg);
    root.style.setProperty('--site-nav-bg', config.colors.navBg);
    root.style.setProperty('--site-loader-bg', config.colors.loaderBg);
    root.style.setProperty('--site-menu-overlay-bg', config.colors.menuOverlayBg);
    root.style.setProperty('--site-text-primary', config.colors.textPrimary);
    root.style.setProperty('--site-text-secondary', config.colors.textSecondary);
    root.style.setProperty('--site-text-muted', config.colors.textMuted);
    root.style.setProperty('--site-accent', config.colors.accent);
    root.style.setProperty('--site-accent-hover', config.colors.accentHover);
    root.style.setProperty('--site-button-border', config.colors.buttonBorder);
    root.style.setProperty('--site-border', config.colors.borderColor);

    // Typography
    root.style.setProperty('--site-font-primary', `'${config.typography.primaryFont}', sans-serif`);
    root.style.setProperty('--site-font-heading', `'${config.typography.headingFont}', sans-serif`);
    root.style.setProperty('--site-font-size-base', `${config.typography.baseFontSize}px`);
    root.style.setProperty('--site-heading-weight', String(config.typography.headingWeight));
    root.style.setProperty('--site-body-weight', String(config.typography.bodyWeight));
    // Line Heights
    root.style.setProperty('--site-heading-line-height', String(config.typography.headingLineHeight ?? 0.9));
    root.style.setProperty('--site-body-line-height', String(config.typography.bodyLineHeight ?? 1.6));
    // Heading Scales
    root.style.setProperty('--site-h1-scale', String(config.typography.h1Scale ?? 4.5));
    root.style.setProperty('--site-h2-scale', String(config.typography.h2Scale ?? 2.5));
    root.style.setProperty('--site-h3-scale', String(config.typography.h3Scale ?? 1.75));
    // Body font size
    root.style.setProperty('--site-body-font-size', `${config.typography.bodyFontSize ?? 16}px`);
    // Letter spacing value
    root.style.setProperty('--site-letter-spacing', `${config.typography.letterSpacingValue ?? 0}em`);

    // Dynamic Google Font loading — only load custom fonts that aren't already embedded
    const BUILT_IN_FONTS = ['Mona Sans', 'Syne'];
    const fontsToLoad = [config.typography.primaryFont, config.typography.headingFont]
        .filter((f, i, arr) => arr.indexOf(f) === i) // dedupe
        .filter(f => !BUILT_IN_FONTS.includes(f));

    fontsToLoad.forEach(font => {
        const fontId = `gfont-${font.replace(/\s+/g, '-').toLowerCase()}`;
        if (!document.getElementById(fontId)) {
            const link = document.createElement('link');
            link.id = fontId;
            link.rel = 'stylesheet';
            link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font)}:wght@300;400;500;600;700;800;900&display=swap`;
            document.head.appendChild(link);
        }
    });
}

