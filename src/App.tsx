import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameChangersStats from './components/GameChangersStats';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import ContactFooter from './components/ContactFooter';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-brand-kinetic min-h-screen selection:bg-brand-neon selection:text-brand-midnight">
      <Navbar />
      <main>
        <Hero />
        <GameChangersStats />
        <AboutUs />
        <Portfolio />
        <Gallery />
      </main>
      <ContactFooter />
    </div>
  )
}

export default App
