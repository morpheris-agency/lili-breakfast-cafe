import { defineField, defineType } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'

export default defineType({
    name: 'faqBlock',
    title: 'FAQ Section',
    type: 'object',
    icon: BlockContentIcon,
    fields: [
        defineField({
            name: 'heading',
            title: 'Section Heading',
            type: 'string',
            initialValue: 'Frequently Asked Questions'
        }),
        defineField({
            name: 'questions',
            title: 'Questions & Answers',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', title: 'Question', type: 'string', validation: rule => rule.required() },
                        { name: 'answer', title: 'Answer', type: 'text', rows: 3, validation: rule => rule.required() }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'heading',
            questions: 'questions'
        },
        prepare({ title, questions }) {
            return {
                title: title || 'FAQ Section',
                subtitle: questions ? `${questions.length} questions` : '0 questions',
                media: BlockContentIcon
            }
        }
    }
})
