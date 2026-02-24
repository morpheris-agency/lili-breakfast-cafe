import { defineField, defineType } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export default defineType({
    name: 'galleryBlock',
    title: 'Image Gallery',
    type: 'object',
    icon: ImagesIcon,
    fields: [
        defineField({
            name: 'heading',
            title: 'Gallery Heading',
            type: 'string',
            description: 'Optional',
        }),
        defineField({
            name: 'images',
            title: 'Gallery Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            options: {
                layout: 'grid',
            }
        }),
    ],
    preview: {
        select: {
            title: 'heading',
        },
        prepare({ title }) {
            return {
                title: title || 'Image Gallery',
                subtitle: 'Gallery Block',
                media: ImagesIcon,
            }
        },
    },
})
