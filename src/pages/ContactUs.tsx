import { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';

export default function ContactUs() {
  // Ensure the page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full relative bg-brand-kinetic overflow-hidden">
      <ContactHero />
      <ContactForm />
    </main>
  );
}
