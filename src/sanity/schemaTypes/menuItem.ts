import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'menuItem',
    title: 'Menu Item',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Dish/Drink Name', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'price', title: 'Price (THB)', type: 'number', validation: (rule) => rule.required().positive() }),
        defineField({ name: 'isBestSeller', title: 'Is Best Seller? (⭐)', type: 'boolean', initialValue: false }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }], validation: (rule) => rule.required() }),
    ],
})
