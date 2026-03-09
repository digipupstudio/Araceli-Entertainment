import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PricingCard } from '@/components/pricing-card'
import { pricingPlans } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-brand-dark via-brand-dark to-brand-darker">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect plan for your entertainment needs. No hidden fees, cancel anytime.
            </p>
            <p className="text-lg text-gold">
              Premium entertainment at prices that actually make sense
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} {...plan} />
            ))}
          </div>
        </section>

        {/* Features Comparison */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Compare All Features
            </h2>

            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="px-6 py-4 text-left text-white font-semibold">Features</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Freemium</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Standard</th>
                      <th className="px-6 py-4 text-center text-gold font-semibold">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-6 py-4 text-gray-300">Streaming Quality</td>
                      <td className="px-6 py-4 text-center text-gray-400">720p</td>
                      <td className="px-6 py-4 text-center text-gray-400">1080p</td>
                      <td className="px-6 py-4 text-center text-gold">4K</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-6 py-4 text-gray-300">Simultaneous Streams</td>
                      <td className="px-6 py-4 text-center text-gray-400">1</td>
                      <td className="px-6 py-4 text-center text-gray-400">2</td>
                      <td className="px-6 py-4 text-center text-gold">4</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-6 py-4 text-gray-300">Ad-Free Viewing</td>
                      <td className="px-6 py-4 text-center text-gray-400">✕</td>
                      <td className="px-6 py-4 text-center text-gray-400">✕</td>
                      <td className="px-6 py-4 text-center text-gold">✓</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-6 py-4 text-gray-300">Offline Downloads</td>
                      <td className="px-6 py-4 text-center text-gray-400">✕</td>
                      <td className="px-6 py-4 text-center text-gold">✓</td>
                      <td className="px-6 py-4 text-center text-gold">✓</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-6 py-4 text-gray-300">Content Library Access</td>
                      <td className="px-6 py-4 text-center text-gray-400">Limited</td>
                      <td className="px-6 py-4 text-center text-gold">Full</td>
                      <td className="px-6 py-4 text-center text-gold">Full</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-6 py-4 text-gray-300">Family Sharing</td>
                      <td className="px-6 py-4 text-center text-gray-400">✕</td>
                      <td className="px-6 py-4 text-center text-gray-400">✕</td>
                      <td className="px-6 py-4 text-center text-gold">✓ (5 profiles)</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-6 py-4 text-gray-300">Early Access to New Content</td>
                      <td className="px-6 py-4 text-center text-gray-400">✕</td>
                      <td className="px-6 py-4 text-center text-gray-400">✕</td>
                      <td className="px-6 py-4 text-center text-gold">✓</td>
                    </tr>
                    <tr className="hover:bg-gray-800/50">
                      <td className="px-6 py-4 text-gray-300">Priority Support</td>
                      <td className="px-6 py-4 text-center text-gray-400">✕</td>
                      <td className="px-6 py-4 text-center text-gray-400">✕</td>
                      <td className="px-6 py-4 text-center text-gold">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-darker border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Can I cancel anytime?',
                  a: 'Yes! You can cancel your subscription at any time with no cancellation fees or penalties.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards, debit cards, and digital payment methods for your convenience.',
                },
                {
                  q: 'Can I upgrade or downgrade my plan?',
                  a: 'Absolutely! You can change your subscription plan at any time, and billing will adjust accordingly.',
                },
                {
                  q: 'Is the Freemium plan really free forever?',
                  a: 'Yes, our Freemium plan is completely free with ad-supported content and scheduled programming.',
                },
                {
                  q: 'Do I get a free trial?',
                  a: 'We offer a 7-day free trial on Premium and Standard plans. No credit card required to start.',
                },
                {
                  q: 'Can I share my account with family?',
                  a: 'The Premium plan includes family sharing with up to 5 profiles. Standard allows 2 simultaneous streams.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gold transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-gray-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 rounded-xl p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to start watching?
              </h2>
              <p className="text-gray-300 mb-8">
                Choose your plan above or explore our content library for free with the Freemium option.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/browse">
                  <Button className="bg-gold text-brand-dark hover:bg-gold-dark px-8 py-6 text-lg w-full sm:w-auto">
                    Browse Content
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-brand-dark px-8 py-6 text-lg w-full sm:w-auto"
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
