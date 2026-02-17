"use client";
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Dining from '@/components/Dining';
import Wellness from '@/components/Wellness';

export default function Home() {
  return (
    /* We use 'block' here to ensure the vertical flow is natural */
    <main className="relative block w-full bg-[#050a08] text-stone-200 antialiased">
      <Navbar />

      <Hero />
      
      <section className="h-[20vh] flex items-center justify-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg font-serif italic text-[#c5a059] tracking-[0.4em] uppercase"
        >
          Service suiting your lifestyle
        </motion.p>
      </section>

      <Features />
      
      <Dining />
      
      {/* This component will now occupy 600vh of vertical scroll space 
          but will remain 'stuck' to the camera lens. */}
      <Wellness /> 
      
      <footer className="relative z-10 py-20 bg-[#050a08] border-t border-white/5 text-center">
        <div className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase">
          Emerald Suites Luxury Group
        </div>
      </footer>
    </main>
  );
}