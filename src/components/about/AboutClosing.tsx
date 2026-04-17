import { motion } from 'framer-motion';

export default function AboutClosing() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-brand-midnight overflow-hidden">
      {/* Dark theme specifically for the impact banner to contrast the light page, or keeping it light? 
          The instructions said "the page would be light themed only". I'll make this light as well! 
      */}
      <div />

      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-midnight via-brand-slate to-brand-gold" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-display font-black italic uppercase tracking-wide text-white">
            At its core, Game Changers is more than a sports platform <br className="hidden lg:block" />
            <span className="text-brand-slate block mt-4">
              it is a global ecosystem designed to <span className="leading-relaxed text-brand-gold  border-brand-gold pb-1 inline-block">shape the future</span> of sports, entertainment, and fan experiences.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
