"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EmeraldRooms() {
  return (
    <main className="min-h-screen bg-[#050a08] text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="text-[#c5a059] text-xs tracking-widest uppercase mb-12 inline-block hover:opacity-70 transition-opacity">
          ← Back to Collection
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Emerald Rooms</h1>
          <p className="text-[#c5a059] tracking-[0.3em] uppercase text-sm mb-12">Kothanur Main Rd • Serviced Apartments</p>
          
          <div className="aspect-video w-full overflow-hidden mb-16 border border-white/10">
            <img src="/prop-suites.jpg" className="w-full h-full object-cover" alt="Emerald Rooms" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl mb-6 font-light">The Space</h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Operating since 2018, Emerald Rooms offers the perfect blend of home-like comfort and professional service. 
                Located conveniently next to Sansar Centre, these fully furnished 1 & 2 BHK units are meticulously 
                designed for long-term stays and transient travelers alike.
              </p>
              <p className="text-white/60 leading-relaxed">
                Whether you are here for a day, a week, or a month, our apartments provide the independence of 
                private living with the luxury of curated amenities.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[#c5a059] text-[10px] tracking-widest uppercase mb-4">Amenities</h3>
                <ul className="text-xs space-y-3 text-white/80 font-light">
                  <li>• High-speed Wi-Fi</li>
                  <li>• Fully Equipped Kitchen</li>
                  <li>• 24/7 Power Backup</li>
                  <li>• Daily Housekeeping</li>
                  <li>• Secure Parking</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}