'use client'

import { Button } from '@/components/ui/button'
import { Play, Info } from 'lucide-react'

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  backgroundImage: string
}

export function HeroSection({ title, subtitle, description, backgroundImage }: HeroSectionProps) {
  return (
    <div
      className="relative w-full h-96 md:h-screen rounded-lg overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(26, 26, 26, 0.7), rgba(212, 175, 55, 0.3)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-12 lg:p-20 max-w-2xl">
        <div className="space-y-4 md:space-y-6">
          <div>
            <p className="text-gold text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
              Featured
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-2 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gold font-light">{subtitle}</p>
          </div>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              size="lg"
              className="bg-gold text-brand-dark hover:bg-gold-dark gap-2 w-full sm:w-auto"
            >
              <Play className="w-5 h-5" />
              Watch Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-white hover:bg-gray-800 gap-2 w-full sm:w-auto"
            >
              <Info className="w-5 h-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
