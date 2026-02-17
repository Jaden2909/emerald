"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const roomImages = [
  { title: "Living Sanctuary", url: "/well-1.jpg" },
  { title: "Executive Suite", url: "/well-2.jpg" },
  { title: "Master Bedroom", url: "/well-3.jpg" },
  { title: "Modern Restroom", url: "/well-4.jpg" }
];

export default function Wellness() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });

  // Adjusted to -83.33% to account for the new 6th panel (Intro + 4 pics + 1 Button)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#050a08]">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex flex-nowrap items-center">
          
          {/* PANEL 1: INTRO */}
          <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center">
            <span className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-4">Discovery</span>
            <h2 className="text-7xl md:text-9xl font-serif italic text-white text-center">The Interiors</h2>
          </div>

          {/* PANELS 2-5: IMAGES */}
          {roomImages.map((item, i) => (
            <div key={i} className="w-screen h-screen flex-shrink-0 flex items-center justify-center">
              <div className="relative w-[85vw] h-[70vh]">
                <img src={item.url} className="w-full h-full object-cover brightness-75 border border-white/5" alt={item.title} />
                <div className="absolute bottom-12 left-12">
                  <p className="text-[#c5a059] text-xs tracking-[0.4em] uppercase mb-2">Space 0{i + 1}</p>
                  <p className="text-white text-5xl font-serif italic">{item.title}</p>
                </div>
              </div>
            </div>
          ))}

          {/* PANEL 6: GALLERY BUTTON */}
          <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center bg-[#080f0c]">
            <div className="text-center">
              <h3 className="text-white text-4xl font-serif italic mb-8">Capturing Every Detail</h3>
              <button 
                className="px-12 py-5 border border-[#c5a059] text-[#c5a059] uppercase text-[10px] tracking-[0.5em] hover:bg-[#c5a059] hover:text-black transition-all duration-500"
                onClick={() => window.open('https://your-gallery-link.com', '_blank')}
              >
                View Full Gallery
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}