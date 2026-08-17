import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 h-20 transition-all duration-300 ${
        scrolled ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-tight text-text-primary hover:text-accent transition-colors">
          Abhay Ojha<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
          <a 
            href="/Abhay Resume.pdf" 
            download="Abhay_Ojha_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-lg text-sm font-semibold hover:bg-accent hover:text-bg-primary transition-all duration-300"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-secondary border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-text-secondary hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/Abhay Resume.pdf" 
                download="Abhay_Ojha_Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-accent text-bg-primary rounded-lg font-semibold mt-2"
                onClick={() => setIsOpen(false)}
              >
                <FileText size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
