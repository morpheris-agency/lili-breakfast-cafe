import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Menu Category',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    ],
})
