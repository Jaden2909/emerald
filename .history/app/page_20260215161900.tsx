"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Dining from '@/components/Dining';
import Wellness from '@/components/Wellness';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#050a08] text-stone-200 antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Reduced height component */}
      <section className="py-16 px-10 flex flex-col items-center justify-center bg-[#050a08]">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl md:text-2xl font-serif italic text-[#c5a059] tracking-widest"
        >
          Service suiting your lifestyle
        </motion.p>
      </section>

      <Features />
      <Dining />
      <Wellness /> 
      
      <footer className="py-10 border-t border-white/5 text-center text-[10px] tracking-[0.4em] uppercase text-stone-600">
        © 2026 Emerald Suites
      </footer>
    </main>
  );
}