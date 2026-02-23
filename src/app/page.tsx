import Hero from '@/components/sections/Hero'
import InstagramFeed from '@/components/sections/InstagramFeed'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Short teaser section before Instagram */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-heading font-normal text-text-dark leading-tight mb-8">
          More than just food. It's a <span className="text-accent-pitaya">feeling</span>.
        </h2>
        <p className="text-lg font-body text-text-dark/80 max-w-2xl mx-auto leading-relaxed">
          At Lili Breakfast Cafe, we believe in taking time. Time to appreciate the flavors of locally sourced ingredients, time to enjoy the quiet mornings of Pai, and time to connect with fellow travelers over a perfectly brewed cup of coffee.
        </p>
      </section>

      <InstagramFeed />
    </>
  );
}
