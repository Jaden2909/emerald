"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050a08]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center z-10 cursor-pointer"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <h2 className="text-emerald-500 uppercase tracking-widest mb-4">Redefining Luxury</h2>
        <h1 className="text-7xl md:text-9xl font-light mb-8 text-white">Emerald Suites</h1>
        <div className="h-[1px] w-24 bg-emerald-500 mx-auto mb-8"></div>
        <p className="text-lg text-gray-400 max-w-md mx-auto italic">
          A sanctuary of elegance, hidden in the heart of the city.
        </p>
      </motion.div>
      {/* Updated to use your local hero-bg.jpg */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
    </section>
  );
}