import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-32 text-center space-y-8 relative overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none" />

           <div className="max-w-4xl mx-auto space-y-6 relative z-10">
              <p className="text-gold text-[10px] font-black tracking-[0.3em] uppercase">
                Our Story
              </p>
              <h1 className="text-6xl sm:text-7xl font-serif text-white">
                More Than a <span className="italic-gold">Streaming Platform.</span>
              </h1>
              <p className="text-gray-500 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                Araceli Entertainment is a movement — built on the belief that extraordinary
                storytelling should be accessible to everyone.
              </p>
           </div>
        </section>

        {/* Who We Are Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            {/* Left side: Graphic/Image stack */}
            <div className="relative">
              <div className="aspect-square bg-purple-900/30 rounded-sm relative overflow-hidden border border-white/5 shadow-2xl">
                 <Image
                    src="https://images.pexels.com/photos/32610376/pexels-photo-32610376.jpeg"
                    alt="Production Studio"
                    fill
                    className="object-cover opacity-60"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-sm shadow-2xl flex items-center justify-center">
                      <Image
                        src="https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg"
                        alt="Araceli"
                        width={100}
                        height={100}
                        className="opacity-80"
                      />
                   </div>
                 </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-1/2 aspect-square bg-gold/5 backdrop-blur-sm border border-gold/20 rounded-sm p-8 flex flex-col justify-end shadow-2xl">
                 <p className="text-gold font-serif text-4xl">Est.</p>
                 <p className="text-gold font-serif text-6xl font-bold">2024</p>
                 <p className="text-[10px] text-gold font-black tracking-widest uppercase mt-2">Steger, Illinois</p>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-gold text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-gold" />
                  Who We Are
                </p>
                <h2 className="text-5xl font-serif text-white leading-tight">
                  A Full-Service <span className="italic-gold">Production & Streaming</span> Company
                </h2>
              </div>

              <div className="space-y-6 text-gray-400 text-base font-light leading-relaxed">
                <p>
                  Araceli Entertainment is not just a streaming platform — we are a full-service production house.
                  We create feature films, blockbuster content, and original series, then deliver them directly
                  to audiences at a price that's truly competitive.
                </p>
                <p>
                  We believe the major players have priced out the everyday viewer. We built Araceli to change
                  that — offering subscription, ad-supported, and completely free Freemium tiers so that no
                  one gets left behind.
                </p>
              </div>

              {/* Founder Quote */}
              <div className="p-10 bg-gold/5 border-l-2 border-gold rounded-sm space-y-4">
                <p className="text-white font-serif italic text-xl leading-relaxed">
                  "Birth your dreams. Dreams are ordained to be. Trust your pathway. Your tomorrow is built
                  upon the preparation of today."
                </p>
                <p className="text-gold text-[10px] font-black tracking-[0.2em] uppercase">
                  — Dr. Kevin McLemore, Founder
                </p>
              </div>

              <p className="text-gray-500 text-sm font-light italic">
                From the streets of Steger, Illinois to screens across the nation — Araceli is proof that
                vision, preparation, and conviction can build something that lasts.
              </p>
            </div>
          </div>
        </section>

        {/* Features/Values Cards */}
        <section className="px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { id: '01', title: 'ACCESSIBILITY FIRST', desc: 'Three-tier pricing — including a completely free option — because great content shouldn\'t have a gatekeeping price tag.' },
              { id: '02', title: 'ORIGINAL VISION', desc: 'We don\'t just license content — we create it. Every feature film and original series is produced in-house from the ground up.' },
              { id: '03', title: 'DREAMS ORDAINED', desc: 'Araceli is built on the philosophy that your pathway is worth trusting. We champion stories that reflect that truth.' },
            ].map((card) => (
              <div key={card.id} className="p-10 bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all group space-y-6 rounded-sm">
                <p className="text-gold font-serif text-4xl opacity-40 group-hover:opacity-100 transition-opacity">{card.id}</p>
                <h3 className="text-white text-[10px] font-black tracking-[0.2em] uppercase">{card.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Founder Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-32 bg-white/[0.01] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
             <div className="space-y-4 mb-20">
                <p className="text-gold text-[10px] font-black tracking-[0.3em] uppercase">Leadership</p>
                <h2 className="text-5xl font-serif text-white">
                  Meet the <span className="italic-gold">Founder</span>
                </h2>
             </div>

             <div className="grid lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-4 space-y-8">
                   <div className="aspect-[4/5] bg-brand-dark border border-white/5 rounded-sm flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
                      <Image
                        src="https://images.pexels.com/photos/33290973/pexels-photo-33290973.jpeg"
                        alt="Dr. Kevin McLemore"
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      <div className="relative z-10 p-8 space-y-4">
                        <div className="w-16 h-16 rounded-full border border-gold/30 mx-auto flex items-center justify-center text-gold font-serif text-xl font-bold backdrop-blur-sm bg-black/20">
                          KM
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-white text-xl font-bold tracking-tight">Dr. Kevin McLemore</h3>
                          <p className="text-gold text-[10px] font-black tracking-widest uppercase">Founder & CEO</p>
                        </div>
                        <div className="space-y-1 pt-2 opacity-60">
                          <p className="text-white text-[9px] font-bold tracking-widest uppercase truncate">Kmhomerglen@gmail.com</p>
                          <p className="text-white text-[9px] font-bold tracking-widest uppercase">(708) 982-8863</p>
                        </div>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/5 text-[10px] font-black tracking-widest uppercase h-14">
                        Connect on Facebook →
                      </Button>
                      <Button className="flex-1 bg-gold text-black hover:bg-gold-dark text-[10px] font-black tracking-widest uppercase h-14">
                        Join Araceli
                      </Button>
                   </div>
                </div>

                <div className="lg:col-span-8 space-y-10 text-gray-400 font-light text-lg leading-relaxed">
                   <p>
                    Dr. Kevin McLemore is the visionary founder behind Araceli Entertainment — a full-service production
                    and streaming company born from the conviction that powerful storytelling should reach everyone,
                    not just those who can afford premium subscriptions.
                   </p>
                   <p>
                    Rooted in Steger, Illinois, Dr. McLemore built Araceli on the philosophy that dreams are not
                    accidents — they are ordained. With a background spanning film production, content strategy,
                    and media distribution, he is personally invested in every frame of content that carries
                    the Araceli name.
                   </p>
                   <p>
                    "Your tomorrow is built upon the preparation of today." That principle guides every decision
                    at Araceli — from the stories we choose to the price points we set.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-32 text-center space-y-12 bg-gradient-to-t from-brand-coral/5 to-transparent relative overflow-hidden">
           <div className="space-y-4 relative z-10">
              <h2 className="text-6xl font-serif text-white">
                <span className="italic-gold">Your</span> Story Starts Here.
              </h2>
              <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
                Stream blockbuster content. Support independent production. Start free today.
              </p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/pricing">
                <Button className="bg-brand-coral hover:bg-brand-orange text-white px-10 h-14 text-xs font-black tracking-widest uppercase transition-all shadow-xl shadow-brand-coral/10">
                  View Plans
                </Button>
              </Link>
              <Link href="/browse">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10 h-14 text-xs font-black tracking-widest uppercase transition-all">
                  Browse Content
                </Button>
              </Link>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
