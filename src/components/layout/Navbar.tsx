import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeDesktopTeam, setActiveDesktopTeam] = useState<string | null>(null);

  const teamsData = [
    {
      id: 'south-africa-champions',
      name: 'South Africa Champions',
      sport: 'Cricket',
      mainLink: '/teams/south-africa-champions',
      seasons: [
        { name: 'Season 1', link: '/teams/south-africa-champions/season-1' },
        { name: 'Season 2', link: '/teams/south-africa-champions/season-2' }
      ]
    },
    {
      id: 'falcons',
      name: 'Game Changers Falcons',
      sport: 'Tennis',
      mainLink: '/teams/falcons',
      seasons: [
        { name: 'Season 2024', link: '/teams/falcons/season-2024' },
        { name: 'Season 2025', link: '/teams/falcons/season-2025' }
      ]
    },
    {
      id: 'lions',
      name: 'Game Changers Lions',
      sport: 'Padel',
      mainLink: '/teams/lions',
      seasons: [
        { name: 'Season 2', link: '/teams/lions/season-2' },
        { name: 'Season 3', link: '/teams/lions/season-3' }
      ]
    }
  ];

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

  const MobileLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      onClick={() => setMobileMenuOpen(false)}
      className="text-2xl font-display font-bold italic uppercase text-brand-midnight hover:text-brand-neon hover:neon-text-glow transition-all"
    >
      {children}
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-midnight/95 border-b border-brand-slate/30 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Left: Logo */}
        <Link to="/" className="z-50 flex items-center">
          <img src="/logo.png" alt="Game Changers Logo" className="h-14 w-auto object-contain" />
        </Link>

        {/* Center & Right: Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">

          {/* Main Navigation (Center) */}
          <div className="flex items-center gap-4 xl:gap-8">
            <Link to="/" className={`text-xs xl:text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-white hover:text-brand-neon' : 'text-brand-midnight hover:text-brand-neon'}`}>Home</Link>
            <Link to="/about" className={`text-xs xl:text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-white hover:text-brand-neon' : 'text-brand-midnight hover:text-brand-neon'}`}>About</Link>

            {/* Teams Dropdown */}
            <div 
              className="relative group py-2"
              onMouseLeave={() => setActiveDesktopTeam(null)}
            >
              <button className={`flex items-center gap-1 text-xs xl:text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-white hover:text-brand-neon' : 'text-brand-midnight hover:text-brand-neon'}`}>
                Teams <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${isScrolled ? 'bg-brand-midnight/95 border border-brand-slate/50' : 'bg-white/95 border border-brand-slate/10'} backdrop-blur-md shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] overflow-hidden rounded-b-md`}>
                {teamsData.map((team, idx) => (
                  <div 
                    key={team.id}
                    onMouseEnter={() => setActiveDesktopTeam(team.id)}
                    className={idx !== teamsData.length - 1 ? (isScrolled ? 'border-b border-brand-slate/50' : 'border-b border-brand-slate/5') : ''}
                  >
                    <Link to={team.mainLink} className={`block px-6 py-4 text-[11px] font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-white hover:bg-brand-slate hover:text-brand-neon' : 'text-brand-midnight hover:bg-brand-kinetic hover:text-brand-neon'}`}>
                      {team.name} <span className="text-[9px] opacity-70 normal-case ml-1">({team.sport})</span>
                    </Link>
                    <AnimatePresence>
                      {activeDesktopTeam === team.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className={`overflow-hidden ${isScrolled ? 'bg-black/20' : 'bg-black/5'} shadow-inner`}
                        >
                          {team.seasons.map(s => (
                            <Link
                              key={s.name}
                              to={s.link}
                              className={`block px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                                isScrolled 
                                  ? 'text-white/80 hover:text-brand-neon hover:bg-brand-slate/40' 
                                  : 'text-brand-midnight/80 hover:text-brand-neon hover:bg-black/5'
                              }`}
                            >
                              {s.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Leagues Dropdown */}
            <div className="relative group py-2">
              <button className={`flex items-center gap-1 text-xs xl:text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-white hover:text-brand-neon' : 'text-brand-midnight hover:text-brand-neon'}`}>
                Leagues <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${isScrolled ? 'bg-brand-midnight/95 border border-brand-slate/50' : 'bg-white/95 border border-brand-slate/10'} backdrop-blur-md shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] overflow-hidden rounded-b-md`}>
                <Link to="/leagues/korfball-premier-league" className={`block px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-white hover:bg-brand-slate hover:text-brand-neon border-b border-brand-slate/50' : 'text-brand-midnight hover:bg-brand-kinetic hover:text-brand-neon border-b border-brand-slate/5'}`}>Korfball Premier League</Link>
              </div>
            </div>

            {/* <Link to="/#leadership" className={`text-xs xl:text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-white hover:text-brand-neon' : 'text-brand-midnight hover:text-brand-neon'}`}>Leadership</Link> */}
            {/* <Link to="/#media" className={`text-xs xl:text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-white hover:text-brand-neon' : 'text-brand-midnight hover:text-brand-neon'}`}>Media</Link> */}
          </div>

          {/* Divider */}
          <div className={`h-4 w-px mx-0 xl:mx-2 transition-colors duration-300 ${isScrolled ? 'bg-brand-slate' : 'bg-brand-slate/30'}`} />

          {/* Utility + Business (Right) */}
          <div className="flex items-center gap-4 xl:gap-6">
            <Link to="/partners" className={`text-xs xl:text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-white hover:text-brand-neon' : 'text-brand-midnight hover:text-brand-neon'}`}>Partners</Link>
            {/* <Link to="/contact" className={`text-xs xl:text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-white hover:text-brand-neon' : 'text-brand-midnight hover:text-brand-neon'}`}>Contact</Link> */}

            <Link
              to="/contact"
              className="px-6 py-3 ml-2 bg-brand-gold text-brand-midnight text-xs xl:text-sm font-extrabold tracking-widest uppercase hover:bg-brand-neon hover:neon-hover-glow transition-all whitespace-nowrap shadow-sm hover:shadow-md"
            >
              Contact With Us
            </Link>
          </div>

        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden z-50 p-2 transition-colors duration-300 ${isScrolled && !mobileMenuOpen ? 'text-white' : 'text-brand-midnight'}`}
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
                <MobileLink to="/#home">Home</MobileLink>
                <MobileLink to="/about">About</MobileLink>

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
                        {teamsData.map(team => (
                          <div key={team.id} className="flex flex-col items-center">
                            <Link to={team.mainLink} onClick={() => setMobileMenuOpen(false)} className="text-brand-midnight/90 font-bold uppercase tracking-widest text-[11px] block py-1 hover:text-brand-neon transition-colors">
                              {team.name} <span className="text-[10px] normal-case opacity-70">({team.sport})</span>
                            </Link>
                            <div className="flex flex-col items-center mt-2 space-y-2 border-l border-brand-midnight/10 pl-2">
                              {team.seasons.map(s => (
                                <Link 
                                  key={s.name} 
                                  to={s.link} 
                                  onClick={() => setMobileMenuOpen(false)} 
                                  className="text-brand-midnight/60 font-bold uppercase tracking-wider text-[10px] hover:text-brand-neon transition-colors"
                                >
                                  {s.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Leagues Dropdown Accordion */}
                <div className="w-full text-center">
                  <button
                    onClick={() => toggleDropdown('leagues')}
                    className="text-2xl font-display font-bold italic uppercase text-brand-midnight hover:text-brand-neon transition-all flex items-center justify-center gap-2 mx-auto"
                  >
                    Leagues <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === 'leagues' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'leagues' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-4 mt-4 overflow-hidden"
                      >
                        <Link to="/leagues/korfball-premier-league" onClick={() => setMobileMenuOpen(false)} className="text-brand-midnight/70 font-bold uppercase tracking-widest text-xs block py-1">Korfball Premier League</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <MobileLink to="/#leadership">Leadership</MobileLink>
                <MobileLink to="/#media">Media</MobileLink>
                <div className="w-16 h-px bg-brand-slate/20 my-2" />
                <MobileLink to="/partners">Partners</MobileLink>
                <MobileLink to="/contact">Contact</MobileLink>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 px-10 py-4 bg-brand-gold text-brand-midnight text-lg text-center font-bold uppercase tracking-widest hover:bg-brand-neon hover:neon-hover-glow transition-all w-full leading-tight block"
                >
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
