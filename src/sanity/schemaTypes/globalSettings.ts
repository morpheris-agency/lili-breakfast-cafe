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
        defineField({ name: 'siteName', title: 'Site Name', type: 'string', group: 'general', fieldset: 'seo', validation: Rule => Rule.required(), initialValue: 'Lili Breakfast Cafe' }),
        defineField({ name: 'siteDescription', title: 'Site Description (SEO Meta)', type: 'text', group: 'general', fieldset: 'seo', rows: 3 }),
        defineField({ name: 'ogImage', title: 'Open Graph Image (Default Share Image)', description: 'The image displayed when sharing on WhatsApp, iMessage, etc.', type: 'image', group: 'general', fieldset: 'seo' }),
        defineField({ name: 'googleAnalyticsId', title: 'Google Analytics Tracking ID', description: 'e.g. G-XXXXXXXXXX', type: 'string', group: 'general' }),

        // --- ANNOUNCEMENT BANNER ---
        defineField({
            name: 'announcement',
            title: 'Top Announcement Banner',
            type: 'object',
            group: 'general',
            description: 'Activate a banner at the top of the site for important news (e.g. "We are closed on Mondays!")',
            fields: [
                { name: 'isActive', title: 'Show Banner?', type: 'boolean', initialValue: false },
                { name: 'text', title: 'Announcement Text', type: 'string' },
                { name: 'link', title: 'Optional Link (URL)', type: 'url' },
                { name: 'backgroundColor', title: 'Banner Color', type: 'color' },
            ]
        }),

        // --- BRANDING ---
        defineField({ name: 'logo', title: 'Primary Brand Logo', type: 'image', group: 'branding', options: { accept: 'image/*' } }),
        defineField({ name: 'favicon', title: 'Favicon', type: 'image', group: 'branding', options: { accept: 'image/*' } }),

        defineField({ name: 'primaryColor', title: 'Primary Action Color', type: 'color', group: 'branding', fieldset: 'colors' }),
        defineField({ name: 'accentColor', title: 'Accent Color', type: 'color', group: 'branding', fieldset: 'colors' }),
        defineField({ name: 'backgroundColor', title: 'Background Color', type: 'color', group: 'branding', fieldset: 'colors' }),
        defineField({ name: 'textColor', title: 'Global Text Color', type: 'color', group: 'branding', fieldset: 'colors' }),

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
        defineField({ name: 'heroTitle', title: 'Hero Main Headline', type: 'string', group: 'hero', validation: Rule => Rule.required(), initialValue: "Nourish your body, feed your soul." }),
        defineField({ name: 'heroSubtitle', title: 'Hero Subtext/Description', type: 'text', group: 'hero', rows: 3, initialValue: "Discover a taste of nature with our vibrant smoothie bowls, cold-pressed juices, and hearty breakfast plates." }),
        defineField({ name: 'heroPrimaryCta', title: 'Primary CTA Text', type: 'string', group: 'hero', initialValue: "View Menu" }),
        defineField({ name: 'heroSecondaryCta', title: 'Secondary CTA Text', type: 'string', group: 'hero', initialValue: "Our Story" }),
        defineField({ name: 'heroBackground', title: 'Hero Background Image', type: 'image', group: 'hero', options: { hotspot: true } }),

        // --- CONTACT, SOCIAL & HOURS ---
        defineField({ name: 'address', title: 'Physical Address', type: 'text', rows: 3, group: 'contact', initialValue: '68/1 m.1 Viengtai\nPai, Thailand 58130' }),
        defineField({ name: 'googleMapsLink', title: 'Google Maps Embedded Link', description: 'Used for map modules and Get Directions tracking.', type: 'url', group: 'contact' }),
        defineField({ name: 'email', title: 'Business Email', type: 'string', group: 'contact', validation: Rule => Rule.email(), initialValue: 'lilibreakfastpai@gmail.com' }),
        defineField({ name: 'phone', title: 'Phone Number', type: 'string', group: 'contact' }),

        // WhatsApp Integration
        defineField({
            name: 'whatsappConfig',
            title: 'WhatsApp Floating Button',
            type: 'object',
            group: 'contact',
            fieldset: 'socials',
            description: 'Provide a direct chat line on your website front-end.',
            fields: [
                { name: 'isActive', title: 'Enable WhatsApp Bubble?', type: 'boolean', initialValue: true },
                { name: 'number', title: 'WhatsApp Number (with country code)', type: 'string', description: 'e.g. +66812345678' },
                { name: 'defaultMessage', title: 'Default Prefilled Message', type: 'string', initialValue: 'Hello Lili Cafe! I would like to...' }
            ]
        }),

        defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url', group: 'contact', fieldset: 'socials' }),
        defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url', group: 'contact', fieldset: 'socials' }),
        defineField({ name: 'tripadvisorUrl', title: 'TripAdvisor URL', type: 'url', group: 'contact', fieldset: 'socials' }),
        defineField({ name: 'tiktokUrl', title: 'TikTok URL', type: 'url', group: 'contact', fieldset: 'socials' }),

        // Structured Business Hours
        defineField({
            name: 'businessHoursTable',
            title: 'Interactive Business Hours',
            type: 'array',
            group: 'contact',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'day', title: 'Day of Week', type: 'string', options: { list: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] } },
                        { name: 'isClosed', title: 'Closed?', type: 'boolean', initialValue: false },
                        { name: 'openTime', title: 'Opening Time', type: 'string', description: 'e.g. 08:30 AM', hidden: ({ parent }) => parent?.isClosed },
                        { name: 'closeTime', title: 'Closing Time', type: 'string', description: 'e.g. 04:00 PM', hidden: ({ parent }) => parent?.isClosed }
                    ],
                    preview: {
                        select: { day: 'day', isClosed: 'isClosed', open: 'openTime', close: 'closeTime' },
                        prepare({ day, isClosed, open, close }) {
                            return { title: day, subtitle: isClosed ? 'Closed' : `${open || '??'} - ${close || '??'}` }
                        }
                    }
                }
            ]
        }),

        // --- FOOTER ---
        defineField({ name: 'footerText', title: 'Footer Copyright Text', type: 'string', group: 'footer' }),
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
