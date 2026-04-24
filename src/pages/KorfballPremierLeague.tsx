import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { X, Target, Users, Globe2, ShieldCheck } from 'lucide-react';

export default function KorfballPremierLeague() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="bg-[#FFFFFF] min-h-screen text-[#0a1128] font-sans overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-12 bg-white">
        {/* Subtle Background Image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://korfball.sport/wp-content/uploads/2019/08/SPEL4980-1030x686.jpg"
            alt="Sports Background"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/40 to-white/40" />
        </div>

        {/* Decorative Blurs */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 -right-[5%] w-[40vw] h-[40vw] rounded-full blur-[100px] bg-[#1e40af]"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-2 border border-[#1e40af]/20 rounded-full text-[#1e40af] font-bold tracking-widest uppercase backdrop-blur-sm shadow-sm text-sm bg-white">
              Emerging Sports
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase italic tracking-wide text-[#0a1128] mb-6 leading-tight drop-shadow-sm"
          >
            Korfball <br className="hidden md:block" /> <span className="text-[#1e40af]">Premier League</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-2xl font-medium tracking-wide text-[#0a1128] mb-8 px-4 max-w-3xl leading-relaxed"
          >
            Bringing fresh energy to the country's sporting ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-16 h-1.5 bg-[#1e40af] rounded-full"
          />
        </div>
      </section>

      {/* 2. INTRODUCTION & ROLE */}
      <section className="py-10 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-6 items-stretch">

          {/* Progressive Step */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="bg-[#f8f9fa] border border-slate-200 p-10 md:p-14 shadow-sm flex flex-col justify-center"
          >
            <div className="text-[#1e40af] mb-8 bg-white w-16 h-16 flex items-center justify-center rounded-none shadow-sm border border-slate-100">
              <Users size={32} />
            </div>
            <h2 className="text-3xl font-display font-bold italic uppercase tracking-tight mb-6 text-[#0a1128]">
              A Progressive Step
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-6">
              The Korfball Premier League represents a progressive step in introducing and developing a new-age sport in India, bringing fresh energy to the country's sporting ecosystem.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Centered around Korfball, a unique mixed-gender sport that emphasizes teamwork, inclusivity, and strategy, the league aims to create a distinctive identity while engaging a modern audience.
            </p>
          </motion.div>

          {/* Game Changers Role */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="bg-[#0a1128] text-white p-10 md:p-14 shadow-xl flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1e40af]/30 rounded-bl-full blur-2xl" />

            <div className="text-[#0ea5e9] mb-8 bg-white/5 w-16 h-16 flex items-center justify-center rounded-none border border-white/10 relative z-10">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-display font-bold italic uppercase tracking-tight mb-6 text-white relative z-10">
              Game Changers' Role
            </h2>
            <p className="text-white/80 text-lg leading-relaxed font-medium mb-6 relative z-10">
              As one of the stakeholders, Game Changers plays a key role in driving the vision of the league, with a strong focus on promoting emerging sports in India.
            </p>
            <p className="text-white/80 text-lg leading-relaxed font-medium relative z-10">
              The objective is not only to introduce korfball to a wider audience but also to <strong className="text-white font-bold">build a sustainable platform</strong> that encourages participation, nurtures talent, and creates long-term opportunities within the sport.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. VISIBILITY & FUTURE GRID */}
      <section className="py-20 bg-[#f8f9fa] border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black italic uppercase tracking-tight text-[#0a1128] mb-6">
              Breaking <span className="text-[#1e40af]">Barriers</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-medium">
              Designed to blend competitive action with accessibility, the Korfball Premier League aims to break conventional barriers and redefine how new sports are perceived in the country.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-10 border border-slate-200 shadow-sm flex items-start gap-6 group hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#1e40af]/10 text-[#1e40af] flex items-center justify-center shrink-0">
                <Globe2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#0a1128] mb-3">Visibility & Recognition</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  By creating structured competition and increasing visibility, the league seeks to build recognition for korfball at both grassroots and professional levels.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-10 border border-slate-200 shadow-sm flex items-start gap-6 group hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#1e40af]/10 text-[#1e40af] flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#0a1128] mb-3">Long-term Initiative</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  With a clear goal of expanding the sporting landscape in India, the league is positioned as a long-term initiative to inspire players, engage fans, and establish korfball as a recognized and competitive sport.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. CLOSING VISION */}
      <section className="py-16 bg-white relative text-center">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="w-16 h-1.5 bg-[#1e40af] mx-auto mb-10" />
            <h2 className="text-3xl md:text-5xl font-display font-medium italic text-[#0a1128] leading-tight mb-8">
              "Through innovation, inclusivity, and strategic development, the Korfball Premier League aims to <span className="font-bold text-[#1e40af]">shape the future of emerging sports in India.</span>"
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 5. GALLERY SECTION (Re-using Bento Grid) */}
      <section id="media" className="py-24 bg-[#f8f9fa] relative z-10 border-t border-slate-200">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-16 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="w-2 h-2 bg-[#1e40af] rotate-45" />
              <span className="text-slate-500 font-bold uppercase tracking-[0.25em] text-xs">
                Media Center
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold italic uppercase text-[#0a1128] tracking-tighter leading-none">
              Action <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] to-[#0ea5e9]">Gallery</span>
            </h2>
          </motion.div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="px-4 md:px-12 w-full max-w-[1800px] mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[280px] gap-3 md:gap-2"
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
                  alt={`Korfball Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0a1128]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a1128]/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/5 p-3 rounded-none hover:bg-white/10 z-[101]"
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
                className="max-w-full max-h-[85vh] object-contain rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#1e40af]/50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
