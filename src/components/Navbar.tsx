import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    
    if (initialTheme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  // Track scroll depth for active styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    
    if (nextTheme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-zinc-50/85 dark:bg-zinc-950/70 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/40 shadow-xs' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-lg font-bold tracking-widest uppercase flex items-center gap-2 group font-sans"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-extrabold shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            AY
          </span>
          <span className="hidden sm:inline font-extrabold tracking-wider text-zinc-900 dark:text-white transition-colors">
            ANURAG YADAV
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-200/80 dark:bg-zinc-900/50 border border-zinc-300/80 dark:border-zinc-800/60 rounded-full px-2 py-1.5 backdrop-blur-md transition-colors shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-full ${
                  isActive
                    ? 'text-zinc-950 dark:text-white font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-white dark:bg-indigo-500/25 rounded-full border border-zinc-300/80 dark:border-indigo-500/30 shadow-xs -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right side items (Theme toggle + Menu toggle) */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-zinc-200/80 dark:bg-zinc-900/50 border border-zinc-300/80 dark:border-zinc-800/50 hover:bg-zinc-300/80 dark:hover:bg-zinc-800/50 text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors duration-300 shadow-xs cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wide bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
          >
            Contact Me
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white dark:text-zinc-400 dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-950 hover:bg-zinc-900/50 dark:hover:bg-zinc-900/50 light:hover:bg-zinc-200/50 transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-zinc-950/95 dark:bg-zinc-950/95 light:bg-white/95 border-b border-zinc-850 dark:border-zinc-850 light:border-zinc-200 overflow-hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`py-3 text-sm font-semibold tracking-wide border-b border-zinc-900/50 dark:border-zinc-900/50 light:border-zinc-100 last:border-0 ${
                      isActive 
                        ? 'text-indigo-500 font-bold' 
                        : 'text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-950'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="mt-4 w-full py-3 text-center text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg"
              >
                Contact Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
