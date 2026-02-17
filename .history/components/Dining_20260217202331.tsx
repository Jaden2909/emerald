"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Dining() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070" 
          alt="Fine Dining" 
          className="w-full h-[120%] object-cover brightness-50"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-emerald-500 text-xs tracking-[0.5em] uppercase block mb-4"
        >
          Gastronomy
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 italic text-white">
          The Verdant Table
        </h2>
        <p className="max-w-xl mx-auto text-stone-300 font-light leading-loose text-sm tracking-wide">
          Experience a symphony of seasonal flavors curated by Michelin-starred visionaries. 
          Private tasting menus served in our emerald-glass conservatory.
        </p>
        <button className="mt-10 px-8 py-3 border border-white/20 hover:border-emerald-500 transition-colors text-[10px] uppercase tracking-[0.3em] text-white">
          Reserve a Table
        </button>
      </div>
    </section>
  );
}