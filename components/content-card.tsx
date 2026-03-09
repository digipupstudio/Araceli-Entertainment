'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
  if (featured) {
    return (
      <div className="relative w-full h-96 rounded-lg overflow-hidden group cursor-pointer">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="flex items-center gap-4">
            <Button className="bg-gold text-brand-dark hover:bg-gold-dark gap-2">
              <Play className="w-5 h-5" />
              Watch Now
            </Button>
            <Button variant="outline" className="border-gray-400 text-white hover:bg-gray-800">
              More Info
            </Button>
          </div>
          <div className="flex gap-4 mt-4 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <span className="px-2 py-1 border border-gray-400 rounded">
                {rating}
              </span>
            </span>
            <span>{year}</span>
            <span>{genre}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative group h-64 rounded-lg overflow-hidden cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 flex flex-col justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex justify-between items-start">
          <span className="px-2 py-1 bg-gold text-brand-dark text-xs font-semibold rounded">
            {genre}
          </span>
          <span className="px-2 py-1 border border-gray-300 text-white text-xs rounded">
            {rating}
          </span>
        </div>
        <div>
          <h3 className="text-white font-bold text-sm mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-300 text-xs line-clamp-2 mb-3">{description}</p>
          <Button size="sm" className="w-full bg-gold text-brand-dark hover:bg-gold-dark gap-1">
            <Play className="w-4 h-4" />
            Play
          </Button>
        </div>
      </div>
    </div>
  )
}
