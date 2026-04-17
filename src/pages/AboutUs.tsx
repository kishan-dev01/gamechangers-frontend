import { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutVision from '../components/about/AboutVision';
import AboutLeadership from '../components/about/AboutLeadership';
import AboutClosing from '../components/about/AboutClosing';

export default function AboutUs() {
  // Ensure the page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full relative bg-white overflow-hidden text-brand-midnight">
      <AboutHero />
      <AboutVision />
      <AboutLeadership />
      <AboutClosing />
    </main>
  );
}
