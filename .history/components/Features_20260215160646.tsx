"use client";
import { motion } from "framer-motion";

const rooms = [
  { title: "Grand Emerald Suite", price: "$1,200", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f28d?q=80&w=2070" },
  { title: "The Penthouse", price: "$3,500", img: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=1974" },
  { title: "Garden Sanctuary", price: "$850", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070" },
];

export default function Features() {
  return (
    <section className="py-32 px-10 bg-[#050a08]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-emerald-500 text-xs tracking-[0.5em] uppercase mb-20 text-center">Curated Stays</h3>
        <div className="grid md:grid-cols-3 gap-12">
          {rooms.map((room, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-6 aspect-[3/4]">
                <img src={room.img} alt={room.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h4 className="text-xl font-serif mb-2">{room.title}</h4>
              <p className="text-xs tracking-widest text-emerald-500/60 uppercase">From {room.price} / Night</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}