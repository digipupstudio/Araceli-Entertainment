'use client'

import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import Image from 'next/image'

interface Poster {
  title: string
  image: string
}

const posters: Poster[] = [
  { title: 'BROKEN CROWNS', image: 'https://images.pexels.com/photos/32694014/pexels-photo-32694014.jpeg' },
  { title: "OCEAN'S CODE", image: 'https://images.pexels.com/photos/30704104/pexels-photo-30704104.jpeg' },
  { title: 'RED DISTRICT', image: 'https://images.pexels.com/photos/13617992/pexels-photo-13617992.jpeg' },
  { title: 'EMERALD CITY', image: 'https://images.pexels.com/photos/9695924/pexels-photo-9695924.jpeg' },
  { title: 'GOLD DUST', image: 'https://images.pexels.com/photos/31361935/pexels-photo-31361935.jpeg' },
  { title: 'VIOLET HOUR', image: 'https://images.pexels.com/photos/7651032/pexels-photo-7651032.jpeg' },
  { title: 'MIDNIGHT REIGN', image: 'https://images.pexels.com/photos/7900581/pexels-photo-7900581.jpeg' },
  { title: 'EMBER FALLS', image: 'https://images.pexels.com/photos/32610376/pexels-photo-32610376.jpeg' },
  { title: 'TEAL STORM', image: 'https://images.pexels.com/photos/11320433/pexels-photo-11320433.jpeg' },
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
              className={`group relative aspect-[2/3] rounded-sm overflow-hidden border border-white/5 transition-all duration-500 hover:scale-105 hover:border-gold/50 shadow-2xl bg-gray-900 ${idx % 2 === 1 ? 'translate-y-8' : ''}`}
            >
              <Image
                src={poster.image}
                alt={poster.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
              <div className="absolute inset-0 flex items-end p-3">
                <p className="text-[9px] font-bold text-white tracking-[0.2em] uppercase leading-tight truncate">
                  {poster.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
