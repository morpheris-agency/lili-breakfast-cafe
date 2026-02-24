import { defineField, defineType } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export default defineType({
    name: 'newsletterBlock',
    title: 'Newsletter Signup',
    type: 'object',
    icon: EnvelopeIcon,
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue: 'Join the Lili Family'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            initialValue: 'Sign up to receive our latest recipes, events, and exclusive offers.'
        }),
        defineField({
            name: 'buttonText',
            title: 'Subscribe Button Text',
            type: 'string',
            initialValue: 'Subscribe'
        }),
        defineField({
            name: 'disclaimer',
            title: 'Privacy Disclaimer (Optional)',
            type: 'string',
            initialValue: 'We respect your privacy. Unsubscribe at any time.'
        })
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'description'
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Newsletter Signup',
                subtitle: subtitle || 'Collect emails',
                media: EnvelopeIcon
            }
        }
    }
})
