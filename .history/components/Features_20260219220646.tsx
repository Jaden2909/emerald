"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const properties = [
  {
    title: "Emerald Rooms",
    slug: "rooms",
    location: "Kothanur Main Rd",
    tag: "Serviced Apartments",
    description: "Since 2018. Fully furnished 1 & 2 BHK units for daily, weekly, and monthly stays. Located next to Sansar Centre.",
    image: "/prop-suites.jpg"
  },
  {
    title: "Emerald Grand",
    slug: "grand",
    location: "Byrathi",
    tag: "Rooms & Suites",
    description: "Corporate-grade luxury near Faith Diagnostic. Ideally suited for business travelers and premium family stays.",
    image: "/prop-grand.jpg"
  },
  {
    title: "Emerald Signature",
    slug: "signature",
    location: "Kannur",
    tag: "Rooms & Apartments",
    description: "The peak of comfort on Hennur Airport Road. High-end interiors with easy access to the International Airport.",
    image: "/prop-signature.jpg"
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-[#050a08]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {properties.map((prop, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <Link href={`/${prop.slug}`}>
                <div className="relative aspect-[4/5] mb-8 overflow-hidden border border-white/5 cursor-pointer">
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a08] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6">
                     <p className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase mb-1">{prop.tag}</p>
                     <p className="text-white text-xs tracking-widest uppercase opacity-60">{prop.location}</p>
                  </div>
                </div>
              </Link>
              <h3 className="text-white text-2xl font-serif italic mb-4">{prop.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light italic">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}