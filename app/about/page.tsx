import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  About Araceli Entertainment
                </h1>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Welcome to Araceli Entertainment, where dreams are born and possibilities are endless. We are a full-service production and streaming platform dedicated to bringing you quality entertainment at affordable prices.
                </p>
                <p className="text-lg text-gold italic font-light mb-8">
                  "Birth your dreams. Dreams are ordained to be."
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden border border-gold/30">
                <Image
                  src="https://images.unsplash.com/photo-1535016120754-30d87a42ad2b?w=600&h=400&fit=crop"
                  alt="Araceli Entertainment Studio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-darker border-b border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gold transition-colors">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                  <span className="text-brand-dark font-bold text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To revolutionize the streaming entertainment industry by providing premium quality content and production services at truly affordable prices. We believe everyone deserves access to exceptional entertainment without breaking the bank.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gold transition-colors">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                  <span className="text-brand-dark font-bold text-xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the most trusted and accessible streaming platform globally, offering diverse, high-quality content that inspires, entertains, and brings families together through flexible subscription options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Feature Films',
                  description: 'A curated selection of blockbuster films from emerging and established filmmakers.',
                  icon: '🎬',
                },
                {
                  title: 'Premium Series',
                  description: 'Original and exclusive streaming content that rivals the biggest entertainment companies.',
                  icon: '📺',
                },
                {
                  title: 'Flexible Plans',
                  description: 'Choose between ad-free premium, ad-supported standard, or free freemium with scheduled programming.',
                  icon: '💳',
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gold transition-colors">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dr. Kevin McLemore Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-darker border-b border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Founder & Vision Leader
            </h2>
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 rounded-xl p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gold/30">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                      alt="Dr. Kevin McLemore"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-white mb-2">Dr. Kevin McLemore</h3>
                  <p className="text-gold text-lg font-semibold mb-4">Founder & CEO, Araceli Entertainment</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    With a visionary approach to entertainment and a commitment to affordability, Dr. Kevin McLemore founded Araceli Entertainment to create a platform where quality content meets accessible pricing. His philosophy believes that great entertainment should never be a luxury.
                  </p>
                  <div className="space-y-4 mb-6">
                    <p className="text-gold italic text-lg">
                      "Birth your dreams. Dreams are ordained to be."
                    </p>
                    <p className="text-gold italic text-lg">
                      "Trust your pathway. Your tomorrow is built upon the preparation of today."
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:630-994-0265" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
                      <Phone className="w-5 h-5" />
                      <span>(630) 994-0265</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61587281891229" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
                      <span>Connect on Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Why Choose Araceli?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Affordable Pricing',
                  description: 'We offer premium streaming at a fraction of the cost of competitors, without compromising quality.',
                },
                {
                  title: 'Flexible Subscription',
                  description: 'Choose from freemium, ad-supported, or premium options. No long-term contracts.',
                },
                {
                  title: 'Quality Content',
                  description: 'Feature films and blockbuster productions curated for entertainment and inspiration.',
                },
                {
                  title: 'Customer First',
                  description: 'Our support team is dedicated to providing the best streaming experience for you.',
                },
                {
                  title: 'Full Production House',
                  description: 'We produce our own content, ensuring original and exclusive programming.',
                },
                {
                  title: 'Accessible Entertainment',
                  description: 'Available on all devices with flexible plans for every budget and preference.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gold transition-colors">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-darker border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Have questions about Araceli? We'd love to hear from you. Reach out to Dr. Kevin McLemore or our support team.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <a
                href="tel:630-994-0265"
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gold transition-colors flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6 text-gold" />
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <p className="text-white font-semibold">(630) 994-0265</p>
                </div>
              </a>
              <a
                href="mailto:Kmhomerglen@gmail.com"
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gold transition-colors flex items-center justify-center gap-3"
              >
                <Mail className="w-6 h-6 text-gold" />
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">Kmhomerglen@gmail.com</p>
                </div>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button className="bg-gold text-brand-dark hover:bg-gold-dark px-8 py-6 text-lg w-full sm:w-auto">
                  Explore Plans
                </Button>
              </Link>
              <a href="https://www.facebook.com/profile.php?id=61587281891229" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-brand-dark px-8 py-6 text-lg w-full sm:w-auto"
                >
                  Follow on Facebook
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
