import { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
import ContactFooter from './components/layout/ContactFooter';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import SouthAfricaChampions from './pages/SouthAfricaChampions';
import Partners from './pages/Partners';
import Season1 from './pages/Season1';
import Season2 from './pages/Season2';
import Falcons from './pages/Falcons';
import FalconsSeason2024 from './pages/FalconsSeason2024';
import FalconsSeason2025 from './pages/FalconsSeason2025';
import Lions from './pages/Lions';
import LionsSeason2 from './pages/LionsSeason2';
import LionsSeason3 from './pages/LionsSeason3';

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
    <Router>
      <ScrollToTop />
      <div className="relative w-full bg-brand-kinetic min-h-screen selection:bg-brand-neon selection:text-brand-midnight">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/seasons/season-1" element={<Season1 />} />
          <Route path="/seasons/season-2" element={<Season2 />} />
          <Route path="/teams/south-africa-champions" element={<SouthAfricaChampions />} />
          <Route path="/teams/falcons" element={<Falcons />} />
          <Route path="/teams/falcons/season-2024" element={<FalconsSeason2024 />} />
          <Route path="/teams/falcons/season-2025" element={<FalconsSeason2025 />} />
          <Route path="/teams/lions" element={<Lions />} />
          <Route path="/teams/lions/season-2" element={<LionsSeason2 />} />
          <Route path="/teams/lions/season-3" element={<LionsSeason3 />} />
        </Routes>
        <ContactFooter />
      </div>
    </Router>
  )
}

export default App
