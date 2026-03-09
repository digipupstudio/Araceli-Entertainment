'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="bg-black p-1 rounded">
              <Image
                src="https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg"
                alt="Araceli Entertainment"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <span className="hidden sm:inline text-white font-serif font-bold text-xl tracking-wide uppercase">Araceli</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-xs font-bold text-gray-300 hover:text-gold transition-colors tracking-widest uppercase">
              Home
            </Link>
            <Link href="/browse" className="text-xs font-bold text-gray-300 hover:text-gold transition-colors tracking-widest uppercase">
              Browse
            </Link>
            <Link href="/pricing" className="text-xs font-bold text-gray-300 hover:text-gold transition-colors tracking-widest uppercase">
              Plans
            </Link>
            <Link href="/about" className="text-xs font-bold text-gray-300 hover:text-gold transition-colors tracking-widest uppercase">
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/pricing">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-xs font-bold tracking-widest uppercase transition-all px-6"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/pricing">
              <Button className="bg-brand-coral hover:bg-brand-orange text-white text-xs font-bold tracking-widest uppercase transition-colors px-6">
                Start Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
