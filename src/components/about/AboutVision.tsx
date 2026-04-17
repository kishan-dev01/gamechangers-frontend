import { motion } from 'framer-motion';
import { TrendingUp, Target, Globe, Tv, Briefcase, Award, Zap } from 'lucide-react';

const revenueStreams = [
  { icon: Tv, label: 'Media Rights' },
  { icon: Briefcase, label: 'Sponsorships' },
  { icon: TrendingUp, label: 'Franchise Valuation' },
  { icon: Award, label: 'Licensing' },
  { icon: Zap, label: 'Live Experiences' },
];

export default function AboutVision() {
  return (
    <section className="relative w-full py-24 bg-brand-kinetic/30 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-24">
        
        {/* Growth & Momentum / What We Do */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 shadow-md rounded-md">
                <TrendingUp className="w-6 h-6 text-brand-midnight" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-black italic uppercase tracking-tighter text-brand-midnight">
                Growth & <span className="text-brand-slate">Momentum</span>
              </h2>
            </div>
            <p className="text-lg text-brand-midnight/80 font-medium leading-relaxed mb-6">
              Since its inception in 2024, Game Changers has rapidly built a multi-franchise ecosystem with proven execution at the highest level of competition.
            </p>
            <p className="text-lg text-brand-midnight/80 font-medium leading-relaxed">
              With increasing global viewership trends and the rise of digital sports consumption, the platform is positioned to engage hundreds of millions of fans across key international markets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 shadow-md rounded-md">
                <Globe className="w-6 h-6 text-brand-gold" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-black italic uppercase tracking-tighter text-brand-midnight">
                What <span className="text-brand-slate">We Do</span>
              </h2>
            </div>
            <p className="text-lg text-brand-midnight/80 font-medium leading-relaxed mb-6">
              Game Changers develops and scales globally relevant sports franchises, bringing together elite athletes, iconic formats, and high-impact entertainment experiences.
            </p>
            <p className="text-lg text-brand-midnight/80 font-medium leading-relaxed">
              With a strong focus on innovation and audience engagement, the platform aims to create sustainable and commercially successful sports properties that resonate across geographies and cultures.
            </p>
          </motion.div>
        </div>

        {/* Our Vision */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-brand-slate/10 shadow-xl overflow-hidden relative"
        >
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-midnight via-brand-slate to-brand-gold" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Vision Text */}
            <div className="col-span-1 lg:col-span-6 p-8 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-kinetic p-3 rounded-md">
                  <Target className="w-6 h-6 text-brand-midnight" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-black italic uppercase tracking-tighter text-brand-midnight">
                  Our <span className="text-brand-gold">Vision</span>
                </h2>
              </div>
              
              <p className="text-xl text-brand-midnight font-medium leading-relaxed mb-8">
                Driven by a clear commercial vision, Game Changers is building an integrated ecosystem at the intersection of sport, entertainment, and fan engagement.
              </p>
              
              <p className="text-lg text-brand-midnight/70 font-medium leading-relaxed border-l-4 border-brand-slate/20 pl-4 italic">
                By combining competitive sport with immersive entertainment, Game Changers is redefining how modern audiences engage with sports.
              </p>
            </div>

            {/* Revenue Streams Grid */}
            <div className="col-span-1 lg:col-span-6 bg-brand-midnight p-8 md:p-14 text-white">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-8">
                Unlocking Diversified Revenue Streams
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {revenueStreams.map((stream, idx) => {
                  const Icon = stream.icon;
                  return (
                    <div 
                      key={idx}
                      className="flex items-center gap-4 p-4 border border-brand-slate/30 bg-brand-slate/10 hover:bg-white/10 hover:border-brand-gold/50 transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5 text-brand-gold" />
                      <span className="font-bold uppercase tracking-widest text-xs md:text-sm">
                        {stream.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
