import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'FinFlow Dashboard',
    description: 'A comprehensive financial analytics platform with real-time data visualization, portfolio tracking, and AI-powered insights for modern investors.',
    image: '/images/project2.jpg',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'EcoShop Marketplace',
    description: 'Sustainable e-commerce platform connecting eco-conscious consumers with environmentally friendly products and local artisans.',
    image: '/images/project3.jpg',
    tags: ['Next.js', 'Prisma', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Pulse Health App',
    description: 'Mobile-first health tracking application with personalized wellness recommendations and seamless wearable device integration.',
    image: '/images/project1.jpg',
    tags: ['React Native', 'GraphQL', 'MongoDB', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        !isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative aspect-video rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-graphite/10 dark:shadow-black/30"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover overlay links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/90 text-graphite hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-accent text-white hover:bg-accent-hover transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className={`absolute -z-10 w-full h-full rounded-2xl lg:rounded-3xl bg-accent/20 blur-2xl ${
          isEven ? '-bottom-4 -right-4' : '-bottom-4 -left-4'
        }`} />
      </div>

      {/* Content */}
      <div className={`${!isEven ? 'lg:order-1 lg:text-right' : ''}`}>
        {project.featured && (
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-4">
            Featured Project
          </span>
        )}
        
        <h3 className="text-2xl lg:text-3xl font-semibold text-graphite dark:text-foreground-dark">
          {project.title}
        </h3>
        
        <p className="mt-4 text-muted dark:text-muted-dark leading-relaxed">
          {project.description}
        </p>
        
        <div className={`mt-6 flex flex-wrap gap-2 ${!isEven ? 'lg:justify-end' : ''}`}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium text-graphite/80 dark:text-foreground-dark/80 bg-silver/30 dark:bg-silver-dark/30 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`mt-8 flex items-center gap-6 ${!isEven ? 'lg:justify-end' : ''}`}>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            whileHover={{ x: 4 }}
          >
            View Project
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted dark:text-muted-dark hover:text-graphite dark:hover:text-foreground-dark transition-colors"
          >
            <Github className="w-4 h-4" />
            Source
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Selected Work
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-semibold text-graphite dark:text-foreground-dark">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted dark:text-muted-dark max-w-2xl mx-auto">
            A curated selection of projects that showcase my expertise in building
            modern, scalable, and user-centric applications.
          </p>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
