"use client";
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Dining from '@/components/Dining';
import Wellness from '@/components/Wellness';

export default function Home() {
  return (
    <main className="bg-[#050a08] text-stone-200 antialiased overflow-x-hidden">
      {/* 1. Navigation Overlay */}
      <Navbar />

      {/* 2. Hero Section: Cinematic Entrance */}
      <Hero />
      
      {/* 3. The Tagline: Ultra-short, high-luxury spacing */}
      <section className="h-[25vh] flex items-center justify-center bg-[#050a08]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl font-serif italic text-[#c5a059] tracking-[0.4em] uppercase opacity-90">
            Service suiting your lifestyle
          </p>
          <div className="h-[1px] w-12 bg-[#c5a059]/40 mx-auto mt-6"></div>
        </motion.div>
      </section>

      {/* 4. Rooms/Suites Grid */}
      <Features />

      {/* 5. Parallax Dining Experience */}
      <Dining />

      {/* 6. The Sanctuary: Fixed 1:1 Ratio Horizontal Scroll */}
      <Wellness /> 
      
      {/* 7. Footer: Minimalist Branding */}
      <footer className="py-20 bg-[#050a08] border-t border-white/5 flex flex-col items-center justify-center space-y-6">
        <div className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase">
          Emerald Suites Luxury Group
        </div>
        <div className="flex space-x-8 text-[9px] tracking-[0.2em] text-stone-500 uppercase">
          <span>London</span>
          <span>Paris</span>
          <span>Tokyo</span>
          <span>Dubai</span>
        </div>
        <div className="pt-10 text-[8px] text-stone-700 tracking-widest uppercase">
          © 2026 Private Residences. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}