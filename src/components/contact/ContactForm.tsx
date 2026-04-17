import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<null | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate an API call
    setStatus('success');
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="relative w-full py-24 bg-brand-kinetic overflow-hidden z-10">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-midnight via-brand-neon to-brand-gold" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black italic uppercase tracking-tighter text-brand-midnight mb-6 leading-none">
              Partner with <br/> <span className="text-brand-slate">Game Changers</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-midnight/70 leading-relaxed font-medium max-w-lg">
              Whether you are an investor, an athlete, or a business looking to leverage our global sports IPs, our team is ready to collaborate.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-5 p-4 hover:bg-white/50 transition-colors rounded-lg">
              <div className="bg-white p-4 shadow-sm border border-brand-slate/5 text-brand-gold rounded-sm shrink-0 mt-1">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-slate mb-1.5">Headquarters</h4>
                <p className="text-brand-midnight text-lg font-medium">Dubai, United Arab Emirates</p>
                <p className="text-brand-midnight/60 text-sm mt-1">Global Office Hub</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-4 hover:bg-white/50 transition-colors rounded-lg">
              <div className="bg-white p-4 shadow-sm border border-brand-slate/5 text-brand-neon rounded-sm shrink-0 mt-1">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-slate mb-1.5">Email</h4>
                <p className="text-brand-midnight text-lg font-medium">info@gamechangers.com</p>
                <p className="text-brand-midnight/60 text-sm mt-1">Support & Inquiries</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-4 hover:bg-white/50 transition-colors rounded-lg">
              <div className="bg-white p-4 shadow-sm border border-brand-slate/5 text-brand-midnight rounded-sm shrink-0 mt-1">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-slate mb-1.5">Phone</h4>
                <p className="text-brand-midnight text-lg font-medium">+971 50 XXX XXXX</p>
                <p className="text-brand-midnight/60 text-sm mt-1">Mon - Fri, 9am - 6pm (GST)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="relative"
        >
          <div className="bg-white p-8 md:p-12 lg:p-14 shadow-2xl border border-brand-slate/5 relative overflow-hidden">
            {/* abstract accent */}
            <div className="absolute top-0 right-0 w-1.5 h-full bg-brand-gold" />
            
            <h3 className="text-2xl md:text-3xl font-display font-bold italic uppercase tracking-widest text-brand-midnight mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-slate ml-1">First Name <span className="text-brand-neon">*</span></label>
                  <input type="text" required className="w-full bg-brand-kinetic border border-brand-slate/10 px-5 py-4 text-brand-midnight font-medium focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-slate ml-1">Last Name <span className="text-brand-neon">*</span></label>
                  <input type="text" required className="w-full bg-brand-kinetic border border-brand-slate/10 px-5 py-4 text-brand-midnight font-medium focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-slate ml-1">Email Address <span className="text-brand-neon">*</span></label>
                <input type="email" required className="w-full bg-brand-kinetic border border-brand-slate/10 px-5 py-4 text-brand-midnight font-medium focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-slate ml-1">Subject <span className="text-brand-neon">*</span></label>
                <div className="relative">
                  <select className="w-full bg-brand-kinetic border border-brand-slate/10 px-5 py-4 text-brand-midnight font-medium focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all appearance-none cursor-pointer">
                    <option>Partnership Inquiry</option>
                    <option>Sponsorship Opportunities</option>
                    <option>Media & Press</option>
                    <option>General Support</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDownIcon />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-slate ml-1">Message <span className="text-brand-neon">*</span></label>
                <textarea required rows={5} className="w-full bg-brand-kinetic border border-brand-slate/10 px-5 py-4 text-brand-midnight font-medium focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full mt-4 bg-brand-midnight text-white py-5 text-sm font-bold uppercase tracking-widest hover:bg-brand-neon hover:text-brand-midnight transition-colors duration-300 flex items-center justify-center gap-3 group shadow-md hover:shadow-xl">
                <span>Submit Inquiry</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="p-5 bg-green-50 border-l-4 border-green-500 text-green-800 text-sm font-medium mt-4 flex items-center shadow-sm"
                  >
                    Your message has been sent successfully. We will get back to you shortly!
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7 7L13 1" stroke="#0B162C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
