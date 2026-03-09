import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ContentCard } from '@/components/content-card'
import { Button } from '@/components/ui/button'
import { ScrollingMarquee } from '@/components/scrolling-marquee'
import { contentLibrary } from '@/lib/mock-data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const originals = contentLibrary.slice(0, 5)
  const trending = contentLibrary.slice(3, 8)

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Marquee Banner */}
        <ScrollingMarquee />

        {/* Araceli Originals Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif text-white">
                Araceli <span className="italic-gold">Originals</span>
              </h2>
              <Link href="/browse" className="text-xs font-bold text-gray-400 hover:text-gold tracking-widest uppercase transition-all flex items-center gap-2">
                See All
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {originals.map((content) => (
                <ContentCard key={content.id} {...content} />
              ))}
            </div>
          </div>
        </section>

        {/* Trending Now Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl sm:text-4xl font-serif text-white">
                Trending <span className="italic-gold">Now</span>
              </h2>
              <Link href="/browse" className="text-xs font-bold text-gray-400 hover:text-gold tracking-widest uppercase transition-all flex items-center gap-2">
                See All
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Genre Filters (Simplified representation from screenshot 3) */}
            <div className="flex flex-wrap gap-3 mb-12">
              {['ALL', 'DRAMA', 'ACTION', 'THRILLER', 'DOCUMENTARY', 'COMEDY', 'SCI-FI'].map((genre) => (
                <button
                  key={genre}
                  className={`px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase border transition-all ${
                    genre === 'ALL' ? 'border-gold text-gold' : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {trending.map((content) => (
                <ContentCard key={content.id} {...content} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section (Ready to Stream Smarter?) */}
        <section className="px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden">
          {/* Subtle radial glow background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-coral/5 to-transparent" />

          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white leading-tight">
                Ready to <span className="italic-gold">Stream Smarter?</span>
              </h2>
              <p className="text-gray-400 text-lg sm:text-xl font-light max-w-2xl mx-auto">
                Premium blockbuster content at a price that actually makes sense.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button className="bg-gold hover:bg-gold-dark text-black px-10 h-14 text-xs font-bold tracking-widest uppercase transition-all shadow-xl shadow-gold/10">
                  See Our Plans
                </Button>
              </Link>
              <Link href="/browse">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10 h-14 text-xs font-bold tracking-widest uppercase transition-all">
                  Browse Free Content
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
