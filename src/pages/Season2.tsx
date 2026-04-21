import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Trophy, Star, Shield, Zap, TrendingUp, Target, Presentation, Crown, Globe2 } from 'lucide-react';

export default function Season2() {
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
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-brand-gold/30"
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
                        className="mb-8 px-6 py-2 border-2 border-brand-gold bg-brand-gold/10 backdrop-blur-sm shadow-sm text-[#B8860B] font-bold tracking-widest uppercase text-sm md:text-base inline-flex rounded-none items-center gap-2"
                    >
                        <Crown size={18} /> The Championship Season
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase italic tracking-tighter text-brand-midnight mb-6 mix-blend-multiply leading-none drop-shadow-sm"
                    >
                        Season 2
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-brand-gold mb-8 filter drop-shadow-sm"
                    >
                        A Historic Title-Winning Campaign
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-2xl font-medium text-brand-slate max-w-4xl"
                    >
                        A defining chapter marked by dominance, consistency, and a relentless pursuit of excellence—culminating in a historic title-winning campaign.
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
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute bottom-8 left-8 z-20 bg-brand-midnight/90 backdrop-blur-md p-6 border-l-4 border-brand-gold shadow-lg">
                                <div className="text-3xl font-display font-black italic text-brand-gold mb-1">EVOLUTION</div>
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
                        <div className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-4">Overview</div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold italic uppercase tracking-tight mb-8 text-brand-midnight">
                            The <span className="text-[#B8860B] underline decoration-brand-gold/40 underline-offset-8">Breakthrough</span> Moment
                        </h2>
                        <div className="space-y-6 text-brand-midnight/80 text-lg leading-relaxed font-medium mb-10">
                            <p>
                                Season 2 represented a breakthrough moment in the evolution of the Game Changers ecosystem.
                            </p>
                            <p>
                                With stronger competition, rising global attention, and higher stakes, the season showcased the true potential of franchise-based sports at a global level. It was a season where performance met precision, and excellence translated into results on the biggest stage.
                            </p>
                        </div>
                        <div className="p-6 bg-white border border-brand-gold/30 shadow-sm border-l-4 border-l-brand-gold">
                            <p className="font-display italic text-xl font-bold text-brand-midnight">
                                "At the heart of it all was a team that defined the season—South Africa Champions."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. THE CHAMPIONSHIP RUN */}
            <section className="py-12 md:py-16 bg-brand-midnight text-white relative overflow-hidden border-y-8 border-brand-gold">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
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
                            The <span className="text-brand-gold">Championship</span> Run
                        </h2>
                        <p className="text-xl text-brand-slate font-medium">
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
                                className="bg-white/5 border border-brand-gold/20 hover:border-brand-gold p-8 rounded-none transition-all duration-300 group flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-brand-gold group-hover:text-white rounded-none">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider text-white group-hover:text-brand-gold transition-colors">{item.title}</h3>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-xl md:text-2xl font-display font-bold italic uppercase text-brand-gold mt-16 bg-brand-gold/10 inline-block mx-auto max-w-3xl w-full p-6 border border-brand-gold/30"
                    >
                        "A campaign defined by discipline, execution, and a championship mindset."
                    </motion.div>
                </div>
            </section>

            {/* 4. ROAD TO THE TITLE */}
            <section className="py-12 md:py-16 bg-white relative">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tight mb-6 text-brand-midnight">
                            Road To The <span className="text-[#B8860B]">Title</span>
                        </h2>
                        <p className="text-xl text-brand-slate font-medium max-w-3xl mx-auto">
                            The journey to the title was marked by high-intensity matchups and decisive performances at crucial moments.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-brand-kinetic border border-brand-slate/10 p-10 w-full shadow-sm hover:shadow-md transition-shadow relative"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <Trophy size={100} />
                            </div>
                            <div className="text-sm font-bold uppercase tracking-widest text-brand-slate mb-4">Semi-Final (31 July)</div>
                            <h3 className="text-3xl font-display font-black italic uppercase text-brand-midnight">Victory vs Australia</h3>
                        </motion.div>

                        <div className="hidden md:block w-px h-32 bg-brand-gold/30 shrink-0 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-brand-gold">
                                <Zap size={24} />
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#B8860B]/10 to-brand-gold/20 border border-brand-gold/50 p-10 w-full shadow-md hover:shadow-lg transition-shadow relative"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none text-brand-gold">
                                <Crown size={100} />
                            </div>
                            <div className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-4">Final (1 August)</div>
                            <h3 className="text-3xl font-display font-black italic uppercase text-brand-midnight">Victory vs Pakistan</h3>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-brand-midnight/80 font-bold bg-white border border-brand-slate/10 py-6 px-8 inline-block shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]"
                    >
                        Delivering under pressure, the team rose to the occasion when it mattered most—securing the championship in commanding fashion.
                    </motion.div>
                </div>
            </section>

            {/* 5. SQUAD & HEAD COACH GIRD */}
            <section className="py-12 md:py-16 bg-brand-kinetic relative">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* Leadership & Squad */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white border-t-4 border-t-[#B8860B] shadow-lg p-10 md:p-14 h-full flex flex-col justify-center"
                    >
                        <h2 className="text-3xl font-display font-black italic uppercase tracking-tight mb-10 text-brand-midnight pb-4 border-b border-brand-slate/10">
                            Leadership & Squad
                        </h2>

                        <div className="mb-10">
                            <div className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-4">Captain</div>
                            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left mb-4">
                                <img src='https://res.cloudinary.com/dtsuewnbj/image/upload/v1776543201/abd_cz3nna.avif' alt="AB de Villiers" className="w-24 h-24 rounded-full object-cover border-4 border-[#B8860B] shadow-md shrink-0" />
                                <div>
                                    <div className="text-3xl md:text-4xl font-display font-black italic text-brand-midnight mb-2">
                                        AB de Villiers
                                    </div>
                                    <p className="text-brand-midnight/70 font-medium">
                                        A leader known for composure, innovation, and match-winning ability, guiding the team through a dominant and successful campaign.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="text-sm font-bold uppercase tracking-widest text-[#B8860B] mb-4">Key Players</div>
                            <div className="flex flex-wrap gap-4 mb-6">
                                {['AB de Villiers', 'Hashim Amla', 'JP Duminy', 'Imran Tahir'].map((p, i) => (
                                    <div key={i} className="flex items-center gap-3 pr-5 bg-brand-kinetic border border-brand-slate/20 shadow-sm p-2 hover:border-[#B8860B] hover:bg-white transition-all">
                                        <img src={dummyPlayerImg} alt={p} className="w-10 h-10 rounded-full object-cover" />
                                        <span className="text-sm md:text-base font-bold text-brand-midnight">{p}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-brand-midnight/80 font-bold italic">
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
                        className="bg-brand-midnight text-white border-b-4 border-b-brand-gold shadow-lg p-10 md:p-14 h-full flex flex-col justify-center"
                    >
                        <h2 className="text-3xl font-display font-black italic uppercase tracking-tight mb-10 text-white pb-4 border-b border-brand-gold/20">
                            Head Coach
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left mb-8">
                            <img src='https://res.cloudinary.com/dtsuewnbj/image/upload/v1776542844/allan_donald_m21tyt.jpg' alt="Allan Donald" className="w-32 h-40 object-cover border-4 border-brand-gold shadow-lg shrink-0" />
                            <div>
                                <h3 className="text-4xl font-display font-black italic uppercase text-brand-gold mb-3">Allan Donald</h3>
                                <p className="text-white/80 font-medium">
                                    One of the most respected figures in cricket, Allan Donald brought strategic clarity, leadership, and a competitive edge to the team.
                                </p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="font-bold text-brand-gold uppercase tracking-widest text-sm mb-4">His presence ensured:</p>
                            <ul className="space-y-3">
                                {["Strong tactical execution", "Consistent performance levels", "A disciplined and focused team environment"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                                        <span className="text-white font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-brand-gold font-bold italic border-l-2 border-brand-gold pl-4 mt-auto">
                            Under his guidance, South Africa Champions delivered a season that set new standards of excellence.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* 6. DEFINING THE SEASON & LEGACY */}
            <section className="py-12 md:py-16 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-kinetic rounded-full blur-[80px] pointer-events-none transform -translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-black italic uppercase text-brand-midnight mb-6">
                            Defining The <span className="text-[#B8860B]">Season</span>
                        </h2>
                        <p className="text-xl text-brand-slate font-medium mb-8">
                            Season 2 was more than just a tournament—it was a statement.
                        </p>
                        <p className="font-bold text-brand-midnight uppercase tracking-widest text-sm mb-4">It demonstrated:</p>
                        <ul className="space-y-4 mb-8">
                            <li className="p-4 bg-brand-kinetic border border-brand-slate/10 shadow-sm font-bold text-brand-midnight flex gap-3"><Presentation className="text-[#B8860B] shrink-0" /> The strength of the Game Changers franchise model</li>
                            <li className="p-4 bg-brand-kinetic border border-brand-slate/10 shadow-sm font-bold text-brand-midnight flex gap-3"><Globe2 className="text-[#B8860B] shrink-0" /> The global appeal of high-quality competitive sport</li>
                            <li className="p-4 bg-brand-kinetic border border-brand-slate/10 shadow-sm font-bold text-brand-midnight flex gap-3"><Target className="text-[#B8860B] shrink-0" /> The impact of combining legendary talent with strong leadership</li>
                        </ul>
                        <p className="text-lg text-brand-midnight/80 font-bold italic border-l-4 border-[#B8860B] pl-4">
                            It marked the transition from foundation to dominance.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-black italic uppercase text-brand-midnight mb-6">
                            Legacy Of <span className="text-[#B8860B]">Season 2</span>
                        </h2>
                        <p className="text-xl text-brand-slate font-medium mb-8">
                            The championship victory not only defined the season but also elevated the stature of the entire ecosystem.
                        </p>
                        <p className="font-bold text-brand-midnight uppercase tracking-widest text-sm mb-4">It reinforced:</p>
                        <ul className="space-y-4 mb-8">
                            <li className="p-4 bg-white border-2 border-brand-gold/30 shadow-md font-bold text-brand-midnight flex gap-3"><Star className="text-brand-gold shrink-0" /> Credibility on the global stage</li>
                            <li className="p-4 bg-white border-2 border-brand-gold/30 shadow-md font-bold text-brand-midnight flex gap-3"><Trophy className="text-brand-gold shrink-0" /> The ability to compete and win at the highest level</li>
                            <li className="p-4 bg-white border-2 border-brand-gold/30 shadow-md font-bold text-brand-midnight flex gap-3"><Zap className="text-brand-gold shrink-0" /> A growing connection with fans across markets</li>
                        </ul>
                        <p className="text-lg text-brand-midnight/80 font-bold italic bg-brand-gold/10 p-4 border border-brand-gold/20">
                            Season 2 set a new benchmark—one that future seasons will aim to surpass.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 7. CLOSING STATEMENT */}
            <section className="py-12 md:py-16 bg-brand-midnight relative text-center border-t-8 border-[#B8860B] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 w-[80vw] h-[50vh] bg-brand-gold/20 rounded-[100%] blur-[120px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

                <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <Trophy size={64} className="text-brand-gold mb-8 mx-auto drop-shadow-[0_0_15px_rgba(255,193,7,0.5)]" />
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black italic uppercase text-white mb-6 leading-none">
                            Season 2 was the season of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-[#FFC107]">champions.</span>
                        </h2>
                        <p className="text-2xl md:text-4xl font-medium text-white font-display italic mx-auto max-w-4xl">
                            A moment where vision translated into victory—and excellence became legacy.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
