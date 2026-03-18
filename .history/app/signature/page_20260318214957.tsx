"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignaturePage() {
  const services = [
    "24 Hours Check-in & Out", "VIP Suite Access", "24 Hours Room Service",
    "Daily Housekeeping", "Power Backup", "Doctor on Call", "CCTV Security",
    "24/7 Reception Support", "Free Wi-Fi Access", "Covered Parking",
    "Airport Travel Assistance", "Laundry Service", "Fully Furnished Rooms",
    "Weekly/Monthly Discounts", "Event Hall Access", "Family Friendly"
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
              <h1 className="text-6xl md:text-8xl font-serif italic mb-8">Emerald Signature</h1>
              <p className="text-[#c5a059] text-sm tracking-[0.4em] uppercase mb-8 font-bold">Kannur, Bangalore • VIP Suites & Rooms</p>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light italic mb-8">
                <p>Emerald Signature is our flagship destination on Airport Road. Designed with modern comfort, it represents the finest expression of the Emerald brand.</p>
                <p>We offer a variety of VIP Suites and Deluxe Rooms. Our party hall provides the perfect space for celebrations and corporate gatherings near Bangalore's aviation hub.</p>
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
              <img src="/prop-signature.jpg" className="w-full h-full object-cover" alt="Emerald Signature" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-12 font-bold text-center">Premium Services & Amenities</h3>
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
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">The Experience</h3>
            <ul className="space-y-4 text-white/80 font-serif italic text-xl">
              <li>High-End VIP Suites</li>
              <li>Modern Deluxe & Standard Rooms</li>
              <li>Signature Event & Party Hall</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-8 font-bold">Connectivity</h3>
            <p className="text-white/60 leading-relaxed font-light italic text-lg">
              Strategically located on the main Airport Road in Kannur. Perfect for those who value time and desire a sophisticated stay with a signature touch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/[0.02] border-y border-white/10 px-6 text-center">
        <h2 className="text-4xl font-serif italic mb-8 text-white">Hospitality with a Signature Touch</h2>
        <Link href="/#contact" className="inline-block border border-[#c5a059] text-[#c5a059] px-12 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#c5a059] hover:text-black transition-all">
          Book VIP Suite
        </Link>
      </section>
    </main>
  );
}