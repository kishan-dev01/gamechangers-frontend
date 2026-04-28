import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Target, Zap, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FalconsSeason2025() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Animation variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const dummyPlayerImg = "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2674&auto=format&fit=crop";

  const squad = [
    { name: "Danill Medvedev", image: "https://images.unsplash.com/photo-1587280501635-6cb10cebf4ef?q=80&w=2670&auto=format&fit=crop" },
    { name: "Rohan Bopanna", image: "https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?q=80&w=2670&auto=format&fit=crop" },
    { name: "Magda Linette", image: "https://images.unsplash.com/photo-1594917454807-640f807abfa9?q=80&w=2650&auto=format&fit=crop" },
    { name: "Sahaja Yamalapalli", image: "https://images.unsplash.com/photo-1625296839395-5ac8490a187a?q=80&w=2574&auto=format&fit=crop" },
  ];

  // Gallery dummy images for the season, matching Lions 7-image bento layout
  const galleryImages = [
    {
      src: `https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sig=20`,
      gridClasses: "col-span-1 md:col-span-8 row-span-1 md:row-span-2",
    },
    {
      src: `https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sig=21`,
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
    },
    {
      src: `https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sig=22`,
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
    },
    {
      src: `https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sig=23`,
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-2",
    },
    {
      src: `https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sig=24`,
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
    },
    {
      src: `https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sig=25`,
      gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
    },
    {
      src: `https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sig=26`,
      gridClasses: "col-span-1 md:col-span-8 row-span-1 md:row-span-1",
    },
  ];

  return (
    <div className="bg-[#720b0b] min-h-screen text-white font-sans overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70dvh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px] bg-[#D32424]/40"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-2 border-2 border-[#FFD500] rounded-none text-[#FFD500] font-bold tracking-widest uppercase bg-[#FFD500]/10 backdrop-blur-sm shadow-sm md:text-lg">
              Bengaluru
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-display font-black uppercase italic tracking-tighter text-white mb-6 mix-blend-multiply"
          >
            2025 <span className="text-[#FFD500] drop-shadow-sm">Season</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl font-bold tracking-widest uppercase text-white/70 mb-8 px-4"
          >
            A Global Platform
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#FFD500] to-transparent"
          />
        </div>
      </section>

      {/* 2. SEASON OVERVIEW */}
      <section className="py-12 md:py-16 relative z-10 bg-[#5A0808] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold italic uppercase tracking-tight mb-8 text-white">
              Season 4 of the <span className="text-[#FFD500] underline decoration-[#FFD500]/40 underline-offset-8">Tournament</span>
            </h2>
            <div className="space-y-6 text-white/80 text-xl leading-relaxed font-medium max-w-4xl mx-auto">
              <p>
                The 2025 season of the World Tennis League, held in Bengaluru, marked Season 4 of the tournament and brought together some of the top international tennis stars for another exciting and competitive edition.
              </p>
              <p>
                In a significant step forward, the league also featured Indian players in every team for the first time, providing them with a global platform to compete alongside some of the biggest names in the sport.
              </p>
              <p className="border-l-4 border-[#FFD500] pl-6 text-left py-2 font-bold text-white bg-[#8c1212] p-6 shadow-sm">
                Building on their successful debut season, Game Changers Falcons entered the tournament with strong momentum and confidence. The team once again showcased a competitive edge and strong synergy, continuing to establish themselves as a consistent and formidable presence in the league.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE SQUAD */}
      <section className="py-12 md:py-16 bg-[#720b0b] relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tight mb-4 text-white">The <span className="text-[#FFD500]">Squad</span></h2>
            <p className="text-xl text-white/70 font-medium max-w-3xl mx-auto">
              A diverse lineup showcasing competitive edge and strong synergy.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {squad.map((player, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group cursor-default">
                <div className="aspect-[3/4] relative overflow-hidden bg-[#5A0808] border border-white/10 shadow-sm mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#720b0b]/90 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="text-[#FFD500] text-sm font-bold tracking-widest uppercase mb-1 flex items-center gap-2">
                      <Target size={16} /> Player
                    </div>
                    <div className="text-2xl font-display font-bold italic uppercase tracking-wider text-white">
                      {player.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 4. COACH DETAILS */}
      <section className="py-12 md:py-16 bg-[#5A0808] border-t border-white/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square md:aspect-[4/5] overflow-hidden border-2 border-[#FFD500] p-2 bg-[#8c1212] shadow-xl relative z-10">
              <img
                src={dummyPlayerImg}
                alt="John-Laffnie de Jager"
                className="w-full h-full object-cover filter contrast-125"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 text-9xl font-display font-black italic text-[#FFD500]/10 pointer-events-none z-0">
              COACH
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="order-1 lg:order-2"
          >
            <div className="text-sm font-bold tracking-widest uppercase text-[#FFD500] mb-4 flex items-center gap-2">
              <Zap size={18} /> Head Coach
            </div>
            <h2 className="text-5xl font-display font-black italic uppercase text-white mb-8">
              John-Laffnie de Jager
            </h2>
            <div className="space-y-6 text-white/70 font-medium text-xl leading-relaxed">
              <p>
                The team continued under the guidance of head coach John-Laffnie de Jager, whose leadership ensured consistency and focus across the season.
              </p>
              <div className="p-6 bg-[#8c1212] border-l-4 border-[#FFD500] shadow-sm mt-8">
                <p className="font-display italic text-white font-bold">
                  "His ability to adapt strategies and manage a diverse lineup played an important role in sustaining the team’s competitive edge."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. MEDIA GALLERY SECTION */}
      <section className="py-12 md:py-16 bg-[#720b0b] relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tight mb-4 text-white">Season <span className="text-[#FFD500]">Highlights</span></h2>
            <p className="text-xl text-white/70 uppercase tracking-widest font-bold">Media Gallery</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[280px] gap-3 md:gap-1"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                onClick={() => setSelectedImage(img.src)}
                className={`relative w-full h-full overflow-hidden group cursor-zoom-in bg-[#5A0808] border border-white/10 shadow-sm hover:shadow-md transition-shadow ${img.gridClasses}`}
              >
                <img
                  src={img.src}
                  alt={`Season Gallery view ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#5A0808]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#5A0808]/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
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
                className="max-w-full max-h-[85vh] object-contain rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#FFD500]/50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. BACK NAVIGATION */}
      <section className="py-12 bg-[#5A0808] border-t border-white/10 flex justify-center">
        <Link to="/teams/falcons" className="px-8 py-4 bg-white text-[#720b0b] text-sm font-bold tracking-widest uppercase hover:bg-[#FFD500] transition-colors shadow-md">
          Back to Falcons
        </Link>
      </section>

    </div>
  );
}
