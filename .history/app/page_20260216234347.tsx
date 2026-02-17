"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features'; 
import Dining from '@/components/Dining';
import Wellness from '@/components/Wellness';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#050a08] min-h-screen font-serif">
      <Navbar />
      <Hero />
      
      {/* 1. THE THREE LOCATIONS (Suites, Grand, Signature) */}
      <Features />

      {/* 2. GASTRONOMY SECTION (The Verdant Table) */}
      <section className="py-32 bg-[#050a08] relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-6 block">Gastronomy</span>
            <h2 className="text-6xl md:text-8xl italic text-white mb-8">The Verdant Table</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed italic text-lg mb-12">
              Experience a symphony of seasonal flavors curated by Michelin-starred visionaries. 
              Private tasting menus served in our emerald-glass conservatory.
            </p>
            <button className="px-12 py-4 border border-[#c5a059] text-[#c5a059] uppercase text-[10px] tracking-[0.3em] hover:bg-[#c5a059] hover:text-black transition-all duration-500">
              Reserve a Table
            </button>
          </motion.div>
        </div>
        {/* Subtle background element */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* 3. CELEBRATIONS SECTION (Party Halls) */}
      <section className="pb-32 bg-[#050a08] px-6">
        <div className="max-w-7xl mx-auto border border-white/10 p-12 md:p-24 relative overflow-hidden bg-white/[0.01]">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-xl">
              <span className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-6 block">Celebrations</span>
              <h2 className="text-5xl md:text-7xl italic text-white mb-8">Emerald Mini Party Halls</h2>
              <p className="text-white/60 leading-relaxed font-light italic">
                Our versatile spaces in Byrathi and Kannur are meticulously designed for intimate gatherings, 
                corporate meetings, and boutique parties. Elegance meets convenience.
              </p>
            </div>
            <div className="text-right">
              <p className="text-[#c5a059] text-sm tracking-widest uppercase mb-2">Ideal For</p>
              <ul className="text-white/80 italic text-xl space-y-1">
                <li>Social Gatherings</li>
                <li>Corporate Stays</li>
                <li>Small Events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Dining />
      <Wellness />

      {/* 4. FINAL CONTACT & BOOKING FOOTER */}
      <footer className="bg-[#050a08] pt-32 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 mb-24">
            <div>
              <h4 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-10">Direct Reservations</h4>
              <a 
                href="tel:+917829591338" 
                className="text-5xl md:text-7xl italic text-white hover:text-[#c5a059] transition-all duration-500"
              >
                7829591338
              </a>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[#c5a059] text-[10px] tracking-widest uppercase mb-2">Primary Hub</p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Hennur-Bagalur Airport Road,<br />
                    Kothanur, Bengaluru 560077
                  </p>
                </div>
                <div>
                  <p className="text-[#c5a059] text-[10px] tracking-widest uppercase mb-2">Highlights</p>
                  <p className="text-white/60 text-xs leading-relaxed italic">
                    Free Wi-Fi • Breakfast*<br />
                    Covered Parking • 24/7 Service
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between items-start md:items-end text-left md:text-right">
              <div className="space-y-6">
                <p className="text-white/40 text-sm max-w-xs ml-auto">
                  Hospitality you can trust since 2018. Affordable & transparent pricing for short and long-term stays.
                </p>
                <div className="pt-4 border-t border-white/10 inline-block">
                  <p className="text-white italic text-lg">Emerald Signature & Emerald Grand</p>
                  <p className="text-[#c5a059] text-[10px] tracking-widest uppercase">Byrathi • Kannur • Kothanur</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#c5a059] text-[9px] tracking-[0.6em] uppercase">© 2026 Emerald Suites Luxury Group</p>
            <div className="flex gap-8 text-[9px] tracking-widest text-white/30 uppercase">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Kothanur / Bengaluru</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}