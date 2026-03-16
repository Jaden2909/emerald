"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const quickLinks = [
    { name: "Suites", href: "/rooms" },
    { name: "Grand", href: "/grand" },
    { name: "Signature", href: "/signature" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050a08]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 w-full max-w-5xl px-6"
      >
        {/* Top Tagline */}
        <h2 className="text-emerald-500 text-sm md:text-base uppercase tracking-[0.3em] mb-4">
          Redefining Luxury
        </h2>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-light mb-6 text-white tracking-tight">
          Emerald Rooms
        </h1>

        {/* Center Tagline - Color matched to about paragraph */}
        <p className="text-xl text-gray-300 italic mb-8">
          Service suiting your lifestyle!
        </p>

        {/* Divider */}
        <div className="h-[1px] w-24 bg-emerald-500 mx-auto mb-12"></div>

        {/* Bottom Section: Two Columns */}
        <div className="grid md:grid-cols-12 gap-12 items-start pt-4">
          
          {/* Left: About Text */}
          <div className="md:col-span-8 text-left">
            <p className="text-gray-300 font-light tracking-wide leading-relaxed text-base md:text-lg drop-shadow-md">
              Experience unparalleled comfort in our meticulously designed suites. 
              Every detail is crafted to provide a serene escape from the city, 
              blending modern amenities with timeless elegance.
            </p>
          </div>

          {/* Right: Property Links - Subtler & Slower Animation */}
          <div className="md:col-span-4 flex flex-col space-y-4 md:border-l md:border-white/10 md:pl-10 text-left">
            <span className="text-[#c5a059] text-[12px] tracking-[0.4em] uppercase font-bold mb-2 opacity-80">
              Explore Properties
            </span>
            {quickLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-white/50 hover:text-emerald-500 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] font-serif italic text-xl flex items-center group"
              >
                {/* Line animation: Slower and softer width transition */}
                <span className="w-0 group-hover:w-8 h-[1px] bg-emerald-500/50 transition-all duration-1000 ease-in-out mr-0 group-hover:mr-4"></span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
    </section>
  );
}