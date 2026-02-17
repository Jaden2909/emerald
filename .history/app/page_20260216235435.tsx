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
      
      <div id="properties">
        <Features />
      </div>

      <div id="dining">
        <Dining />
      </div>

      <div id="celebrations">
        <section className="py-24 bg-[#050a08] px-6">
          <div className="max-w-7xl mx-auto border border-white/10 p-12 md:p-24 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
              <div className="max-w-xl">
                <span className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-6 block">Celebrations</span>
                <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-8">Emerald Mini Party Halls</h2>
                <p className="text-white/60 leading-relaxed font-light italic">
                  Our versatile spaces in Byrathi and Kannur are meticulously designed for intimate gatherings, 
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
          </div>
        </section>
      </div>

      <div id="wellness">
        <Wellness />
      </div>

      <footer id="contact" className="bg-[#050a08] pt-32 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 mb-24">
            <div>
              <h4 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-10">Direct Reservations</h4>
              <a href="tel:+917829591338" className="text-5xl md:text-7xl font-serif italic text-white hover:text-[#c5a059] transition-all">
                7829591338
              </a>
              <div className="mt-12 grid grid-cols-2 gap-8 text-white/60 text-xs">
                <div>
                  <p className="text-[#c5a059] uppercase tracking-widest mb-2">Kothanur Main Rd</p>
                  <p>Next to Sansar Centre, Bengaluru 560077</p>
                </div>
                <div>
                  <p className="text-[#c5a059] uppercase tracking-widest mb-2">Emerald Grand</p>
                  <p>Byrathi, Bengaluru 560077</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end md:items-end text-white/40 text-sm italic">
              <p>Hospitality you can trust since 2018.</p>
              <p>Emerald Signature & Emerald Grand</p>
            </div>
          </div>
          <p className="text-center text-[#c5a059] text-[9px] tracking-[0.5em] uppercase pt-12 border-t border-white/5">
            © 2026 Emerald Suites Luxury Group
          </p>
        </div>
      </footer>
    </main>
  );
}