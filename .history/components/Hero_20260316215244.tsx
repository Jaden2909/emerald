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
        <h2 className="text-emerald-500 text-sm md:text-base uppercase tracking-[0.3em] mb-4">
          Redefining Luxury
        </h2>

        <h1 className="text-6xl md:text-8xl font-light mb-6 text-white tracking-tight">
          Emerald Rooms
        </h1>

        {/* Centered Bold Tagline */}
        <p className="text-white text-lg md:text-xl font-bold italic mb-8 tracking-wide">
          Service suiting your lifestyle!
        </p>

        <div className="h-[1px] w-24 bg-emerald-500 mx-auto mb-12"></div>

        {/* Bottom Section: Side-by-Side */}
        <div className="grid md:grid-cols-12 gap-12 items-start pt-4">
          
          {/* Left: About Text - Enhanced Readability */}
          <div className="md:col-span-8 text-left">
            <p className="text-gray-200 font-normal tracking-wide leading-loose text-base md:text-lg bg-black/20 p-4 rounded-sm border-l border-emerald-500/30">
              Experience unparalleled comfort in our meticulously designed suites. 
              Every detail is crafted to provide a serene escape from the city, 
              blending modern amenities with timeless elegance.
            </p>
          </div>

          {/* Right: Quick Links */}
          <div className="md:col-span-4 flex flex-col space-y-4 md:border-l md:border-white/10 md:pl-10 text-left">
            <span className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-black mb-2 opacity-80">Explore Properties</span>
            {quickLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-white/70 hover:text-emerald-400 transition-all font-serif italic text-xl flex items-center group"
              >
                <span className="w-0 group-hover:w-6 h-[1px] bg-emerald-500 transition-all mr-0 group-hover:mr-3"></span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
    </section>
  );
}