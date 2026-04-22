import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Lions() {
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
      src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776879452/533454429_17879762478379767_6832909437359134307_n_ajztpi.jpg",
      gridClasses: "col-span-1 md:col-span-8 row-span-1 md:row-span-2",
    },
    {
      src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776879452/lions-1_patfkg.webp",
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
    },
    {
      src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776879452/534572407_17879762517379767_2382216194756587180_n_ucabky.jpg",
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
    },
    {
      src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776879452/535273202_17879762469379767_15045260084654848_n_fzyhqr.jpg",
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-2",
    },
    {
      src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776879451/534718917_17879762499379767_2225543511613900230_n_cfmkqq.jpg",
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
    },
    {
      src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776879659/532661922_17879518116379767_8096867367921986896_n_knrwgp.webp",
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
    },
    {
      src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776879658/533570858_17973075662918092_8604347250734056872_n_efefof.jpg",
      gridClasses: "col-span-1 md:col-span-8 row-span-1 md:row-span-1",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0B1E4A] font-sans overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 pointer-events-none z-0 bg-[#FFFFFF]">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px] bg-[#FFC300]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-[0%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-[80px] bg-[#0B1E4A]"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-4 border-2 border-slate-100 overflow-clip"
          >
            {/* Using standard logo as requested */}
            <img src="https://res.cloudinary.com/dtsuewnbj/image/upload/v1776878670/IMG_1413_dpx66j.png" alt="Game Changers Lions Logo" className="w-full h-full object-contain" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-display font-black uppercase italic tracking-tighter text-[#0B1E4A] mb-6 mix-blend-multiply"
          >
            Game Changers <br className="hidden md:block" /> <span className="text-[#FFC300] drop-shadow-sm">Lions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl font-bold tracking-widest uppercase text-[#0B1E4A]/60 mb-8 px-4"
          >
            New-Age Sporting Vision
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#FFC300] to-transparent"
          />
        </div>
      </section>

      {/* 2. ABOUT THE TEAM */}
      <section className="py-12 md:py-24 relative z-10 bg-[#F1F5F9] border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-5 py-2 border-2 border-[#FFC300] rounded-none text-[#FFC300] font-bold tracking-widest uppercase mb-8 bg-[#FFC300]/5 backdrop-blur-sm shadow-sm">Franchise Identity</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold italic uppercase tracking-tight mb-8 text-[#0B1E4A]">
              World <span className="text-[#FFC300] underline decoration-[#FFC300]/40 underline-offset-8">Padel</span> League.
            </h2>
            <div className="space-y-6 text-[#0B1E4A]/80 text-lg leading-relaxed font-medium">
              <p>
                Game Changers Lions are a franchise in the World Padel League, representing a new-age sporting vision aimed at promoting padel in India. As an emerging sport in the country, the league plays a key role in building awareness and creating a competitive platform, aligning closely with Game Changers’ vision to support and grow modern sports in India.
              </p>
              <p className="font-bold text-[#0B1E4A] border-l-4 border-[#FFC300] pl-4 py-2 bg-white shadow-sm">
                Having competed in two seasons so far, the Lions continue to focus on building recognition for padel, developing a strong presence in the league, and contributing to the sport’s growth through consistent performances and increasing fan engagement.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] md:aspect-square relative rounded-none overflow-hidden bg-white border border-slate-200 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1E4A]/70 to-transparent z-10" />
              <img
                src="https://res.cloudinary.com/dtsuewnbj/image/upload/v1776880054/534222886_17879493756379767_6731816452569656236_n_iya50p.jpg"
                alt="Padel Match"
                className="w-full h-full object-cover mix-blend-multiply hover:mix-blend-normal transition-all duration-700 hover:scale-105"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <div className="text-6xl font-display font-black italic text-[#FFC300] drop-shadow-md">WPL</div>
                <div className="text-xl font-bold tracking-widest uppercase text-white drop-shadow-md">Competitors</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SEASONS OVERVIEW */}
      <section className="py-16 md:py-24 bg-[#FFFFFF] relative border-y border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FFC300]/5 to-transparent pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tight mb-4 text-[#0B1E4A]">The <span className="text-[#FFC300]">Movement</span></h2>
            <p className="text-xl text-[#0B1E4A]/60 font-medium">Developing a strong presence over consecutive seasons.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* Season 2 Card (Debut) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group h-full flex flex-col"
            >
              <div className="border border-slate-200 bg-[#F1F5F9] p-8 md:p-12 hover:bg-white hover:shadow-xl transition-all duration-500 hover:border-[#FFC300]/50 h-full flex flex-col relative overflow-hidden flex-grow shadow-sm">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] font-display font-black text-9xl italic text-[#0B1E4A] pointer-events-none group-hover:opacity-[0.05] transition-opacity">S2</div>

                <div className="flex justify-between items-start mb-8 z-10">
                  <div>
                    <div className="inline-block px-4 py-1 border border-slate-200 bg-white text-[#0B1E4A]/60 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm group-hover:border-[#FFC300] group-hover:text-[#FFC300] transition-colors">WPL Debut</div>
                    <h3 className="text-4xl font-display font-black italic uppercase text-[#0B1E4A] group-hover:text-[#FFC300] transition-colors">Season 2</h3>
                    <div className="text-xl font-bold tracking-widest text-[#0B1E4A]/60 mt-2 flex items-center gap-2">
                      Building the Foundation
                    </div>
                  </div>
                </div>

                <p className="text-[#0B1E4A]/80 font-medium leading-relaxed mb-10 flex-grow z-10">
                  Season 2 marked the debut of Game Changers Lions in the World Padel League, introducing the franchise to the Indian sporting landscape. As one of the early participants...
                </p>

                <div className="mt-auto relative z-20">
                  <Link to="/teams/lions/season-2" className="inline-flex items-center justify-between w-full p-4 bg-[#0B1E4A] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#FFC300] hover:text-[#0B1E4A] transition-colors group/btn shadow-md">
                    Explore Season 2
                    <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Season 3 Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group h-full flex flex-col"
            >
              <div className="border border-slate-200 bg-[#F1F5F9] p-8 md:p-12 hover:bg-white hover:shadow-xl transition-all duration-500 hover:border-[#FFC300]/50 h-full flex flex-col relative overflow-hidden flex-grow shadow-sm">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] font-display font-black text-9xl italic text-[#0B1E4A] pointer-events-none group-hover:opacity-[0.05] transition-opacity">S3</div>

                <div className="flex justify-between items-start mb-8 z-10">
                  <div>
                    <div className="inline-block px-4 py-1 border border-slate-200 bg-white text-[#0B1E4A]/60 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm group-hover:border-[#FFC300] group-hover:text-[#FFC300] transition-colors">2025</div>
                    <h3 className="text-4xl font-display font-black italic uppercase text-[#0B1E4A] group-hover:text-[#FFC300] transition-colors">Season 3</h3>
                    <div className="text-xl font-bold tracking-widest text-[#0B1E4A]/60 mt-2 flex items-center gap-2">
                      Greater Confidence
                    </div>
                  </div>
                </div>

                <p className="text-[#0B1E4A]/80 font-medium leading-relaxed mb-10 flex-grow z-10">
                  Season 3 of the World Padel League saw Game Changers Lions return with greater confidence and a clearer sense of direction. Building on their debut season, the team entered...
                </p>

                <div className="mt-auto relative z-20">
                  <Link to="/teams/lions/season-3" className="inline-flex items-center justify-between w-full p-4 bg-[#0B1E4A] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#FFC300] hover:text-[#0B1E4A] transition-colors group/btn shadow-md">
                    Explore Season 3
                    <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION (Bento Grid) */}
      <section id="gallery" className="py-24 md:py-32 bg-[#F1F5F9] relative z-10">
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
                  The Highlights
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold italic uppercase text-[#0B1E4A] tracking-tighter leading-none">
                Lions <span className="text-[#FFC300]">Gallery</span>
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
            className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[280px] gap-3 md:gap-1"
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
                  alt={`Lions Gallery ${i + 1}`}
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

    </div>
  );
}
