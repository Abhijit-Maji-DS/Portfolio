import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/20 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
            
            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 lg:right-8 glass rounded-2xl p-6 shadow-xl border border-silver/20 dark:border-silver-dark/20"
            >
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-accent">0</div>
                  <div className="text-xs text-muted dark:text-muted-dark mt-1">Years Exp.</div>
                </div>
                <div className="w-px h-12 bg-silver dark:bg-silver-dark" />
                <div className="text-center">
                  <div className="text-3xl font-semibold text-accent">5+</div>
                  <div className="text-xs text-muted dark:text-muted-dark mt-1">Projects</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              About Me
            </span>
            
            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold text-graphite dark:text-foreground-dark leading-tight">
              Passionate about Software Developver
              <span className="text-accent"> impactful </span>
              digital solutions
            </h2>
            
            <div className="mt-8 space-y-6 text-muted dark:text-muted-dark leading-relaxed">
              <p>
                I am a passionate Computer Science Engineering student with a strong interest in software development and modern technologies.
                I enjoy building clean, efficient, and user-friendly applications that solve real-world problems.
                I have a solid foundation in programming languages such as C, Java, and Python.
                I am also familiar with web development technologies including JavaScript, React, Vite .
              </p>
              <p>
                My academic journey has helped me develop strong problem-solving and analytical thinking skills.
                I have worked on projects that enhanced my understanding of databases, APIs, and full-stack development.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or gain knowledge through
                technical writing and mentorship.
                I am seeking opportunities where I can grow as a developer and make meaningful contributions.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {['React', 'JavaScript', 'Node.js', 'Next.js', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium text-graphite dark:text-foreground-dark bg-silver/30 dark:bg-silver-dark/30 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
