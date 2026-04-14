import { motion, useScroll, useTransform } from 'framer-motion';
import { Target } from 'lucide-react';
import { useRef } from 'react';

const ventures = [
  "They See Records",
  "MWAH Entertainment",
  "The Great Western Holidays"
];

const achievements = [
  "Game Changers Falcons — World Tennis League winners",
  "South Africa Champions — World Championship of Legends winners",
  "Proven execution in building scalable sports IPs"
];

export default function AboutUs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="relative z-10 border-t border-brand-slate/5"
      style={{ minHeight: "260vh" }}
    >
      {/* Sticky viewport-locked wrapper */}
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center pt-16 md:pt-20 pb-10 md:pb-12 shrink-0"
          >
            <span className="text-brand-slate font-bold uppercase tracking-[0.2em] text-sm block mb-4">
              Leadership
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold italic uppercase tracking-tighter text-brand-midnight">
              The Vision Behind <span className="text-brand-gold">Game Changers</span>
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 flex-1 overflow-hidden pb-8">

            {/* LEFT — Pinned image, never moves */}
            <div className="w-full lg:w-[40%] h-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full relative overflow-hidden bg-brand-kinetic border border-brand-slate/10 group"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src="https://www.rprb2b.com/api/placeholder/user1.jpg"
                  alt="Amandeep Singh"
                  className="w-full h-full object-cover opacity-90 contrast-125"
                />
                <div className="absolute inset-0 bg-brand-midnight/10 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-gold" />
              </motion.div>
            </div>

            {/* RIGHT — Translates upward as section scrolls */}
            <div className="w-full lg:w-[60%] h-full overflow-hidden">
              <motion.div
                style={{ y: rightY }}
                className="flex flex-col justify-start space-y-12 py-4"
              >

                {/* A. Name + Title */}
                <div>
                  <h3 className="text-5xl md:text-7xl font-display font-black italic uppercase text-brand-midnight tracking-tighter mb-4">
                    Amandeep Singh
                  </h3>
                  <p className="text-brand-slate font-bold uppercase tracking-widest text-sm border-l-4 border-brand-gold pl-4 py-1">
                    Founder, Game Changers
                  </p>
                </div>

                {/* B & C. Intro + Vision */}
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl font-medium text-brand-midnight/90 leading-relaxed max-w-2xl">
                    A dynamic entrepreneur building high-value platforms across sports, entertainment, music, and hospitality.
                  </p>
                  <div className="bg-brand-kinetic p-6 md:p-8 border-l border-brand-slate/10 shadow-sm max-w-2xl">
                    <p className="text-lg text-brand-midnight/80 leading-relaxed font-medium">
                      Founder of Game Changers, driving one of the fastest-growing global sports ecosystems focused on scalable and commercially powerful sports IPs.
                    </p>
                  </div>
                </div>

                {/* D. Achievements */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-slate mb-6 flex items-center gap-4">
                    Sports Achievements
                    <div className="flex-1 h-px bg-brand-slate/10" />
                  </h4>
                  <ul className="space-y-5 max-w-2xl">
                    {achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <Target className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                        <span className="text-brand-midnight font-medium text-lg md:text-xl leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* E. Ventures */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-slate mb-6 flex items-center gap-4">
                    Other Ventures
                    <div className="flex-1 h-px bg-brand-slate/10" />
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {ventures.map((venture, idx) => (
                      <span
                        key={idx}
                        className="px-6 py-3 bg-white border border-brand-slate/10 text-brand-midnight text-xs md:text-sm font-bold uppercase tracking-widest hover:border-brand-gold hover:bg-brand-kinetic transition-colors shadow-sm"
                      >
                        {venture}
                      </span>
                    ))}
                  </div>
                </div>

                {/* F. Closing Statement */}
                <div className="pt-10 border-t border-brand-slate/10 pb-16">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-display font-black italic uppercase tracking-tight text-brand-midnight leading-tight max-w-2xl">
                    A visionary leader at the intersection of{' '}
                    <span className="text-brand-gold decoration-brand-gold/30 underline-offset-8">
                      sport, entertainment, and culture
                    </span>.
                  </p>
                </div>

                {/* G. Blank Space */}
                <div className="pt-10 border-t border-brand-slate/10 pb-16">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-display font-black italic uppercase tracking-tight text-brand-midnight leading-tight max-w-2xl">

                  </p>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}