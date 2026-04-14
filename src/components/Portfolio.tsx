import { motion } from 'framer-motion';

const portfolioItems = [
  {
    id: 'falcons',
    title: 'Falcons',
    sport: 'Tennis',
    desc: 'Masters of the court, unparalleled skill, determination, and teamwork.',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?q=80&w=2940&auto=format&fit=crop',
    colSpan: 'md:col-span-2 lg:col-span-8',
    rowSpan: 'md:row-span-2 lg:row-span-2',
    height: 'h-[50vh] md:h-full'
  },
  {
    id: 'lions',
    title: 'Lions',
    sport: 'Padel',
    desc: 'Agile, fierce, dynamic, captivating audiences with precision and power.',
    image: 'https://images.unsplash.com/photo-1662916174776-9d332997193b?q=80&w=2940&auto=format&fit=crop',
    colSpan: 'md:col-span-1 lg:col-span-4',
    rowSpan: 'md:row-span-1 lg:row-span-1',
    height: 'h-[40vh] md:h-full'
  },
  {
    id: 'cricket',
    title: 'South Africa Champions',
    sport: 'Cricket',
    desc: 'Dominating the cricketing world with a rich legacy and unmatched prowess.',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32fc3e6a6?q=80&w=2699&auto=format&fit=crop',
    colSpan: 'md:col-span-1 lg:col-span-4',
    rowSpan: 'md:row-span-1 lg:row-span-1',
    height: 'h-[40vh] md:h-full'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-brand-kinetic text-brand-midnight relative z-0">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center space-y-6"
        >
          <h2 className="text-4xl md:text-7xl font-display font-bold italic uppercase tracking-tighter text-brand-midnight">
            The Greatest Show <br className="hidden md:block"/>
            <span className="text-brand-neon neon-text-glow">Beyond Boundaries</span>
          </h2>
          <div className="w-16 h-2 bg-brand-gold neon-glow" />
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-min md:auto-rows-[400px]">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative overflow-hidden glass-card ${item.colSpan} ${item.rowSpan} ${item.height}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
                <span className="text-brand-neon font-bold uppercase tracking-[0.2em] text-sm mb-2">
                  {item.sport}
                </span>
                <h3 className="text-4xl md:text-5xl font-display font-bold italic uppercase tracking-tighter mb-4 text-brand-midnight">
                  {item.title}
                </h3>
                <p className="text-brand-midnight/80 font-medium max-w-sm md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-3xl font-display font-bold italic uppercase tracking-wide text-brand-midnight/80 max-w-4xl mx-auto leading-tight">
            "Join us as we continue to push boundaries, <br className="hidden md:block"/>
            <span className="text-brand-neon neon-text-glow">elevate excellence</span>, and change the game forever!"
          </p>
        </motion.div>

      </div>
    </section>
  );
}
