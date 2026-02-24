import { defineType, defineArrayMember } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
    name: 'richTextBlock',
    title: 'Rich Text Content',
    type: 'object',
    icon: DocumentTextIcon,
    fields: [
        {
            name: 'content',
            title: 'Body Content',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Underline', value: 'underline' }
                        ]
                    }
                })
            ]
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Rich Text Block',
                subtitle: 'Formatted text content',
                media: DocumentTextIcon
            }
        }
    }
})
