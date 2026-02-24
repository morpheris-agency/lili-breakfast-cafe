import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
    name: 'default',
    title: 'Lili Breakfast Cafe',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummyProjectId',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/studio',

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Content')
                    .items([
                        S.listItem()
                            .title('Global Settings')
                            .id('globalSettings')
                            .child(
                                S.document()
                                    .schemaType('globalSettings')
                                    .documentId('globalSettings')
                            ),
                        S.divider(),
                        ...S.documentTypeListItems().filter(
                            (listItem) => !['globalSettings'].includes(listItem.getId() as string)
                        ),
                    ]),
        }),
    ],

    schema: {
        types: schemaTypes,
    },
})
