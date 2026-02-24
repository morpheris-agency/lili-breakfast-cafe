import { defineField, defineType } from 'sanity'
import { FolderIcon } from '@sanity/icons'

export default defineType({
    name: 'category',
    title: 'Menu Category',
    type: 'document',
    icon: FolderIcon,
    groups: [
        { name: 'details', title: 'Category Details', icon: FolderIcon },
        { name: 'display', title: 'Display Settings', icon: FolderIcon },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Category Title',
            type: 'string',
            group: 'details',
            validation: (rule) => rule.required(),
            description: 'e.g. Smoothie Bowls, Signature Coffees'
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            group: 'details',
            rows: 2,
            description: 'Brief description shown under the category title on the menu'
        }),
        defineField({
            name: 'icon',
            title: 'Category Icon (Emoji)',
            type: 'string',
            group: 'details',
            description: 'Optional emoji to represent the category (e.g. ☕, 🥞)',
            validation: Rule => Rule.max(4)
        }),
        defineField({
            name: 'heroImage',
            title: 'Category Banner / Hero Image',
            type: 'image',
            group: 'details',
            description: 'Optional beautiful image to display at the top of this category section',
            options: { hotspot: true }
        }),

        // --- DISPLAY SETTINGS ---
        defineField({
            name: 'isVisible',
            title: 'Category Visible on Live Site?',
            type: 'boolean',
            group: 'display',
            description: 'Turn off to temporarily hide this category (e.g. seasonal menus) without deleting it.',
            initialValue: true
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            group: 'display',
            description: 'The number determining the position of this category in the menu (e.g. 1 for first, 2 for second)'
        }),
        defineField({
            name: 'layoutStyle',
            title: 'Layout Style',
            type: 'string',
            group: 'display',
            description: 'How should the items in this category be displayed?',
            options: {
                list: [
                    { title: 'Standard Grid (Cards with Images)', value: 'grid' },
                    { title: 'Compact List (Text only, good for Drinks)', value: 'list' }
                ],
                layout: 'radio'
            },
            initialValue: 'grid'
        }),
        defineField({
            name: 'availability',
            title: 'Time/Day Availability Note',
            type: 'string',
            group: 'display',
            description: 'e.g. "Available only from 7 AM to 11 AM" or "Weekends Only"'
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
                subtitle: subtitle ? subtitle : 'No description',
                media: FolderIcon,
            }
        },
    },
})
