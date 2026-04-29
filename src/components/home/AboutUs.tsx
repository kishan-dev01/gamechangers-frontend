import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutUs() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: "vision",
      title: "Amandeep Singh",
      subtitle: "Founder, Game Changers",
      description:
        "A dynamic entrepreneur building high-value platforms across sports, entertainment, music, and hospitality. Driving one of the fastest-growing global sports ecosystems focused on scalable and commercially powerful sports IPs.",
    },
    {
      id: "achievements",
      title: "Championship Pedigree",
      subtitle: "Sports Achievements",
      list: [
        "Game Changers Falcons — World Tennis League winners",
        "South Africa Champions — World Championship of Legends winners",
        "Proven execution in building scalable sports IPs",
      ],
    },
    {
      id: "ventures",
      title: "Beyond Sports",
      subtitle: "Other Ventures",
      list: [
        "They See Records",
        "MWAH Entertainment",
        "The Great Western Holidays",
      ],
      description:
        "A visionary leader at the intersection of sport, entertainment, and culture.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants: Variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -40 : 40,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-brand-kinetic/30 text-brand-midnight overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-slate/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">

          {/* Left: Content Slider */}
          <div className="flex flex-col h-full order-2 lg:order-1">

            {/* Header */}
            <div className="mb-12">
              <p className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-3 border-l-2 border-brand-gold pl-3">
                Leadership
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-black italic tracking-normal text-brand-midnight">
                The Vision Behind Game Changers
              </h2>
            </div>

            {/* Slider Container */}
            <div className="relative min-h-[300px] md:min-h-[250px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full"
                >
                  {/* Title */}
                  <h3 className="text-3xl md:text-5xl font-display font-bold italic mb-3">
                    {slides[current].title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-brand-slate uppercase font-bold tracking-widest text-xs md:text-sm mb-6">
                    {slides[current].subtitle}
                  </p>

                  {/* Description */}
                  {slides[current].description && (
                    <p className="text-lg md:text-xl text-brand-midnight/80 font-medium leading-relaxed mb-6">
                      {slides[current].description}
                    </p>
                  )}

                  {/* List */}
                  {slides[current].list && (
                    <ul className="space-y-4 mb-6">
                      {slides[current].list.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-base md:text-lg text-brand-midnight/90 font-medium"
                        >
                          <span className="text-brand-gold mr-3 mt-1">✦</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            <div className="flex items-center gap-12 mt-12 pt-8 border-t border-brand-slate/10">

              {/* Slide indicator */}
              <div className="flex items-center gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${current === i
                      ? "w-12 bg-brand-gold"
                      : "w-4 bg-brand-slate/20 hover:bg-brand-slate/40"
                      }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  className="p-3 border border-brand-slate/20 rounded-full text-brand-midnight hover:bg-brand-midnight hover:text-white hover:border-brand-midnight transition-colors duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="p-3 border border-brand-slate/20 rounded-full text-brand-midnight hover:bg-brand-midnight hover:text-white hover:border-brand-midnight transition-colors duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right: Front Image */}
          <div className="flex justify-center flex-col order-1 lg:order-2 w-full h-[400px] md:h-[500px] lg:h-auto pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full max-w-md lg:max-w-none mx-auto"
            >
              {/* Image Frame */}
              <div className="absolute inset-0 bg-white border border-brand-slate/10 shadow-xl p-3 md:p-5 lg:p-6 z-10 transition-transform duration-500 hover:scale-[1.02]">
                <div className="w-full h-full relative overflow-hidden bg-brand-kinetic border border-brand-slate/5">
                  <img
                    src="https://res.cloudinary.com/dtsuewnbj/image/upload/v1777413320/amandeep-singh_i5zddc.png"
                    alt="Amandeep Singh"
                    className="w-full h-full object-contain object-center hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Accents */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-32 h-32 md:w-48 md:h-48 bg-brand-gold z-0 hidden md:block" />
              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-32 h-32 md:w-48 md:h-48 border-4 border-brand-slate/10 z-0 hidden md:block" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}