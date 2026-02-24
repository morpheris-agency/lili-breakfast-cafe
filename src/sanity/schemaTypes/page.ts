import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export default defineType({
    name: 'page',
    title: 'Website Page',
    type: 'document',
    icon: DocumentIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Internal Page Title',
            type: 'string',
            description: 'Used to identify the page in the CMS (e.g. "Home Page v2")',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            description: 'The URL path for this page (e.g. "about" for /about). Use "home" for the homepage.',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'seoDescription',
            title: 'SEO Meta Description',
            type: 'text',
            rows: 2,
            description: 'Short description for Google and social sharing',
        }),
        defineField({
            name: 'pageBuilder',
            title: 'Page Builder',
            description: 'Construct the layout of this page by adding blocks below. Reorder them as you wish!',
            type: 'array',
            of: [
                { type: 'heroBlock' },
                { type: 'featureListBlock' },
                { type: 'galleryBlock' },
                { type: 'ctaBlock' },
                { type: 'faqBlock' },
                { type: 'mapBlock' },
                { type: 'newsletterBlock' },
                { type: 'splitContentBlock' },
                { type: 'richTextBlock' },
            ],
            options: {
                // Layout makes it look nicer when adding items
                layout: 'grid',
            }
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'slug.current',
        },
        prepare({ title, subtitle }) {
            return {
                title,
                subtitle: subtitle === 'home' ? '/' : `/${subtitle}`,
                media: DocumentIcon,
            }
        },
    },
})
