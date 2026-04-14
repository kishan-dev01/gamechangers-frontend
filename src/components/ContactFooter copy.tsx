import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowRight } from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-brand-kinetic text-brand-midnight relative z-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column - Contact Info & Socials */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold italic uppercase tracking-tighter">
              Get in touch
            </h2>
            <p className="text-xl text-brand-midnight/80 font-medium max-w-md">
              We’d love to hear from you. Reach out to explore partnerships or learn more about our global sporting legacy.
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="glass-card p-3 rounded-none">
                <Mail className="text-brand-neon w-6 h-6" />
              </div>
              <div>
                <span className="block text-sm uppercase tracking-widest text-brand-slate font-bold mb-1">Email</span>
                <a href="mailto:Info@gamechangersfzco.com" className="hover:text-brand-neon hover:neon-text-glow transition-all font-medium">
                  Info@gamechangersfzco.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="glass-card p-3 rounded-none">
                <MapPin className="text-brand-neon w-6 h-6" />
              </div>
              <div>
                <span className="block text-sm uppercase tracking-widest text-brand-slate font-bold mb-1">Address</span>
                <address className="not-italic hover:text-brand-neon hover:neon-text-glow transition-all font-medium text-brand-midnight/80">
                  Office 43-44, Municipality Building,<br />
                  Al Fahidi, Bur Dubai, 12345, Dubai
                </address>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-midnight/10 flex gap-6">
            <a href="#" className="p-3 bg-brand-midnight/5 hover:bg-brand-gold hover:text-brand-midnight hover:neon-hover-glow transition-all">
              <FacebookIcon />
            </a>
            <a href="#" className="p-3 bg-brand-midnight/5 hover:bg-brand-gold hover:text-brand-midnight hover:neon-hover-glow transition-all">
              <LinkedinIcon />
            </a>
            <a href="#" className="p-3 bg-brand-midnight/5 hover:bg-brand-gold hover:text-brand-midnight hover:neon-hover-glow transition-all">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card text-brand-midnight p-8 md:p-12 shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
          
          <h3 className="text-3xl font-display font-bold italic uppercase tracking-tighter mb-8">
            Send a <span className="text-brand-neon neon-text-glow">Message</span>
          </h3>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-slate/80">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-brand-slate/20 px-4 py-3 focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all font-medium text-brand-midnight"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-slate/80">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-brand-slate/20 px-4 py-3 focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all font-medium text-brand-midnight"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-slate/80">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-white border border-brand-slate/20 px-4 py-3 focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all font-medium text-brand-midnight"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-slate/80">Your Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white border border-brand-slate/20 px-4 py-3 focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all font-medium resize-none text-brand-midnight"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full group flex items-center justify-center gap-3 bg-brand-gold text-brand-midnight px-8 py-5 text-lg font-display font-bold italic uppercase tracking-widest hover:bg-brand-neon hover:neon-hover-glow transition-all duration-300"
            >
              <span>Send</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
      
      {/* Bottom Footer Line */}
      <div className="border-t border-brand-midnight/10 bg-brand-kinetic text-center py-6">
        <p className="text-brand-slate/60 text-sm font-medium uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Game Changers FZCO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
