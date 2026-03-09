'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PricingCardProps {
  name: string
  price: string
  priceDescription?: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export function PricingCard({
  name,
  price,
  priceDescription,
  description,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-xl border transition-all duration-300 ${
        highlighted
          ? 'border-gold bg-brand-dark shadow-lg shadow-gold/20 scale-105'
          : 'border-gray-700 bg-gray-900 hover:border-gray-600'
      } p-8 flex flex-col`}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 bg-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-bold ${highlighted ? 'text-gold' : 'text-white'}`}>
            {price}
          </span>
          {priceDescription && (
            <span className="text-gray-400 text-sm">{priceDescription}</span>
          )}
        </div>
      </div>

      <Button
        className={`w-full mb-8 transition-all ${
          highlighted
            ? 'bg-gold text-brand-dark hover:bg-gold-dark'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
      >
        {cta}
      </Button>

      <div className="space-y-4 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? 'text-gold' : 'text-gray-400'}`} />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
