import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'HTML5', 'CSS3'],
    color: 'from-primary to-purple-400',
  },
  {
    title: 'AI/ML & GenAI',
    skills: ['LLMs (GPT, Claude)', 'LangChain', 'RAG', 'Prompt Engineering', 'NLP', 'TensorFlow', 'PyTorch'],
    color: 'from-secondary to-cyan-300',
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Angular', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    color: 'from-pink-500 to-primary',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'GraphQL', 'WebSockets'],
    color: 'from-green-500 to-secondary',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'ChromaDB', 'Pinecone', 'Redis'],
    color: 'from-orange-500 to-yellow-400',
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Linux'],
    color: 'from-primary to-secondary',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative bg-card/50" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 card-hover group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-xl font-display font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="skill-badge cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-display font-bold text-center text-foreground mb-8">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Cisco ITN', issuer: 'Cisco' },
              { name: 'Cisco SRWE', issuer: 'Cisco' },
              { name: 'Cisco ENSA', issuer: 'Cisco' },
              { name: 'PCAP Python', issuer: 'Python Institute' },
              { name: 'Cybersecurity Essentials', issuer: 'Cisco' },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card px-6 py-4 text-center card-hover"
              >
                <p className="font-semibold text-foreground">{cert.name}</p>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Education
          </h3>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block glass-card px-8 py-6 card-hover"
          >
            <p className="text-xl font-semibold text-foreground">
              Chandigarh Group of Colleges, Jhanjheri
            </p>
            <p className="text-primary font-medium">
              B.Tech in Computer Science and Engineering
            </p>
            <p className="text-muted-foreground">2022 - 2026 • CGPA: 7.0</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
