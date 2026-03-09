import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PricingCard } from '@/components/pricing-card'
import { pricingPlans } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-32 relative overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <p className="text-gold text-[10px] font-black tracking-[0.3em] uppercase">
              Plans & Pricing
            </p>
            <h1 className="text-6xl sm:text-7xl font-serif text-white">
              Great Content. <span className="italic-gold">Fair Prices.</span>
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl font-light max-w-2xl mx-auto">
              We believe premium entertainment shouldn't cost a fortune. Choose the
              plan that works for you — or start free, forever.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-4 sm:px-6 lg:px-8 pb-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                {...plan}
                cta={plan.id === 'free' ? 'GET STARTED FREE' : plan.id === 'standard' ? 'START AD PLAN' : 'GO PREMIUM'}
              />
            ))}
          </div>
        </section>

        {/* Features Comparison */}
        <section className="px-4 sm:px-6 lg:px-8 py-32 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-serif text-white text-center mb-24">
              Plan <span className="italic-gold">Comparison</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-6 text-[10px] font-black tracking-widest uppercase text-gray-500">Feature</th>
                    <th className="px-6 py-6 text-center text-[10px] font-black tracking-widest uppercase text-gray-500">Freemium</th>
                    <th className="px-6 py-6 text-center text-[10px] font-black tracking-widest uppercase text-gold">Ad-Supported</th>
                    <th className="px-6 py-6 text-center text-[10px] font-black tracking-widest uppercase text-gray-500">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Monthly price', 'Free', '$4.99', '$9.99'],
                    ['Content library', 'Limited', 'Full', 'Full'],
                    ['Video quality', 'HD', 'Full HD', '4K HDR'],
                    ['Screens at once', '1', '2', '4'],
                    ['Ads', '●', 'Limited', '✕'],
                    ['Downloads', '✕', '✕', '✓'],
                    ['Originals access', '✕', '✓', '✓'],
                    ['Early premiere access', '✕', '✕', '✓'],
                  ].map(([feature, p1, p2, p3], idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-6 text-xs font-bold text-gray-400 tracking-wide uppercase">{feature}</td>
                      <td className="px-6 py-6 text-center text-xs text-gray-500">{p1}</td>
                      <td className="px-6 py-6 text-center text-xs text-white font-bold">{p2}</td>
                      <td className="px-6 py-6 text-center text-xs text-gray-500">{p3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-32 text-center space-y-12 bg-gradient-to-t from-gold/5 to-transparent">
          <div className="space-y-4">
            <h2 className="text-5xl font-serif text-white">
              Not Sure <span className="italic-gold">Which Plan?</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Start with Freemium — no credit card needed. Upgrade anytime.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gold hover:bg-gold-dark text-black px-10 h-14 text-xs font-black tracking-widest uppercase transition-all shadow-xl shadow-gold/10">
              Start Watching Free
            </Button>
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 px-10 h-14 text-xs font-black tracking-widest uppercase transition-all">
              Learn Our Story
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
