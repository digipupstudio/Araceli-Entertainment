'use client'

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
      className={`relative rounded-sm border transition-all duration-500 flex flex-col h-full ${
        highlighted
          ? 'border-gold bg-white/5 shadow-2xl shadow-gold/5 scale-105 z-10'
          : 'border-white/5 bg-white/[0.02] hover:border-white/20'
      } p-10`}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-black text-[10px] font-black px-4 py-1.5 tracking-[0.2em] uppercase rounded-sm whitespace-nowrap">
          MOST POPULAR
        </div>
      )}

      <div className="mb-12 space-y-4">
        <p className="text-gold text-[10px] font-black tracking-[0.2em] uppercase">
          {name}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-white text-xs font-bold">$</span>
          <span className="text-6xl font-serif text-white tracking-tighter">
            {price.replace('$', '')}
          </span>
          {priceDescription && (
            <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">{priceDescription}</span>
          )}
        </div>
        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">{description}</p>
      </div>

      <div className="space-y-4 mb-16 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
            <span className="h-1 w-1 bg-gold rotate-45 flex-shrink-0" />
            <span className="text-gray-400 text-[11px] font-medium tracking-wide uppercase">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        className={`w-full h-14 text-[10px] font-black tracking-[0.2em] uppercase transition-all rounded-sm ${
          highlighted
            ? 'bg-gold text-black hover:bg-gold-dark'
            : name === 'Premium' ? 'bg-brand-coral hover:bg-brand-orange text-white' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
        }`}
      >
        {cta}
      </Button>
    </div>
  )
}
