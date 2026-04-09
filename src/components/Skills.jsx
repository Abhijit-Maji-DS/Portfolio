import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Palette, Server, Smartphone, Database, Cloud } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 75 },
      { name: 'JavaScript', level: 80 },
      { name: 'Tailwind CSS', level: 70 },
    ],
  },
  {
    icon: Server,
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Express.js', level: 70 },
      { name: 'MongoDB', level: 85 },
      { name: 'REST APIs', level: 75 },
    ],
  },
  {
    icon: Database,
    title: 'Database & Storage',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Vercel', level: 95 },
      { name: 'CI/CD', level: 88 },
    ],
  },
  {
    icon: Palette,
    title: 'Design & Tools',
    skills: [
    { name: 'Git', level: 95 },
      { name: 'Testing', level: 82 },
      { name: 'UI/UX Design', level: 70 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-graphite dark:text-foreground-dark font-medium">{name}</span>
        <span className="text-muted dark:text-muted-dark">{level}%</span>
      </div>
      <div className="h-2 bg-silver/40 dark:bg-silver-dark/40 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-accent to-blue-400 rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 lg:py-40 bg-silver/10 dark:bg-silver-dark/10"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            My Expertise
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-semibold text-graphite dark:text-foreground-dark">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-muted dark:text-muted-dark max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience,
            constantly evolving with the industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-3xl bg-card dark:bg-card-dark backdrop-blur-sm border border-silver/20 dark:border-silver-dark/20 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-graphite dark:text-foreground-dark">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.1 + skillIndex * 0.1}
                    />
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
