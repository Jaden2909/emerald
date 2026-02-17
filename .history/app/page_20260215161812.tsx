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
      <Navbar />
      <Hero />
      
      {/* Second Component: Shortened Intro */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="py-32 px-10 flex flex-col items-center text-center bg-[#050a08]"
      >
        <p className="max-w-3xl text-2xl md:text-3xl font-serif leading-tight italic text-[#c5a059] tracking-wide">
          "Service suiting your lifestyle"
        </p>
        <div className="h-12 w-[1px] bg-[#c5a059]/30 mx-auto mt-8"></div>
      </motion.section>

      <Features />
      <Dining />
      <Wellness /> 
      
      <footer className="py-20 border-t border-emerald-900/10 text-center text-[10px] tracking-[0.4em] uppercase text-stone-600">
        © 2026 Emerald Suites Luxury Group • London • Paris • Tokyo
      </footer>
    </main>
  );
}