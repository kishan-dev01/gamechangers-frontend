import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    id: 'falcons',
    title: 'Game Changers Falcons',
    sport: 'Tennis',
    desc: 'Champions of the World Tennis League, representing elite performance, global talent, and dominance on the international stage.',
    images: [
      'https://res.cloudinary.com/dtsuewnbj/image/upload/v1776165411/WTL00342_akxqxb.jpg',
      'https://res.cloudinary.com/dtsuewnbj/image/upload/v1776165408/WTL00029_ldjr3i.jpg',
      'https://res.cloudinary.com/dtsuewnbj/image/upload/v1776165350/WT200303_uu5krp.jpg'

    ],
    link: '#team-falcons',
    colSpan: 'md:col-span-2 lg:col-span-8',
    rowSpan: 'md:row-span-2 lg:row-span-2',
    height: 'h-[50vh] md:h-[60vh] lg:h-full'
  },
  {
    id: 'lions',
    title: 'Game Changers Lions',
    sport: 'Padel',
    desc: 'A next-generation franchise in the fast-growing world of padel, built for high-energy competition and global fan engagement.',
    images: [
      'https://res.cloudinary.com/dtsuewnbj/image/upload/v1776164375/lions-3_rcsfe5.jpg',
      'https://res.cloudinary.com/dtsuewnbj/image/upload/v1776164365/lions-1_eqjkm3.webp',
      'https://res.cloudinary.com/dtsuewnbj/image/upload/v1776164365/lions-2_hf9nwq.webp'
    ],
    link: '#team-lions',
    colSpan: 'md:col-span-1 lg:col-span-4',
    rowSpan: 'md:row-span-1 lg:row-span-1',
    height: 'h-[40vh] md:h-full'
  },
  {
    id: 'cricket',
    title: 'South Africa Champions',
    sport: 'Cricket',
    desc: 'World Championship of Legends 2025 winners, built on legacy, iconic players, and a culture of consistent excellence.',
    images: [
      'https://images.unsplash.com/photo-1595210382266-2d0077c1f541?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?q=80&w=1357&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1722086350831-3cc30b7d68a7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    link: '#team-sa-champions',
    colSpan: 'md:col-span-1 lg:col-span-4',
    rowSpan: 'md:row-span-1 lg:row-span-1',
    height: 'h-[40vh] md:h-full'
  }
];

const PortfolioCard = ({ item, i }: { item: typeof portfolioItems[0]; i: number }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % item.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [item.images.length]);

  return (
    <motion.a
      href={item.link}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      className={`group relative overflow-hidden bg-brand-kinetic border border-brand-slate/10 block ${item.colSpan} ${item.rowSpan} ${item.height}`}
    >
      {/* Background Slider */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {item.images.map((img, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0 relative bg-brand-kinetic">
            <img src={img} alt={`${item.title} ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
        ))}
      </div>

      {/* Manual Dots Overlay */}
      <div className="absolute top-6 right-6 flex gap-2 z-20">
        {item.images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIndex(idx);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 box-content border-4 border-transparent bg-clip-padding ${index === idx ? 'bg-brand-gold w-6' : 'bg-white/80 hover:bg-white w-1.5'}`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>

      {/* Clean Flat Overlay for Readability (No Gradients) */}
      <div className="absolute inset-0 bg-brand-midnight/30 group-hover:bg-brand-midnight/70 transition-colors duration-500 z-10 pointer-events-none" />

      {/* Content Block (Floating Over Image) */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end h-full pointer-events-none">
        <div className="mt-auto transition-transform duration-500 ease-in-out group-hover:-translate-y-4">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-2 block">
            {item.sport}
          </span>
          <h3 className="text-3xl md:text-5xl font-display font-bold italic uppercase tracking-tighter text-white">
            {item.title}
          </h3>
        </div>

        {/* Height Expansion on Hover */}
        <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100">
          <p className="text-white/90 font-medium leading-relaxed mb-6 pt-2 max-w-lg">
            {item.desc}
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-white/30 pb-1 group-hover:border-brand-gold group-hover:text-brand-gold transition-colors pointer-events-auto">
            View Franchise Profile
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-brand-kinetic text-brand-midnight relative z-0">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Header - Cleaned up to solid without glowing gradients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center space-y-6"
        >
          <span className="text-brand-slate font-bold uppercase tracking-[0.2em] text-sm block">
            The Franchises
          </span>
          <h2 className="text-4xl md:text-7xl font-display font-bold italic uppercase tracking-tighter text-brand-midnight">
            The Greatest Show <br className="hidden md:block" />
            <span className="text-brand-gold">Beyond Boundaries</span>
          </h2>
          <div className="w-16 h-1 bg-brand-gold" />
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-min md:auto-rows-[400px]">
          {portfolioItems.map((item, i) => (
            <PortfolioCard key={item.id} item={item} i={i} />
          ))}
        </div>

        {/* Footer Text - Cleaned without glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-3xl font-display font-bold italic uppercase tracking-wide text-brand-slate max-w-4xl mx-auto leading-tight">
            "Join us as we continue to push boundaries, <br className="hidden md:block" />
            <span className="text-brand-midnight">elevate excellence</span>, and change the game forever!"
          </p>
        </motion.div>

      </div>
    </section>
  );
}
