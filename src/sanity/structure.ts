import type { StructureResolver } from 'sanity/structure'
import { CogIcon, FolderIcon, DocumentIcon, StarIcon, EarthGlobeIcon, BookIcon } from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Lili Cafe Management')
    .items([
      // ------------------------------------
      // GLOBAL SETTINGS (Singleton)
      // ------------------------------------
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .id('globalSettings')
        .child(
          S.document()
            .schemaType('globalSettings')
            .documentId('globalSettings')
            .title('Site Configuration')
        ),

      S.listItem()
        .title('Our Story Page')
        .icon(DocumentIcon)
        .id('aboutPage')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
            .title('Our Story Config')
        ),

      S.divider(),

      // ------------------------------------
      // CONTENT PAGES
      // ------------------------------------
      S.listItem()
        .title('Website Pages')
        .icon(EarthGlobeIcon)
        .child(
          S.documentTypeList('page').title('All Pages')
        ),

      S.divider(),

      // ------------------------------------
      // MENU & FOOD
      // ------------------------------------
      S.listItem()
        .title('Menu Categories')
        .icon(FolderIcon)
        .child(S.documentTypeList('category').title('Categories')),

      S.listItem()
        .title('Menu Items')
        .icon(BookIcon)
        .child(S.documentTypeList('menuItem').title('Menu Items')),

      S.divider(),

      // ------------------------------------
      // SOCIAL PROOF
      // ------------------------------------
      S.listItem()
        .title('Customer Reviews')
        .icon(StarIcon)
        .child(S.documentTypeList('testimonial').title('Testimonials')),
    ])
