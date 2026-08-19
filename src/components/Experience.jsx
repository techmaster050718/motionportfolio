import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Career Path</h2>
          <h3 className="text-3xl md:text-4xl font-black text-text-primary">Internships & Experience</h3>
        </motion.div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {experience.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-accent border-4 border-bg-primary shadow-[0_0_10px_rgba(0,223,143,0.5)]" />
              
              <div className="glass rounded-xl p-6 md:p-8 glass-hover transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-text-primary">{exp.role}</h4>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-text-secondary font-mono bg-bg-primary px-3 py-1 rounded-full border border-border w-fit">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-text-secondary mb-4 flex items-center gap-2">
                  <Briefcase size={16} className="text-accent" />
                  Focus: <span className="text-text-primary font-semibold">{exp.project}</span>
                </p>

                {exp.reference && (
                  <p className="-mt-2 mb-4 text-xs font-mono text-accent">{exp.reference}</p>
                )}

                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-text-secondary text-sm md:text-base leading-relaxed flex gap-3">
                      <span className="text-accent mt-1.5">▹</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
