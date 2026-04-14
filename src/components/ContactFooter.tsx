import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset form after a few seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden z-10">

      {/* Structural Sports Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex justify-center">
        <div className="w-full max-w-[1800px] grid grid-cols-4 h-full">
          <div className="border-r border-gray-900 h-full" />
          <div className="border-r border-gray-900 h-full" />
          <div className="border-r border-gray-900 h-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Branding & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-brand-gold rotate-45" />
                <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-xs">
                  Connect With Us
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold italic uppercase text-gray-900 tracking-tighter leading-none mb-6">
                Step Into <br />
                <span className="text-brand-gold">The Arena</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base font-medium max-w-md leading-relaxed">
                Whether you're looking for partnership opportunities, media inquiries, or general information, our team is ready to assist. Drop us a line and let's make it happen.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-12 space-y-8">
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  General Inquiries
                </span>
                <a href="mailto:hello@gamechangers.com" className="text-xl font-display font-bold italic text-gray-900 hover:text-brand-gold transition-colors">
                  hello@gamechangers.com
                </a>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Headquarters
                </span>
                <address className="not-italic text-gray-600 font-medium">
                  124 Sports Avenue, Suite 400<br />
                  Dubai, United Arab Emirates
                </address>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="relative group">
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    placeholder="First Name *"
                    className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-gold transition-colors duration-300"
                  />
                </div>

                {/* Last Name */}
                <div className="relative group">
                  <label htmlFor="lastName" className="sr-only">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    placeholder="Last Name *"
                    className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-gold transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Email Address *"
                  className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-gold transition-colors duration-300"
                />
              </div>

              {/* Subject */}
              <div className="relative group">
                <label htmlFor="subject" className="sr-only">Subject</label>
                <div className="relative">
                  <select
                    id="subject"
                    required
                    className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-4 text-gray-900 focus:outline-none focus:border-brand-gold transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>Select a Subject *</option>
                    <option value="partnership">Partnership & Sponsorship</option>
                    <option value="media">Media Inquiry</option>
                    <option value="support">General Support</option>
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  placeholder="Your Message *"
                  className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-gold transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formState !== 'idle'}
                className="w-full md:w-auto bg-gray-900 hover:bg-brand-gold text-white px-10 py-5 font-display font-bold italic uppercase tracking-widest text-sm transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
              >
                {formState === 'idle' && (
                  <>
                    Send Message
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
                {formState === 'submitting' && (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                )}
                {formState === 'success' && 'Message Sent!'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}