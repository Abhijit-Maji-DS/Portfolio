import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Abhijit-Maji-DS', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abhijit-maji-87ba6a29a?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 border-t border-silver/20 dark:border-silver-dark/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="text-2xl font-semibold text-graphite dark:text-foreground-dark"
            >
              Portfolio
            </a>
            <p className="mt-4 text-muted dark:text-muted-dark leading-relaxed">
              Creating exceptional digital experiences with passion and precision.
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-graphite dark:text-foreground-dark uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-muted dark:text-muted-dark hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-graphite dark:text-foreground-dark uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-silver/20 dark:bg-silver-dark/20 text-muted dark:text-muted-dark hover:text-accent hover:bg-accent/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-silver/20 dark:border-silver-dark/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted dark:text-muted-dark">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted dark:text-muted-dark flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
}
