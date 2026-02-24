import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'globalSettings',
    title: 'Global Settings',
    type: 'document',
    groups: [
        { name: 'general', title: 'General & Hero' },
        { name: 'contact', title: 'Contact & Social' },
        { name: 'design', title: 'Design & Branding' },
    ],
    fields: [
        defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string', group: 'general' }),
        defineField({ name: 'logo', title: 'Site Logo', type: 'image', group: 'design', options: { accept: 'image/svg+xml, image/png, image/jpeg' } }),
        defineField({
            name: 'fontPairing',
            title: 'Site Typography (Font Pairing)',
            type: 'string',
            group: 'design',
            options: {
                list: [
                    { title: 'Lili Original (Lobster & Montserrat)', value: 'original' },
                    { title: 'Minimalist Chic (Playfair & Lato)', value: 'minimalist' },
                    { title: 'Soft & Round (Fredoka & Quicksand)', value: 'soft' },
                ],
                layout: 'dropdown',
            },
            initialValue: 'original',
        }),
        defineField({ name: 'address', title: 'Physical Address', type: 'string', group: 'contact' }),
        defineField({ name: 'instagramUrl', title: 'Instagram Profile URL', type: 'url', group: 'contact' }),
    ],
})
