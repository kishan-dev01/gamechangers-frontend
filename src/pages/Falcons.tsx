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

  // Gallery dummy images (5-6 as requested)
  const galleryImages = Array.from({ length: 6 }).map((_, i) =>
    `https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&sig=${i}` // Tennis placeholder
  );

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-brand-midnight font-sans overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 pointer-events-none z-0 bg-white">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px] bg-[#D32424]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-[0%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-[80px] bg-[#FFD500]"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-4 border-2 border-brand-slate/10"
          >
            {/* Using standard logo as falcons logo for now */}
            <img src="/logo.png" alt="Game Changers Falcons Logo" className="w-full h-full object-contain drop-shadow-md" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-display font-black uppercase italic tracking-tighter text-brand-midnight mb-6 mix-blend-multiply"
          >
            Game Changers <br className="hidden md:block" /> <span className="text-[#D32424] drop-shadow-sm">Falcons</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl font-bold tracking-widest uppercase text-brand-slate mb-8 px-4"
          >
            Excellence. Competitive Spirit. Modern Vision.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#D32424] to-transparent"
          />
        </div>
      </section>

      {/* 2. ABOUT THE TEAM */}
      <section className="py-12 md:py-24 relative z-10 bg-[#F8F9FA] border-t border-brand-slate/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-5 py-2 border-2 border-[#D32424] rounded-none text-[#D32424] font-bold tracking-widest uppercase mb-8 bg-[#D32424]/5 backdrop-blur-sm shadow-sm">Franchise Legacy</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold italic uppercase tracking-tight mb-8 text-brand-midnight">
              A dynamic franchise in the <span className="text-[#D32424] underline decoration-[#D32424]/40 underline-offset-8">World Tennis League</span>.
            </h2>
            <div className="space-y-6 text-brand-midnight/80 text-lg leading-relaxed font-medium">
              <p>
                Game Changers Falcons represent a blend of global excellence, competitive spirit, and modern sporting vision. The Falcons franchise has a strong legacy, having previously featured marquee players like Novak Djokovic and Aryna Sabalenka, establishing itself as a prominent name in the league.
              </p>
              <p>
                In 2024, Game Changers took over the Falcons franchise, marking their entry into the world of tennis with a bold and ambitious approach. Since then, the team has competed in two seasons, making an immediate impact by winning the title in their debut season itself. This achievement reflected not only the strength of the squad but also the vision and execution behind the franchise.
              </p>
              <p className="font-bold text-brand-midnight border-l-4 border-[#FFD500] pl-4 py-2 bg-white shadow-sm">
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
            <div className="aspect-[4/5] md:aspect-square relative rounded-none overflow-hidden bg-white border border-brand-slate/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-midnight/70 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?q=80&w=2670&auto=format&fit=crop"
                alt="Tennis Match"
                className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all duration-700 hover:scale-105"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <div className="text-6xl font-display font-black italic text-[#FFD500] drop-shadow-md">WTL</div>
                <div className="text-xl font-bold tracking-widest uppercase text-white drop-shadow-md">Champions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SEASONS OVERVIEW OVERVIEW */}
      <section className="py-16 md:py-24 bg-white relative border-y border-brand-slate/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D32424]/5 to-transparent pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tight mb-4 text-brand-midnight">The <span className="text-[#D32424]">Seasons</span></h2>
            <p className="text-xl text-brand-slate font-medium">A journey of dominance and competitive spirit.</p>
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
              <div className="border border-brand-slate/10 bg-[#F8F9FA] p-8 md:p-12 hover:bg-white hover:shadow-xl transition-all duration-500 hover:border-[#D32424]/30 h-full flex flex-col relative overflow-hidden flex-grow shadow-sm">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] font-display font-black text-9xl italic text-brand-midnight pointer-events-none group-hover:opacity-[0.06] transition-opacity">24</div>
                
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="inline-block px-4 py-1 border border-brand-slate/20 bg-white text-brand-slate text-xs font-bold tracking-widest uppercase mb-4 shadow-sm group-hover:border-[#D32424] group-hover:text-[#D32424] transition-colors">Abu Dhabi</div>
                    <h3 className="text-4xl font-display font-black italic uppercase text-brand-midnight group-hover:text-[#D32424] transition-colors">2024 Season</h3>
                    <div className="text-xl font-bold tracking-widest text-[#FFD500] mt-2 flex items-center gap-2 drop-shadow-sm">
                      <Trophy size={20} /> Champions
                    </div>
                  </div>
                </div>
                
                <p className="text-brand-midnight/80 font-medium leading-relaxed mb-10 flex-grow">
                  The 2024 season marked a historic beginning for Game Changers Falcons, as it was both the inaugural season under new ownership and a defining moment in the World Tennis League...
                </p>

                <div className="mt-auto relative z-20">
                    <Link to="/teams/falcons/season-2024" className="inline-flex items-center justify-between w-full p-4 bg-brand-midnight text-white font-bold uppercase tracking-widest text-sm hover:bg-[#D32424] transition-colors group/btn shadow-md">
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
              <div className="border border-brand-slate/10 bg-[#F8F9FA] p-8 md:p-12 hover:bg-white hover:shadow-xl transition-all duration-500 hover:border-[#D32424]/30 h-full flex flex-col relative overflow-hidden flex-grow shadow-sm">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] font-display font-black text-9xl italic text-brand-midnight pointer-events-none group-hover:opacity-[0.06] transition-opacity">25</div>
                
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="inline-block px-4 py-1 border border-brand-slate/20 bg-white text-brand-slate text-xs font-bold tracking-widest uppercase mb-4 shadow-sm group-hover:border-[#D32424] group-hover:text-[#D32424] transition-colors">Bengaluru</div>
                    <h3 className="text-4xl font-display font-black italic uppercase text-brand-midnight group-hover:text-[#D32424] transition-colors">2025 Season</h3>
                    <div className="text-xl font-bold tracking-widest text-brand-slate mt-2 flex items-center gap-2">
                       Season 4
                    </div>
                  </div>
                </div>
                
                <p className="text-brand-midnight/80 font-medium leading-relaxed mb-10 flex-grow">
                  Held in Bengaluru, marked Season 4 of the tournament and brought together some of the top international tennis stars for another exciting and competitive edition...
                </p>

                <div className="mt-auto relative z-20">
                    <Link to="/teams/falcons/season-2025" className="inline-flex items-center justify-between w-full p-4 bg-brand-midnight text-white font-bold uppercase tracking-widest text-sm hover:bg-[#D32424] transition-colors group/btn shadow-md">
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
      <section className="py-16 md:py-24 bg-[#F8F9FA] relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tight mb-4 text-brand-midnight">Moments of <span className="text-[#D32424]">Glory</span></h2>
            <p className="text-xl text-brand-slate uppercase tracking-widest font-bold">Falcons Gallery</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`relative overflow-hidden rounded-none cursor-pointer group aspect-square shadow-sm hover:shadow-xl transition-shadow ${idx === 0 || idx === 3 ? 'md:col-span-2 md:row-span-2 aspect-auto' : ''}`}
                onClick={() => setSelectedImage(src)}
              >
                <div className="absolute inset-0 bg-brand-midnight/10 group-hover:bg-[#D32424]/10 transition-colors duration-500 z-10" />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-midnight/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
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
