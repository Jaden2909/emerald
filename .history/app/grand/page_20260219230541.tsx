"use client";
import Navbar from '@/components/Navbar';
import { motion } from "framer-motion";
import Link from "next/link";

export default function GrandPage() {
  return (
    <main className="bg-[#050a08] min-h-screen text-white">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
<Link href="/#properties" className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-12 inline-block hover:opacity-50 transition-all font-bold">
  ← Back to Collection
</Link>
          
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-serif italic mb-8">Emerald Grand</h1>
              <p className="text-[#c5a059] text-sm tracking-[0.4em] uppercase mb-8 font-bold">Byrathi • Rooms & Suites</p>
              <p className="text-white/70 text-lg leading-relaxed font-light italic mb-8">
                Corporate-grade luxury situated in the heart of Byrathi. Designed for business travelers 
                and premium family stays who demand excellence and privacy.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] border border-white/10 overflow-hidden"
            >
              <img src="/prop-grand.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Emerald Grand" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Accommodations</h3>
            <ul className="space-y-4 text-white/80 font-serif italic text-xl">
              <li>Luxury Executive Rooms</li>
              <li>Premium Family Suites</li>
              <li>Boutique Party Hall Access</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Premium Services</h3>
            <ul className="space-y-4 text-white/80 font-serif italic text-xl">
              <li>Corporate Meeting Spaces</li>
              <li>24/7 Concierge</li>
              <li>Near Faith Diagnostic</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Location</h3>
            <p className="text-white/60 leading-relaxed font-light italic">
              457/16 SIACS Road, Off Hennur Airport Road. Located behind the Bescom Office in Byrathi. 
              A quiet, prestigious neighborhood for discerning guests.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}