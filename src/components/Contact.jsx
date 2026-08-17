import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, BriefcaseBusiness, Code2, Camera, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-primary mb-4">
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">SOMETHING USEFUL.</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-8 border border-border space-y-6"
          >
            <h4 className="text-xl font-bold text-text-primary mb-6">Contact Information</h4>
            
            <a href="mailto:techmaster050718@gmail.com" className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Email</p>
                <p className="text-text-primary font-medium">techmaster050718@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-text-secondary">
              <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Phone</p>
                <p className="text-text-primary font-medium">+91 9580239104</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-text-secondary">
              <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Location</p>
                <p className="text-text-primary font-medium">Gorakhpur, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-4">Connect Online</p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/abhay-ojha-331a47375" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all">
                  <BriefcaseBusiness size={18} />
                </a>
                <a href="https://github.com/techmaster050718" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all">
                  <Code2 size={18} />
                </a>
                <a href="https://www.instagram.com/abhay_ojha18?igsh=MTVmdmh0azNnMDhmeA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all">
                  <Camera size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass rounded-2xl p-8 border border-border"
          >
            <h4 className="text-xl font-bold text-text-primary mb-6">Send Me a Message</h4>
            <form 
              action="https://formspree.io/f/xgvbwolo" 
              method="POST" 
              className="space-y-6"
              onSubmit={() => {
                setFormStatus('Sending...');
                setTimeout(() => setFormStatus('Message sent successfully!'), 1500);
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Your name" 
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="you@example.com" 
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Message</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  required 
                  placeholder="Write a short message..." 
                  className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <button 
                  type="submit" 
                  className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accent to-accent-dark text-bg-primary font-bold rounded-lg hover:shadow-[0_0_20px_-5px_rgba(0,223,143,0.4)] transition-all duration-300 hover:scale-105"
                >
                  Send Message <Send size={18} />
                </button>
                {formStatus && (
                  <span className="text-sm text-accent font-medium">{formStatus}</span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
