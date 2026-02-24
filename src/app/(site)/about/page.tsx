import { sanityFetch } from '@/sanity/lib/live'
import { getAboutPageQuery } from '@/sanity/lib/queries'
import AboutPageClient from './AboutPageClient'

export default async function AboutPage() {
    const { data: aboutData } = await sanityFetch({ query: getAboutPageQuery });
    return <AboutPageClient data={aboutData} />;
}
