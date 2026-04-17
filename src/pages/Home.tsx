import Hero from '../components/home/Hero';
import GameChangersStats from '../components/home/GameChangersStats';
import AboutUs from '../components/home/AboutUs';
import Portfolio from '../components/home/Portfolio';
import Gallery from '../components/home/Gallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <GameChangersStats />
      <Portfolio />
      <AboutUs />
      <Gallery />
    </main>
  );
}
