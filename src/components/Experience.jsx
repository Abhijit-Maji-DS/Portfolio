import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    title: 'Frontend Developer',
    company: 'XXXXX',
    period: 'Present',
    description: 'Learning frontend architecture for enterprise applications, junior developers, and implementing design systems that improved development.',
    technologies: ['React', 'JavaScript', 'Next.js', 'Tailwind'],
  },
  {
    type: 'education',
    title: 'Full Stack Developer',
    company: 'XXXXXX',
    period: 'Present',
    description: 'Developed and maintained multiple projects using MVPs to production-ready applications. Building scalable APIs and responsive user interfaces.',
    technologies: ['Node.js', 'React', 'MongoDB', 'Express.js'],
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science Engineering(Data Science)',
    company: 'Haldia Institute of Technology',
    period: '2023 - 2027',
    description: 'Graduated with honors. Focused on software engineering, algorithms, and new technologies.',
    technologies: ['Java', 'Python', 'Data Structures', 'AI/ML'],
  },
];

function TimelineItem({ item, index }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-silver dark:bg-silver-dark -translate-x-1/2 hidden lg:block" />
      
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-1/2 top-8 -translate-x-1/2 z-10 hidden lg:block"
      >
        <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-background dark:ring-background-dark" />
      </motion.div>

      <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}
        >
          <div className="group p-6 lg:p-8 rounded-2xl bg-card dark:bg-card-dark backdrop-blur-sm border border-silver/20 dark:border-silver-dark/20 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5">
            <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'lg:justify-end' : ''}`}>
              <div className={`p-2 rounded-xl bg-accent/10 text-accent ${isLeft ? 'lg:order-2' : ''}`}>
                {item.type === 'work' ? (
                  <Briefcase className="w-5 h-5" />
                ) : (
                  <GraduationCap className="w-5 h-5" />
                )}
              </div>
              <span className="text-sm font-medium text-accent">{item.period}</span>
            </div>

            <h3 className="text-xl font-semibold text-graphite dark:text-foreground-dark">
              {item.title}
            </h3>
            <p className="mt-1 text-muted dark:text-muted-dark font-medium">
              {item.company}
            </p>
            <p className="mt-4 text-muted dark:text-muted-dark leading-relaxed">
              {item.description}
            </p>

            <div className={`mt-6 flex flex-wrap gap-2 ${isLeft ? 'lg:justify-end' : ''}`}>
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium text-graphite/80 dark:text-foreground-dark/80 bg-silver/30 dark:bg-silver-dark/30 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Empty space for alternating layout */}
        <div className="hidden lg:block" />
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 lg:py-40 bg-silver/10 dark:bg-silver-dark/10"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-semibold text-graphite dark:text-foreground-dark">
            Experience & Education
          </h2>
          <p className="mt-4 text-muted dark:text-muted-dark max-w-2xl mx-auto">
            A timeline of my professional growth and educational background,
            showcasing the milestones that shaped my expertise.
          </p>
        </motion.div>

        <div className="relative space-y-8 lg:space-y-12">
          {/* Vertical line for mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-silver dark:bg-silver-dark lg:hidden" />
          
          {experiences.map((item, index) => (
            <TimelineItem key={item.title + item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
