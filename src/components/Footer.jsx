import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-text-primary mb-2">Abhay Ojha<span className="text-accent">.</span></h2>
            <p className="text-text-secondary text-sm">© 2026 Abhay Ojha. All Rights Reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/techmaster050718" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abhay-ojha-331a47375" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:techmaster050718@gmail.com" className="text-text-secondary hover:text-accent transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
