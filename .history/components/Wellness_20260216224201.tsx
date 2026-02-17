// Inside Wellness.tsx - ONLY CHANGE THESE TWO LINES:

export default function Wellness() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Keep this [0, 1] but because we shortened the height below, 
  // it will finish the movement exactly when the section ends.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);

  return (
    /* CHANGE THIS FROM h-[400vh] TO h-[300vh] */
    <section ref={targetRef} className="relative h-[300vh] bg-[#050a08]">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex flex-nowrap items-center">
          {/* ... everything else inside motion.div stays EXACTLY the same ... */}