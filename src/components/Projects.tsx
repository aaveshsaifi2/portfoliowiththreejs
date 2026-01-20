import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Brain, Globe, Blocks, BarChart3, Users } from 'lucide-react';

const categories = ['All', 'AI/ML', 'Full-Stack', 'Blockchain'];

const projects = [
  {
    title: 'Hearthly AI Therapist',
    description: 'An empathetic AI-powered mental health companion providing real-time emotional support with sentiment analysis and personalized coping strategies.',
    category: 'AI/ML',
    icon: Brain,
    metrics: ['Real-time sentiment analysis', '95% user satisfaction', '10K+ conversations'],
    tech: ['Python', 'LangChain', 'React', 'FastAPI', 'GPT-4'],
    github: 'https://github.com/aaveshsaifi2/Hearthly-Speech-recognition',
    demo: '#',
    featured: true,
  },
  {
    title: 'AI Content Generator & RAG',
    description: 'Advanced RAG-based content generation system with semantic search capabilities and multi-document synthesis for enterprise content needs.',
    category: 'AI/ML',
    icon: Brain,
    metrics: ['85% accuracy', 'Sub-second retrieval', '100K+ documents indexed'],
    tech: ['LangChain', 'ChromaDB', 'Next.js', 'Pinecone', 'Claude API'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'OKXFi Analytics',
    description: 'Comprehensive blockchain analytics dashboard providing real-time insights into DeFi protocols, wallet tracking, and market trends on OKX Chain.',
    category: 'Blockchain',
    icon: Blocks,
    metrics: ['Real-time data', '50+ metrics', 'Multi-chain support'],
    tech: ['React', 'Web3.js', 'Node.js', 'PostgreSQL', 'GraphQL'],
    github: 'https://github.com/aaveshsaifi2/OKX',
    demo: '#',
    featured: true,
  },
  {
    title: 'Sentiment Analysis Dashboard',
    description: 'Real-time social media sentiment analysis platform with NLP-powered insights, trend detection, and customizable alert systems.',
    category: 'AI/ML',
    icon: BarChart3,
    metrics: ['1M+ tweets analyzed', '90% accuracy', 'Real-time processing'],
    tech: ['Python', 'TensorFlow', 'React', 'Redis', 'AWS Lambda'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'CivicTrack',
    description: 'Citizen engagement platform enabling transparent government communication, issue tracking, and community-driven civic improvements.',
    category: 'Full-Stack',
    icon: Users,
    metrics: ['5K+ active users', '200+ issues resolved', 'City-wide deployment'],
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Docker'],
    github: 'https://github.com/aaveshsaifi2/CivicTrack',
    demo: '#',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description: 'Modern 3D portfolio showcasing projects and skills with immersive animations, interactive elements, and responsive design.',
    category: 'Full-Stack',
    icon: Globe,
    metrics: ['3D interactions', 'Mobile-first', 'Optimized performance'],
    tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title gradient-text mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI/ML, full-stack development, and blockchain technologies
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'gradient-bg-solid text-foreground glow-primary'
                  : 'glass-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
              className={`glass-card overflow-hidden card-hover group ${
                project.featured ? 'ring-1 ring-primary/50' : ''
              }`}
            >
              {/* Project Header */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg-solid flex items-center justify-center group-hover:animate-pulse-glow transition-all">
                    <project.icon size={24} className="text-foreground" />
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full gradient-bg-solid">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.slice(0, 2).map((metric) => (
                    <span
                      key={metric}
                      className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded-full"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="skill-badge text-xs">+{project.tech.length - 4}</span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="px-6 py-4 border-t border-border/50 flex items-center gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
