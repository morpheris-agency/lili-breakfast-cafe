import { defineField, defineType } from 'sanity'
import { CogIcon, EarthGlobeIcon, DocumentIcon, ImageIcon, EnvelopeIcon, EditIcon } from '@sanity/icons'

export default defineType({
    name: 'globalSettings',
    title: 'Site Configuration',
    type: 'document',
    icon: CogIcon,
    groups: [
        { name: 'general', title: 'General & SEO', icon: EarthGlobeIcon },
        { name: 'branding', title: 'Branding & UI', icon: ImageIcon },
        { name: 'hero', title: 'Hero Section', icon: EditIcon },
        { name: 'contact', title: 'Contact & Social', icon: EnvelopeIcon },
        { name: 'footer', title: 'Footer', icon: DocumentIcon },
    ],
    fieldsets: [
        { name: 'seo', title: 'SEO Defaults', options: { collapsible: true, collapsed: false } },
        { name: 'colors', title: 'Brand Colors', options: { collapsible: true, collapsed: false, columns: 2 } },
        { name: 'typography', title: 'Typography Options', options: { collapsible: true, collapsed: false } },
        { name: 'socials', title: 'Social Media Links', options: { collapsible: true, collapsed: false, columns: 2 } },
    ],
    fields: [
        // --- GENERAL & SEO ---
        defineField({ name: 'siteName', title: 'Site Name', type: 'string', group: 'general', fieldset: 'seo', validation: Rule => Rule.required() }),
        defineField({ name: 'siteDescription', title: 'Site Description (SEO Meta)', type: 'text', group: 'general', fieldset: 'seo', rows: 3 }),
        defineField({ name: 'ogImage', title: 'Open Graph Image (Default Share Image)', type: 'image', group: 'general', fieldset: 'seo' }),
        defineField({ name: 'googleAnalyticsId', title: 'Google Analytics Measurement ID', type: 'string', group: 'general' }),

        // --- BRANDING ---
        defineField({ name: 'logo', title: 'Primary Brand Logo', type: 'image', group: 'branding', options: { accept: 'image/*' } }),
        defineField({ name: 'favicon', title: 'Favicon', type: 'image', group: 'branding', options: { accept: 'image/*' } }),

        // Colors
        defineField({ name: 'primaryColor', title: 'Primary Action Color', type: 'color', group: 'branding', fieldset: 'colors' }),
        defineField({ name: 'accentColor', title: 'Accent Color', type: 'color', group: 'branding', fieldset: 'colors' }),
        defineField({ name: 'backgroundColor', title: 'Background Color', type: 'color', group: 'branding', fieldset: 'colors' }),
        defineField({ name: 'textColor', title: 'Global Text Color', type: 'color', group: 'branding', fieldset: 'colors' }),

        // Typography
        defineField({
            name: 'fontPairing',
            title: 'Typography Theme',
            type: 'string',
            group: 'branding',
            fieldset: 'typography',
            options: {
                list: [
                    { title: 'Lili Original (Lobster & Montserrat)', value: 'original' },
                    { title: 'Modern Organic (Playfair & Inter)', value: 'modern' },
                    { title: 'Soft & Welcome (Fredoka & Quicksand)', value: 'soft' },
                    { title: 'Brutalist Chic (Syne & Roboto Mono)', value: 'brutalist' },
                ],
                layout: 'dropdown',
            },
            initialValue: 'modern',
        }),

        // --- HERO SECTION ---
        defineField({ name: 'heroTitle', title: 'Hero Main Headline', type: 'string', group: 'hero', validation: Rule => Rule.required() }),
        defineField({ name: 'heroSubtitle', title: 'Hero Subtext/Description', type: 'text', group: 'hero', rows: 3 }),
        defineField({ name: 'heroPrimaryCta', title: 'Primary CTA Text', type: 'string', group: 'hero' }),
        defineField({ name: 'heroSecondaryCta', title: 'Secondary CTA Text', type: 'string', group: 'hero' }),
        defineField({ name: 'heroBackground', title: 'Hero Background Image', type: 'image', group: 'hero', options: { hotspot: true } }),

        // --- CONTACT & SOCIAL ---
        defineField({ name: 'address', title: 'Physical Address', type: 'string', group: 'contact' }),
        defineField({ name: 'googleMapsLink', title: 'Google Maps Link', type: 'url', group: 'contact' }),
        defineField({ name: 'email', title: 'Business Email', type: 'string', group: 'contact', validation: Rule => Rule.email() }),
        defineField({ name: 'phone', title: 'Phone Number', type: 'string', group: 'contact' }),

        defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url', group: 'contact', fieldset: 'socials' }),
        defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url', group: 'contact', fieldset: 'socials' }),
        defineField({ name: 'tripadvisorUrl', title: 'TripAdvisor URL', type: 'url', group: 'contact', fieldset: 'socials' }),
        defineField({ name: 'tiktokUrl', title: 'TikTok URL', type: 'url', group: 'contact', fieldset: 'socials' }),

        // --- FOOTER ---
        defineField({ name: 'footerText', title: 'Footer Copyright Text', type: 'string', group: 'footer' }),
        defineField({ name: 'workingHours', title: 'Working Hours Note', type: 'string', group: 'footer', description: 'e.g. Open daily: 8:00 AM - 4:00 PM' }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Configuration',
                subtitle: 'Manage all global website settings here',
                media: CogIcon,
            }
        },
    },
})
