import { defineField, defineType } from 'sanity'
import { DocumentIcon, StarIcon, ImageIcon, TagIcon } from '@sanity/icons'

export default defineType({
    name: 'menuItem',
    title: 'Menu Item',
    type: 'document',
    icon: DocumentIcon,
    groups: [
        { name: 'details', title: 'Item Details', icon: DocumentIcon },
        { name: 'media', title: 'Media', icon: ImageIcon },
        { name: 'pricing', title: 'Pricing & Tags', icon: TagIcon },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Dish/Drink Name',
            type: 'string',
            group: 'details',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Appetizing Description',
            type: 'text',
            rows: 3,
            group: 'details',
            description: 'A mouth-watering description to entice customers.'
        }),
        defineField({
            name: 'category',
            title: 'Menu Category',
            type: 'reference',
            to: [{ type: 'category' }],
            group: 'details',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'price',
            title: 'Price (THB)',
            type: 'number',
            group: 'pricing',
            validation: (rule) => rule.required().positive()
        }),
        defineField({
            name: 'isBestSeller',
            title: 'Is Best Seller? (⭐)',
            description: 'Highlights this item on the menu',
            type: 'boolean',
            group: 'pricing',
            initialValue: false
        }),
        defineField({
            name: 'allergens',
            title: 'Allergens / Dietary',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Vegan (V)', value: 'vegan' },
                    { title: 'Vegetarian (VEG)', value: 'vegetarian' },
                    { title: 'Gluten-Free (GF)', value: 'gluten-free' },
                    { title: 'Contains Nuts', value: 'nuts' },
                    { title: 'Spicy (🌶️)', value: 'spicy' },
                ],
            },
            group: 'pricing'
        }),
        defineField({
            name: 'image',
            title: 'High-Res Image',
            type: 'image',
            group: 'media',
            options: { hotspot: true }
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category.title',
            media: 'image',
            isBestSeller: 'isBestSeller',
            price: 'price'
        },
        prepare({ title, subtitle, media, isBestSeller, price }) {
            return {
                title: `${isBestSeller ? '⭐ ' : ''}${title}`,
                subtitle: subtitle ? `${subtitle} - ${price} THB` : `${price} THB`,
                media: media || DocumentIcon,
            }
        },
    },
})
