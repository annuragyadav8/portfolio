import { motion } from 'framer-motion';
import { experiencesData } from '../data/portfolioData';
import type { Experience as ExpType } from '../data/portfolioData';
import { Calendar, Briefcase, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 max-w-4xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute right-0 top-[40%] w-[250px] h-[250px] bg-purple-500/5 dark:bg-purple-500/5 light:bg-purple-500/3 blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4"
        >
          <span className="text-[10px] font-mono tracking-wider uppercase">03 // Timeline</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient"
        >
          Professional Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base max-w-xl font-sans"
        >
          My professional milestones, architectural impacts, and production deliverables.
        </motion.p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-zinc-800 dark:border-zinc-800 light:border-zinc-200 ml-4 md:ml-6 pl-8 md:pl-10 space-y-16">
        {/* Glow connector bar effect */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent pointer-events-none" />

        {experiencesData.map((exp: ExpType, idx: number) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Dot Indicator */}
            <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-300 dark:bg-zinc-950 dark:border-zinc-850 light:bg-zinc-50 light:border-zinc-200">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-indigo-400 transition-colors" />
            </div>

            {/* Content Card */}
            <div className="glow-card glass-panel rounded-2xl p-6 sm:p-8">
              {/* Date & Role */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 font-semibold bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/10 w-fit">
                  <Calendar size={12} />
                  {exp.duration}
                </span>
                <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                  <Briefcase size={12} />
                  Full-Time
                </span>
              </div>

              {/* Title & Company */}
              <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-zinc-950 font-sans mb-1">
                {exp.role}
              </h3>
              <h4 className="text-sm font-semibold text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-6 flex items-center gap-1.5 font-sans">
                {exp.company}
              </h4>

              {/* Achievements list */}
              <ul className="space-y-3.5 mb-6 text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-700 font-sans pl-1">
                {exp.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="flex gap-2.5 leading-relaxed">
                    <span className="text-indigo-400 font-semibold mt-1">
                      <Award size={14} className="min-w-[14px]" />
                    </span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-200/50">
                {exp.techUsed.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] sm:text-xs font-mono bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-zinc-100 border border-zinc-850 dark:border-zinc-850 light:border-zinc-250 px-2 py-0.5 rounded text-zinc-400 dark:text-zinc-400 light:text-zinc-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
