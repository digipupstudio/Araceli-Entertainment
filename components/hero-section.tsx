'use client'

import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import Image from 'next/image'

interface Poster {
  title: string
  color: string
}

const posters: Poster[] = [
  { title: 'BROKEN CROWNS', color: 'bg-purple-900' },
  { title: "OCEAN'S CODE", color: 'bg-blue-800' },
  { title: 'RED DISTRICT', color: 'bg-red-900' },
  { title: 'EMERALD CITY', color: 'bg-green-900' },
  { title: 'GOLD DUST', color: 'bg-yellow-700' },
  { title: 'VIOLET HOUR', color: 'bg-purple-800' },
  { title: 'MIDNIGHT REIGN', color: 'bg-indigo-900' },
  { title: 'EMBER FALLS', color: 'bg-orange-900' },
  { title: 'TEAL STORM', color: 'bg-teal-900' },
]

export function HeroSection() {
  return (
    <div className="relative w-full min-h-[90vh] bg-black overflow-hidden flex items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-900/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-coral/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
        {/* Left Side: Content */}
        <div className="space-y-8 max-w-xl">
          <div className="space-y-4">
            <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase flex items-center gap-4">
              <span className="h-[1px] w-8 bg-gold" />
              Full-service Production & Streaming
            </p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif text-white leading-tight">
              Birth <br />
              <span className="italic-gold">Your</span> <br />
              Dreams.
            </h1>
          </div>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light max-w-md">
            Araceli Entertainment — blockbuster films and original streaming content,
            delivered at a fraction of the cost. Choose your plan: subscription,
            ad-supported, or free scheduled programming.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-brand-coral hover:bg-brand-orange text-white gap-3 px-8 h-14 text-sm font-bold tracking-widest uppercase transition-all shadow-lg shadow-brand-coral/20"
            >
              <Play className="w-5 h-5 fill-current" />
              Browse Content
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 h-14 text-sm font-bold tracking-widest uppercase transition-all"
            >
              View Plans
            </Button>
          </div>

          {/* Feature Icons Bottom Left (Desktop only) */}
          <div className="hidden lg:flex gap-12 pt-12 items-center">
            <div className="text-center space-y-1">
              <p className="text-gold font-bold text-xl tracking-tight">4K</p>
              <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Ultra HD</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-gold font-bold text-xl tracking-tight">3</p>
              <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Plan Tiers</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-gold font-bold text-xl tracking-tight">∞</p>
              <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Original Content</p>
            </div>
          </div>
        </div>

        {/* Right Side: Poster Grid */}
        <div className="relative hidden lg:grid grid-cols-3 gap-4">
          {posters.map((poster, idx) => (
            <div
              key={idx}
              className={`group relative aspect-[2/3] rounded-sm overflow-hidden border border-white/5 transition-all duration-500 hover:scale-105 hover:border-gold/50 shadow-2xl ${poster.color} ${idx % 2 === 1 ? 'translate-y-8' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
              <div className="absolute inset-0 flex items-end p-3">
                <p className="text-[9px] font-bold text-white tracking-[0.2em] uppercase leading-tight truncate">
                  {poster.title}
                </p>
              </div>
            </div>
          ))}
          {/* Decorative element (icon bottom right) matches screenshot but is also in left-side list above */}
        </div>
      </div>
    </div>
  )
}
