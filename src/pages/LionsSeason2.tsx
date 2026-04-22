import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LionsSeason2() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Animation variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    },
  };

  // Bento gallery array
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2674&auto=format&fit=crop",
      gridClasses: "col-span-1 md:col-span-8 row-span-1 md:row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?q=80&w=2670&auto=format&fit=crop",
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1587280501635-6cb10cebf4ef?q=80&w=2670&auto=format&fit=crop",
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1594917454807-640f807abfa9?q=80&w=2650&auto=format&fit=crop",
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1625296839395-5ac8490a187a?q=80&w=2574&auto=format&fit=crop",
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2670&auto=format&fit=crop",
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?q=80&w=2670&auto=format&fit=crop",
      gridClasses: "col-span-1 md:col-span-8 row-span-1 md:row-span-1",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0B1E4A] font-sans overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70dvh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 pointer-events-none z-0 bg-[#F1F5F9]">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px] bg-[#FFC300]"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-2 border-2 border-[#FFC300] rounded-none text-[#FFC300] font-bold tracking-widest uppercase bg-[#FFC300]/10 backdrop-blur-sm shadow-sm md:text-lg">
              Debut Season
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-display font-black uppercase italic tracking-tighter text-[#0B1E4A] mb-6 mix-blend-multiply"
          >
            Lions <span className="text-[#FFC300] drop-shadow-sm">Season 2</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl font-bold tracking-widest uppercase text-[#0B1E4A]/60 mb-8 px-4"
          >
            Entering the Indian Sporting Landscape
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#0B1E4A] to-transparent"
          />
        </div>
      </section>

      {/* 2. SEASON OVERVIEW */}
      <section className="py-12 md:py-16 relative z-10 bg-[#FFFFFF] border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold italic uppercase tracking-tight mb-8 text-[#0B1E4A]">
              Establishing a <span className="text-[#FFC300] underline decoration-[#FFC300]/40 underline-offset-8">Foundation</span>
            </h2>
            <div className="space-y-6 text-[#0B1E4A]/80 text-xl leading-relaxed font-medium max-w-4xl mx-auto">
              <p>
                Season 2 marked the debut of Game Changers Lions in the World Padel League, introducing the franchise to the Indian sporting landscape.
              </p>
              <p className="border-l-4 border-[#FFC300] pl-6 text-left py-2 font-bold text-[#0B1E4A] bg-[#F1F5F9] p-6 shadow-sm">
                As one of the early participants in a growing league, the season played a crucial role in establishing the team’s identity and presence in the competition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. TEAM COLLECTIVE / SQUAD PORTRAIT */}
      <section className="py-16 md:py-24 bg-[#F1F5F9] relative border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Side: Context / Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="order-2 lg:order-1"
            >
              <div className="inline-block px-4 py-1 border border-slate-200 bg-white text-[#0B1E4A]/60 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                The Collective Unit
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black italic uppercase text-[#0B1E4A] mb-8 leading-tight">
                Building <br /> <span className="text-[#FFC300] drop-shadow-sm">Team Chemistry</span>
              </h2>

              <div className="space-y-6 text-[#0B1E4A]/80 text-lg leading-relaxed font-medium bg-white p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC300]/5 rounded-bl-full pointer-events-none" />

                <p className="relative z-10">
                  The Lions approached their first season with a focus on building team chemistry and adapting to the fast-paced nature of the sport.
                </p>
                <p className="relative z-10">
                  It laid a strong foundation for the franchise, setting the tone for future seasons while contributing to the increasing popularity of padel in India. Through competitive exposure, the team learned to function as a cohesive and unified front.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Portrait Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative p-3 md:p-4 bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 border border-slate-200">
                {/* Tape effect top left */}
                <div className="absolute -top-3 -left-3 w-12 h-6 bg-[#FFC300]/80 -rotate-12 z-20 shadow-sm backdrop-blur-sm" />
                {/* Tape effect bottom right */}
                <div className="absolute -bottom-3 -right-3 w-12 h-6 bg-[#FFC300]/80 -rotate-6 z-20 shadow-sm backdrop-blur-sm" />

                <div className="aspect-[3/4] md:aspect-[4/5] relative overflow-hidden bg-[#F1F5F9]">
                  {/* Replace with specific lions portrait image later */}
                  <img
                    src="https://res.cloudinary.com/dtsuewnbj/image/upload/v1776878669/IMG-20260422-WA0004_rzjhtd.jpg"
                    alt="Game Changers Lions Squad"
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E4A] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="text-white text-2xl md:text-3xl font-display font-black italic uppercase drop-shadow-md">
                      Lions Squad
                    </div>
                    <div className="w-12 h-1 bg-[#FFC300] mt-3" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION (Bento Grid) */}
      <section id="gallery" className="py-24 md:py-32 bg-[#FFFFFF] relative z-10 border-t border-slate-200">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-[#FFC300] rotate-45" />
                <span className="text-[#0B1E4A]/60 font-bold uppercase tracking-[0.25em] text-xs">
                  Season Highlights
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold italic uppercase text-[#0B1E4A] tracking-tighter leading-none">
                Debut <span className="text-[#FFC300]">Gallery</span>
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="px-4 md:px-12 w-full max-w-[1800px] mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[280px] gap-3 md:gap-5"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                onClick={() => setSelectedImage(img.src)}
                className={`relative w-full h-full overflow-hidden group cursor-zoom-in bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${img.gridClasses}`}
              >
                <img
                  src={img.src}
                  alt={`Season 2 Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                />
                {/* Subtle overlay on hover for visual feedback without text */}
                <div className="absolute inset-0 bg-[#0B1E4A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1E4A]/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-[#FFC300] transition-colors bg-white/5 p-3 rounded-none hover:bg-white/10 z-[101]"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl max-h-full flex items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[85vh] object-contain rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#FFC300]/50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. BACK NAVIGATION */}
      <section className="py-12 bg-[#F1F5F9] border-t border-slate-200 flex justify-center">
        <Link to="/teams/lions" className="px-8 py-4 bg-[#0B1E4A] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#FFC300] hover:text-[#0B1E4A] transition-colors shadow-md">
          Back to Lions
        </Link>
      </section>

    </div>
  );
}
