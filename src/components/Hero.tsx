import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 'tennis',
    type: 'video',
    src: '/videos/vid1.mp4',
    poster: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2675&auto=format&fit=crop',
    title: 'Master The Court',
    subtitle: 'Game Changers Falcons in the World Tennis League.',
    sport: 'Tennis'
  },
  {
    id: 'cricket',
    type: 'video',
    src: '/videos/vid2.mp4',
    poster: 'https://images.unsplash.com/photo-1540747913346-19e32fc3e6a6?q=80&w=2699&auto=format&fit=crop',
    title: 'A Legacy Of Legends',
    subtitle: 'South Africa Champions dominating the global stage.',
    sport: 'Cricket'
  },
  {
    id: 'padel',
    type: 'video',
    src: '/videos/vid3.mp4',
    poster: 'https://images.unsplash.com/photo-1662916174776-9d332997193b?q=80&w=2940&auto=format&fit=crop',
    title: 'The Next Evolution',
    subtitle: 'Building high-value sports IPs in Padel.',
    sport: 'Padel'
  },
  {
    id: 'golf',
    type: 'video',
    src: '/videos/vid4.mp4',
    poster: 'https://images.unsplash.com/photo-1587174486073-ae16fdf9ce79?q=80&w=2940&auto=format&fit=crop',
    title: 'Precision & Prestige',
    subtitle: 'Co-founders of the elite Stars Golf League.',
    sport: 'Golf'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-brand-kinetic">

      {/* Background Media Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {slides[current].type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-70"
                src={slides[current].src}
                poster={slides[current].poster}
              />
            ) : (
              <img
                src={slides[current].src}
                alt={slides[current].sport}
                className="w-full h-full object-cover opacity-60"
              />
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-brand-neon font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              {slides[current].sport}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold italic tracking-[0.1em] uppercase leading-[0.9] text-brand-midnight mb-6">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-2xl font-medium text-brand-midnight/80 mb-10 max-w-2xl leading-relaxed">
              {slides[current].subtitle}
            </p>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-4 px-8 py-4 bg-brand-gold text-brand-midnight font-display font-bold italic uppercase tracking-widest hover:bg-brand-neon hover:neon-hover-glow transition-all duration-300"
            >
              <span>Explore Legacy</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Slide Controls */}
      <div className="absolute bottom-10 left-6 md:left-12 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${current === idx
              ? 'w-12 bg-brand-neon neon-glow'
              : 'w-4 bg-brand-midnight/30 hover:bg-brand-midnight/60'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
