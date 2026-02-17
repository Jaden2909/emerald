"use client";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 mix-blend-difference text-white"
    >
      <div className="text-2xl font-serif tracking-[0.2em] uppercase">Emerald</div>
      <div className="hidden md:flex space-x-12 text-[10px] tracking-[0.3em] uppercase font-light">
        <a href="#" className="hover:text-emerald-400 transition">The Estate</a>
        <a href="#" className="hover:text-emerald-400 transition">Residences</a>
        <a href="#" className="hover:text-emerald-400 transition">Wellness</a>
      </div>
      <button className="flex items-center gap-4 group">
        <span className="text-[10px] tracking-[0.3em] uppercase hidden md:block group-hover:pr-2 transition-all">Reserve</span>
        <Menu size={20} strokeWidth={1} />
      </button>
    </motion.nav>
  );
}