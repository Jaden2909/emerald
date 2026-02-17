"use client";
import { motion } from "framer-motion";

export default function Dining() {
  return (
    <section className="py-32 bg-[#050a08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
      {/* Visual background flare to maintain the "Nice Layout" */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}