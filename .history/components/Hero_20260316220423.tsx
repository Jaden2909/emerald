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
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center z-10 w-full max-w-5xl px-6"
      >
        {/* Top Tagline */}
        <h2 className="text-emerald-500 text-sm md:text-base uppercase tracking-[0.3em] mb-4">
          Redefining Luxury
        </h2>

        {/* Main Title - Reduced slightly for better proportions */}
        <h1 className="text-6xl md:text-8xl font-light mb-6 text-white tracking-tight">
          Emerald Rooms
        </h1>

        {/* Center Tagline - Reverted to original styling, slightly larger size */}
        <p className="text-xl text-gray-400 italic mb-8">
          Service suiting your lifestyle!
        </p>

        {/* Divider */}
        <div className="h-[1px] w-24 bg-emerald-500 mx-auto mb-12"></div>

        {/* Bottom Section: Two Columns */}
        <div className="grid md:grid-cols-12 gap-12 items-start pt-4">
          
          {/* Left: About Text - Enhanced readability with shadowing instead of boxes */}
          <div className="md:col-span-8 text-left">
            <p className="text-gray-300 font-light tracking-wide leading-relaxed text-base md:text-lg drop-shadow-md">
              Experience unparalleled comfort in our meticulously designed suites. 
              Every detail is crafted to provide a serene escape from the city, 
              blending modern amenities with timeless elegance.
            </p>
          </div>

          {/* Right: Property Links */}
          <div className="md:col-span-4 flex flex-col space-y-4 md:border-l md:border-white/10 md:pl-10 text-left">
            <span className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-bold mb-2 opacity-80">
              Explore Properties
            </span>
            {quickLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-white/60 hover:text-emerald-500 transition-all font-serif italic text-xl flex items-center group"
              >
                <span className="w-0 group-hover:w-6 h-[1px] bg-emerald-500 transition-all mr-0 group-hover:mr-3"></span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Background Image - Clean */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
    </section>
  );
}