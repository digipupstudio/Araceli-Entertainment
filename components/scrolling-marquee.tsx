'use client'

const items = [
  'DREAMS ARE ORDAINED TO BE',
  'FEATURE FILMS',
  'ORIGINAL SERIES',
  'BLOCKBUSTER STREAMING',
  'FREEMIUM TV',
  'AD-SUPPORTED CONTENT',
  'DREAMS ARE ORDAINED TO BE',
  'FEATURE FILMS',
  'ORIGINAL SERIES',
  'BLOCKBUSTER STREAMING',
  'FREEMIUM TV',
  'AD-SUPPORTED CONTENT',
]

export function ScrollingMarquee() {
  return (
    <div className="relative w-full bg-gold py-3 overflow-hidden border-y border-black/10">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center mx-8">
            <span className="text-black text-[10px] font-black tracking-[0.2em] uppercase">
              {item}
            </span>
            <span className="ml-16 h-1 w-1 bg-black rotate-45 transform" />
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
