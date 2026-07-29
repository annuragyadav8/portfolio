import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000; // 2 seconds
    const interval = 25; // update every 25ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setIsFinished(true);
          setTimeout(onComplete, 500); // Allow exit animation to run
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center z-[9999]"
        >
          {/* Main Logo Container */}
          <div className="relative flex flex-col items-center max-w-xs w-full px-6">
            {/* SVG Logo drawing */}
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="mb-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Hexagon with glow */}
              <motion.polygon
                points="50,5 90,28 90,72 50,95 10,72 10,28"
                stroke="url(#logo-grad)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Monogram A */}
              <motion.path
                d="M35,65 L50,30 L65,65"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              />
              {/* Monogram Y */}
              <motion.path
                d="M50,48 L50,70"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
              />
              {/* Dynamic Gradient Def */}
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>

            {/* Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl font-bold text-white tracking-widest uppercase mb-1 font-sans"
            >
              ANURAG YADAV
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xs font-mono text-zinc-400 tracking-wider mb-6"
            >
              SOFTWARE ENGINEER
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-full h-[2px] bg-zinc-900 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-full"
                style={{ width: `${progress}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            {/* Progress Value */}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="text-[10px] font-mono text-zinc-500 mt-2"
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
