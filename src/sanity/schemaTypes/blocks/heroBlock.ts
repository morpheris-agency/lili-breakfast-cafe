import { defineField, defineType } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'

export default defineType({
    name: 'heroBlock',
    title: 'Hero Section',
    type: 'object',
    icon: BlockContentIcon,
    fields: [
        defineField({
            name: 'heading',
            title: 'Main Heading',
            type: 'string',
            initialValue: 'Nourish your body, feed your soul.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subheading',
            title: 'Subtext',
            type: 'text',
            rows: 2,
            initialValue: 'Discover a taste of nature...',
        }),
        defineField({
            name: 'primaryCta',
            title: 'Primary Button Text',
            type: 'string',
            initialValue: 'View Menu',
            description: 'Optional',
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
    preview: {
        select: {
            title: 'heading',
            media: 'backgroundImage',
        },
        prepare({ title, media }) {
            return {
                title: title || 'Hero Section',
                subtitle: 'Hero Block',
                media: media || BlockContentIcon,
            }
        },
    },
})
