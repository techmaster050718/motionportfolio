import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid & Typography */}
      <div className="absolute inset-0 bg-grid-pattern bg-cinematic-grid pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-text-primary/[0.02] select-none pointer-events-none whitespace-nowrap">
        ENGINEER
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Software Engineer & Cloud Developer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6">
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
              DIGITAL
            </span> <br />
            EXPERIENCES.
          </h1>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            I am Abhay Ojha, passionate about Backend Development, Cloud Computing, DevOps, and Artificial Intelligence. I build scalable, production-ready software.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent to-accent-dark text-bg-primary font-bold rounded-lg hover:shadow-[0_0_20px_-5px_rgba(0,223,143,0.4)] transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/Abhay Resume.pdf" 
              download="Abhay_Ojha_Resume.pdf"
              className="group flex items-center gap-2 px-6 py-3.5 glass text-text-primary font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right Interactive Card */}
        <motion.div 
          className="hidden lg:flex justify-center items-center perspective-1000"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            drag
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            animate={{ y: [0, -15, 0], rotateZ: [-1, 1, -1] }}
            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            className="relative w-80 glass rounded-2xl p-6 cursor-grab active:cursor-grabbing border border-border shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-dark rounded-t-2xl" />
            <img 
              src="/aa.png"
              alt="Abhay Ojha" 
              className="w-24 h-24 rounded-full object-cover border-2 border-accent/30 mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold text-center text-text-primary">Abhay Ojha</h3>
            <p className="text-accent text-sm text-center font-medium mb-4">Full Stack & Cloud Engineer</p>
            
            <div className="space-y-3 text-sm text-text-secondary">
              <div className="flex justify-between border-b border-border pb-2">
                <span>Location</span>
                <span className="text-text-primary">Gorakhpur, India</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span>Focus</span>
                <span className="text-text-primary">AI & DevOps</span>
              </div>
              <div className="flex justify-between">
                <span>Status</span>
                <span className="text-accent flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
