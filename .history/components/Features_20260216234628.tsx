"use client";
import { motion } from "framer-motion";

const properties = [
  {
    name: "Emerald Suites",
    sub: "Serviced Apartments",
    location: "Kothanur (Hennur-Bagalur Rd)",
    desc: "Hospitality you can trust since 2018. Fully furnished 1 & 2 BHK units designed for daily, weekly, or monthly stays."
  },
  {
    name: "Emerald Grand",
    sub: "Rooms & Serviced Apartments",
    location: "Byrathi, Kothanur",
    desc: "Located near Faith Diagnostic, our Grand property offers premium corporate stays and luxury family suites."
  },
  {
    name: "Emerald Signature",
    sub: "Rooms & Serviced Apartments",
    location: "Kannur",
    desc: "Our flagship signature experience, featuring modern interiors and seamless access to the International Airport Road."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-[#050a08] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {properties.map((prop, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l border-[#c5a059]/30 pl-8"
            >
              <p className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase mb-4">{prop.sub}</p>
              <h3 className="text-white text-3xl font-serif italic mb-4">{prop.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">{prop.desc}</p>
              <p className="text-[#c5a059] text-[10px] font-bold tracking-widest uppercase">{prop.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}