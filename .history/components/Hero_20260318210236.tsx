"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

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
        <div className="text-center mb-20">
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
                  className="ml-2 text-emerald-500 hover:text-[#c5a059] transition-colors font-medium text-[10px] uppercase tracking-widest border-b border-emerald-500/30"
                >
                  Continue Reading
                </button>
              </p>
            </div>
          </div>

          {/* Right: 30% - Property Cards */}
          <div className="md:col-span-4 flex flex-col space-y-4 pt-10">
            <span className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-bold mb-4 opacity-60">
              Explore Properties
            </span>
            {quickLinks.map((link, i) => (
              <Link 
                key={i} 
                href={link.href}
                className="group relative p-5 border border-white/5 bg-white/[0.01] backdrop-blur-sm transition-all duration-700 hover:bg-white/[0.04] hover:border-emerald-500/20 shadow-xl"
              >
                <div className="relative z-10 flex flex-col">
                  <span className="text-white/70 group-hover:text-white font-serif italic text-xl transition-colors duration-500">
                    {link.name}
                  </span>
                  <span className="text-[9px] text-white/30 tracking-[0.2em] uppercase mt-1 group-hover:text-emerald-500/60 transition-colors">
                    {link.loc}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Full Screen About Modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050a08]/98 backdrop-blur-2xl flex items-center justify-center p-8"
          >
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="max-w-3xl w-full bg-white/[0.02] p-10 md:p-16 border border-white/10 relative overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setIsAboutOpen(false)}
                className="absolute top-8 right-8 text-white/40 hover:text-white tracking-widest text-[10px] uppercase transition-colors"
              >
                Close ✕
              </button>
              
              <h2 className="text-[#c5a059] uppercase tracking-[0.5em] text-xs mb-10 border-b border-[#c5a059]/20 pb-4 inline-block">Our Journey</h2>
              
              <div className="space-y-8 text-gray-300 font-light leading-relaxed text-lg italic">
                <p className="text-white not-italic text-2xl font-serif">Welcome to Emerald Suites</p>
                <p>Founded in 2018 with just four rooms and a strong commitment to exceptional service, Emerald Suites has grown into a trusted name in hospitality across Bangalore. What began as a small initiative driven by passion and personalized care has now expanded into a network of four premium properties, offering over 70 well-appointed rooms in and around the city.</p>
                <p>At Emerald Suites, we believe that true hospitality goes beyond providing a place to stay—it’s about creating comfort, convenience, and memorable experiences for every guest. Our journey of growth reflects the trust and satisfaction of our guests, who continue to choose us for our quality service and warm, welcoming atmosphere.</p>
                <p>As we move forward, our vision is to take the Emerald experience beyond Bangalore and establish Emerald Rooms across the world, delivering the same excellence everywhere we go.</p>
                <p className="text-emerald-500 pt-6 font-normal not-italic tracking-[0.3em] uppercase text-xs">Emerald Suites – Service Suiting Your Lifestyle.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Image - Restored to Opacity 30 */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
    </section>
  );
}