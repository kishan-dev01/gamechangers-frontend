import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const statsData = [
  {
    id: '01',
    title: 'GLOBAL FRANCHISE NETWORK',
    location: 'Multi-Sport | Global Presence',
    description: 'Building a high-value portfolio of global sports franchises across cricket, tennis, and emerging formats. From the World Tennis League to the World Championship of Legends, Game Changers is establishing a strong international footprint with scalable and commercially powerful teams.',
    img: 'https://plus.unsplash.com/premium_photo-1768349851778-87f91a6f05ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    video: 'https://res.cloudinary.com/dtsuewnbj/video/upload/v1777484764/Proud_to_be_the_co-founders_of_the_Stars_Golf_League.Mark_your_calendars_25th_28th_March_2026._uznbcb.mp4',
    link: '#portfolio',
    cta: 'Explore Network'
  },
  {
    id: '02',
    title: 'CHAMPIONSHIP LEGACY',
    location: 'Elite Performance | Winning Culture',
    description: 'Delivering proven success on the global stage with championship-winning teams, including Game Changers Falcons (World Tennis League) and South Africa Champions (World Championship of Legends 2025). Built on consistency, leadership, and world-class talent.',
    img: 'https://images.unsplash.com/photo-1591491640784-3232eb748d4b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    video: 'https://res.cloudinary.com/dtsuewnbj/video/upload/v1777484760/Game_Changers_in_Motion_gamechangersfzco_southafricachampions_gamechangerslions_gamechange_tczi7n.mp4',
    link: '#about',
    cta: 'View Achievements'
  },
  {
    id: '03',
    title: 'SPORTS × ENTERTAINMENT ECOSYSTEM',
    location: 'Media • Fans • Commercial',
    description: 'Creating a fully integrated ecosystem at the intersection of sport, entertainment, and fan engagement—unlocking revenue across media rights, sponsorships, licensing, and live experiences for a global audience.',
    img: 'https://images.unsplash.com/photo-1563299796-b729d0af54a5?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    video: 'https://res.cloudinary.com/dtsuewnbj/video/upload/v1777484760/Just_the_pure_sounds_of_tennis_gamechangersfzco_gamechangersfalcons_worldtennisleague_cigfiu.mp4',
    link: '#gallery',
    cta: 'Discover Ecosystem'
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
  const isInView = useInView(containerRef, { margin: "200px", once: true });

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
        className="relative w-[92%] md:w-[85%] h-[85vh] flex flex-col md:flex-row overflow-hidden shadow-2xl border border-brand-slate/10 bg-white"
      >
        {/* Left Content Half */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between bg-white z-10 relative group overflow-hidden">

          <div className="z-10 relative mt-10 md:mt-0">
            <h3 className="text-4xl md:text-5xl font-bold font-display italic uppercase mb-2 text-brand-midnight tracking-tighter">
              {card.title}
            </h3>
            <p className="text-sm mt-4 text-brand-slate font-bold uppercase tracking-widest">
              {card.location}
            </p>
          </div>

          <div className="z-10 relative">
            <div className="text-brand-midnight/80 font-medium font-sans leading-relaxed text-lg mb-8 max-w-md">
              {card.description}
            </div>
            <a
              href={card.link}
              className="group/btn flex w-max items-center gap-2 uppercase tracking-widest text-xs border-b border-brand-slate/20 pb-2 hover:text-brand-slate transition-colors font-bold text-brand-midnight"
            >
              {card.cta}
              <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Right Media Half */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-brand-kinetic">
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full relative"
          >
            {/* Subtle Overlay to make it feel integrated */}
            <div className="absolute inset-0 bg-brand-midnight/5 mix-blend-overlay z-10 transition-opacity duration-1000 group-hover:opacity-0 pointer-events-none" />
            {isInView ? (
              <video 
                src={card.video} 
                poster={card.img}
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 relative z-0" 
              />
            ) : (
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 relative z-0" 
              />
            )}
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
    <section ref={containerRef} className="relative py-[5vh] bg-brand-kinetic text-brand-midnight">

      {/* Header */}
      <div className="text-center mb-[10vh] px-6 relative z-10 pt-[5vh]">
        <div className="text-xs uppercase tracking-widest mb-4 text-brand-midnight/50 font-bold">Selected Metrics</div>
        <h2 className="font-display font-bold italic text-5xl md:text-7xl uppercase tracking-tighter text-brand-midnight">
          Core <span className="text-brand-gold">Ecosystem</span>
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
    </section>
  );
}
