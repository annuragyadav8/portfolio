import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const roles = [
  'Software Engineer',
  'ASP.NET Core Developer',
  'C# Developer',
  'React Full Stack Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at full text
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 px-6"
    >
      {/* Background radial glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] h-[350px] bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Floating tech badges (positioned at safe outer viewport margins) */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden xl:block w-full max-w-7xl mx-auto px-6">
        {/* .NET Badge */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-4 2xl:left-8 px-3.5 py-2 glass-panel rounded-xl flex items-center gap-2 border border-zinc-800/80 shadow-lg"
        >
          <span className="w-5 h-5 rounded-md bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white">.NET</span>
          <span className="text-[11px] font-mono text-zinc-400">ASP.NET Core</span>
        </motion.div>

        {/* React Badge */}
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[20%] right-4 2xl:right-8 px-3.5 py-2 glass-panel rounded-xl flex items-center gap-2 border border-zinc-800/80 shadow-lg"
        >
          <svg className="w-5 h-5 animate-spin-slow text-sky-400" viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
          <span className="text-[11px] font-mono text-zinc-400">React.js</span>
        </motion.div>

        {/* SQL Server Badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[24%] left-4 2xl:left-8 px-3.5 py-2 glass-panel rounded-xl flex items-center gap-2 border border-zinc-800/80 shadow-lg"
        >
          <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
          <span className="text-[11px] font-mono text-zinc-400">SQL Server</span>
        </motion.div>

        {/* C# Badge */}
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, 5, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[24%] right-4 2xl:right-8 px-3.5 py-2 glass-panel rounded-xl flex items-center gap-2 border border-zinc-800/80 shadow-lg"
        >
          <span className="w-5 h-5 rounded-md bg-indigo-600 flex items-center justify-center text-xs font-bold text-white">C#</span>
          <span className="text-[11px] font-mono text-zinc-400">SOLID Core</span>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl w-full text-center flex flex-col items-center justify-center z-10">
        {/* Intro pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 light:bg-indigo-500/5 border border-indigo-500/30 text-indigo-400 dark:text-indigo-400 light:text-indigo-600 mb-8 select-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-glow" />
          <span className="text-[11px] font-mono font-medium tracking-wide uppercase">Open for Opportunities</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-zinc-500 dark:text-zinc-500 light:text-zinc-500 text-sm sm:text-base font-semibold tracking-wider uppercase mb-3 font-mono"
        >
          Hi, I'm Anurag Yadav
        </motion.h2>

        {/* Dynamic Typing Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 font-sans"
        >
          <span className="text-gradient block mb-4">Building Enterprise Apps</span>
          <span className="min-h-[1.25em] block text-gradient-purple typing-cursor leading-normal">
            {currentText}
          </span>
        </motion.h1>

        {/* Paragraph Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-sans"
        >
          {personalInfo.shortIntro}
        </motion.p>

        {/* Actions Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 mb-16"
        >
          {/* Projects Button */}
          <button
            onClick={() => handleScrollTo('#projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 rounded-full transition-all duration-300 shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-98 group cursor-pointer"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Download Resume Link */}
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:bg-zinc-800/80 dark:hover:bg-zinc-800/80 light:hover:bg-zinc-50 hover:text-white dark:hover:text-white light:hover:text-zinc-950 transition-all duration-300 cursor-pointer"
          >
            <Download size={15} />
            Download Resume
          </a>

          {/* Contact Button */}
          <button
            onClick={() => handleScrollTo('#contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white text-zinc-300 dark:text-zinc-300 light:text-zinc-700 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 hover:bg-zinc-800/80 dark:hover:bg-zinc-800/80 light:hover:bg-zinc-50 hover:text-white dark:hover:text-white light:hover:text-zinc-950 transition-all duration-300 cursor-pointer"
          >
            <Mail size={15} />
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Down arrow link indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-1 text-[10px] font-mono text-zinc-500 uppercase tracking-widest cursor-pointer select-none"
        onClick={() => handleScrollTo('#about')}
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
