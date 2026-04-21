import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Globe2, Crosshair, Trophy, Shield, Zap, TrendingUp, Target, Presentation } from 'lucide-react';

export default function Season1() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    const dummyPlayerImg = "https://plus.unsplash.com/premium_photo-1721963696831-91cb0115dca0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="bg-brand-kinetic min-h-screen text-brand-midnight font-sans overflow-hidden w-full">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
                <div className="absolute inset-0 pointer-events-none z-0 bg-white">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-brand-gold/20"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                        className="absolute bottom-[0%] -right-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] bg-brand-slate/10"
                    />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-12 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-8 px-6 py-2 border-2 border-brand-gold bg-brand-gold/10 backdrop-blur-sm shadow-sm text-brand-midnight font-bold tracking-widest uppercase text-sm md:text-base inline-block rounded-none"
                    >
                        Inaugural Season
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase italic tracking-tighter text-brand-midnight mb-6 mix-blend-multiply leading-none drop-shadow-sm"
                    >
                        Season 1
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-[#FFC107] mb-8 filter drop-shadow-sm"
                    >
                        The Beginning of a Global Journey
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-2xl font-medium text-brand-slate max-w-4xl"
                    >
                        The inaugural season marked the start of Game Changers’ entry into the world of global sports—bringing together legendary players, new energy, and a vision to build something truly exceptional.
                    </motion.p>
                </div>
            </section>

            {/* 2. OVERVIEW */}
            <section className="py-12 md:py-16 relative z-10 bg-brand-kinetic border-t border-brand-slate/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="aspect-[4/3] relative overflow-hidden bg-white border border-brand-slate/10 shadow-2xl rounded-none">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-midnight/60 to-transparent z-10 mix-blend-multiply" />
                            <img
                                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2690&auto=format&fit=crop"
                                alt="Sports Stadium"
                                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute bottom-8 left-8 z-20 bg-brand-midnight/90 backdrop-blur-md p-6 border-l-4 border-brand-gold">
                                <div className="text-3xl font-display font-black italic text-white mb-1">FOUNDATION</div>
                                <div className="text-sm font-bold tracking-widest uppercase text-brand-gold">The First Edition</div>
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
                        <h2 className="text-4xl md:text-5xl font-display font-bold italic uppercase tracking-tight mb-8 text-brand-midnight">
                            The <span className="text-[#B8860B] underline decoration-brand-gold/40 underline-offset-8">Foundation</span>
                        </h2>
                        <div className="space-y-6 text-brand-midnight/80 text-lg leading-relaxed font-medium mb-10">
                            <p>
                                Season 1 represented the foundation of what would grow into a competitive and globally recognized sports platform.
                            </p>
                            <p>
                                As the first edition of the league, it brought together iconic players from around the world, capturing global attention and setting the tone for future seasons.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "New beginnings",
                                "Global participation",
                                "The coming together of legendary talent",
                                "Establishing a strong competitive identity"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-white border border-brand-slate/10 rounded-none shadow-sm hover:border-brand-gold transition-colors">
                                    <div className="shrink-0 mt-1 text-brand-gold"><Crosshair size={20} /></div>
                                    <span className="font-bold text-brand-midnight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. THE START OF GAME CHANGERS */}
            <section className="py-12 md:py-16 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/10 to-transparent pointer-events-none" />
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tight mb-6 text-brand-midnight">
                            The Start of <span className="text-brand-gold">Game Changers</span>
                        </h2>
                        <p className="text-xl text-brand-slate font-medium">For Game Changers, Season 1 was more than just participation—it was the beginning of building a multi-franchise sports ecosystem.</p>
                        <div className="mt-8 text-lg font-bold uppercase tracking-widest text-brand-midnight">The season laid the groundwork for:</div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { title: "Franchise Build", icon: <Shield size={32} />, desc: "Long-term franchise development" },
                            { title: "Global Reach", icon: <Globe2 size={32} />, desc: "Global audience engagement" },
                            { title: "Elite Play", icon: <Trophy size={32} />, desc: "High-quality competitive formats" },
                            { title: "Ecosystem Ops", icon: <TrendingUp size={32} />, desc: "Expansion into multiple sports and leagues" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="bg-brand-kinetic border border-brand-slate/10 hover:border-brand-gold p-8 rounded-none hover:bg-white hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-xl text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-brand-gold group-hover:text-white rounded-none">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-display font-bold italic uppercase tracking-wider mb-4 text-brand-midnight group-hover:text-brand-gold transition-colors">{item.title}</h3>
                                <p className="text-brand-slate/80 leading-relaxed font-bold">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. S.A. CHAMPIONS - SEASON 1 JOURNEY */}
            <section className="py-12 md:py-16 bg-brand-midnight text-white relative border-y-8 border-brand-gold overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-black italic uppercase tracking-tight mb-4 text-white">
                            South Africa Champions <br /> <span className="text-brand-gold">Season 1 Journey</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
                            As one of the key teams in the inaugural season, South Africa Champions focused on building identity, cohesion, and momentum.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Highlights */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="bg-white/5 border border-brand-gold/20 p-8 md:p-12 backdrop-blur-sm"
                        >
                            <h3 className="text-2xl font-display font-bold italic uppercase mb-8 text-brand-gold flex items-center gap-3">
                                <Zap size={24} /> Performance Highlights
                            </h3>
                            <p className="text-white/80 font-medium mb-8">
                                The team showcased the strength of experienced players while adapting to a new competitive environment on a global stage.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Delivered strong and impactful performances throughout the tournament",
                                    "Established a cohesive and competitive team structure",
                                    "Built a solid foundation for future success"
                                ].map((highlight, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-brand-gold shrink-0"></div>
                                        <span className="text-white text-lg">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Squad */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="bg-brand-kinetic text-brand-midnight p-8 md:p-12 border border-brand-slate/10 flex flex-col justify-center"
                        >
                            <h3 className="text-2xl font-display font-bold italic uppercase mb-10 text-brand-midnight border-b border-brand-slate/20 pb-4">
                                Leadership & Squad
                            </h3>

                            <div className="mb-10">
                                <div className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-4">Captain</div>
                                <div className="flex items-center gap-4">
                                    <img src='https://res.cloudinary.com/dtsuewnbj/image/upload/v1776543153/Jacques_Kallis_3_mgbj2o.jpg' alt="Jacques Kallis" className="w-20 h-20 rounded-full object-cover border-2 border-[#B8860B] shadow-md" />
                                    <div className="text-3xl lg:text-4xl font-display font-black italic text-brand-midnight">
                                        Jacques Kallis
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-4">Key Players</div>
                                <div className="flex flex-wrap gap-4">
                                    {['Jacques Kallis', 'Dale Steyn', 'Imran Tahir', 'JP Duminy'].map((p, i) => (
                                        <div key={i} className="flex items-center gap-3 pr-5 bg-white border border-brand-slate/20 rounded-none shadow-sm p-2 hover:border-[#B8860B] transition-colors">
                                            <img src={dummyPlayerImg} alt={p} className="w-10 h-10 rounded-full object-cover" />
                                            <span className="text-sm md:text-base font-bold text-brand-midnight">{p}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. HEAD COACH */}
            <section className="py-12 md:py-16 bg-white relative">
                <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="bg-brand-kinetic border border-brand-slate/10 shadow-lg p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center"
                    >
                        <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                            <img src='https://res.cloudinary.com/dtsuewnbj/image/upload/v1776542844/allan_donald_m21tyt.jpg' alt="Allan Donald" className="w-48 h-56 object-cover border-4 border-brand-gold shadow-xl mb-6" />
                            <div className="text-sm font-bold tracking-widest uppercase text-brand-slate mb-2">Head Coach</div>
                            <h2 className="text-4xl font-display font-black italic uppercase text-brand-midnight">Allan Donald</h2>
                        </div>
                        <div className="w-full md:w-2/3">
                            <p className="text-brand-midnight/80 text-lg leading-relaxed font-medium mb-6">
                                During the inaugural season, South Africa Champions were guided by Allan Donald, whose experience and leadership played a crucial role in shaping the team’s identity.
                            </p>
                            <p className="text-brand-midnight font-bold mb-6">As the league’s first season, his presence brought:</p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="px-5 py-2 bg-white border border-brand-slate/20 text-brand-midnight font-bold uppercase tracking-widest text-sm shadow-sm">Stability</span>
                                <span className="px-5 py-2 bg-white border border-brand-slate/20 text-brand-midnight font-bold uppercase tracking-widest text-sm shadow-sm">Direction</span>
                                <span className="px-5 py-2 bg-white border border-brand-slate/20 text-brand-midnight font-bold uppercase tracking-widest text-sm shadow-sm">Competitive Mindset</span>
                            </div>
                            <div className="p-4 border-l-4 border-brand-gold bg-white shadow-sm italic text-brand-midnight/80 font-medium">
                                "His focus on discipline and performance helped lay a strong foundation for the team, setting the tone for future success."
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 6. IMPACT & LEGACY */}
            <section className="py-12 md:py-16 bg-brand-kinetic relative grid grid-cols-1 md:grid-cols-2">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="p-12 md:p-20 bg-brand-kinetic flex flex-col justify-center border-r border-brand-slate/10"
                >
                    <div className="text-brand-gold mb-6"><Target size={48} /></div>
                    <h2 className="text-3xl md:text-5xl font-display font-black italic uppercase text-brand-midnight mb-8">Impact of <br /> Season 1</h2>
                    <p className="text-xl text-brand-midnight/80 font-medium mb-8">
                        Season 1 was instrumental in establishing:
                    </p>
                    <ul className="space-y-4 mb-10">
                        {["The credibility of the league", "The strength of franchise-based competition", "A growing global audience for the format"].map((item, i) => (
                            <li key={i} className="flex gap-4 items-center">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <span className="text-lg font-bold text-brand-midnight">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-brand-slate font-bold italic">
                        It marked the transition from vision to execution, proving the potential of Game Changers as a global sports platform.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="p-12 md:p-20 bg-white flex flex-col justify-center"
                >
                    <div className="text-[#B8860B] mb-6"><Presentation size={48} /></div>
                    <h2 className="text-3xl md:text-5xl font-display font-black italic uppercase text-brand-midnight mb-8">Legacy of the <br /> Inaugural Season</h2>
                    <p className="text-xl text-brand-midnight/80 font-medium mb-8">
                        The inaugural season was not just about competition—it was about <strong className="text-brand-gold">setting standards</strong>.
                    </p>
                    <p className="text-lg font-bold mb-6 text-brand-slate uppercase tracking-widest">It created a strong base for:</p>
                    <ul className="space-y-6">
                        {["Future championship-winning performances", "Expansion across sports and geographies", "Building a recognizable and respected global sports brand"].map((item, i) => (
                            <li key={i} className="flex gap-4 p-4 bg-brand-kinetic border border-brand-slate/10 shadow-sm">
                                <span className="text-lg font-bold text-brand-midnight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            {/* 7. CLOSING STATEMENT */}
            <section className="py-12 md:py-16 bg-brand-midnight relative text-center border-t-4 border-brand-gold overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <div className="w-16 h-1 bg-brand-gold mx-auto mb-12"></div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black italic uppercase text-white mb-8 leading-tight">
                            Season 1 laid the <span className="text-brand-gold">foundation.</span>
                        </h2>
                        <p className="text-xl md:text-3xl font-medium text-white leading-snug mx-auto max-w-4xl">
                            It was the beginning of a journey that continues to evolve—shaping the future of global sports, one season at a time.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
