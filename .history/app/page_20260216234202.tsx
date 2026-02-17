"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features'; // This now holds your 3 Properties
import Dining from '@/components/Dining';
import Wellness from '@/components/Wellness';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#050a08] min-h-screen">
      <Navbar />
      <Hero />
      
      {/* 1. PROPERTIES SECTION (Using your provided content) */}
      <Features />

      {/* 2. EVENT SPACE SECTION (The "3rd Point" - Party Halls) */}
      <section className="py-24 bg-[#050a08] px-6">
        <div className="max-w-7xl mx-auto border border-white/10 p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-xl">
              <span className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-6 block">Celebrations</span>
              <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-8">Emerald Mini Party Halls</h2>
              <p className="text-white/60 leading-relaxed font-light italic">
                Our versatile spaces in Byrathy and Kannur are meticulously designed for intimate gatherings, 
                corporate meetings, and boutique parties. Elegance meets convenience.
              </p>
            </div>
            <div className="text-right">
              <p className="text-[#c5a059] text-sm tracking-widest uppercase mb-2">Ideal For</p>
              <ul className="text-white/80 font-serif italic text-xl space-y-1">
                <li>Social Gatherings</li>
                <li>Corporate Stays</li>
                <li>Small Events</li>
              </ul>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/5 blur-[120px]" />
        </div>
      </section>

      <Dining />
      <Wellness />

      {/* 3. FINAL CONTACT & BOOKING FOOTER */}
      <footer className="bg-[#050a08] pt-32 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 mb-24">
            <div>
              <h4 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-10">Direct Reservations</h4>
              <a 
                href="tel:+917829591338" 
                className="text-5xl md:text-7xl font-serif italic text-white hover:text-[#c5a059] transition-all duration-500"
              >
                7829591338
              </a>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[#c5a059] text-[10px] tracking-widest uppercase mb-2">Primary Hub</p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Hennur-Bagalur Airport Road,<br />
                    Kothanur, Bengaluru 560077
                  </p>
                </div>
                <div>
                  <p className="text-[#c5a059] text-[10px] tracking-widest uppercase mb-2">Highlights</p>
                  <p className="text-white/60 text-xs leading-relaxed italic">
                    Free Wi-Fi • Breakfast*<br />
                    Covered Parking • 24/7 Service
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between items-start md:items-end text-left md:text-right">
              <div className="space-y-6">
                <p className="text-white/40 text-sm max-w-xs ml-auto">
                  Hospitality you can trust since 2018. Affordable & transparent pricing for short and long-term stays.
                </p>
                <div className="pt-4 border-t border-white/10 inline-block">
                  <p className="text-white font-serif italic text-lg">Emerald Signature & Emerald Grand</p>
                  <p className="text-[#c5a059] text-[10px] tracking-widest uppercase">Byrathy • Kannur • Kothanur</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#c5a059] text-[9px] tracking-[0.6em] uppercase">© 2026 Emerald Suites Luxury Group</p>
            <div className="flex gap-8 text-[9px] tracking-widest text-white/30 uppercase">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Kothanur / Bengaluru</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}