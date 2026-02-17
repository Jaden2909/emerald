"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-gradient-to-b from-[#050a08] to-transparent">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="text-[#c5a059] tracking-[0.8em] uppercase text-xs font-bold cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Emerald
      </motion.div>

      {/* DESKTOP NAV: Hidden on mobile, visible on MD+ screens */}
      <div className="hidden md:flex gap-12 text-white/60 text-[10px] tracking-[0.4em] uppercase">
        <button onClick={() => scrollToSection('properties')} className="hover:text-[#c5a059] transition-colors">Properties</button>
        <button onClick={() => scrollToSection('celebrations')} className="hover:text-[#c5a059] transition-colors">Events</button>
        <button onClick={() => scrollToSection('wellness')} className="hover:text-[#c5a059] transition-colors">Wellness</button>
      </div>

      <button 
        onClick={() => scrollToSection('contact')}
        className="text-white border border-white/20 px-6 py-2 text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all"
      >
        Book
      </button>

      {/* MOBILE HAMBURGER: Only visible on small screens */}
      <div className="md:hidden flex flex-col gap-1 cursor-pointer">
        <span className="w-6 h-[1px] bg-[#c5a059]"></span>
        <span className="w-6 h-[1px] bg-[#c5a059]"></span>
      </div>
    </nav>
  );
}