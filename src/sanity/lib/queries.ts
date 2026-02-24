import { groq } from 'next-sanity'

export const getMenuQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    description,
    "items": *[_type == "menuItem" && references(^._id)] | order(price asc) {
      _id,
      title,
      price,
      description,
      tags,
      "imageUrl": image.asset->url
    }
  }
`

export const getGlobalSettingsQuery = groq`
  *[_type == "globalSettings"][0] {
    fontPairing
  }
`
