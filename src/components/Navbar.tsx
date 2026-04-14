import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const MobileLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      onClick={() => setMobileMenuOpen(false)}
      className="text-2xl font-display font-bold italic uppercase text-brand-midnight hover:text-brand-neon hover:neon-text-glow transition-all"
    >
      {children}
    </a>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 border-b border-brand-slate/10 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Left: Logo */}
        <a href="#home" className="z-50 flex items-center">
          <img src="/logo.png" alt="Game Changers Logo" className="h-14 w-auto object-contain" />
        </a>

        {/* Center & Right: Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">

          {/* Main Navigation (Center) */}
          <div className="flex items-center gap-4 xl:gap-8">
            <a href="#home" className="text-xs xl:text-sm font-bold tracking-widest uppercase text-brand-midnight hover:text-brand-neon transition-colors">Home</a>
            <a href="#about" className="text-xs xl:text-sm font-bold tracking-widest uppercase text-brand-midnight hover:text-brand-neon transition-colors">About</a>

            {/* Teams Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-xs xl:text-sm font-bold tracking-widest uppercase text-brand-midnight hover:text-brand-neon transition-colors">
                Teams <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white/95 backdrop-blur-md border border-brand-slate/10 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] overflow-hidden rounded-b-md">
                <a href="#team-sa-champions" className="block px-6 py-4 text-xs font-bold uppercase tracking-widest text-brand-midnight hover:bg-brand-kinetic hover:text-brand-neon transition-colors border-b border-brand-slate/5">South Africa Champions</a>
                <a href="#team-falcons" className="block px-6 py-4 text-xs font-bold uppercase tracking-widest text-brand-midnight hover:bg-brand-kinetic hover:text-brand-neon transition-colors">Game Changers Falcons</a>
              </div>
            </div>

            {/* Seasons Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-xs xl:text-sm font-bold tracking-widest uppercase text-brand-midnight hover:text-brand-neon transition-colors">
                Seasons <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white/95 backdrop-blur-md border border-brand-slate/10 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] overflow-hidden rounded-b-md">
                <a href="#season-1" className="block px-6 py-4 text-xs font-bold uppercase tracking-widest text-brand-midnight hover:bg-brand-kinetic hover:text-brand-neon transition-colors border-b border-brand-slate/5">Season 1</a>
                <a href="#season-2" className="block px-6 py-4 text-xs font-bold uppercase tracking-widest text-brand-midnight hover:bg-brand-kinetic hover:text-brand-neon transition-colors">Season 2</a>
              </div>
            </div>

            <a href="#leadership" className="text-xs xl:text-sm font-bold tracking-widest uppercase text-brand-midnight hover:text-brand-neon transition-colors">Leadership</a>
            <a href="#media" className="text-xs xl:text-sm font-bold tracking-widest uppercase text-brand-midnight hover:text-brand-neon transition-colors">Media</a>
          </div>

          {/* Divider */}
          <div className="h-4 w-px bg-brand-slate/30 mx-0 xl:mx-2" />

          {/* Utility + Business (Right) */}
          <div className="flex items-center gap-4 xl:gap-6">
            <a href="#partners" className="text-xs xl:text-sm font-bold tracking-widest uppercase text-brand-midnight hover:text-brand-neon transition-colors">Partners</a>
            <a href="#contact" className="text-xs xl:text-sm font-bold tracking-widest uppercase text-brand-midnight hover:text-brand-neon transition-colors">Contact</a>

            <a
              href="#contact"
              className="px-6 py-3 ml-2 bg-brand-gold text-brand-midnight text-xs xl:text-sm font-extrabold tracking-widest uppercase hover:bg-brand-neon hover:neon-hover-glow transition-all whitespace-nowrap shadow-sm hover:shadow-md"
            >
              Partner With Us
            </a>
          </div>

        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 text-brand-midnight p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-0 left-0 w-full h-screen bg-brand-kinetic flex flex-col items-center justify-center z-40 overflow-y-auto py-20"
            >
              <div className="flex flex-col items-center gap-6 w-full max-w-sm mt-10">
                <MobileLink href="#home">Home</MobileLink>
                <MobileLink href="#about">About</MobileLink>

                {/* Mobile Teams Dropdown Accordion */}
                <div className="w-full text-center">
                  <button
                    onClick={() => toggleDropdown('teams')}
                    className="text-2xl font-display font-bold italic uppercase text-brand-midnight hover:text-brand-neon transition-all flex items-center justify-center gap-2 mx-auto"
                  >
                    Teams <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === 'teams' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'teams' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-4 mt-4 overflow-hidden"
                      >
                        <a href="#team-sa-champions" onClick={() => setMobileMenuOpen(false)} className="text-brand-midnight/70 font-bold uppercase tracking-widest text-xs">South Africa Champions</a>
                        <a href="#team-falcons" onClick={() => setMobileMenuOpen(false)} className="text-brand-midnight/70 font-bold uppercase tracking-widest text-xs">Game Changers Falcons</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Seasons Dropdown Accordion */}
                <div className="w-full text-center">
                  <button
                    onClick={() => toggleDropdown('seasons')}
                    className="text-2xl font-display font-bold italic uppercase text-brand-midnight hover:text-brand-neon transition-all flex items-center justify-center gap-2 mx-auto"
                  >
                    Seasons <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === 'seasons' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'seasons' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-4 mt-4 overflow-hidden"
                      >
                        <a href="#season-1" onClick={() => setMobileMenuOpen(false)} className="text-brand-midnight/70 font-bold uppercase tracking-widest text-xs">Season 1</a>
                        <a href="#season-2" onClick={() => setMobileMenuOpen(false)} className="text-brand-midnight/70 font-bold uppercase tracking-widest text-xs">Season 2</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <MobileLink href="#leadership">Leadership</MobileLink>
                <MobileLink href="#media">Media</MobileLink>
                <div className="w-16 h-px bg-brand-slate/20 my-2" />
                <MobileLink href="#partners">Partners</MobileLink>
                <MobileLink href="#contact">Contact</MobileLink>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 px-10 py-4 bg-brand-gold text-brand-midnight text-lg text-center font-bold uppercase tracking-widest hover:bg-brand-neon hover:neon-hover-glow transition-all w-full leading-tight"
                >
                  Partner With Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
