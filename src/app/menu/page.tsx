import MenuPageClient from './MenuPageClient';
import { menuData } from './menuData';

export default function MenuPage() {
    // Directly passing the structured menu data matching the provided specs.
    return <MenuPageClient categories={menuData} />;
}
