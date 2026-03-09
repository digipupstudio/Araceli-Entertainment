'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContentCard } from '@/components/content-card'
import { contentLibrary } from '@/lib/mock-data'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const GENRES = ['ALL', 'FEATURE FILMS', 'ORIGINAL SERIES', 'FREEMIUM', 'AD-SUPPORTED', 'DRAMA', 'ACTION', 'THRILLER', 'DOCUMENTARY', 'SCI-FI', 'COMEDY']

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('ALL')

  const filteredContent = contentLibrary.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === 'ALL' || item.genre.toUpperCase() === selectedGenre || (selectedGenre === 'ORIGINAL SERIES' && item.featured)
    return matchesSearch && matchesGenre
  })

  // Large featured item for the bento layout
  const featuredItem = filteredContent[0]
  const otherItems = filteredContent.slice(1)

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-16 space-y-4">
            <p className="text-gold text-[10px] font-black tracking-[0.3em] uppercase">
              Content Library
            </p>
            <h1 className="text-5xl sm:text-6xl font-serif text-white">
              Explore <span className="italic-gold">All Content</span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="mb-10 relative max-w-xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
            <Input
              type="text"
              placeholder="Search films, series, genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 bg-white/5 border-white/10 text-white placeholder-gray-600 rounded-sm focus:border-gold/50 focus:ring-0 text-sm font-medium tracking-wide"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Genre Filters */}
          <div className="mb-16">
            <div className="flex flex-wrap gap-2">
              {GENRES.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase border transition-all ${
                    selectedGenre === genre
                      ? 'border-gold text-gold bg-gold/5'
                      : 'border-white/5 text-gray-500 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Bento-style Content Grid */}
          {filteredContent.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
              {/* Featured Large Card */}
              {featuredItem && (
                <div className="lg:col-span-8 lg:row-span-2">
                  <div className="group relative h-full min-h-[500px] rounded-sm overflow-hidden bg-purple-900 border border-white/5 hover:border-gold/50 transition-all duration-500 shadow-2xl">
                    <img
                      src={featuredItem.image}
                      alt={featuredItem.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[9px] font-black tracking-widest uppercase text-white rounded-sm">
                        ORIGINAL
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-8 space-y-2">
                      <h2 className="text-3xl font-bold text-white tracking-[0.1em] uppercase">
                        {featuredItem.title}
                      </h2>
                      <p className="text-xs text-gray-300 font-bold tracking-widest uppercase flex items-center gap-3">
                        {featuredItem.genre} • 2h 14m • Season 2 Now Streaming
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Smaller Cards Grid */}
              <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {otherItems.slice(0, 2).map((item, idx) => (
                   <div key={item.id} className="group relative aspect-video lg:aspect-auto lg:h-[240px] rounded-sm overflow-hidden bg-blue-900 border border-white/5 hover:border-gold/50 transition-all duration-500 shadow-2xl">
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-0.5 bg-gold text-black text-[8px] font-black tracking-widest uppercase rounded-sm">
                        {idx % 2 === 0 ? 'FREE' : 'NEW'}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4 space-y-1">
                      <h3 className="text-sm font-bold text-white tracking-[0.1em] uppercase">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                        {item.genre} • 1h 58m
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Remaining Cards in Standard Grid Row */}
              <div className="lg:col-span-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                 {otherItems.slice(2).map((item, idx) => (
                   <div key={item.id} className="group relative aspect-video rounded-sm overflow-hidden bg-gray-900 border border-white/5 hover:border-gold/50 transition-all duration-500 shadow-2xl">
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-0.5 border border-white/20 bg-white/5 text-white text-[8px] font-black tracking-widest uppercase rounded-sm backdrop-blur-sm">
                        {idx % 2 === 0 ? 'ORIGINAL' : 'FREE'}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4 space-y-1">
                      <h3 className="text-sm font-bold text-white tracking-[0.1em] uppercase">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                        {item.genre} • 2h 12m
                      </p>
                    </div>
                  </div>
                 ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-40 bg-white/5 border border-white/10 rounded-sm">
              <p className="text-gray-400 text-lg mb-4 font-light">No content matches your search.</p>
              <Button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedGenre('ALL')
                }}
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-black tracking-widest uppercase text-xs font-bold px-8 h-12 transition-all"
              >
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Bottom CTA (Screenshot 11) */}
          <section className="py-24 border-t border-white/5 mt-20 text-center space-y-8 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-brand-coral/5 to-transparent pointer-events-none" />
             <h2 className="text-4xl sm:text-5xl font-serif text-white relative z-10">
                Want <span className="italic-gold">Full Access?</span>
             </h2>
             <p className="text-gray-400 text-lg font-light max-w-xl mx-auto relative z-10">
                Unlock every title, every season, every original — no ads.
             </p>
             <Link href="/pricing" className="inline-block relative z-10">
                <Button className="bg-gold hover:bg-gold-dark text-black px-12 h-14 text-xs font-bold tracking-widest uppercase transition-all shadow-xl shadow-gold/10">
                  Choose a Plan
                </Button>
             </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
