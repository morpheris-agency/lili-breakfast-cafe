import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'
import { colorInput } from '@sanity/color-input'
import { myTheme } from './src/sanity/theme'

export default defineConfig({
    name: 'default',
    title: 'Lili Breakfast Cafe',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummyProjectId',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/studio',

    theme: myTheme,

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Content Panel')
                    .items([
                        S.listItem()
                            .title('Site Configuration')
                            .id('globalSettings')
                            .child(
                                S.document()
                                    .schemaType('globalSettings')
                                    .documentId('globalSettings')
                                    .title('Site Configuration')
                            ),
                        S.divider(),
                        ...S.documentTypeListItems().filter(
                            (listItem) => !['globalSettings'].includes(listItem.getId() as string)
                        ),
                    ]),
        }),
        colorInput(),
    ],

    schema: {
        types: schemaTypes,
    },
})
