"use client";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-4 bg-gradient-to-b from-black/50 to-transparent">
      <div className="relative w-32 h-16 cursor-pointer">
        <Image 
          src="/logo.png" 
          alt="Emerald Suites Logo" 
          fill
          className="object-contain"
        />
      </div>
      
      <div className="hidden md:flex space-x-12 text-[10px] tracking-[0.4em] uppercase font-light text-white/70">
        <a href="#" className="hover:text-[#c5a059] transition-colors">Suites</a>
        <a href="#" className="hover:text-[#c5a059] transition-colors">Dining</a>
        <a href="#" className="hover:text-[#c5a059] transition-colors">Spa</a>
      </div>

      <button className="flex items-center gap-4 group text-white">
        <Menu size={24} strokeWidth={1} className="group-hover:text-[#c5a059] transition-colors" />
      </button>
    </nav>
  );
}