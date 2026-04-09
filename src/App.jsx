import { useTheme } from './hooks/useTheme';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className={`min-h-screen bg-background dark:bg-background-dark transition-colors duration-500`}>
      <ParticleBackground isDark={isDark} />
      <Navigation isDark={isDark} toggleTheme={toggle} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
