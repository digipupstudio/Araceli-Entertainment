'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-black p-1 rounded">
                <Image
                  src="https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg"
                  alt="Araceli Entertainment"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <span className="text-white font-serif font-bold text-lg tracking-wide uppercase">Araceli</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              A full-service production and streaming platform. We create blockbuster feature films
              and original content — at a price everyone can access.
            </p>
          </div>

          {/* Navigate Links */}
          <div>
            <h3 className="text-gold text-[10px] font-black tracking-[0.2em] uppercase mb-8">Navigate</h3>
            <ul className="space-y-4">
              {['Home', 'Browse', 'Plans & Pricing', 'About Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans Links */}
          <div>
            <h3 className="text-gold text-[10px] font-black tracking-[0.2em] uppercase mb-8">Plans</h3>
            <ul className="space-y-4">
              {['Freemium (Free)', 'Ad-Supported', 'Premium Subscription', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-gold text-[10px] font-black tracking-[0.2em] uppercase mb-8">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:Kmhomerglen@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm block truncate">
                  Kmhomerglen@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-sm">(708) 982-8863</li>
              <li className="text-gray-400 text-sm">Steger, Illinois</li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  Facebook <span className="text-[10px]">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase">
            © {currentYear} Araceli Entertainment. All rights reserved.
          </p>

          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Accessibility'].map((item) => (
              <Link key={item} href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Tagline Quote */}
        <div className="mt-12 text-center opacity-30">
          <p className="text-gold font-serif italic text-sm">
            "Birth your dreams. Dreams are ordained to be."
          </p>
        </div>
      </div>
    </footer>
  )
}
