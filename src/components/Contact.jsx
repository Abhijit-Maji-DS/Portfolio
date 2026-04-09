import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Send, Mail, MapPin, Phone, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'abhimaji010@gmail.com', href: 'mailto:abhimaji010@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 86535 XXXXX', href: 'tel:+91 86535 XXXXX' },
    { icon: MapPin, label: 'Location', value: 'Panskura, West Bengal', href: '#' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 lg:py-40"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-semibold text-graphite dark:text-foreground-dark">
            Let's Work Together
          </h2>
          <p className="mt-4 text-muted dark:text-muted-dark max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-graphite dark:text-foreground-dark mb-6">
                Contact Information
              </h3>
              <p className="text-muted dark:text-muted-dark leading-relaxed">
                Feel free to reach out through any of these channels. I typically
                respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted dark:text-muted-dark">{item.label}</p>
                    <p className="text-graphite dark:text-foreground-dark font-medium group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-graphite dark:text-foreground-dark mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-silver/20 dark:bg-silver-dark/20 border border-silver/30 dark:border-silver-dark/30 text-graphite dark:text-foreground-dark placeholder-muted dark:placeholder-muted-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="Abhijit Maji"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-graphite dark:text-foreground-dark mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-silver/20 dark:bg-silver-dark/20 border border-silver/30 dark:border-silver-dark/30 text-graphite dark:text-foreground-dark placeholder-muted dark:placeholder-muted-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="abhimaji010@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-graphite dark:text-foreground-dark mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-silver/20 dark:bg-silver-dark/20 border border-silver/30 dark:border-silver-dark/30 text-graphite dark:text-foreground-dark placeholder-muted dark:placeholder-muted-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent-hover disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
