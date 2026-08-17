import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Code2, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="projects" className="py-24 bg-bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-black text-text-primary">Featured Projects</h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Interactive Stack (Desktop) / Scroll (Mobile) */}
          <div className="lg:col-span-7 relative h-[400px] md:h-[500px] hidden md:block">
            {projects.map((project, index) => {
              const diff = (index - activeIndex + projects.length) % projects.length;
              const isActive = diff === 0;
              
              return (
                <motion.div
                  key={project.id}
                  className="absolute inset-0 cursor-pointer"
                  style={{ zIndex: projects.length - diff }}
                  animate={{
                    y: diff * 35,
                    scale: 1 - diff * 0.05,
                    rotateX: diff * 2,
                    opacity: diff > 2 ? 0 : 1,
                  }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  onClick={() => isActive ? nextProject() : handleCardClick(index)}
                >
                  <div className={`w-full h-full glass rounded-2xl p-8 border ${isActive ? 'border-accent/30 shadow-[0_0_40px_-10px_rgba(0,223,143,0.15)]' : 'border-border'} transition-all duration-300 flex flex-col justify-between`}>
                    <div>
                      <span className="text-accent text-sm font-bold tracking-wider uppercase">{project.category}</span>
                      <h4 className="text-3xl font-black text-text-primary mt-2 mb-4">{project.title}</h4>
                      <p className="text-text-secondary line-clamp-3">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-bg-primary border border-border text-text-secondary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Fallback */}
          <div className="md:hidden space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="glass rounded-xl p-6 border border-border">
                <span className="text-accent text-xs font-bold tracking-wider uppercase">{project.category}</span>
                <h4 className="text-xl font-black text-text-primary mt-1 mb-3">{project.title}</h4>
                <p className="text-text-secondary text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-bg-primary border border-border text-text-secondary">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-accent text-bg-primary font-bold rounded-lg text-sm">
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 glass text-text-primary font-bold rounded-lg text-sm border border-border">
                      GitHub <Code2 size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Project Details Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl font-black text-bg-secondary/50">0{activeIndex + 1}</span>
                  <div>
                    <h4 className="text-2xl font-bold text-text-primary">{projects[activeIndex].title}</h4>
                    <p className="text-accent text-sm">{projects[activeIndex].category}</p>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed mb-8">
                  {projects[activeIndex].description}
                </p>

                <div className="mb-8">
                  <h5 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-3">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeIndex].tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {projects[activeIndex].live && (
                    <a 
                      href={projects[activeIndex].live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-accent to-accent-dark text-bg-primary font-bold rounded-lg hover:shadow-[0_0_20px_-5px_rgba(0,223,143,0.4)] transition-all duration-300"
                    >
                      Live Demo <ExternalLink size={18} />
                    </a>
                  )}
                  <a 
                    href={projects[activeIndex].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 glass text-text-primary font-bold rounded-lg border border-border hover:bg-white/5 transition-all duration-300"
                  >
                    View Code <Code2 size={18} />
                  </a>
                </div>

                <button 
                  onClick={() => setActiveIndex((prev) => (prev + 1) % projects.length)}
                  className="w-full mt-6 flex items-center justify-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm font-medium py-2"
                >
                  Next Project <ChevronRight size={16} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
