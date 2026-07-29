import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import type { Skill } from '../data/portfolioData';
import { Server, Layout, Database, Wrench } from 'lucide-react';

const categories = [
  { name: 'Backend Development', id: 'Backend', icon: Server, color: 'text-indigo-400 bg-indigo-500/10' },
  { name: 'Frontend Design', id: 'Frontend', icon: Layout, color: 'text-purple-400 bg-purple-500/10' },
  { name: 'Database Engines', id: 'Database', icon: Database, color: 'text-amber-400 bg-amber-500/10' },
  { name: 'Tools & Ecosystem', id: 'Tools & Practices', icon: Wrench, color: 'text-emerald-400 bg-emerald-500/10' },
];

export default function Skills() {
  // Filter skills by category
  const getSkillsByCategory = (category: string) => {
    return skillsData.filter((skill) => skill.category === category);
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute left-0 bottom-[10%] w-[350px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/5 light:bg-indigo-500/3 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4"
        >
          <span className="text-[10px] font-mono tracking-wider uppercase">02 // Stack</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient"
        >
          Technical Capabilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base max-w-xl font-sans"
        >
          My proficiencies across backend services, client-side scripting, database modeling, and dev pipelines.
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, idx) => {
          const categorySkills = getSkillsByCategory(cat.id);
          const Icon = cat.icon;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 80 }}
              className="glow-card glass-panel rounded-2xl p-6 sm:p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className={`p-2 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 ${cat.color}`}>
                  <Icon size={18} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-zinc-950 font-sans">
                  {cat.name}
                </h3>
              </div>

              {/* Progress bars list */}
              <div className="space-y-6">
                {categorySkills.map((skill: Skill) => (
                  <div key={skill.name} className="group">
                    {/* Label & Value */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-700 group-hover:text-white dark:group-hover:text-white light:group-hover:text-zinc-950 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="h-1.5 w-full bg-zinc-800/80 dark:bg-zinc-800/80 light:bg-zinc-200 rounded-full overflow-hidden">
                      {/* Inner Fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
