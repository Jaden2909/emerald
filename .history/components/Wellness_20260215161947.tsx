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
    offset: ["start start", "end end"] // Crucial for locking the scroll timing
  });

  // We have 1 Intro + 4 Images = 5 panels total.
  // To show all 5, we need to move -400% (leaving the last one on screen)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);

  return (
    /* The h-[600vh] provides the 'length' of the scroll. 
       The 'relative' is required for the sticky child to anchor to. */
    <section ref={targetRef} className="relative h-[600vh] bg-[#050a08] m-0 p-0">
      {/* The sticky div MUST be h-screen and top-0. 
          If you still see vertical scrolling, check if a parent in page.tsx 
          has 'overflow-hidden' on it.
      */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="flex flex-nowrap h-full items-center"
        >
          
          {/* Panel 1: Intro */}
          <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center">
            <span className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-4">Wellness</span>
            <h2 className="text-7xl md:text-9xl font-serif italic text-white text-center">The Sanctuary</h2>
            <p className="mt-8 text-stone-500 uppercase tracking-widest text-[10px]">Scroll Down</p>
          </div>

          {/* Panels 2-5: Images */}
          {spaImages.map((item, i) => (
            <div key={i} className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-[5vw]">
              <div className="relative w-full h-[80vh]">
                <img 
                  src={item.url} 
                  className="w-full h-full object-cover brightness-50 border border-white/5 shadow-2xl" 
                  alt={item.title} 
                />
                <div className="absolute bottom-12 left-12">
                  <p className="text-[#c5a059] text-xs tracking-[0.4em] uppercase mb-2">Chamber 0{i + 1}</p>
                  <p className="text-white text-6xl font-serif italic tracking-tighter">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
          
        </motion.div>
      </div>
    </section>
  );
}