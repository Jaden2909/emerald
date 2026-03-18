"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GrandPage() {
  const services = [
    "24 Hours Check-in & Out", "Daily Housekeeping", "24 Hours Room Service",
    "Doctor on Call", "Hot Water Supply", "Power Backup", "Travel Assistance",
    "24/7 Reception Support", "CCTV Security", "Free Wi-Fi Access",
    "Covered Parking", "Laundry Service", "Fully Furnished Units",
    "Kitchen Facilities*", "Weekly/Monthly Packages", "Group Booking Facilities"
  ];

  return (
    <main className="bg-[#050a08] min-h-screen text-white relative">
      <div className="absolute top-10 right-10 z-50">
        <Link href="/">
          <img src="/logo.png" alt="Emerald Logo" className="w-20 h-auto hover:opacity-80 transition-opacity" />
        </Link>
      </div>
      
      <section className="pt-40 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/#properties" className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-12 inline-block hover:opacity-50 transition-all font-bold">
            ← Back to Collection
          </Link>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-6xl md:text-8xl font-serif italic mb-8">Emerald Grand</h1>
              <p className="text-[#c5a059] text-sm tracking-[0.4em] uppercase mb-8 font-bold">Byrathi • Rooms & Suites</p>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light italic mb-8">
                <p>Emerald Grand is a premium extension of the Emerald hospitality experience, designed to offer enhanced comfort and versatility.</p>
                <p>Deluxe Rooms, 2 BHK serviced apartments, and a boutique party hall for corporate meetings.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a href="tel:+917829591338" className="inline-block border border-[#c5a059] text-[#c5a059] px-6 py-3 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#c5a059] hover:text-black transition-all text-center">
                  Contact Us: 7829591338
                </a>
                <a href="tel:+919148692077" className="inline-block border border-white/20 text-white px-6 py-3 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-white hover:text-black transition-all text-center">
                  Contact Us: 9148692077
                </a>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="max-h-[500px] border border-white/10 overflow-hidden shadow-2xl">
              <img src="/prop-grand.jpg" className="w-full h-full object-cover" alt="Emerald Grand" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/10 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-12 font-bold text-center">Our Services & Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12">
            {services.map((service, index) => (
              <div key={index} className="text-white/60 font-serif italic text-lg border-l border-emerald-500/20 pl-4">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTORED SECTION */}
      <section className="py-24 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Accommodations</h3>
            <ul className="space-y-4 text-white/80 font-serif italic text-xl">
              <li>Luxury Deluxe Rooms</li>
              <li>Spacious 2 BHK Serviced Apartments</li>
              <li>Boutique Party Hall & Event Space</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Location</h3>
            <p className="text-white/60 leading-relaxed font-light italic text-lg">
              457/16 SIACS Road, Off Hennur Airport Road. Located behind the Bescom Office in Byrathi.
            </p>
          </div>
        </div>
      </section>

      {/* RESTORED SECTION */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 px-6 text-center">
        <h2 className="text-4xl font-serif italic mb-8 text-white">Experience Enhanced Luxury</h2>
        <Link href="/#contact" className="inline-block border border-[#c5a059] text-[#c5a059] px-12 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#c5a059] hover:text-black transition-all">
          Inquire for Group Bookings
        </Link>
      </section>
    </main>
  );
}