import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, BookOpen, Star } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute left-0 bottom-[20%] w-[250px] h-[250px] bg-indigo-500/5 dark:bg-indigo-500/5 light:bg-indigo-500/2 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4"
        >
          <span className="text-[10px] font-mono tracking-wider uppercase">06 // Academic</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient"
        >
          Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base max-w-xl font-sans"
        >
          Academic foundation in Information Technologies, databases, and structural software development.
        </motion.p>
      </div>

      {/* Education Cards */}
      <div className="max-w-3xl mx-auto">
        {educationData.map((edu, idx) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring', stiffness: 90 }}
            className="glow-card glass-panel rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-start gap-6 border border-zinc-800/50 hover:border-zinc-700/80 transition-all duration-300"
          >
            {/* Degree Icon */}
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <GraduationCap size={24} />
            </div>

            <div className="flex-1 space-y-4">
              {/* College & Score */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-zinc-950 font-sans">
                    {edu.degree}
                  </h3>
                  <p className="text-zinc-450 dark:text-zinc-400 light:text-zinc-650 text-sm font-semibold font-sans">
                    {edu.university}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-mono text-xs font-semibold w-fit">
                  <Star size={12} />
                  {edu.score}
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                <Calendar size={13} />
                {edu.duration}
              </div>

              {/* Coursework */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-450 flex items-center gap-1.5 mb-3 font-semibold">
                  <BookOpen size={13} />
                  Key Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-[10px] sm:text-xs font-mono bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-150 border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 px-2.5 py-0.5 rounded-md text-zinc-400 dark:text-zinc-450 light:text-zinc-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
