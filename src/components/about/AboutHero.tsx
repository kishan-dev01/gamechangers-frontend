import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      {/* Light subtle geometric accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-slate/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs md:text-sm block mb-4 border-l-2 border-brand-gold pl-3">
            About Game Changers
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black italic uppercase text-brand-midnight tracking-tighter mb-8 leading-[0.9]">
            The Future of <br />
            <span className="text-brand-slate">Sports IP</span>
          </h1>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-brand-midnight/80 font-medium leading-relaxed">
              Game Changers Sporting Network is a fast-growing sports and entertainment platform focused on building scalable, high-value global sports intellectual properties across cricket, tennis, and padel.
            </p>
            <p className="text-base md:text-lg text-brand-midnight/70 font-medium leading-relaxed">
              The platform is also a co-founder of the Stars Golf League, expanding its footprint across emerging and premium sporting formats. Operating within a global sports market valued at over $600 billion, Game Changers is strategically positioned to capitalize on the rapid growth of franchise-based leagues and modern sports entertainment formats.
            </p>
          </div>
        </motion.div>

        {/* Graphic Area */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[400px] md:h-[500px] w-full"
        >
          {/* Main Image */}
          <div className="absolute inset-0 bg-brand-kinetic border border-brand-slate/10 shadow-lg overflow-hidden">
            <img
              src="/about.jpg"
              alt="Sports Stadium"
              className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            />
          </div>
          {/* Accent decoration */}
          {/* <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-midnight border border-brand-slate/20 shadow-xl overflow-hidden flex items-center justify-center p-6">
            <div className="text-center">
              <span className="block text-4xl font-display font-black italic uppercase text-brand-gold">$600B+</span>
              <span className="block text-xs font-bold uppercase tracking-widest text-white mt-2">Global Market</span>
            </div>
          </div> */}
        </motion.div>

      </div>
    </section>
  );
}
