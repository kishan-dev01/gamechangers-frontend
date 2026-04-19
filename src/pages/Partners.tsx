import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Globe2, Rocket, Puzzle, TrendingUp, Presentation, PlayCircle, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partners() {
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

    return (
        <div className="bg-brand-kinetic min-h-screen text-brand-midnight font-sans overflow-hidden w-full">
            {/* HERO SECTION */}
            <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
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
                        className="mb-8 px-6 py-2 border-2 border-brand-gold bg-brand-gold/10 backdrop-blur-sm shadow-sm text-brand-midnight font-bold tracking-widest uppercase text-sm md:text-base"
                    >
                        Partner With Game Changers
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase italic tracking-tighter text-brand-midnight mb-6 mix-blend-multiply leading-none"
                    >
                        Building the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-[#FFC107] filter drop-shadow-sm">Future</span> of Global
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase italic tracking-tighter text-brand-slate mb-8"
                    >
                        Sports & Entertainment
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-2xl font-medium text-brand-midnight/80 max-w-3xl"
                    >
                        Join a fast-growing global platform at the intersection of sport, entertainment, and fan engagement.
                    </motion.p>
                </div>
            </section>

            {/* ABOUT THE OPPORTUNITY */}
            <section className="py-16 md:py-24 relative z-10 bg-brand-kinetic border-t border-brand-slate/10">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] relative overflow-hidden bg-white border border-brand-slate/10 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-midnight/40 to-transparent z-10 mix-blend-multiply" />
                            <img
                                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2690&auto=format&fit=crop"
                                alt="Sports Stadium"
                                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute bottom-8 left-8 z-20 bg-brand-midnight/80 backdrop-blur-md p-6 border-l-4 border-brand-gold">
                                <div className="text-4xl font-display font-black italic text-white mb-1">$600B+</div>
                                <div className="text-sm font-bold tracking-widest uppercase text-brand-gold">Global Sports Market</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold italic uppercase tracking-tight mb-8 text-brand-midnight">
                            The <span className="text-brand-gold underline decoration-brand-gold/40 underline-offset-8">Opportunity</span>
                        </h2>
                        <div className="space-y-6 text-brand-midnight/80 text-lg md:text-xl leading-relaxed font-medium">
                            <p>
                                Game Changers Sporting Network is a fast-growing sports and entertainment platform focused on building scalable, high-value global sports IPs across cricket, tennis, and padel. The platform is also a co-founder of the Stars Golf League, expanding its presence across premium and emerging sporting formats.
                            </p>
                            <p>
                                Operating within a global sports market valued at over <strong className="text-brand-midnight">$600 billion</strong>, Game Changers is strategically positioned to capitalize on the rapid growth of franchise-based leagues and modern sports entertainment ecosystems.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHY PARTNER WITH US */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/5 to-transparent pointer-events-none" />
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tight mb-6 text-brand-midnight">
                            Why <span className="text-brand-gold">Partner</span> With Us
                        </h2>
                        <div className="w-24 h-1 bg-brand-gold mx-auto mb-6" />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { title: "Global Market Opportunity", icon: <Globe2 size={32} />, desc: "Tap into one of the fastest-growing global industries, driven by increasing viewership, digital consumption, and evolving fan engagement." },
                            { title: "Proven Execution", icon: <Rocket size={32} />, desc: "Since its inception in 2024, Game Changers has rapidly built a multi-franchise ecosystem with demonstrated success at the highest levels." },
                            { title: "Scalable Franchise Model", icon: <Puzzle size={32} />, desc: "A portfolio-driven approach to building and scaling globally relevant sports properties across multiple formats and markets." },
                            { title: "Expanding Global Reach", icon: <TrendingUp size={32} />, desc: "Positioned to engage hundreds of millions of sports fans across key international markets through digital and live experiences." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="bg-brand-kinetic border border-brand-slate/10 hover:border-brand-gold p-8 rounded-none hover:bg-white hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-xl"
                            >
                                <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-brand-gold group-hover:text-white rounded-none">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-display font-bold italic uppercase tracking-wider mb-4 text-brand-midnight group-hover:text-brand-gold transition-colors">{item.title}</h3>
                                <p className="text-brand-slate/80 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* BUSINESS MODEL & ECOSYSTEM APPROACH */}
            <section className="py-16 md:py-24 bg-brand-midnight text-white relative border-y-8 border-brand-gold overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Business Model */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="flex flex-col h-full"
                        >
                            <div className="inline-block px-4 py-1 border border-brand-gold/50 text-brand-gold text-xs font-bold tracking-widest uppercase mb-6 w-fit bg-brand-gold/10">Revenue</div>
                            <h3 className="text-3xl md:text-5xl font-display font-black italic uppercase mb-8 text-white">Business Model</h3>
                            <p className="text-white text-lg mb-10">
                                Game Changers is building an integrated ecosystem designed to unlock diversified and sustainable revenue streams across:
                            </p>

                            <div className="flex flex-col gap-4 mb-8">
                                {[
                                    { text: "Media Rights", icon: <PlayCircle size={20} className="text-brand-gold" /> },
                                    { text: "Sponsorships", icon: <Star size={20} className="text-brand-gold" /> },
                                    { text: "Franchise Valuation", icon: <TrendingUp size={20} className="text-brand-gold" /> },
                                    { text: "Licensing", icon: <Presentation size={20} className="text-brand-gold" /> },
                                    { text: "Live Experiences", icon: <Users size={20} className="text-brand-gold" /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 hover:bg-white/10 hover:border-brand-gold/50 transition-colors">
                                        <div className="p-2 bg-brand-gold/10 rounded-none">{item.icon}</div>
                                        <span className="text-lg md:text-xl font-bold uppercase tracking-widest">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-brand-gold font-medium italic text-lg mt-auto">
                                This multi-layered approach ensures long-term scalability and commercial viability.
                            </p>
                        </motion.div>

                        {/* Ecosystem Approach */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="bg-brand-kinetic text-brand-midnight p-8 md:p-12 relative overflow-hidden h-full flex flex-col"
                        >
                            <div className="inline-block px-4 py-1 border border-brand-midnight/20 text-brand-slate text-xs font-bold tracking-widest uppercase mb-6 w-fit bg-white">Strategy</div>
                            <h3 className="text-3xl md:text-5xl font-display font-black italic uppercase mb-8">Ecosystem Approach</h3>
                            <p className="text-brand-midnight/80 text-lg md:text-xl mb-12 font-medium">
                                At its core, Game Changers operates at the intersection of:
                            </p>

                            <div className="flex-grow flex items-center justify-center relative my-12">
                                {/* Venn Diagram style illustration */}
                                <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] flex items-center justify-center">
                                    <div className="absolute top-0 right-4 sm:right-8 w-36 h-36 sm:w-48 sm:h-48 rounded-full border-2 border-brand-midnight/20 bg-white/50 backdrop-blur-sm flex items-center justify-center shadow-lg transform translate-x-4">
                                        <span className="font-bold uppercase tracking-widest text-brand-midnight text-xs sm:text-base text-center px-2">Sport</span>
                                    </div>
                                    <div className="absolute bottom-4 right-1/2 w-36 h-36 sm:w-48 sm:h-48 rounded-full border-2 border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm flex items-center justify-center shadow-lg transform translate-x-1/2 translate-y-4 z-10">
                                        <span className="font-bold uppercase tracking-widest text-[#B8860B] text-xs sm:text-base text-center px-2">Fan Engagement</span>
                                    </div>
                                    <div className="absolute top-0 left-4 sm:left-8 w-36 h-36 sm:w-48 sm:h-48 rounded-full border-2 border-brand-slate/20 bg-brand-kinetic/80 backdrop-blur-sm flex items-center justify-center shadow-lg transform -translate-x-4">
                                        <span className="font-bold uppercase tracking-widest text-brand-slate text-xs sm:text-base text-center px-2">Entertainment</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-brand-midnight font-bold sm:text-lg text-center mt-auto bg-white/50 p-4 border border-brand-slate/10 backdrop-blur-md">
                                By combining competitive sport with immersive experiences, the platform is redefining how modern audiences interact with global sporting properties.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* LEADERSHIP & CTA */}
            <section className="py-16 md:py-24 bg-white relative text-center">
                <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="mb-16"
                    >
                        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-slate mb-4">Leadership</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-black italic uppercase text-brand-midnight mb-6">
                            Driven By <span className="text-brand-gold border-b-4 border-brand-gold">Vision</span>
                        </h3>
                        <p className="text-xl md:text-2xl text-brand-midnight/80 font-medium leading-relaxed">
                            Led by entrepreneur <strong className="text-brand-midnight">Amandeep Singh</strong>, Game Changers is driven by a vision to build globally relevant, commercially strong sports IPs while connecting industries across sport, entertainment, and culture.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="bg-brand-kinetic p-8 md:p-16 border-2 border-brand-slate/10 shadow-xl rounded-none"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold italic uppercase mb-6 text-brand-midnight">
                            Ready to Join the Movement?
                        </h2>
                        <p className="text-lg md:text-xl text-brand-slate font-medium mb-10 max-w-2xl mx-auto">
                            Explore partnership opportunities with Game Changers and be part of a rapidly evolving global sports ecosystem.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-10 py-5 bg-brand-gold text-brand-midnight text-lg font-black uppercase tracking-widest hover:bg-brand-midnight hover:text-brand-gold transition-all duration-300 shadow-[4px_4px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                        >
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
