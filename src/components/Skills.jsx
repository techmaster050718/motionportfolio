import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-black text-text-primary">Future-Ready Skills</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass rounded-xl p-6 glass-hover transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {group.category}
              </h4>
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {group.items.map((skill) => (
                  <motion.span 
                    key={skill}
                    variants={item}
                    className="px-3 py-1.5 bg-bg-primary border border-border rounded-lg text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}