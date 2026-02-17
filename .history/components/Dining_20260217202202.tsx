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
          <span className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold">Culinary Care</span>
          <h2 className="text-6xl md:text-8xl font-serif italic text-white mb-8">In-Suite Dining</h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed italic text-lg mb-12">
            Experience the comfort of home with our premium kitchen facilities and localized room service. 
            Freshly prepared breakfast and curated local flavors delivered directly to your sanctuary.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[#c5a059] text-[10px] tracking-[0.3em] uppercase font-bold">
            <span>Complimentary Breakfast*</span>
            <span className="text-white/20">|</span>
            <span>Fully Equipped Kitchens</span>
            <span className="text-white/20">|</span>
            <span>24/7 Room Service</span>
          </div>
        </motion.div>
      </div>
      {/* Visual background flare to maintain the "Nice Layout" */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}