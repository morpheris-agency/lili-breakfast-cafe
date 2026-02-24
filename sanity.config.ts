import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'
import { colorInput } from '@sanity/color-input'
import { myTheme } from './src/sanity/theme'
import { structure } from './src/sanity/structure'
import { StudioLogo } from './src/sanity/StudioLogo'

export default defineConfig({
    name: 'default',
    title: 'Lili Breakfast Cafe',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummyProjectId',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/studio',

    theme: myTheme,

    studio: {
        components: {
            logo: StudioLogo,
        }
    },

    plugins: [
        structureTool({ structure }),
        colorInput(),
    ],

    schema: {
        types: schemaTypes,
    },
})
