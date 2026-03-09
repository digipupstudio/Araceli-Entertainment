'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark border-b border-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/placeholder-logo.svg"
              alt="Araceli Entertainment"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="hidden sm:inline text-white font-semibold text-lg">Araceli</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/browse" className="text-gray-300 hover:text-gold transition-colors">
              Browse
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-gold transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-gold transition-colors">
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/pricing">
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-brand-dark transition-all"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/pricing">
              <Button className="bg-gold text-brand-dark hover:bg-gold-dark transition-colors">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
