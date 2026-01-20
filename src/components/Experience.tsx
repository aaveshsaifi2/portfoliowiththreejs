import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'QuantMaster AI',
    location: 'Remote',
    period: 'Jan 2024 - Present',
    description: 'Working on AI-powered financial analysis tools and building scalable web applications.',
    achievements: [
      'Improved application load times by 25% through code optimization',
      'Achieved 95% code coverage with comprehensive unit testing',
      'Developed RESTful APIs serving 10K+ daily requests',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
    ],
    tech: ['Python', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'AI/ML Project Lead',
    company: 'Personal Projects',
    location: 'Self-Directed',
    period: '2022 - Present',
    description: 'Leading development of multiple AI-powered applications and open-source contributions.',
    achievements: [
      'Built Hearthly AI Therapist with real-time sentiment analysis',
      'Created RAG-based content generator with 85% accuracy',
      'Developed blockchain analytics dashboard for OKX',
      'Contributed to open-source AI/ML libraries',
    ],
    tech: ['LangChain', 'TensorFlow', 'Next.js', 'ChromaDB', 'AWS'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative bg-card/50" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey and key achievements in software engineering and AI development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 timeline-dot -translate-x-1/2 z-10" />

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-8 card-hover ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>

                <p className="text-muted-foreground mb-6">{exp.description}</p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
