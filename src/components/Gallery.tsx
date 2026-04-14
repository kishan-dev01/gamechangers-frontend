import { motion } from 'framer-motion';

// Merged into a single structured array for the Bento Grid layout
const galleryImages = [
  {
    src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776165411/WTL00342_akxqxb.jpg",
    label: "World Tennis League",
    gridClasses: "col-span-1 md:col-span-8 row-span-1 md:row-span-2", // Large Hero Block
  },
  {
    src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776165408/WTL00029_ldjr3i.jpg",
    label: "Championship Finals",
    gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1", // Standard Block
  },
  {
    src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776165350/WT200303_uu5krp.jpg",
    label: "Game Changers",
    gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
  },
  {
    src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776164375/lions-3_rcsfe5.jpg",
    label: "Elite Performance",
    gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-2", // Tall Vertical Block
  },
  {
    src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776164365/lions-1_eqjkm3.webp",
    label: "Victory Moments",
    gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
  },
  {
    src: "https://res.cloudinary.com/dtsuewnbj/image/upload/v1776164365/lions-2_hf9nwq.webp",
    label: "The Arena",
    gridClasses: "col-span-1 md:col-span-4 row-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1595210382266-2d0077c1f541?q=80&w=1170&auto=format&fit=crop",
    label: "Global Stage",
    gridClasses: "col-span-1 md:col-span-8 row-span-1 md:row-span-1", // Wide Horizontal Block
  },
  {
    src: "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?q=80&w=1357&auto=format&fit=crop",
    label: "Champions League",
    gridClasses: "col-span-1 md:col-span-6 row-span-1 md:row-span-1", // Half Width
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1722086350831-3cc30b7d68a7?q=80&w=1170&auto=format&fit=crop",
    label: "Legends",
    gridClasses: "col-span-1 md:col-span-6 row-span-1 md:row-span-1", // Half Width
  },
];

// Framer Motion Variants for staggered reveals
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  },
};

function GalleryItem({ src, label, gridClasses }) {
  return (
    <motion.div
      variants={itemVariants}
      className={`relative w-full h-full overflow-hidden group cursor-pointer bg-brand-midnight/50 ${gridClasses}`}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
      />

      {/* Permanent sleek bottom gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Dynamic Content Container */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-end gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {/* Gold structural line */}
          <div className="w-1 h-0 group-hover:h-8 bg-brand-gold transition-all duration-500 ease-out mb-1" />

          <div>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 block mb-1">
              Highlight
            </span>
            <span className="text-white font-display font-bold italic uppercase tracking-wider text-xl md:text-2xl leading-none">
              {label}
            </span>
          </div>
        </div>
      </div>

      {/* Top right corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-transparent group-hover:border-brand-gold transition-colors duration-500 m-4 opacity-0 group-hover:opacity-100" />
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-midnight relative z-10">

      {/* Structural Sports Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex justify-center">
        <div className="w-full max-w-[1800px] grid grid-cols-4 h-full">
          <div className="border-r border-white/50 h-full" />
          <div className="border-r border-white/50 h-full" />
          <div className="border-r border-white/50 h-full" />
        </div>
      </div>

      {/* Section Header */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-brand-gold rotate-45" />
              <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-xs">
                The Highlights
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold italic uppercase text-white tracking-tighter leading-none">
              Memorable Moments <br />
              <span className="text-brand-gold">To Admire</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm uppercase tracking-widest font-medium max-w-sm md:text-right">
            A curated window into the world of Game Changers. Witness the pinnacle of performance.
          </p>
        </motion.div>

        {/* Dynamic Sports Divider */}
        <div className="w-full h-px bg-white/10 mt-10 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-[2px] bg-brand-gold" />
        </div>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="px-4 md:px-12 w-full max-w-[1800px] mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          // Desktop: 12-column grid. Mobile: 1-column grid.
          // auto-rows handles the height scaling automatically.
          className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[280px] gap-3 md:gap-5"
        >
          {galleryImages.map((img, i) => (
            <GalleryItem key={i} {...img} />
          ))}
        </motion.div>
      </div>

    </section>
  );
}