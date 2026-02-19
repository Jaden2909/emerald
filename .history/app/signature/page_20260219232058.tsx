"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignaturePage() {
  return (
    <main className="bg-[#050a08] min-h-screen text-white relative">
      <div className="absolute top-10 right-10 z-50">
        <Link href="/">
          <img src="/logo.png" alt="Emerald Logo" className="w-20 h-auto hover:opacity-80 transition-opacity" />
        </Link>
      </div>
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/#properties" className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-12 inline-block hover:opacity-50 transition-all font-bold">
            ← Back to Collection
          </Link>
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-6xl md:text-8xl font-serif italic mb-8">Emerald Signature</h1>
              <p className="text-[#c5a059] text-sm tracking-[0.4em] uppercase mb-8 font-bold">Kannur • Rooms & Apartments</p>
              <p className="text-white/70 text-lg leading-relaxed font-light italic mb-8">
                The peak of comfort on Hennur Airport Road. High-end interiors with easy access to the International Airport for discerning travelers.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="aspect-[4/5] border border-white/10 overflow-hidden">
              <img src="/prop-signature.jpg" className="w-full h-full object-cover" alt="Emerald Signature" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">The Experience</h3>
            <ul className="space-y-4 text-white/80 font-serif italic text-xl">
              <li>Modern High-End Interiors</li>
              <li>Proximity to International Airport</li>
              <li>Spacious Studio & BHK Layouts</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Amenities</h3>
            <ul className="space-y-4 text-white/80 font-serif italic text-xl">
              <li>Premium Soundproofing</li>
              <li>Express Check-in/out</li>
              <li>Airport Shuttle Referral</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Connectivity</h3>
            <p className="text-white/60 leading-relaxed font-light italic">
              Strategically located on the main Airport Road in Kannur. Perfect for those who value time and desire a sophisticated stay near Bangalore's aviation hub.
            </p>
          </div>
        </div>
      </section>

    <section className="py-24 bg-white/[0.02] border-y border-white/10 px-6 text-center">
  <h2 className="text-4xl font-serif italic mb-8 text-white">Ready to experience the best?</h2>
  <Link 
    href="/#contact" 
    className="inline-block border border-[#c5a059] text-[#c5a059] px-12 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#c5a059] hover:text-black transition-all"
  >
    Book Your Stay Now
  </Link>
</section>
    </main>
  );
}