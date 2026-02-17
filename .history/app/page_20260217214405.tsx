"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features'; 
import Dining from '@/components/Dining';
import Wellness from '@/components/Wellness';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#050a08] min-h-screen">
      <Navbar />
      
      <div id="hero">
        <Hero />
      </div>
      
      {/* 1. PROPERTIES */}
      <div id="properties">
        <Features />
      </div>

      {/* 2. CELEBRATIONS */}
      <div id="celebrations">
        <section className="py-24 bg-[#050a08] px-6">
          <div className="max-w-7xl mx-auto border border-white/10 p-12 md:p-24 relative overflow-hidden bg-white/[0.01]">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
              <div className="max-w-xl">
                <span className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold">Celebrations</span>
                <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-8">Emerald Mini Party Halls</h2>
                <p className="text-white/70 leading-relaxed font-light italic text-lg">
                  Our versatile spaces in Byrathi and Kannur are meticulously designed for intimate gatherings, 
                  corporate meetings, and boutique parties. Elegance meets convenience.
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#c5a059] text-sm tracking-widest uppercase mb-4 font-bold">Ideal For</p>
                <ul className="text-white font-serif italic text-xl space-y-1">
                  <li>Small Events & Parties</li>
                  <li>Meetings & Functions</li>
                  <li>Social Gatherings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. DINING */}
      <div id="dining">
        <Dining />
      </div>

      {/* 4. WELLNESS */}
      <div id="wellness">
        <Wellness />
      </div>

      {/* 5. FOOTER (Improved Readability) */}
      <footer id="contact" className="bg-[#050a08] pt-32 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div>
              <h4 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-10 font-bold">Direct Reservations</h4>
              <div className="flex flex-col gap-4">
                <a href="tel:+917829591338" className="text-5xl md:text-6xl font-serif italic text-white hover:text-[#c5a059] transition-all">7829591338</a>
                <a href="tel:+919148692077" className="text-2xl font-serif italic text-white/80 hover:text-[#c5a059] transition-all">Mob: 9148692077</a>
              </div>
              
              <div className="mt-12 space-y-8 text-white/80 text-sm tracking-wide">
                <div>
                  <p className="text-[#c5a059] uppercase tracking-[0.3em] mb-2 font-bold">Emerald Suites Serviced Apartment</p>
                  <p className="leading-relaxed">Hennur-Bagalur Airport Road, Kothanur Main Rd,<br />Next to Sansar Centre.</p>
                  <p className="italic text-[#c5a059] mt-2 font-medium">Landmark: Near Empire Restaurant, Kothanur</p>
                </div>
                <div>
                  <p className="text-[#c5a059] uppercase tracking-[0.3em] mb-2 font-bold">Emerald Grand</p>
                  <p className="leading-relaxed">457/16 SIACS Road, Off Hennur Airport Road.<br />Near Faith Diagnostic, Behind Bescom Office, Byrathi.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-8 border-l border-white/20 pl-10">
                <div>
                  <p className="text-white uppercase text-[11px] tracking-widest mb-6 font-bold">Stay Your Way</p>
                  <ul className="text-white/70 space-y-3 text-xs uppercase tracking-wider font-medium">
                    <li>✔ Daily Rentals</li>
                    <li>✔ Weekly Rentals</li>
                    <li>✔ Monthly Rentals</li>
                    <li>✔ Fully Furnished</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white uppercase text-[11px] tracking-widest mb-6 font-bold">Ideal For</p>
                  <ul className="text-white/70 space-y-3 text-xs uppercase tracking-wider font-medium">
                    <li>Families on Vacation</li>
                    <li>Business & Corporate</li>
                    <li>Long-term Guests</li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pl-10">
                <p className="text-white italic text-2xl mb-2 text-right">Emerald Signature | Grand | Suites</p>
                <p className="text-white/60 text-[11px] text-right uppercase tracking-[0.4em] font-bold">Hospitality You Can Trust Since 2018</p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-[#c5a059] text-[10px] tracking-[0.6em] uppercase font-bold">© Paupets</p>
             <p className="text-white/40 text-[10px] tracking-widest uppercase font-medium">Experience comfort, convenience, and care – all under one roof.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}