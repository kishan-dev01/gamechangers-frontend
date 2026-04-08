import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const statsData = [
  {
    id: '01',
    title: 'GLOBAL FRANCHISES',
    location: 'World Tour',
    description: 'Home to the South Africa Champions (WCL) and Game Changers Falcons (WTL). Building legacy across international stadiums.',
    img: 'https://plus.unsplash.com/premium_photo-1768349851778-87f91a6f05ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#portfolio',
  },
  {
    id: '02',
    title: 'PREMIER IP DEVELOPMENT',
    location: 'Global Ecosystem',
    description: 'Investing in high-end global sporting properties, specializing in Padel and Golf ecosystems to capture premium sports engagement.',
    img: 'https://images.unsplash.com/photo-1591491640784-3232eb748d4b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#about',
  },
  {
    id: '03',
    title: '360° FAN ENGAGEMENT',
    location: 'Digital & Live',
    description: 'Capitalizing on global viewership trends and live entertainment, providing a next-generation experience for modern sporting fans.',
    img: 'https://images.unsplash.com/photo-1563299796-b729d0af54a5?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#gallery',
  }
];

interface CardProps {
  card: typeof statsData[0];
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card = ({ card, i, progress, range, targetScale }: CardProps) => {
  const containerRef = useRef(null);

  // Track this specific card's parallax scale for its image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  // Scale and opacity relative to the global container scroll (for background cards)
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.5]);

  return (
    <div ref={containerRef} className="h-screen w-full flex items-center justify-center sticky top-[75px]" style={{ zIndex: i }}>
      <motion.div
        style={{ scale, opacity, top: `calc(-5vh + ${i * 4}vh)` }}
        className="relative w-[92%] md:w-[85%] h-[85vh] glass-card flex flex-col md:flex-row overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]"
      >

        {/* Left Content Half */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between bg-brand-midnight/80 z-10 relative">

          <div className="absolute -top-10 left-4 md:left-10 text-[15vw] md:text-[8vw] font-display font-bold text-brand-kinetic/10 select-none z-0">
            {card.id}
          </div>

          <div className="z-10 relative mt-10 md:mt-0">
            <div className="text-3xl font-display text-brand-neon opacity-20 mb-16"></div>
            <h3 className="text-4xl md:text-5xl font-bold font-display italic uppercase mb-2 text-brand-kinetic tracking-tighter">
              {card.title}
            </h3>
            <p className="text-sm mt-4 text-brand-neon font-bold uppercase tracking-widest neon-text-glow">
              {card.location}
            </p>
          </div>

          <div className="z-10 relative">
            <div className="text-brand-kinetic/80 font-medium font-sans leading-relaxed text-lg mb-8 max-w-md">
              {card.description}
            </div>
            <a
              href={card.link}
              className="group flex w-max items-center gap-2 uppercase tracking-widest text-xs border-b border-brand-gold/30 pb-2 hover:text-brand-neon hover:border-brand-neon transition-colors font-bold text-brand-kinetic"
            >
              View Project
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Right Media Half */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-brand-midnight">
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full"
          >
            <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
};

export default function GameChangersStats() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} className="relative py-[5vh] bg-brand-midnight text-brand-kinetic">

      {/* Header */}
      <div className="text-center mb-[10vh] px-6 relative z-10 pt-[5vh]">
        <div className="text-xs uppercase tracking-widest mb-4 text-brand-kinetic/50 font-bold">Selected Metrics</div>
        <h2 className="font-display font-bold italic text-5xl md:text-7xl uppercase tracking-tighter text-brand-kinetic">
          Core <span className="text-brand-gold neon-glow">Ecosystem</span>
        </h2>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-[1600px] mx-auto pb-[10vh]">
        {statsData.map((card, i) => {
          // targetScale configures how far backwards the specific card visually recedes.
          const targetScale = 1 - ((statsData.length - i) * 0.05);

          // As scrolling passes this specific card and onto the others, shrink it down.
          const range = [(i / statsData.length), 1];

          return (
            <Card
              key={card.id}
              card={card}
              i={i}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Bottom Puffer Section for Breathing Space */}
      <div className="h-[20vh] bg-brand-midnight w-full flex items-center justify-center relative z-10">
        <div className="h-24 w-px bg-brand-kinetic/20"></div>
      </div>

    </section>
  );
}
