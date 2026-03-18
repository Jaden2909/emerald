"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RoomsPage() {
  const services = [
    "24 Hours Check-in & Out", "Daily Housekeeping", "24 Hours Room Service",
    "Hot Water Supply", "Power Backup", "24/7 Reception & Security",
    "Free Wi-Fi & Intercom", "Covered Parking", "Travel Assistance",
    "Laundry Service", "TV, Fridge, Washing Machine*", "Fully Furnished Kitchen*",
    "Weekly/Monthly Discounts", "Family Friendly", "Group Booking Facilities"
  ];

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
              <h1 className="text-6xl md:text-8xl font-serif italic mb-8">Emerald Suites</h1>
              <p className="text-[#c5a059] text-sm tracking-[0.4em] uppercase mb-8 font-bold">Kothanur Main Rd • Serviced Apartments</p>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light italic mb-8">
                <p>Emerald Suites offers well-furnished 1 BHK and 2 BHK serviced apartments (AC and Non-AC options), providing the perfect balance of comfort, space, and affordability.</p>
                <p>Ideal for families, business travelers, and group bookings, our apartments are thoughtfully designed with intercom and kitchen facilities to make you feel right at home.</p>
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
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="aspect-[4/5] border border-white/10 overflow-hidden shadow-2xl">
              <img src="/prop-suites.jpg" className="w-full h-full object-cover" alt="Emerald Suites" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-12 font-bold text-center">Our Services & Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12">
            {services.map((service, index) => (
              <div key={index} className="text-white/60 font-serif italic text-lg border-l border-emerald-500/20 pl-4 italic">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Accommodations</h3>
            <ul className="space-y-4 text-white/80 font-serif italic text-xl">
              <li>1 BHK Executive Suites (AC/Non-AC)</li>
              <li>2 BHK Family Apartments</li>
              <li>Kitchenette with Fridge & Washing Machine</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Location Details</h3>
            <p className="text-white/60 leading-relaxed font-light italic text-lg">
              Located on Kothanur Main Rd, next to Sansar Centre. Near Empire Restaurant. Perfectly placed for long-term stays with easy access to tech parks and the International Airport.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/[0.02] border-y border-white/10 px-6 text-center">
        <h2 className="text-4xl font-serif italic mb-8 text-white">Your Home Away From Home</h2>
        <Link href="/#contact" className="inline-block border border-[#c5a059] text-[#c5a059] px-12 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#c5a059] hover:text-black transition-all">
          Book Monthly Package
        </Link>
      </section>
    </main>
  );
}