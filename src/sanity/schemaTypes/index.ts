import type { SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { menuItemType } from './menuItemType'
import { siteSettingsType } from './siteSettingsType'

export const schemaTypes: SchemaTypeDefinition[] = [
    categoryType,
    menuItemType,
    siteSettingsType,
]
