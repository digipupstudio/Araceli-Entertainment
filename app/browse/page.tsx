'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContentCard } from '@/components/content-card'
import { contentLibrary } from '@/lib/mock-data'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, X } from 'lucide-react'

const GENRES = ['All', 'Drama', 'Sci-Fi', 'Thriller', 'Romance', 'Adventure', 'Comedy', 'Documentary']

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All')

  const filteredContent = contentLibrary.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === 'All' || item.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

      <main className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Browse Content</h1>
            <p className="text-gray-400">Explore our complete library of films and shows</p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            <Input
              type="text"
              placeholder="Search by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Genre Filter */}
          <div className="mb-12">
            <h3 className="text-white font-semibold mb-4">Filter by Genre</h3>
            <div className="flex flex-wrap gap-3">
              {GENRES.map((genre) => (
                <Button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`transition-all ${
                    selectedGenre === genre
                      ? 'bg-gold text-brand-dark hover:bg-gold-dark'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <p className="text-gray-400 text-sm">
              Showing {filteredContent.length} of {contentLibrary.length} results
            </p>
          </div>

          {/* Content Grid */}
          {filteredContent.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredContent.map((content) => (
                <ContentCard key={content.id} {...content} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-2">No content found</p>
              <p className="text-gray-500 text-sm">
                Try adjusting your search or filters
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedGenre('All')
                }}
                variant="outline"
                className="mt-6 border-gold text-gold hover:bg-gold hover:text-brand-dark"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
