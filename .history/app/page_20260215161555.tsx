"use client"; // Added this to the top for motion components
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
      
      {/* Intro Quote - Fixed the placeholder issue */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="py-60 px-10 flex flex-col items-center text-center"
      >
        <p className="max-w-3xl text-3xl md:text-5xl font-serif leading-tight italic text-stone-300">
          "A sanctuary where the whispers of luxury meet the silence of nature."
        </p>
        <div className="h-20 w-[1px] bg-emerald-900/50 mx-auto mt-12"></div>
      </motion.section>

      <Features />
      <Dining />
      <Wellness /> {/* The New Horizontal Scroll Section */}
      
      <footer className="py-20 border-t border-emerald-900/10 text-center text-[10px] tracking-[0.4em] uppercase text-stone-600">
        © 2026 Emerald Suites Luxury Group • London • Paris • Tokyo
      </footer>
    </main>
  );
}