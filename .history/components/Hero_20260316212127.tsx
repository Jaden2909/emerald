"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050a08]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center z-10 cursor-pointer flex flex-col items-center"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {/* Top Green Line Text */}
        <h2 className="text-emerald-500 text-sm md:text-base uppercase tracking-[0.3em] mb-4">
          Redefining Luxury
        </h2>

        {/* Main Title - Reduced size */}
        <h1 className="text-6xl md:text-8xl font-light mb-6 text-white tracking-tight">
          Emerald Rooms
        </h1>

        {/* Divider */}
        <div className="h-[1px] w-24 bg-emerald-500 mb-8"></div>

        {/* Tagline and About Section */}
        <div className="text-lg text-gray-400 max-w-lg mx-auto italic space-y-6">
          <p>Service suiting your lifestyle!</p>
          
          {/* About lines - One line gap created by space-y or empty p */}
          <p className="not-italic font-light tracking-wide leading-relaxed">
            Experience unparalleled comfort in our meticulously designed suites. 
            Every detail is crafted to provide a serene escape from the city, 
            blending modern amenities with timeless elegance.
          </p>
        </div>
      </motion.div>

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
      
      {/* Subtle Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a08]/20 to-[#050a08] pointer-events-none"></div>
    </section>
  );
}