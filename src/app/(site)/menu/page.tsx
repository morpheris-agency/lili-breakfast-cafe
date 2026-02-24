import MenuPageClient from './MenuPageClient';
import { sanityFetch } from '@/sanity/lib/live';
import { getMenuQuery } from '@/sanity/lib/queries';

export default async function MenuPage() {
    const { data: menuCategories } = await sanityFetch({ query: getMenuQuery });

    return <MenuPageClient categories={menuCategories} />;
}
