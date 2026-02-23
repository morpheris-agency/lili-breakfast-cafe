import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Site Title',
            type: 'string',
        }),
        defineField({
            name: 'instagramHandle',
            title: 'Instagram Handle',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'text',
        }),
        defineField({
            name: 'hours',
            title: 'Opening Hours',
            type: 'text',
        }),
        defineField({
            name: 'aboutText',
            title: 'About Us Text',
            type: 'text',
        }),
    ],
})
