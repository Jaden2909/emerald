"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Toggle Scroll Lock
  useEffect(() => {
    if (isAboutOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isAboutOpen]);

  // Listen for Navbar "About" click
  useEffect(() => {
    const handleOpen = () => setIsAboutOpen(true);
    window.addEventListener('openAbout', handleOpen);
    return () => window.removeEventListener('openAbout', handleOpen);
  }, []);

  const quickLinks = [
    { name: "Emerald Suites", loc: "Kothanur", href: "/rooms" },
    { name: "Emerald Grand", loc: "Byrathi", href: "/grand" },
    { name: "Emerald Signature", loc: "Kannur, Bangalore", href: "/signature" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050a08]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="z-10 w-full max-w-7xl px-10"
      >
        {/* Top Tagline - Centered */}
        <div className="text-center mb-16">
          <h2 className="text-emerald-500 text-sm md:text-base uppercase tracking-[0.5em] font-medium">
            Hospitality Redefined
          </h2>
        </div>

        {/* Main Content Grid: 70/30 Split */}
        <div className="grid md:grid-cols-12 gap-16 items-start">
          
          {/* Left: 70% - Text Content */}
          <div className="md:col-span-8 text-left space-y-8">
            <motion.h1 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-7xl md:text-9xl font-light text-white tracking-tighter"
            >
              Emerald Rooms
            </motion.h1>

            <p className="text-xl text-gray-300 italic">
              Service suiting your lifestyle!
            </p>

            <div className="h-[1px] w-24 bg-emerald-500/50"></div>

            <div className="max-w-2xl">
              <p className="text-gray-300 font-light tracking-wide leading-relaxed text-lg">
                Founded in 2018 with just four rooms and a strong commitment to exceptional service, 
                Emerald Suites has grown into a trusted name in hospitality across Bangalore. 
                What began as a small initiative driven by passion...
                <button 
                  onClick={() => setIsAboutOpen(true)}
                  className="ml-2 text-emerald-500 hover:text-white transition-colors font-medium text-sm uppercase tracking-widest"
                >
                  [ Continue Reading ]
                </button>
              </p>
            </div>
          </div>

          {/* Right: 30% - Property Cards */}
          <div className="md:col-span-4 flex flex-col space-y-6 pt-12">
            <span className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-bold mb-4 opacity-60">
              Explore Properties
            </span>
            {quickLinks.map((link, i) => (
              <Link 
                key={i} 
                href={link.href}
                className="group relative p-6 border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05] hover:border-emerald-500/30 overflow-hidden shadow-2xl"
              >
                <div className="relative z-10">
                  <span className="block text-white/80 group-hover:text-emerald-400 font-serif italic text-xl transition-colors duration-500">
                    {link.name}
                  </span>
                  <span className="block text-[10px] text-white/30 tracking-[0.2em] uppercase mt-1">
                    {link.loc}
                  </span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-emerald-500/10 to-transparent pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* About Modal Overlay */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAboutOpen(false)} // Close on click outside
            className="fixed inset-0 z-[100] bg-[#050a08]/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
              className="max-w-3xl w-full bg-white/[0.03] p-12 border border-white/10 relative cursor-default"
            >
              <button 
                onClick={() => setIsAboutOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white tracking-widest text-[10px] uppercase transition-colors"
              >
                Close ✕
              </button>
              <h2 className="text-[#c5a059] uppercase tracking-[0.5em] text-xs mb-8">Our Journey</h2>
              <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg italic">
                <p>Welcome to Emerald Suites</p>
                <p>Founded in 2018 with just four rooms and a strong commitment to exceptional service, Emerald Suites has grown into a trusted name in hospitality across Bangalore. What began as a small initiative driven by passion and personalized care has now expanded into a network of four premium properties, offering over 70 well-appointed rooms in and around the city.</p>
                <p>At Emerald Suites, we believe that true hospitality goes beyond providing a place to stay—it’s about creating comfort, convenience, and memorable experiences for every guest. Our journey of growth reflects the trust and satisfaction of our guests, who continue to choose us for our quality service and warm, welcoming atmosphere.</p>
                <p>As we move forward, our vision is to take the Emerald experience beyond Bangalore and establish Emerald Rooms across the world, delivering the same excellence everywhere we go.</p>
                <p className="text-emerald-500 pt-4 font-normal not-italic tracking-[0.2em] uppercase text-sm">Emerald Suites – Service Suiting Your Lifestyle.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
    </section>
  );
}