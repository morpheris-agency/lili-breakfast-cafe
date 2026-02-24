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
            title: 'Base Price (THB)',
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
            name: 'isChefsRecommendation',
            title: 'Chef\'s Recommendation? (👨‍🍳)',
            description: 'Adds a special "Chef\'s Choice" badge',
            type: 'boolean',
            group: 'pricing',
            initialValue: false
        }),
        defineField({
            name: 'promotionalBadge',
            title: 'Promotional Badge',
            description: 'Temporary tag (e.g. "Sold Out", "New", "Weekend Special")',
            type: 'string',
            group: 'pricing'
        }),
        defineField({
            name: 'variants',
            title: 'Size/Type Variants',
            description: 'e.g. "Hot" vs "Iced", or "Regular" vs "Large". If used, these OVERRIDE the Base Price above.',
            type: 'array',
            group: 'pricing',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Variant Name', type: 'string', description: 'e.g. Large' },
                        { name: 'price', title: 'Price (THB)', type: 'number' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'addons',
            title: 'Add-ons / Extras',
            description: 'e.g. "+30 THB for Gouda Cheese"',
            type: 'array',
            group: 'pricing',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Add-on Name', type: 'string', description: 'e.g. Extra Bacon' },
                        { name: 'price', title: 'Extra Cost (THB)', type: 'number' }
                    ]
                }
            ]
        }),

        // --- DIETARY & PREP ---
        defineField({
            name: 'spiceLevel',
            title: 'Spice Level (0-3)',
            type: 'number',
            group: 'details',
            description: '0 = Not spicy at all. 3 = Very Spicy 🌶️🌶️🌶️',
            initialValue: 0,
            validation: rule => rule.min(0).max(3)
        }),
        defineField({
            name: 'preparationTime',
            title: 'Estimated Prep Time',
            type: 'string',
            group: 'details',
            description: 'e.g. "15-20 mins"'
        }),
        defineField({
            name: 'nutritionalInfo',
            title: 'Nutritional Info',
            type: 'object',
            group: 'details',
            fields: [
                { name: 'calories', title: 'Calories (kcal)', type: 'number' },
                { name: 'protein', title: 'Protein (g)', type: 'number' }
            ]
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
                    { title: 'Dairy-Free (DF)', value: 'dairy-free' },
                    { title: 'Contains Nuts', value: 'nuts' },
                ],
            },
            group: 'details'
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
