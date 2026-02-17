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
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=2070"
          alt="In-Suite Dining"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold">
            Culinary Care
          </span>
          <h2 className="text-6xl md:text-8xl font-serif italic text-white mb-8">
            In-Suite Comfort
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed italic text-lg mb-12">
            Experience the convenience of home with fully equipped kitchens and 
            personalized room service. Enjoy complimentary breakfast and local 
            flavors served in the privacy of your own suite.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-4 border border-[#c5a059] text-[#c5a059] uppercase text-[10px] tracking-[0.3em] hover:bg-[#c5a059] hover:text-black transition-all duration-500"
          >
            Inquire About Dining
          </button>
        </motion.div>
      </div>
    </section>
  );
}