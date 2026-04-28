import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Trophy, Star, Shield, Zap, TrendingUp, Target, Presentation, Crown, Globe2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SouthAfricaSeason2() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const dummyPlayerImg = "https://plus.unsplash.com/premium_photo-1721963696831-91cb0115dca0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Bento gallery array from Lions
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
    <div className="bg-[#062B1E] min-h-screen text-white font-sans overflow-hidden w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 bg-[#062B1E]">
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-[#F5C440]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-[0%] -right-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] bg-[#093D2A]"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 px-6 py-2 border-2 border-[#F5C440] bg-[#F5C440]/10 backdrop-blur-sm shadow-sm text-[#F5C440] font-bold tracking-widest uppercase text-sm md:text-base inline-flex rounded-none items-center gap-2"
          >
            <Crown size={18} /> The Championship Season
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase italic tracking-tighter text-white mb-6 mix-blend-multiply leading-none drop-shadow-sm"
          >
            Season 2
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F5C440] to-[#E3AE1F] mb-8 filter drop-shadow-sm"
          >
            A Historic Title-Winning Campaign
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-2xl font-medium text-white/70 max-w-4xl"
          >
            A defining chapter marked by dominance, consistency, and a relentless pursuit of excellence—culminating in a historic title-winning campaign.
          </motion.p>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="py-12 md:py-16 relative z-10 bg-[#093D2A] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-[#062B1E] border border-white/10 shadow-2xl rounded-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#062B1E]/90 to-transparent z-10 mix-blend-multiply" />
              <img
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2690&auto=format&fit=crop"
                alt="Sports Stadium"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-8 left-8 z-20 bg-[#062B1E]/95 backdrop-blur-md p-6 border-l-4 border-[#F5C440] shadow-lg">
                <div className="text-3xl font-display font-black italic text-[#F5C440] mb-1">EVOLUTION</div>
                <div className="text-sm font-bold tracking-widest uppercase text-white">Higher Stakes, Stronger Competition</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-1 lg:order-2"
          >
            <div className="text-sm font-bold uppercase tracking-widest text-[#F5C440] mb-4">Overview</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold italic uppercase tracking-tight mb-8 text-white">
              The <span className="text-[#F5C440] underline decoration-[#F5C440]/40 underline-offset-8">Breakthrough</span> Moment
            </h2>
            <div className="space-y-6 text-white/80 text-lg leading-relaxed font-medium mb-10">
              <p>
                Season 2 represented a breakthrough moment in the evolution of the Game Changers ecosystem.
              </p>
              <p>
                With stronger competition, rising global attention, and higher stakes, the season showcased the true potential of franchise-based sports at a global level. It was a season where performance met precision, and excellence translated into results on the biggest stage.
              </p>
            </div>
            <div className="p-6 bg-[#062B1E] border border-[#F5C440]/30 shadow-sm border-l-4 border-l-[#F5C440]">
              <p className="font-display italic text-xl font-bold text-white">
                "At the heart of it all was a team that defined the season—South Africa Champions."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE CHAMPIONSHIP RUN */}
      <section className="py-12 md:py-16 bg-[#093D2A] text-white relative overflow-hidden border-y-8 border-[#F5C440]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5C440]/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/4 translate-y-1/4" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tight mb-6 text-white">
              The <span className="text-[#F5C440]">Championship</span> Run
            </h2>
            <p className="text-xl text-white/90 font-medium">
              South Africa Champions delivered one of the most dominant campaigns of the tournament, combining experience, balance, and match-winning performances across every stage.
            </p>
            <p className="mt-4 text-lg text-white/80 font-medium">
              From the league phase to the final, the team maintained exceptional consistency and control, establishing themselves as the strongest side in the competition.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Tournament Winners", icon: <Trophy size={32} /> },
              { title: "Lost only one match in league stage", icon: <Shield size={32} /> },
              { title: "Strong and consistent run throughout", icon: <TrendingUp size={32} /> },
              { title: "Match-winning performances", icon: <Star size={32} /> },
              { title: "Seamless knockout momentum", icon: <Zap size={32} /> },
              { title: "Discipline & Execution", icon: <Target size={32} /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 border border-[#F5C440]/20 hover:border-[#F5C440] p-8 rounded-none transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mx-auto bg-[#F5C440]/10 text-[#F5C440] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-[#F5C440] group-hover:text-white rounded-none">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-white group-hover:text-[#F5C440] transition-colors">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-xl md:text-2xl font-display font-bold italic uppercase text-[#F5C440] mt-16 bg-[#F5C440]/10 inline-block mx-auto max-w-3xl w-full p-6 border border-[#F5C440]/30"
          >
            "A campaign defined by discipline, execution, and a championship mindset."
          </motion.div>
        </div>
      </section>

      {/* 4. ROAD TO THE TITLE */}
      <section className="py-12 md:py-16 bg-[#093D2A] relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tight mb-6 text-white">
              Road To The <span className="text-[#F5C440]">Title</span>
            </h2>
            <p className="text-xl text-white/70 font-medium max-w-3xl mx-auto">
              The journey to the title was marked by high-intensity matchups and decisive performances at crucial moments.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#062B1E] border border-white/10 p-10 w-full shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-white">
                <Trophy size={100} />
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-white/70 mb-4">Semi-Final (31 July)</div>
              <h3 className="text-3xl font-display font-black italic uppercase text-white">Victory vs Australia</h3>
            </motion.div>

            <div className="hidden md:block w-px h-32 bg-[#F5C440]/30 shrink-0 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#093D2A] px-2 text-[#F5C440]">
                <Zap size={24} />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F5C440]/10 to-[#F5C440]/20 border border-[#F5C440]/50 p-10 w-full shadow-md hover:shadow-lg transition-shadow relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none text-[#F5C440]">
                <Crown size={100} />
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-[#F5C440] mb-4">Final (1 August)</div>
              <h3 className="text-3xl font-display font-black italic uppercase text-white">Victory vs Pakistan</h3>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/80 font-bold bg-[#062B1E] border border-white/10 py-6 px-8 inline-block shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]"
          >
            Delivering under pressure, the team rose to the occasion when it mattered most—securing the championship in commanding fashion.
          </motion.div>
        </div>
      </section>

      {/* 5. SQUAD & HEAD COACH GIRD */}
      <section className="py-12 md:py-16 bg-[#062B1E] relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Leadership & Squad */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#093D2A] border-t-4 border-t-[#F5C440] shadow-lg p-10 md:p-14 h-full flex flex-col justify-center"
          >
            <h2 className="text-3xl font-display font-black italic uppercase tracking-tight mb-10 text-white pb-4 border-b border-white/20">
              Leadership & Squad
            </h2>

            <div className="mb-10">
              <div className="text-sm font-bold uppercase tracking-widest text-[#F5C440] mb-4">Captain</div>
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left mb-4">
                <img src='https://res.cloudinary.com/dtsuewnbj/image/upload/v1776543201/abd_cz3nna.avif' alt="AB de Villiers" className="w-24 h-24 rounded-full object-cover border-4 border-[#F5C440] shadow-md shrink-0" />
                <div>
                  <div className="text-3xl md:text-4xl font-display font-black italic text-white mb-2">
                    AB de Villiers
                  </div>
                  <p className="text-white/70 font-medium">
                    A leader known for composure, innovation, and match-winning ability, guiding the team through a dominant and successful campaign.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-[#F5C440] mb-4">Key Players</div>
              <div className="flex flex-wrap gap-4 mb-6">
                {['AB de Villiers', 'Hashim Amla', 'JP Duminy', 'Imran Tahir'].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 pr-5 bg-[#062B1E] border border-white/10 shadow-sm p-2 hover:border-[#F5C440] hover:bg-[#062B1E] transition-all">
                    <img src={dummyPlayerImg} alt={p} className="w-10 h-10 rounded-full object-cover" />
                    <span className="text-sm md:text-base font-bold text-white">{p}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/80 font-bold italic">
                A balanced lineup combining experience, skill, and the ability to perform in high-pressure situations.
              </p>
            </div>
          </motion.div>

          {/* Head Coach */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#093D2A] text-white border-b-4 border-b-[#F5C440] shadow-lg p-10 md:p-14 h-full flex flex-col justify-center"
          >
            <h2 className="text-3xl font-display font-black italic uppercase tracking-tight mb-10 text-white pb-4 border-b border-[#F5C440]/20">
              Head Coach
            </h2>

            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left mb-8">
              <img src='https://res.cloudinary.com/dtsuewnbj/image/upload/v1776542844/allan_donald_m21tyt.jpg' alt="Allan Donald" className="w-32 h-40 object-cover border-4 border-[#F5C440] shadow-lg shrink-0" />
              <div>
                <h3 className="text-4xl font-display font-black italic uppercase text-[#F5C440] mb-3">Allan Donald</h3>
                <p className="text-white/80 font-medium">
                  One of the most respected figures in cricket, Allan Donald brought strategic clarity, leadership, and a competitive edge to the team.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-bold text-[#F5C440] uppercase tracking-widest text-sm mb-4">His presence ensured:</p>
              <ul className="space-y-3">
                {["Strong tactical execution", "Consistent performance levels", "A disciplined and focused team environment"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#F5C440] rounded-full"></div>
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[#F5C440] font-bold italic border-l-2 border-[#F5C440] pl-4 mt-auto">
              Under his guidance, South Africa Champions delivered a season that set new standards of excellence.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 6. DEFINING THE SEASON & LEGACY */}
      <section className="py-12 md:py-16 bg-[#062B1E] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#093D2A] rounded-full blur-[80px] pointer-events-none transform -translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black italic uppercase text-white mb-6">
              Defining The <span className="text-[#F5C440]">Season</span>
            </h2>
            <p className="text-xl text-white/70 font-medium mb-8">
              Season 2 was more than just a tournament—it was a statement.
            </p>
            <p className="font-bold text-white uppercase tracking-widest text-sm mb-4">It demonstrated:</p>
            <ul className="space-y-4 mb-8">
              <li className="p-4 bg-[#093D2A] border border-white/10 shadow-sm font-bold text-white flex gap-3"><Presentation className="text-[#F5C440] shrink-0" /> The strength of the Game Changers franchise model</li>
              <li className="p-4 bg-[#093D2A] border border-white/10 shadow-sm font-bold text-white flex gap-3"><Globe2 className="text-[#F5C440] shrink-0" /> The global appeal of high-quality competitive sport</li>
              <li className="p-4 bg-[#093D2A] border border-white/10 shadow-sm font-bold text-white flex gap-3"><Target className="text-[#F5C440] shrink-0" /> The impact of combining legendary talent with strong leadership</li>
            </ul>
            <p className="text-lg text-white/80 font-bold italic border-l-4 border-[#F5C440] pl-4">
              It marked the transition from foundation to dominance.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black italic uppercase text-white mb-6">
              Legacy Of <span className="text-[#F5C440]">Season 2</span>
            </h2>
            <p className="text-xl text-white/70 font-medium mb-8">
              The championship victory not only defined the season but also elevated the stature of the entire ecosystem.
            </p>
            <p className="font-bold text-white uppercase tracking-widest text-sm mb-4">It reinforced:</p>
            <ul className="space-y-4 mb-8">
              <li className="p-4 bg-[#062B1E] border-2 border-[#F5C440]/30 shadow-md font-bold text-white flex gap-3"><Star className="text-[#F5C440] shrink-0" /> Credibility on the global stage</li>
              <li className="p-4 bg-[#062B1E] border-2 border-[#F5C440]/30 shadow-md font-bold text-white flex gap-3"><Trophy className="text-[#F5C440] shrink-0" /> The ability to compete and win at the highest level</li>
              <li className="p-4 bg-[#062B1E] border-2 border-[#F5C440]/30 shadow-md font-bold text-white flex gap-3"><Zap className="text-[#F5C440] shrink-0" /> A growing connection with fans across markets</li>
            </ul>
            <p className="text-lg text-white/80 font-bold italic bg-[#F5C440]/10 p-4 border border-[#F5C440]/20">
              Season 2 set a new benchmark—one that future seasons will aim to surpass.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION (Bento Grid) */}
      <section id="media" className="py-24 md:py-32 bg-[#093D2A] relative z-10 border-t border-white/10">
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
                <div className="w-2 h-2 bg-[#F5C440] rotate-45" />
                <span className="text-white/60 font-bold uppercase tracking-[0.25em] text-xs">
                  Championship Glory
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold italic uppercase text-white tracking-tighter leading-none">
                Season 2 <span className="text-[#F5C440]">Gallery</span>
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
                className={`relative w-full h-full overflow-hidden group cursor-zoom-in bg-[#062B1E] border border-white/10 shadow-sm hover:shadow-md transition-shadow ${img.gridClasses}`}
              >
                <img
                  src={img.src}
                  alt={`SA Season 2 Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#093D2A]/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-[#F5C440] transition-colors bg-white/5 p-3 rounded-none hover:bg-[#062B1E]/10 z-[101]"
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
                className="max-w-full max-h-[85vh] object-contain rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#F5C440]/50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. CLOSING STATEMENT */}
      <section className="py-12 md:py-16 bg-[#093D2A] relative text-center border-t-8 border-[#F5C440] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-[80vw] h-[50vh] bg-[#F5C440]/20 rounded-[100%] blur-[120px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Trophy size={64} className="text-[#F5C440] mb-8 mx-auto drop-shadow-[0_0_15px_rgba(245,196,64,0.5)]" />
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black italic uppercase text-white mb-6 leading-none">
              Season 2 was the season of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C440] to-[#E3AE1F]">champions.</span>
            </h2>
            <p className="text-2xl md:text-4xl font-medium text-white font-display italic mx-auto max-w-4xl">
              A moment where vision translated into victory—and excellence became legacy.
            </p>
            <div className="mt-12 flex justify-center">
              <Link to="/teams/south-africa-champions" className="px-8 py-4 bg-[#F5C440] text-[#062B1E] text-sm font-bold tracking-widest uppercase hover:bg-[#062B1E] hover:text-[#F5C440] transition-colors shadow-md border-2 border-transparent hover:border-[#F5C440]">
                Back to Team Overview
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
