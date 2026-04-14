import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const galleryImages = [
  "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2675&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540747913346-19e32fc3e6a6?q=80&w=2699&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2786&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?q=80&w=2788&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518091043644-c1d4457ff836?q=80&w=2752&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2938&auto=format&fit=crop"
];

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="gallery" ref={containerRef} className="py-32 bg-white relative overflow-hidden slash-divider-both z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold italic uppercase text-brand-midnight tracking-tighter">
            Memorable Moments <br />
            <span className="text-brand-neon neon-text-glow">To Admire</span>
          </h2>
          <div className="w-16 h-2 bg-brand-gold mt-6 neon-glow" />
        </motion.div>
      </div>

      {/* Dynamic Parallax columns for aesthetic feel */}
      <div className="flex gap-4 md:gap-8 overflow-hidden h-[60vh] md:h-[90vh] px-4 md:px-12 w-full max-w-[1800px] mx-auto">
        
        {/* Col 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8 w-1/3 min-w-[150px]">
          <img src={galleryImages[0]} alt="Gallery 1" className="w-full h-[30vh] md:h-[50vh] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <img src={galleryImages[1]} alt="Gallery 2" className="w-full h-[40vh] md:h-[60vh] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </motion.div>

        {/* Col 2 */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8 w-1/3 min-w-[150px] -mt-[10vh] md:-mt-[20vh]">
          <img src={galleryImages[2]} alt="Gallery 3" className="w-full h-[50vh] md:h-[70vh] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <img src={galleryImages[3]} alt="Gallery 4" className="w-full h-[30vh] md:h-[40vh] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </motion.div>

        {/* Col 3 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8 w-1/3 min-w-[150px]">
          <img src={galleryImages[4]} alt="Gallery 5" className="w-full h-[35vh] md:h-[55vh] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <img src={galleryImages[5]} alt="Gallery 6" className="w-full h-[45vh] md:h-[65vh] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </motion.div>

      </div>
    </section>
  );
}
