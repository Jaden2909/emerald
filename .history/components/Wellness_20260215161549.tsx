"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const spaImages = [
  { title: "Emerald Salt Pool", url: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2070" },
  { title: "Deep Tissue Ritual", url: "https://images.unsplash.com/photo-1544161515-436cefb65794?q=80&w=2070" },
  { title: "Stone Sauna", url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070" },
];

export default function Wellness() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#050a08]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-20">
          {/* Intro Text Card */}
          <div className="flex-shrink-0 w-[400px] flex flex-col justify-center">
            <span className="text-emerald-500 text-xs tracking-[0.5em] uppercase mb-4">Wellness</span>
            <h2 className="text-5xl font-serif italic mb-6">The Sanctuary</h2>
            <p className="text-stone-400 font-light leading-relaxed">
              Descend into a world of quietude. Our spa is designed to align the rhythms of the body with the stillness of the earth.
            </p>
          </div>

          {/* Image Cards */}
          {spaImages.map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[70vw] h-[70vh] relative group">
              <img 
                src={item.url} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                alt={item.title} 
              />
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-2xl font-serif italic">{item.title}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}