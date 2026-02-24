import { defineField, defineType } from 'sanity'
import { EarthGlobeIcon } from '@sanity/icons'

export default defineType({
    name: 'mapBlock',
    title: 'Google Map Embed',
    type: 'object',
    icon: EarthGlobeIcon,
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading (Optional)',
            type: 'string',
            initialValue: 'Find Us'
        }),
        defineField({
            name: 'mapUrl',
            title: 'Google Maps Embed URL',
            type: 'url',
            description: 'Go to Google Maps -> Share -> Embed a map -> Copy HTML. Extract ONLY the src="..." url.',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'height',
            title: 'Map Height',
            type: 'number',
            description: 'Height in pixels (e.g. 400)',
            initialValue: 400
        })
    ],
    preview: {
        select: {
            title: 'heading'
        },
        prepare({ title }) {
            return {
                title: title || 'Google Map',
                subtitle: 'Embedded interactive map',
                media: EarthGlobeIcon
            }
        }
    }
})
