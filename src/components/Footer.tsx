import { useEffect, useState } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/60 backdrop-blur-sm py-12 px-6 dark:border-zinc-900 dark:bg-zinc-950/60 light:border-zinc-200 light:bg-white/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand info */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
            AY
          </span>
          <span className="text-xs font-mono text-zinc-500">
            © {new Date().getFullYear()} Anurag Yadav. All rights reserved.
          </span>
        </div>

        {/* Middle/Right: Links & Socials */}
        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white dark:text-zinc-500 dark:hover:text-white light:text-zinc-500 light:hover:text-zinc-950 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white dark:text-zinc-500 dark:hover:text-white light:text-zinc-500 light:hover:text-zinc-950 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-zinc-500 hover:text-white dark:text-zinc-500 dark:hover:text-white light:text-zinc-500 light:hover:text-zinc-950 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      {/* Back to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-500 hover:bg-indigo-650 text-white shadow-xl shadow-indigo-500/20 active:scale-95 transition-all duration-300 z-45 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </footer>
  );
}
