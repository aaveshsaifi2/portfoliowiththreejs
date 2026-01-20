import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Layers, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI/ML Expert',
    description: 'Specializing in LLMs, RAG systems, and NLP solutions',
  },
  {
    icon: Code2,
    title: 'Full-Stack Dev',
    description: 'Building scalable web applications with modern technologies',
  },
  {
    icon: Layers,
    title: 'GenAI Specialist',
    description: 'Creating intelligent systems with cutting-edge AI models',
  },
  {
    icon: Zap,
    title: 'Problem Solver',
    description: 'Turning complex challenges into elegant solutions',
  },
];

const skills = [
  { name: 'Python', level: 95 },
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'React/Next.js', level: 88 },
  { name: 'AI/ML & LLMs', level: 92 },
  { name: 'Node.js/FastAPI', level: 85 },
  { name: 'Cloud & DevOps', level: 80 },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate software engineer with expertise in artificial intelligence 
            and full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a B.Tech Computer Science student at Chandigarh Group of Colleges, 
                passionate about building intelligent systems that make a real impact. 
                With expertise spanning AI/ML, full-stack development, and GenAI, I bring 
                a unique blend of technical skills to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently focused on developing AI-powered applications, RAG systems, 
                and scalable web solutions. I believe in clean code, continuous learning, 
                and leveraging technology to solve complex problems.
              </p>
            </div>

            {/* Skill Bars */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Core Competencies
              </h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full gradient-bg-solid rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 card-hover group"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg-solid flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all">
                  <item.icon size={28} className="text-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
