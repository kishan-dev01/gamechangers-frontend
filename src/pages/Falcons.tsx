import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { X, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Falcons() {
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

  const galleryImages = [
    "https://res.cloudinary.com/dtsuewnbj/image/upload/v1777489851/WTL00745_rcrmho.jpg",
    "https://res.cloudinary.com/dtsuewnbj/image/upload/v1777489848/WTL00595_rswdju.jpg",
    "https://res.cloudinary.com/dtsuewnbj/image/upload/v1777489847/WTL00728_stu9f1.jpg",
    "https://res.cloudinary.com/dtsuewnbj/image/upload/v1777489845/WTL00864_i3iojb.jpg",
    "https://res.cloudinary.com/dtsuewnbj/image/upload/v1777489845/WTL00918_gpcosx.jpg",
    "https://res.cloudinary.com/dtsuewnbj/image/upload/v1777489844/WTL00402_jnc84z.jpg"
  ];

  return (
    <div className="bg-[#720b0b] min-h-screen text-white font-sans overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-12">

        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#720b0b]/85 z-10" /> {/* Deep red overlay */}
          <img
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop"
            alt="Stadium Background"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
        </div>

        {/* Giant Blurred Background Text */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-[20vw] font-display font-black uppercase italic tracking-normal text-white/[0.04] whitespace-nowrap blur-[1px] transform -rotate-12"
          >
            FALCONS
          </motion.div>
        </div>

        {/* Animated Glow Blobs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] bg-[#D32424]/40"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-[0%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] bg-[#FFD500]/20"
          />
        </div>

        {/* Foreground Content - 30/70 Split */}
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 lg:gap-16">

          {/* Logo Column - ~30% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-[35%] flex justify-center md:justify-end"
          >
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px] bg-[#5A0808]/40 backdrop-blur-md rounded-full flex items-center justify-center border-[4px] lg:border-[8px] border-[#FFD500] shadow-[0_0_60px_rgba(255,213,0,0.2)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D32424]/50 to-transparent"></div>
              <img
                src="https://res.cloudinary.com/dtsuewnbj/image/upload/v1776853120/IMG_1507_aotwdy.jpg"
                alt="Game Changers Falcons Logo"
                className="w-full h-full object-contain rounded-full drop-shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Text Column - ~70% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-[65%] text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-[6rem] xl:text-[7rem]  font-display font-black uppercase italic tracking-wide text-white mb-6 drop-shadow-2xl">
              Game <br className="hidden md:block" /> Changers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD500] to-[#E5BE00] filter drop-shadow-sm text-5xl sm:text-6xl lg:text-[6rem] xl:text-[7.5rem]">
                Falcons
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg sm:text-xl lg:text-1xl xl:text-2xl font-bold tracking-[0.2em] uppercase text-white/80 mb-8 md:mb-12"
            >
              Excellence. Competitive Spirit. Modern Vision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 1, delay: 1 }}
              className="w-32 md:w-64 h-1.5 lg:h-2 bg-gradient-to-r from-[#FFD500] to-transparent rounded-full origin-left"
            />
          </motion.div>

        </div>
      </section>

      {/* 2. ABOUT THE TEAM */}
      <section className="py-12 md:py-24 relative z-10 bg-[#5A0808] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-5 py-2 border-2 border-[#FFD500] rounded-none text-[#FFD500] font-bold tracking-widest uppercase mb-8 bg-[#FFD500]/5 backdrop-blur-sm shadow-sm">Franchise Legacy</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold italic uppercase tracking-tight mb-8 text-white">
              A dynamic franchise in the <span className="text-[#FFD500] underline decoration-[#FFD500]/40 underline-offset-8">World Tennis League</span>.
            </h2>
            <div className="space-y-6 text-white/80 text-lg leading-relaxed font-medium">
              <p>
                Game Changers Falcons represent a blend of global excellence, competitive spirit, and modern sporting vision. The Falcons franchise has a strong legacy, having previously featured marquee players like Novak Djokovic and Aryna Sabalenka, establishing itself as a prominent name in the league.
              </p>
              <p>
                In 2024, Game Changers took over the Falcons franchise, marking their entry into the world of tennis with a bold and ambitious approach. Since then, the team has competed in two seasons, making an immediate impact by winning the title in their debut season itself. This achievement reflected not only the strength of the squad but also the vision and execution behind the franchise.
              </p>
              <p className="font-bold text-white border-l-4 border-[#FFD500] pl-4 py-2 bg-[#720b0b]/50 shadow-sm">
                With a focus on building a globally competitive team, fostering top-tier talent, and delivering high-quality performances, Game Changers aim to elevate the Falcons franchise to new heights. The goal is to create a lasting legacy in the World Tennis League while engaging fans through world-class tennis and unforgettable moments.
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
            <div className="aspect-[4/5] md:aspect-square relative rounded-none overflow-hidden bg-[#720b0b] border border-white/10 shadow-2xl">
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#5A0808]/90 to-transparent z-10" /> */}
              <img
                src="https://res.cloudinary.com/dtsuewnbj/image/upload/v1776853548/624449744_18080235455018392_4255132193738986441_n_uguc2z.jpg"
                alt="Tennis Match"
                className="w-full h-full object-cover  opacity-90 hover:opacity-100  transition-all duration-700 hover:scale-105"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <div className="text-6xl font-display font-black italic text-[#FFD500] drop-shadow-md">WTL</div>
                <div className="text-xl font-bold tracking-widest uppercase text-white drop-shadow-md">Champions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SEASONS OVERVIEW OVERVIEW - THE RED/WHITE SPLIT */}
      <section className="py-12 md:py-24 bg-white relative border-y border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#720b0b]/5 to-transparent pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tight mb-4 text-[#720b0b]">The <span className="text-[#D32424]">Seasons</span></h2>
            <p className="text-xl text-[#720b0b]/70 font-medium">A journey of dominance and competitive spirit.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* 2024 Season Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group h-full flex flex-col"
            >
              <div className="border border-[#720b0b]/20 bg-[#8c1212] p-8 md:p-12 hover:bg-[#a61717] hover:shadow-[0_20px_50px_rgba(114,11,11,0.2)] transition-all duration-500 hover:border-[#FFD500]/50 h-full flex flex-col relative overflow-hidden flex-grow shadow-lg">
                <div className="absolute top-0 right-0 p-8 opacity-[0.05] font-display font-black text-9xl italic text-white pointer-events-none group-hover:opacity-[0.1] transition-opacity">24</div>

                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="inline-block px-4 py-1 border border-white/30 bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-4 shadow-sm group-hover:border-[#FFD500] group-hover:text-[#FFD500] transition-colors">Abu Dhabi</div>
                    <h3 className="text-4xl font-display font-black italic uppercase text-white group-hover:text-[#FFD500] transition-colors">2024 Season</h3>
                    <div className="text-xl font-bold tracking-widest text-[#FFD500] mt-2 flex items-center gap-2 drop-shadow-sm">
                      <Trophy size={20} /> Champions
                    </div>
                  </div>
                </div>

                <p className="text-white/80 font-medium leading-relaxed mb-10 flex-grow relative z-10">
                  The 2024 season marked a historic beginning for Game Changers Falcons, as it was both the inaugural season under new ownership and a defining moment in the World Tennis League...
                </p>

                <div className="mt-auto relative z-20">
                  <Link to="/teams/falcons/season-2024" className="inline-flex items-center justify-between w-full p-4 bg-white text-[#720b0b] font-bold uppercase tracking-widest text-sm hover:bg-[#FFD500] transition-colors group/btn shadow-md">
                    Explore 2024 Season
                    <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 2025 Season Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group h-full flex flex-col"
            >
              <div className="border border-[#720b0b]/20 bg-[#8c1212] p-8 md:p-12 hover:bg-[#a61717] hover:shadow-[0_20px_50px_rgba(114,11,11,0.2)] transition-all duration-500 hover:border-[#FFD500]/50 h-full flex flex-col relative overflow-hidden flex-grow shadow-lg">
                <div className="absolute top-0 right-0 p-8 opacity-[0.05] font-display font-black text-9xl italic text-white pointer-events-none group-hover:opacity-[0.1] transition-opacity">25</div>

                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="inline-block px-4 py-1 border border-white/30 bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-4 shadow-sm group-hover:border-[#FFD500] group-hover:text-[#FFD500] transition-colors">Bengaluru</div>
                    <h3 className="text-4xl font-display font-black italic uppercase text-white group-hover:text-[#FFD500] transition-colors">2025 Season</h3>
                    <div className="text-xl font-bold tracking-widest text-white/70 mt-2 flex items-center gap-2">
                      Season 4
                    </div>
                  </div>
                </div>

                <p className="text-white/80 font-medium leading-relaxed mb-10 flex-grow relative z-10">
                  Held in Bengaluru, marked Season 4 of the tournament and brought together some of the top international tennis stars for another exciting and competitive edition...
                </p>

                <div className="mt-auto relative z-20">
                  <Link to="/teams/falcons/season-2025" className="inline-flex items-center justify-between w-full p-4 bg-white text-[#720b0b] font-bold uppercase tracking-widest text-sm hover:bg-[#FFD500] transition-colors group/btn shadow-md">
                    Explore 2025 Season
                    <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      <section className="py-12 md:py-16 bg-[#720b0b] relative">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tight mb-4 text-white">Moments of <span className="text-[#FFD500]">Glory</span></h2>
            <p className="text-xl text-white/70 uppercase tracking-widest font-bold">Falcons Gallery</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-2"
          >
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`relative overflow-hidden rounded-none cursor-pointer group aspect-square shadow-sm hover:shadow-2xl transition-shadow ${idx === 0 || idx === 3 ? 'md:col-span-2 md:row-span-2 aspect-auto' : ''}`}
                onClick={() => setSelectedImage(src)}
              >
                <div className="absolute inset-0 bg-[#5A0808]/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={src}
                  alt={`Falcons Gallery view ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-full"
                />
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

    </div>
  );
}