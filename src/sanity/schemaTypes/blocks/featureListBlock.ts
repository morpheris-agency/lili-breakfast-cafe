import { defineField, defineType } from 'sanity'
import { ThListIcon } from '@sanity/icons'

export default defineType({
    name: 'featureListBlock',
    title: 'Feature List',
    type: 'object',
    icon: ThListIcon,
    fields: [
        defineField({
            name: 'heading',
            title: 'Block Heading',
            type: 'string',
            description: 'Optional heading for the features section (e.g. "Why choose us?")',
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Feature Title', type: 'string' },
                        { name: 'description', title: 'Short Description', type: 'text', rows: 2 },
                        { name: 'icon', title: 'Icon (Emoji)', type: 'string' },
                    ]
                }
            ]
        }),
    ],
    preview: {
        select: {
            title: 'heading',
        },
        prepare({ title }) {
            return {
                title: title || 'Feature List',
                subtitle: 'Feature Block',
                media: ThListIcon,
            }
        },
    },
})
