import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { X, Trophy, Target, Shield, Zap } from 'lucide-react';

export default function SouthAfricaChampions() {
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

  // Gallery dummy images
  const galleryImages = Array.from({ length: 14 }).map(() =>
    `https://res.cloudinary.com/dtsuewnbj/image/upload/v1776165411/WTL00342_akxqxb.jpg` // Placeholder cricket/sports image
  );

  const dummyPlayerImg = "https://plus.unsplash.com/premium_photo-1721963696831-91cb0115dca0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const legendaryLineup = ['AB de Villiers', 'Dale Steyn', 'Jacques Kallis', 'Imran Tahir', 'Hashim Amla', 'JP Duminy'];
  // Duplicate lineup for seamless infinite marquee scroll
  const marqueeItems = [...legendaryLineup, ...legendaryLineup];

  return (
    <div className="bg-brand-kinetic min-h-screen text-brand-midnight font-sans overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 pointer-events-none z-0 bg-white">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px] bg-brand-gold/20"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-[0%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-[80px] bg-brand-slate/10"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center border-[4px] border-brand-gold shadow-[0_10px_30px_rgba(255,193,7,0.2)] p-4"
          >
            <img src="/logo.png" alt="SA Champions Logo" className="w-full h-full object-contain drop-shadow-md" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-display font-black uppercase italic tracking-tighter text-brand-midnight mb-6 mix-blend-multiply"
          >
            South Africa <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#FFC107] filter drop-shadow-sm">Champions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl font-bold tracking-widest uppercase text-brand-slate mb-8"
          >
            Legacy. Excellence. Dominance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-24 h-1.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
          />
        </div>
      </section>

      {/* 2. ABOUT THE TEAM */}
      <section className="py-12 md:py-16 relative z-10 bg-brand-kinetic border-t border-brand-slate/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-5 py-2 border-2 border-brand-gold rounded-none text-brand-midnight font-bold tracking-widest uppercase mb-8 bg-brand-gold/10 backdrop-blur-sm shadow-sm">About The Team</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold italic uppercase tracking-tight mb-8 text-brand-midnight">
              A team built on <span className="text-[#B8860B] underline decoration-brand-gold/40 underline-offset-8">legacy</span>, powered by <span className="text-[#B8860B] underline decoration-brand-gold/40 underline-offset-8">legends</span>.
            </h2>
            <div className="space-y-6 text-brand-midnight/80 text-lg leading-relaxed font-medium">
              <p>
                South Africa Champions represent a legacy of excellence, bringing together some of the finest cricketing icons known for their skill, consistency, and match-winning impact.
              </p>
              <p>
                Reflecting the fearless and competitive spirit of South African cricket, the team has established itself as a dominant force in the league. With a clear vision to inspire fans, celebrate the legacy of the game, and set new benchmarks through world-class performances, South Africa Champions continue to uphold the highest standards of competitive cricket.
              </p>
              <p>
                Competing in the World Championship of Legends, a premier platform that brings together legendary cricketers from across the globe, the team consistently delivers high-quality, competitive cricket while building on its rich and evolving legacy.
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
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-midnight/80 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2938&auto=format&fit=crop"
                alt="Cricket Stadium"
                className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <div className="text-6xl font-display font-black italic text-brand-gold drop-shadow-md">WCL</div>
                <div className="text-xl font-bold tracking-widest uppercase text-white drop-shadow-md">Contenders</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. TEAM PHILOSOPHY */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/10 to-transparent pointer-events-none" />
        <div className="absolute -left-20 top-20 w-64 h-64 bg-brand-slate/5 rounded-full blur-[80px]" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tight mb-6 text-brand-midnight">Team <span className="text-[#B8860B]">Philosophy</span></h2>
            <p className="text-xl text-brand-slate font-medium">At the core of South Africa Champions lies a culture defined by discipline, resilience, and a winning mindset.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Fearless Cricket", icon: <Zap size={32} />, desc: "Playing an aggressive, uninhibited brand of cricket that puts opponents on the back foot." },
              { title: "Tactical Excellence", icon: <Target size={32} />, desc: "Strategic brilliance, reading the game situations perfectly to outsmart the opposition." },
              { title: "Strong Leadership", icon: <Shield size={32} />, desc: "Guided by legendary minds who lead from the front with absolute clarity and calm." },
              { title: "Consistency Under Pressure", icon: <Trophy size={32} />, desc: "Thriving when the stakes are highest, delivering clutch performances consistently." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-brand-kinetic border-2 border-transparent hover:border-brand-gold p-8 rounded-none hover:bg-white hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-none bg-brand-gold/10 text-[#B8860B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-brand-gold group-hover:text-white group-hover:shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold italic uppercase tracking-wider mb-4 text-brand-midnight group-hover:text-[#B8860B] transition-colors">{item.title}</h3>
                <p className="text-brand-slate/80 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center w-full mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-xl md:text-2xl font-bold tracking-widest uppercase text-brand-slate bg-brand-kinetic w-full max-w-4xl p-8 rounded-none border border-brand-gold/30 shadow-sm"
            >
              <span className="text-[#B8860B]">"</span>Every match is approached with the intent to dominate, perform, and inspire—both on and off the field.<span className="text-[#B8860B]">"</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. ACHIEVEMENTS & CHAMPIONS RUN */}
      <section className="py-12 md:py-16 relative bg-brand-kinetic">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="w-full lg:w-1/3"
            >
              <div className="sticky top-32">
                <h2 className="text-5xl md:text-7xl font-display font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-brand-midnight to-brand-slate leading-none mb-6">
                  Champions.
                </h2>
                <div className="text-2xl font-bold tracking-widest uppercase text-[#B8860B] mb-6">World Championship of Legends <br /> <span className="text-brand-slate text-base">(Season 2)</span></div>
                <p className="text-brand-midnight/80 font-medium text-lg leading-relaxed mb-8">
                  The 2025 season marked a historic campaign for South Africa Champions as they emerged as champions, showcasing dominance and consistency throughout the tournament.
                </p>
                <div className="p-6 border-l-4 border-brand-gold bg-white shadow-sm rounded-none">
                  <p className="font-display text-xl italic font-bold text-brand-midnight">"A campaign defined by control, composure, and championship mentality."</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:w-2/3 flex flex-col gap-6 pt-10"
            >
              {/* Stats Typographic Timeline instead of 5 Cards */}
              <div className="flex flex-col gap-8 mb-8">
                {[
                  "Lost only one match in the league stage",
                  "Maintained a strong and consistent run throughout",
                  "Delivered match-winning performances across departments",
                  "Carried momentum seamlessly into knockout stages",
                  "Clinched the title in a commanding fashion"
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="relative pl-10  hover:border-[#B8860B] py-2 transition-all duration-300 group"
                  >
                    <span className="absolute -left-10 md:-left-12 top-[-20px] text-6xl md:text-7xl font-display font-black italic text-brand-slate/5 group-hover:text-brand-gold/20 transition-colors pointer-events-none">0{i + 1}</span>
                    <p className="text-xl md:text-2xl md:left-5 font-display font-bold italic tracking-wide text-brand-midnight relative z-10 group-hover:text-[#B8860B] transition-colors">{stat}</p>
                  </motion.div>
                ))}
              </div>

              {/* Knockout Card */}
              <motion.div
                variants={fadeUp}
                className="w-full bg-gradient-to-r from-brand-gold/10 to-white border border-brand-gold/40 p-10 rounded-none shadow-lg backdrop-blur-md"
              >
                <h3 className="text-2xl font-display font-bold italic uppercase tracking-wider text-[#B8860B] mb-6 border-b border-brand-gold/20 pb-4">Season Highlights</h3>
                <div className="flex flex-col md:flex-row gap-8 justify-around">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="text-sm font-bold tracking-widest uppercase text-brand-slate mb-2">Semi-Final (31 July)</div>
                    <div className="text-3xl font-black italic uppercase text-brand-midnight">Victory vs Australia</div>
                  </div>
                  <div className="w-px bg-brand-gold/30 hidden md:block"></div>
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="text-sm font-bold tracking-widest uppercase text-brand-slate mb-2">Final (1 August)</div>
                    <div className="text-3xl font-black italic uppercase text-[#B8860B] drop-shadow-sm">Victory vs Pakistan</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SEASONS RECAP & SQUAD */}
      <section className="py-12 md:py-16 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Season 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group h-full"
            >
              <div className="border border-brand-slate/10 shadow-sm rounded-none p-8 md:p-12 bg-brand-kinetic hover:bg-white hover:shadow-xl transition-all duration-500 hover:border-brand-slate/30 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] font-display font-black text-9xl italic text-brand-midnight group-hover:text-brand-slate transition-colors pointer-events-none">S1</div>
                <div className="inline-block px-4 py-1 border border-brand-slate/20 bg-white rounded-none text-brand-slate text-xs font-bold tracking-widest uppercase mb-6 w-fit">2024</div>
                <h3 className="text-4xl font-display font-black italic uppercase mb-6 text-brand-midnight">Season 1<span className="block text-xl text-brand-slate mt-2 font-bold tracking-widest normal-case">The Foundation</span></h3>

                <p className="text-brand-midnight/70 font-medium mb-12 leading-relaxed">
                  The inaugural season marked the beginning of an exciting journey. The focus was on building team identity, establishing momentum, and showcasing the strength of experienced players globally.
                </p>

                <div className="mt-auto">
                  <div className="mb-6 pb-6 border-b border-brand-slate/10">
                    <div className="text-sm font-bold uppercase tracking-widest text-brand-slate mb-4">Captain</div>
                    <div className="flex items-center gap-4">
                      <img src='https://res.cloudinary.com/dtsuewnbj/image/upload/v1776543153/Jacques_Kallis_3_mgbj2o.jpg' alt="Jacques Kallis" className="w-16 h-16 rounded-full object-cover border-2 border-brand-slate/20 shadow-sm" />
                      <div className="text-3xl font-display font-bold italic text-brand-midnight">
                        Jacques Kallis
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-brand-slate mb-4">Key Players</div>
                    <div className="flex flex-wrap gap-3">
                      {['Jacques Kallis', 'Dale Steyn', 'Imran Tahir', 'JP Duminy'].map((p, i) => (
                        <div key={i} className="flex items-center gap-2 pr-4 bg-white border border-brand-slate/10 rounded-full shadow-sm pr-4 p-1">
                          <img src={dummyPlayerImg} alt={p} className="w-8 h-8 rounded-full object-cover" />
                          <span className="text-sm font-bold text-brand-midnight">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Season 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group h-full"
            >
              <div className="border border-brand-gold/40 rounded-none p-8 md:p-12 bg-gradient-to-br from-brand-gold/5 via-white to-white relative overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] font-display font-black text-9xl italic text-brand-midnight pointer-events-none">S2</div>
                <div className="inline-block px-4 py-1 border border-brand-gold/50 rounded-none text-[#B8860B] text-xs font-bold tracking-widest uppercase mb-6 w-fit bg-brand-gold/10">2025</div>
                <h3 className="text-4xl font-display font-black italic uppercase mb-6 text-brand-midnight">Season 2<span className="block text-xl text-[#B8860B] mt-2 font-bold tracking-widest normal-case">Champions Run</span></h3>

                <p className="text-brand-midnight/80 font-medium mb-12 leading-relaxed">
                  A historic and defining season where we established complete dominance. The team demonstrated exceptional balance, depth, and execution, emerging as the strongest side.
                </p>

                <div className="mt-auto">
                  <div className="mb-6 pb-6 border-b border-brand-gold/20 flex justify-between items-center">
                    <div>
                      <div className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-4">Captain</div>
                      <div className="flex items-center gap-4">
                        <img src='https://res.cloudinary.com/dtsuewnbj/image/upload/v1776543201/abd_cz3nna.avif' alt="AB de Villiers" className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold shadow-sm" />
                        <div className="text-3xl font-display font-bold italic text-brand-midnight flex items-center gap-3">
                          AB de Villiers
                        </div>
                      </div>
                    </div>
                    <Trophy size={40} className="text-brand-gold drop-shadow-md hidden sm:block" />
                  </div>

                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-4">Key Players</div>
                    <div className="flex flex-wrap gap-3">
                      {['AB de Villiers', 'Hashim Amla', 'JP Duminy', 'Imran Tahir'].map((p, i) => (
                        <div key={i} className="flex items-center gap-2 pr-4 bg-brand-gold/5 border border-brand-gold/30 rounded-full shadow-sm p-1">
                          <img src={dummyPlayerImg} alt={p} className="w-8 h-8 rounded-full object-cover" />
                          <span className="text-sm font-bold text-[#B8860B]">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. HEADCOACH & LEGENDARY LINEUP */}
      <section className="py-12 md:py-16 bg-brand-kinetic border-y border-brand-slate/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          {/* Head Coach */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white p-8 md:p-12 shadow-md border border-brand-slate/10 rounded-none h-full flex flex-col justify-center"
          >
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-8">
              <img src='https://res.cloudinary.com/dtsuewnbj/image/upload/v1776542844/allan_donald_m21tyt.jpg' alt="Allan Donald" className="w-40 h-48 object-cover rounded-none border-4 border-brand-gold shadow-lg" />
              <div>
                <div className="text-sm font-bold tracking-widest uppercase text-[#B8860B] mb-4">Head Coach</div>
                <h2 className="text-5xl font-display font-black italic uppercase text-brand-midnight">Allan Donald</h2>
              </div>
            </div>
            <div className="space-y-6 text-brand-midnight/70 font-medium text-lg leading-relaxed">
              <p>One of the most respected fast bowlers in cricket history, Allan Donald brings unmatched experience, authority, and strategic depth to the team.</p>
              <p>Known for his aggressive mindset and deep understanding of the game, he plays a crucial role in shaping team performance and maintaining a competitive edge.</p>
              <p>Under his guidance, South Africa Champions continue to build a culture of excellence, discipline, and winning mentality—ensuring players consistently perform at their best.</p>
            </div>
          </motion.div>

          {/* Lineup (Scrolling Carousel) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white p-8 md:p-12 rounded-none border border-brand-slate/10 shadow-md h-full flex flex-col justify-center"
          >
            <div className="text-xl font-bold tracking-widest uppercase text-brand-midnight mb-2">Legendary Lineup</div>
            <p className="text-brand-slate/60 mb-10 font-medium">Over the seasons, featuring some of the biggest names in world cricket.</p>

            {/* Auto Scrolling Infinite Marquee Carousel */}
            <div className="relative w-full overflow-hidden flex items-center h-60">
              {/* Gradient overlays to smooth the edges visually */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex gap-6 w-max cursor-pointer"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                whileHover={{ animationPlayState: "paused" }} // Stops scrolling exactly when hovered
              >
                {marqueeItems.map((player, i) => (
                  <div key={i} className="flex flex-col items-center justify-center gap-4 bg-brand-kinetic p-6 rounded-none w-48 shadow-sm hover:border-[#B8860B] hover:shadow-md transition-all shrink-0 group">
                    <img src={dummyPlayerImg} alt={player} className="w-20 h-20 rounded-full object-cover group-hover:border-brand-gold transition-colors" />
                    <div className="text-lg font-bold uppercase tracking-wider text-center text-brand-midnight group-hover:text-[#B8860B] transition-colors">{player}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-10 pt-8 border-t border-brand-slate/10 text-center font-display italic text-lg text-brand-slate/80 font-medium">
              "A lineup that brings together experience, skill, and match-winning pedigree."
            </div>
          </motion.div>

        </div>
      </section>

      {/* 7. GALLERY SECTION */}
      <section className="py-12 md:py-16 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tight mb-4 text-brand-midnight">A Legacy in <span className="text-[#B8860B]">Focus</span></h2>
            <p className="text-xl text-brand-slate uppercase tracking-widest font-bold">Team Gallery</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2"
          >
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`relative overflow-hidden rounded-none cursor-pointer group aspect-square shadow-sm hover:shadow-xl transition-shadow ${idx === 0 || idx === 7 ? 'md:col-span-2 md:row-span-2 aspect-auto' : ''}`}
                onClick={() => setSelectedImage(src)}
              >
                <div className="absolute inset-0 bg-brand-midnight/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={src}
                  alt={`Gallery view ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 max-h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. CLOSING STATEMENT */}
      <section className="py-12 md:py-16 relative flex items-center justify-center bg-brand-kinetic border-t-8 border-brand-gold overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full max-w-[1400px] mx-auto px-6 text-center relative z-10 py-16"
        >
          <div className="mb-8 flex justify-center">
            <img src="/logo.png" alt="Logo" className="h-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100 drop-shadow-md" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black italic uppercase leading-tight md:leading-tight mb-8 text-brand-midnight block max-w-6xl mx-auto">
            South Africa Champions are more than just a team—they are a symbol of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-brand-gold filter drop-shadow-sm">legacy</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-brand-gold filter drop-shadow-sm">excellence</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-brand-gold filter drop-shadow-sm">competitive greatness</span>.
          </h2>
          <p className="text-xl md:text-2xl text-brand-slate font-medium tracking-wide max-w-4xl mx-auto">
            With a strong foundation, world-class talent, and a relentless drive to win, the team continues to set new standards in global cricket and inspire fans across the world.
          </p>
        </motion.div>
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
                className="max-w-full max-h-[85vh] object-contain rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-brand-slate/50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
