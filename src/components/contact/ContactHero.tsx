import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center bg-brand-midnight overflow-hidden">
      {/* Background Styling / Abstract Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-neon/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[140px]" />
        {/* Subtle grid layer if desired */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
      </div>
      
      <div className="relative z-10 text-center px-6 mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm md:text-base block mb-4">
            Let's collaborate
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black italic uppercase text-white tracking-tighter mb-4">
            Get In <span className="text-brand-neon neon-text-glow">Touch</span>
          </h1>
          <p className="text-brand-kinetic/80 font-medium text-lg max-w-xl mx-auto mt-6">
            We are always looking for partners, athletes, and visionaries to change the game with.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
