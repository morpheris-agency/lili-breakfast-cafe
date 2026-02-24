import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export default defineType({
    name: 'ctaBlock',
    title: 'Call to Action',
    type: 'object',
    icon: LinkIcon,
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
            rows: 2
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'Book a Table'
        }),
        defineField({
            name: 'buttonLink',
            title: 'Button Link',
            type: 'string',
            description: 'Can be an internal route (e.g. /menu) or external URL',
            initialValue: '/menu'
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true }
        }),
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'buttonText',
            media: 'backgroundImage'
        },
        prepare({ title, subtitle, media }) {
            return {
                title: title || 'Call to Action',
                subtitle: subtitle ? `Button: ${subtitle}` : '',
                media: media || LinkIcon
            }
        }
    }
})
