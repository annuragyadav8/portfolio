import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Activity, Code, Cpu } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute right-0 top-[20%] w-[300px] h-[300px] bg-purple-500/5 dark:bg-purple-500/5 light:bg-purple-500/3 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4"
        >
          <span className="text-[10px] font-mono tracking-wider uppercase">01 // Profile</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient"
        >
          Engineering Scalable Architecture
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base max-w-xl font-sans"
        >
          A peek into my technical foundations, code philosophy, and key developer metrics.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Core Bio - Big Card (span 2 cols on md) */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 glow-card glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
              <Code size={20} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white dark:text-white light:text-zinc-950 font-sans">
              Hi, I'm Anurag Yadav
            </h3>
            <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              With 1.5+ years of hands-on experience, I focus on creating high-performance, robust application ecosystems. I specialize in designing microservices and REST APIs with .NET Core while delivering smooth frontend client portals in React.
            </p>
            <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base leading-relaxed font-sans">
              My engineering philosophy revolves around simplicity: writing testable, modular code that scales alongside transaction volume. I'm highly active in designing optimal database designs and adhering to the best industry standards.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-200/50 flex flex-wrap gap-4 text-xs font-mono text-zinc-500">
            <span>// LOVES CLEAN CODE</span>
            <span>// DATABASE TUNING</span>
            <span>// MODULAR ENGINEERING</span>
          </div>
        </motion.div>

        {/* Metrics Card (1 col) */}
        <motion.div
          variants={itemVariants}
          className="glow-card glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
              <Activity size={20} />
            </div>
            <h3 className="text-lg font-bold mb-6 text-white dark:text-white light:text-zinc-950 font-sans">
              Key Metrics
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-100 pb-3">
                <span className="text-xs font-mono text-zinc-400">Experience</span>
                <span className="text-lg font-bold text-indigo-400 font-mono">1.5+ Years</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-100 pb-3">
                <span className="text-xs font-mono text-zinc-400">Core Stack</span>
                <span className="text-sm font-semibold text-purple-400 font-sans">.NET & React</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-100 pb-3">
                <span className="text-xs font-mono text-zinc-400">Code Quality Target</span>
                <span className="text-lg font-bold text-emerald-400 font-mono">85%+ xUnit</span>
              </div>
              <div className="flex items-center justify-between pb-3">
                <span className="text-xs font-mono text-zinc-400">API Latency Standard</span>
                <span className="text-lg font-bold text-amber-400 font-mono">&lt;200ms</span>
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-zinc-600 block mt-6">
            *Stats reflect ongoing production deliverables.
          </span>
        </motion.div>

        {/* Clean Architecture (1 col) */}
        <motion.div
          variants={itemVariants}
          className="glow-card glass-panel rounded-2xl p-6 sm:p-8"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
            <ShieldCheck size={20} />
          </div>
          <h3 className="text-lg font-bold mb-3 text-white dark:text-white light:text-zinc-950 font-sans">
            Clean Architecture
          </h3>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-xs sm:text-sm leading-relaxed font-sans">
            Decoupling domain business models from frameworks and databases. Ensuring software cores remain completely unit-testable and adaptable to changing infrastructures.
          </p>
        </motion.div>

        {/* SOLID Principles (1 col) */}
        <motion.div
          variants={itemVariants}
          className="glow-card glass-panel rounded-2xl p-6 sm:p-8"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
            <Zap size={20} />
          </div>
          <h3 className="text-lg font-bold mb-3 text-white dark:text-white light:text-zinc-950 font-sans">
            SOLID Principles
          </h3>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-xs sm:text-sm leading-relaxed font-sans">
            Applying SOLID design guidelines daily to guarantee Single Responsibilities, open-close extensions, interface segregations, and solid dependency injections.
          </p>
        </motion.div>

        {/* High Performance (1 col) */}
        <motion.div
          variants={itemVariants}
          className="glow-card glass-panel rounded-2xl p-6 sm:p-8"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
            <Cpu size={20} />
          </div>
          <h3 className="text-lg font-bold mb-3 text-white dark:text-white light:text-zinc-950 font-sans">
            Optimized Execution
          </h3>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-xs sm:text-sm leading-relaxed font-sans">
            Leveraging SQL database index tuning, asynchronous operations, and distributed cache engines (like Redis) to achieve extreme response times and throughput.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
