import { motion } from 'framer-motion';

const founders = [
  {
    name: "Amandeep Singh",
    role: "Co-Founder",
    desc: "A prominent entrepreneur and significant figure in the entertainment industry. His investments in Bollywood and Punjabi cinema highlight his commitment to cultural enrichment and creative expression.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop"
  },
  {
    name: "Harry Singh",
    role: "Co-Founder & Visionary",
    desc: "A visionary business leader and Global Sales Director of NKD Life. Co-owner of NKD Life and One Filta, he drives groundbreaking innovations in water purification, promoting eco-friendly solutions.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop"
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-brand-slate relative slash-divider-both z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Story Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold italic uppercase text-brand-kinetic tracking-tighter leading-none">
              Champions of <br/>
              <span className="text-brand-neon neon-text-glow">Passion & Precision</span>
            </h2>
            <div className="w-20 h-2 bg-brand-gold mt-6 neon-glow" />
            <p className="text-lg text-brand-kinetic/80 leading-relaxed font-medium">
              Game Changers, based in the UAE, is a dynamic startup revolutionizing sports and championing humanitarian causes. Our mission pushes the boundaries of excellence and entertainment. We aren't just about winning; we create unforgettable moments and inspire fans worldwide, promoting ethical practices and uplifting communities.
            </p>
          </motion.div>

          {/* Founders Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 lg:gap-8">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="group relative overflow-hidden aspect-[3/4] glass-card flex items-end"
              >
                <img 
                  src={founder.img} 
                  alt={founder.name}
                  className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 p-6 text-white w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="uppercase tracking-widest text-xs font-bold text-brand-neon mb-2 block">
                    {founder.role}
                  </span>
                  <h3 className="text-2xl font-display font-bold italic uppercase tracking-tighter mb-3 text-brand-kinetic">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-brand-kinetic/80 leading-snug line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {founder.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
