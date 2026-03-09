'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'

interface ContentCardProps {
  id: string
  title: string
  genre: string
  rating: string
  year: number
  image: string
  description: string
  featured?: boolean
}

export function ContentCard({ title, genre, rating, year, image, description, featured = false }: ContentCardProps) {
  return (
    <div className="group relative aspect-[2/3] rounded-sm overflow-hidden bg-gray-900 cursor-pointer border border-white/5 hover:border-gold/50 transition-all duration-500 hover:scale-[1.02] shadow-2xl">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4 space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-coral flex items-center justify-center shadow-lg shadow-brand-coral/40">
            <Play className="w-4 h-4 text-white fill-current" />
          </div>
          <div>
            <h3 className="text-white font-bold text-xs tracking-widest uppercase truncate max-w-[150px]">
              {title}
            </h3>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
              {genre} • {year}
            </p>
          </div>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-px bg-gradient-to-t from-gold/20 via-transparent to-transparent rounded-sm" />
      </div>
    </div>
  )
}
