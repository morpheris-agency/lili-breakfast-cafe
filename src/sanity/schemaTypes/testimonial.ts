import { defineField, defineType } from 'sanity'
import { StarIcon } from '@sanity/icons'

export default defineType({
    name: 'testimonial',
    title: 'Customer Review',
    type: 'document',
    icon: StarIcon,
    fields: [
        defineField({
            name: 'authorName',
            title: 'Customer Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'rating',
            title: 'Rating (1 to 5)',
            type: 'number',
            validation: (Rule) => Rule.required().min(1).max(5),
            initialValue: 5,
        }),
        defineField({
            name: 'reviewText',
            title: 'Review Excerpt',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isFeatured',
            title: 'Feature on Homepage?',
            type: 'boolean',
            description: 'Turn this on to show this specific review on the main landing page.',
            initialValue: false
        }),
        defineField({
            name: 'platform',
            title: 'Review Source',
            type: 'string',
            options: {
                list: [
                    { title: 'Google Maps', value: 'google' },
                    { title: 'TripAdvisor', value: 'tripadvisor' },
                    { title: 'Facebook', value: 'facebook' },
                    { title: 'Direct/Other', value: 'other' }
                ]
            },
            initialValue: 'google'
        }),
        defineField({
            name: 'avatar',
            title: 'Customer Photo',
            type: 'image',
            description: 'Optional',
            options: { hotspot: true },
        }),
    ],
    preview: {
        select: {
            title: 'authorName',
            subtitle: 'reviewText',
            rating: 'rating',
            media: 'avatar',
        },
        prepare({ title, subtitle, rating, media }) {
            const stars = Array(rating || 0).fill('⭐').join('')
            return {
                title: `${title} - ${stars}`,
                subtitle: subtitle,
                media: media || StarIcon,
            }
        },
    },
})
