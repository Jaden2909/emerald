"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RoomsPage() {
  return (
    <main className="bg-[#050a08] min-h-screen text-white relative overflow-x-hidden">
      {/* LOGO IN TOP RIGHT - NAVIGATES HOME */}
      <div className="absolute top-10 right-10 z-50">
        <Link href="/" className="group">
          <span className="text-white font-serif italic text-2xl tracking-tighter group-hover:text-[#c5a059] transition-colors">EMERALD</span>
          <div className="h-[1px] w-full bg-[#c5a059] scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></div>
        </Link>
      </div>
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/#properties" className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-12 inline-block hover:opacity-50 transition-all font-bold">
            ← Back to Collection
          </Link>
          
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-6xl md:text-8xl font-serif italic mb-8">Emerald Rooms</h1>
              <p className="text-[#c5a059] text-sm tracking-[0.4em] uppercase mb-8 font-bold">Kothanur Main Rd • Serviced Apartments</p>
              <p className="text-white/70 text-lg leading-relaxed font-light italic mb-8">
                Since 2018. Fully furnished 1 & 2 BHK units for daily, weekly, and monthly stays. Located next to Sansar Centre.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="aspect-[4/5] border border-white/10 overflow-hidden">
              <img src="/prop-suites.jpg" className="w-full h-full object-cover hover:scale-105 transition-all duration-1000" alt="Emerald Rooms" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 text-sm font-light italic">
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold not-italic">Accommodations</h3>
            <p className="text-white/60 leading-relaxed">1 & 2 BHK Fully Furnished Apartments with dedicated living and dining areas.</p>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold not-italic">Essentials</h3>
            <p className="text-white/60 leading-relaxed">High-speed Wi-Fi, 24/7 Power Backup, and Daily Housekeeping included.</p>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold not-italic">Proximity</h3>
            <p className="text-white/60 leading-relaxed">Hennur-Bagalur Airport Road, Next to Sansar Centre. Landmark: Empire Restaurant.</p>
          </div>
        </div>
      </section>
    </main>
  );
}