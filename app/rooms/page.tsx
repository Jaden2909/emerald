"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RoomsPage() {
  return (
    <main className="bg-[#050a08] min-h-screen text-white relative">
      <div className="absolute top-10 right-10 z-50">
        <Link href="/">
          <img src="/logo.png" alt="Emerald Logo" className="w-20 h-auto hover:opacity-80 transition-opacity" />
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
                Since 2018. Fully furnished 1 & 2 BHK units for daily, weekly, and monthly stays. Located next to Sansar Centre, offering the perfect balance of accessibility and serenity.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="aspect-[4/5] border border-white/10 overflow-hidden">
              <img src="/prop-suites.jpg" className="w-full h-full object-cover" alt="Emerald Rooms" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Accommodations</h3>
            <ul className="space-y-4 text-white/80 font-serif italic text-xl">
              <li>1 BHK Executive Suites</li>
              <li>2 BHK Premium Apartments</li>
              <li>Fully Equipped Kitchenettes</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Services</h3>
            <ul className="space-y-4 text-white/80 font-serif italic text-xl">
              <li>Daily Housekeeping</li>
              <li>24/7 Power Backup</li>
              <li>High-Speed Wi-Fi</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Location Details</h3>
            <p className="text-white/60 leading-relaxed font-light italic">
              Conveniently situated on Hennur-Bagalur Airport Road. Landmark: Near Empire Restaurant. Ideally placed for those needing quick access to the International Airport and tech parks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/[0.02] border-y border-white/10 px-6 text-center">
        <h2 className="text-4xl font-serif italic mb-8 text-white">Ready to experience Kothanur's finest?</h2>
        <a href="tel:+917829591338" className="inline-block border border-[#c5a059] text-[#c5a059] px-12 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#c5a059] hover:text-black transition-all">
          Book Your Stay Now
        </a>
      </section>
    </main>
  );
}