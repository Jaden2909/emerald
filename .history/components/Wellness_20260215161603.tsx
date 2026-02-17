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

  // This math moves the container to the left by 70% of its width as you scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-[#050a08]">
      {/* The "Sticky" wrapper - this keeps the content on screen */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-20 px-20">
          {/* 1. Intro Section */}
          <div className="flex-shrink-0 w-[500px] flex flex-col justify-center">
            <span className="text-emerald-500 text-[10px] tracking-[0.5em] uppercase mb-4">Wellness</span>
            <h2 className="text-6xl font-serif italic mb-6 text-white">The Sanctuary</h2>
            <p className="text-stone-400 font-light leading-relaxed text-sm">
              Scroll down to explore our ritual spaces. Each chamber is designed 
              to offer a unique sensory journey.
            </p>
            {/* Visual indicator that scroll is working */}
            <div className="mt-12 h-[1px] w-full bg-stone-800 relative overflow-hidden">
              <motion.div 
                style={{ scaleX: scrollYProgress }} 
                className="absolute inset-0 bg-emerald-500 origin-left"
              />
            </div>
          </div>

          {/* 2. The Horizontal Items */}
          {spaImages.map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[80vw] md:w-[60vw] h-[70vh] relative group">
              <img 
                src={item.url} 
                className="w-full h-full object-cover transition-all duration-700" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-white text-3xl font-serif italic tracking-wide">{item.title}</p>
                <div className="h-[1px] w-0 group-hover:w-full bg-emerald-500 transition-all duration-500 mt-2"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}