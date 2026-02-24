import { defineField, defineType } from 'sanity'
import { BlockElementIcon } from '@sanity/icons'

export default defineType({
    name: 'aboutPage',
    title: 'Our Story Page',
    type: 'document',
    icon: BlockElementIcon,
    fields: [
        defineField({
            name: 'headerTag',
            title: 'Top Tag',
            type: 'string',
            initialValue: 'Our Story',
        }),
        defineField({
            name: 'headerTitle',
            title: 'Main Title',
            type: 'string',
            initialValue: 'The Magic of Pai',
            description: 'Tip: You can use "||Magic||" to highlight a word in blue sky color.'
        }),
        defineField({
            name: 'storyHeading',
            title: 'Story Heading',
            type: 'string',
            initialValue: 'From a tiny cart to a conscious space.',
        }),
        defineField({
            name: 'storyParagraphs',
            title: 'Story Paragraphs',
            type: 'array',
            of: [{ type: 'text', rows: 4 }],
        }),
        defineField({
            name: 'quote',
            title: 'Inspirational Quote',
            type: 'string',
        }),
        defineField({
            name: 'storyImage',
            title: 'Story Side Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'footerHeading',
            title: 'Banner Heading',
            type: 'string',
            initialValue: 'Come say hi!',
        }),
        defineField({
            name: 'footerText',
            title: 'Banner Text',
            type: 'text',
            rows: 3,
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Our Story Page Configuration',
                media: BlockElementIcon,
            }
        },
    },
})
