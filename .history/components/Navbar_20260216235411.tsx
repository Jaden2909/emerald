"use client";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-4 bg-gradient-to-b from-black/50 to-transparent">
      <div className="relative w-32 h-16 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <Image 
          src="/logo.png" 
          alt="Emerald Suites Logo" 
          fill
          className="object-contain"
        />
      </div>
      
      <div className="hidden md:flex space-x-12 text-[10px] tracking-[0.4em] uppercase font-light text-white/70">
        <button onClick={() => scrollToSection('properties')} className="hover:text-[#c5a059] transition-colors">Suites</button>
        <button onClick={() => scrollToSection('dining')} className="hover:text-[#c5a059] transition-colors">Dining</button>
        <button onClick={() => scrollToSection('wellness')} className="hover:text-[#c5a059] transition-colors">Spa</button>
      </div>

      {/* md:hidden makes this disappear on laptop screens */}
      <button className="flex md:hidden items-center gap-4 group text-white">
        <Menu size={24} strokeWidth={1} className="group-hover:text-[#c5a059] transition-colors" />
      </button>
    </nav>
  );
}