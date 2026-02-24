import { defineField, defineType } from 'sanity'
import { SplitHorizontalIcon } from '@sanity/icons'

export default defineType({
    name: 'splitContentBlock',
    title: '50/50 Split Content',
    type: 'object',
    icon: SplitHorizontalIcon,
    fields: [
        defineField({
            name: 'image',
            title: 'Side Image',
            type: 'image',
            options: { hotspot: true },
            validation: rule => rule.required()
        }),
        defineField({
            name: 'imagePosition',
            title: 'Image Position',
            type: 'string',
            options: {
                list: [
                    { title: 'Left (Image left, Text right)', value: 'left' },
                    { title: 'Right (Text left, Image right)', value: 'right' }
                ],
                layout: 'radio'
            },
            initialValue: 'left'
        }),
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'body',
            title: 'Body Text',
            type: 'text',
            rows: 5,
            validation: rule => rule.required()
        }),
        defineField({
            name: 'buttonText',
            title: 'Optional Button Text',
            type: 'string'
        }),
        defineField({
            name: 'buttonLink',
            title: 'Optional Button Link',
            type: 'string'
        })
    ],
    preview: {
        select: {
            title: 'heading',
            position: 'imagePosition',
            media: 'image'
        },
        prepare({ title, position, media }) {
            return {
                title: title || 'Split Content',
                subtitle: `Image aligned to the ${position}`,
                media: media || SplitHorizontalIcon
            }
        }
    }
})
