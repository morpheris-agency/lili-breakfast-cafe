import { sanityFetch } from "@/sanity/lib/live";
import { getGlobalSettingsQuery } from "@/sanity/lib/queries";
import ContactPageClient from "./ContactPageClient";

export default async function ContactPage() {
    const { data: settings } = await sanityFetch({ query: getGlobalSettingsQuery });

    return <ContactPageClient settings={settings} />;
}
