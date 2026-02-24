import { defineField, defineType } from 'sanity'
import { FolderIcon } from '@sanity/icons'

export default defineType({
    name: 'category',
    title: 'Menu Category',
    type: 'document',
    icon: FolderIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Category Title',
            type: 'string',
            validation: (rule) => rule.required(),
            description: 'e.g. Smoothie Bowls, Signature Coffees'
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            rows: 2,
            description: 'Brief description shown under the category title on the menu'
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first (e.g. 1)'
        }),
        defineField({
            name: 'icon',
            title: 'Category Icon (Emoji)',
            type: 'string',
            description: 'Optional emoji to represent the category (e.g. ☕, 🥞)',
            validation: Rule => Rule.max(4)
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'shortDescription',
            iconItem: 'icon'
        },
        prepare({ title, subtitle, iconItem }) {
            return {
                title: iconItem ? `${iconItem} ${title}` : title,
                subtitle: subtitle || 'No description',
                media: FolderIcon,
            }
        },
    },
})
