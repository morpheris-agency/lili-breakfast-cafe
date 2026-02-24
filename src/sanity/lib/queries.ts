import { groq } from 'next-sanity'

export const getMenuQuery = groq`
  *[_type == "category"] | order(order asc) {
    _id,
    title,
    "description": shortDescription,
    isVisible,
    availability,
    layoutStyle,
    "heroImageUrl": heroImage.asset->url,
    "items": *[_type == "menuItem" && references(^._id)] | order(price asc) {
      _id,
      title,
      price,
      description,
      isBestSeller,
      isChefsRecommendation,
      promotionalBadge,
      variants,
      addons,
      spiceLevel,
      preparationTime,
      nutritionalInfo,
      allergens,
      "imageUrl": image.asset->url
    }
  }
`

export const getGlobalSettingsQuery = groq`
  *[_type == "globalSettings"][0] {
    siteName,
    "faviconUrl": favicon.asset->url,
    fontPairing,
    
    // Contact & Location
    address,
    googleMapsLink,
    email,
    phone,
    
    // Socials & WhatsApp
    instagramUrl,
    facebookUrl,
    tiktokUrl,
    enableWhatsApp,
    whatsappNumber,
    whatsappMessage,
    
    // Hours
    businessHours,
    
    // SEO
    seoTitle,
    seoDescription,
    "seoImageUrl": seoImage.asset->url
  }
`

export const getPageQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    seoDescription,
    pageBuilder[] {
      _type,
      
      // Fields for heroBlock
      _type == "heroBlock" => {
        heading,
        subheading,
        primaryCta,
        "backgroundImageUrl": backgroundImage.asset->url
      },
      
      // We can add other block field resolutions here in the future
      _type == "richTextBlock" => {
        content
      }
    }
  }
`

export const getAboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    headerTag,
    headerTitle,
    storyHeading,
    storyParagraphs,
    quote,
    "storyImageUrl": storyImage.asset->url,
    footerHeading,
    footerText
  }
`
