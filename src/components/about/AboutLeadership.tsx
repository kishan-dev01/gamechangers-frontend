import { motion } from 'framer-motion';

export default function AboutLeadership() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Leadership Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs md:text-sm block mb-4 border-l-2 border-brand-gold pl-3">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black italic uppercase text-brand-midnight tracking-tighter">
            Visionary <span className="text-brand-slate">Foundations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-span-5 relative"
          >
            {/* Minimalist image container */}
            <div className="relative h-full min-h-[500px] lg:min-h-full border border-brand-slate/10 bg-brand-kinetic shadow-xl overflow-hidden p-4">
              <div className="w-full h-full overflow-hidden border border-brand-slate/10 relative">
                <img
                  src="https://res.cloudinary.com/dtsuewnbj/image/upload/v1777413320/amandeep-singh_i5zddc.png"
                  alt="Amandeep Singh"
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-105"
                />
                {/* subtle overlay to blend with light theme */}
                <div className="absolute inset-0 bg-brand-midnight/10 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
            {/* Geometric Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-brand-kinetic -z-10" />
          </motion.div>

          {/* Biography Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 lg:col-span-7 flex flex-col justify-center"
          >
            <div>
              <h3 className="text-5xl md:text-6xl font-display font-black italic uppercase text-brand-midnight tracking-tighter mb-2">
                Amandeep <span className="text-brand-gold">Singh</span>
              </h3>
              <p className="text-brand-slate font-bold uppercase tracking-widest text-sm mb-10 pb-4 border-b border-brand-slate/10">
                Founder – Game Changers
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-brand-midnight font-medium leading-relaxed">
                Amandeep Singh is a dynamic entrepreneur building scalable, high-value platforms across sports, entertainment, music, and hospitality. As the Founder of Game Changers, he has rapidly created one of the fastest-growing global sports and entertainment ecosystems, with a clear focus on developing commercially strong and globally relevant sports IPs.
              </p>

              <p className="text-lg text-brand-midnight/80 font-medium leading-relaxed">
                In a short span, he has demonstrated proven execution in building and scaling sports franchises on the global stage, establishing a strong foundation for long-term growth and expansion.
              </p>

              <div className="pt-6 mt-6 border-t border-brand-slate/10">
                <p className="text-lg text-brand-midnight/70 font-medium leading-relaxed italic border-l-4 border-brand-gold pl-4">
                  "Beyond sports, Amandeep leads a diversified portfolio across music, entertainment, and hospitality, while also being a strategic investor in film industries. His ability to connect industries and audiences positions him as a visionary leader at the intersection of sport, entertainment, and culture."
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
