"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const spaImages = [
  { title: "Emerald Salt Pool", url: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2070" },
  { title: "Deep Tissue Ritual", url: "https://images.unsplash.com/photo-1544161515-436cefb65794?q=80&w=2070" },
  { title: "Stone Sauna", url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070" },
  { title: "The Conservatory", url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070" }
];

export default function Wellness() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // 1 Intro + 4 Images = 5 panels. 
  // To finish exactly on the last image with no blank space, we move exactly -400%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);

  return (
    /* h-[400vh] matches the 400% movement for a perfect 1:1 scroll feel */
    <section ref={targetRef} className="relative h-[400vh] bg-[#050a08]">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex flex-nowrap items-center">
          
          {/* Panel 1: Intro */}
          <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center">
            <span className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-4">Wellness</span>
            <h2 className="text-7xl md:text-9xl font-serif italic text-white text-center">The Sanctuary</h2>
          </div>

          {/* Panels 2-5: Images */}
          {spaImages.map((item, i) => (
            <div key={i} className="w-screen h-screen flex-shrink-0 flex items-center justify-center">
              <div className="relative w-[85vw] h-[70vh]">
                <img src={item.url} className="w-full h-full object-cover brightness-50 border border-white/5" alt={item.title} />
                <div className="absolute bottom-12 left-12">
                  <p className="text-[#c5a059] text-xs tracking-[0.4em] uppercase mb-2">Chamber 0{i + 1}</p>
                  <p className="text-white text-5xl font-serif italic">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}