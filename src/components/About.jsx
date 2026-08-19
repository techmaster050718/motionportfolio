import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-dark rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <img 
              src="/aaa.png"
              alt="Abhay Ojha" 
              className="relative w-full max-w-md mx-auto md:max-w-full rounded-2xl border border-border shadow-2xl object-cover aspect-[5/4]"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-black text-text-primary mb-6 leading-tight">
              Get to Know Me <br />Better.
            </h3>
            <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
              <p>
                I am a Software Engineer specializing in Python backend development, REST APIs, scalable cloud infrastructure, AI-powered applications, and DevOps automation.
              </p>
              <p>
                I build with FastAPI, Django, and PostgreSQL, and automate production-ready deployments using Docker, Kubernetes, Terraform, AWS, and GitHub Actions.
              </p>
            </div>
            <div className="mt-6 rounded-xl border border-border bg-bg-secondary/40 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Education</p>
              <p className="mt-1 font-semibold text-text-primary">Bachelor of Technology in Computer Science & Engineering</p>
              <p className="mt-1 text-sm text-text-secondary">Institute of Technology and Management (ITM), GIDA · Final Year</p>
            </div>
            <a 
              href="/Abhay Resume.pdf" 
              download="Abhay_Ojha_Resume.pdf"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 glass text-text-primary font-semibold rounded-lg hover:bg-white/5 transition-all duration-300 border border-border"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
