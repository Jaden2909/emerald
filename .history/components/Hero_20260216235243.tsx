"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050a08]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070" 
          className="w-full h-full object-cover opacity-40 scale-105"
          alt="Luxury Stay"
        />
      </div>
      
      <div className="relative z-10 text-center px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#c5a059] text-[10px] tracking-[1em] uppercase mb-6 block"
        >
          Hospitality You Can Trust Since 2018
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-6xl md:text-9xl font-serif italic leading-tight mb-12"
        >
          Emerald Suites
        </motion.h1>
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-12 py-5 border border-[#c5a059] text-[#c5a059] uppercase text-[10px] tracking-[0.5em] hover:bg-[#c5a059] hover:text-black transition-all duration-500"
        >
          Book Your Stay
        </motion.button>
      </div>
    </section>
  );
}