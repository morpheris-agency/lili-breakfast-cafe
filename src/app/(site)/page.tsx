import Hero from '@/components/sections/Hero'
import InstagramFeed from '@/components/sections/InstagramFeed'
import { sanityFetch } from '@/sanity/lib/live'
import { getPageQuery } from '@/sanity/lib/queries'

export default async function Home() {
  // Fetch the "home" page document from Sanity
  const { data: pageData } = await sanityFetch({
    query: getPageQuery,
    params: { slug: 'home' }
  });

  // Extract the heroBlock if it exists in the pageBuilder array
  const heroData = pageData?.pageBuilder?.find((block: any) => block._type === 'heroBlock');

  // Extract the richTextBlock if it exists (for the teaser text)
  const richTextData = pageData?.pageBuilder?.find((block: any) => block._type === 'richTextBlock');

  return (
    <>
      <Hero
        heading={heroData?.heading}
        subheading={heroData?.subheading}
        primaryCta={heroData?.primaryCta}
      />

      {/* Short teaser section before Instagram */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="font-script text-5xl text-text-dark leading-tight mb-8 whitespace-pre-line">
          {richTextData?.content
            ? richTextData.content
            : <>More than just food. It's a <span className="text-accent-pitaya">feeling</span>.</>
          }
        </h2>
        <p className="text-lg font-body text-text-dark/80 max-w-2xl mx-auto leading-relaxed">
          At Lili Breakfast Cafe, we believe in taking time. Time to appreciate the flavors of locally sourced ingredients, time to enjoy the quiet mornings of Pai, and time to connect with fellow travelers over a perfectly brewed cup of coffee.
        </p>
      </section>

      <InstagramFeed />
    </>
  );
}
