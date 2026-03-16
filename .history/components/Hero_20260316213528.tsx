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
        {/* Top Green Line Text */}
        <h2 className="text-emerald-500 text-sm md:text-base uppercase tracking-[0.3em] mb-4">
          Redefining Luxury
        </h2>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-light mb-6 text-white tracking-tight">
          Emerald Rooms
        </h1>

        {/* Divider */}
        <div className="h-[1px] w-24 bg-emerald-500 mx-auto mb-8"></div>

        {/* Bottom Section: Side-by-Side Content */}
        <div className="grid md:grid-cols-12 gap-8 items-center border-t border-white/5 pt-8">
          
          {/* Left: About Paragraph */}
          <div className="md:col-span-8 text-left">
            <p className="text-lg text-gray-400 italic mb-4">
              Service suiting your lifestyle!
            </p>
            <p className="text-gray-400 font-light tracking-wide leading-relaxed text-sm md:text-base">
              Experience unparalleled comfort in our meticulously designed suites. 
              Every detail is crafted to provide a serene escape from the city, 
              blending modern amenities with timeless elegance.
            </p>
          </div>

          {/* Right: Quick Links */}
          <div className="md:col-span-4 flex flex-col space-y-3 md:border-l md:border-white/10 md:pl-8 text-left">
            <span className="text-[#c5a059] text-[10px] tracking-[0.3em] uppercase font-bold mb-2">Explore Properties</span>
            {quickLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-white/60 hover:text-[#c5a059] transition-colors font-serif italic text-lg flex items-center group"
              >
                <span className="w-0 group-hover:w-4 h-[1px] bg-[#c5a059] transition-all mr-0 group-hover:mr-2"></span>
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