import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ContentCard } from '@/components/content-card'
import { Button } from '@/components/ui/button'
import { featuredContent, contentLibrary, testimonials } from '@/lib/mock-data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const trendingContent = contentLibrary.slice(0, 6)

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <HeroSection
              title={featuredContent.title}
              subtitle={featuredContent.subtitle}
              description={featuredContent.description}
              backgroundImage={featuredContent.image}
            />
          </div>
        </section>

        {/* Trending Now Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-brand-dark to-brand-darker">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Trending Now</h2>
                <p className="text-gold text-sm">Discover what's popular on Araceli</p>
              </div>
              <Link href="/browse">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-brand-dark hidden sm:flex gap-2"
                >
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingContent.map((content) => (
                <ContentCard key={content.id} {...content} />
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link href="/browse">
                <Button className="bg-gold text-brand-dark hover:bg-gold-dark">
                  View All Content
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Araceli Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Why Choose Araceli?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gold transition-colors">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                  <span className="text-brand-dark font-bold text-xl">$</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Affordable Pricing</h3>
                <p className="text-gray-400">
                  Premium entertainment at a fraction of the cost. From free ad-supported to premium, we have a plan for everyone.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gold transition-colors">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                  <span className="text-brand-dark font-bold text-xl">🎬</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quality Content</h3>
                <p className="text-gray-400">
                  Curated selection of feature films and blockbuster streaming content that entertains and inspires.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gold transition-colors">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                  <span className="text-brand-dark font-bold text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Flexible Plans</h3>
                <p className="text-gray-400">
                  Choose ad-free streaming, ad-supported, or freemium with scheduled programming that suits your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-darker border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              What Our Users Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gold transition-colors"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                  <p className="text-gold font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 rounded-xl p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Join Araceli?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Start watching your favorite content today. Choose from our flexible subscription plans or enjoy our freemium option.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing">
                  <Button className="bg-gold text-brand-dark hover:bg-gold-dark px-8 py-6 text-lg">
                    Explore Plans
                  </Button>
                </Link>
                <Link href="/browse">
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-brand-dark px-8 py-6 text-lg"
                  >
                    Browse Content
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
