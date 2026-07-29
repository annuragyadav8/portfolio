import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, GitCommit, FolderGit2, Star, TrendingUp } from 'lucide-react';

export default function GithubStats() {
  const [hoveredCell, setHoveredCell] = useState<{ count: number; date: string } | null>(null);

  // Generate mock contribution calendar data (15 weeks)
  // For screen space, 24 columns (about 6 months) fits perfectly on both desktop and mobile layouts!
  const cols = 24;
  const rows = 7;
  
  const contributionGrid = useMemo(() => {
    const grid: { count: number; date: string }[][] = [];
    const baseDate = new Date();
    baseDate.setDate(baseDate.getDate() - cols * rows);

    for (let c = 0; c < cols; c++) {
      const colData = [];
      for (let r = 0; r < rows; r++) {
        const currentDate = new Date(baseDate);
        currentDate.setDate(currentDate.getDate() + (c * rows + r));
        
        // Generate values that resemble realistic clusters
        let count = 0;
        const dayOfWeek = currentDate.getDay();
        const rand = Math.random();
        
        if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Weekdays
          if (rand > 0.8) count = Math.floor(Math.random() * 8) + 4; // heavy days
          else if (rand > 0.3) count = Math.floor(Math.random() * 4) + 1; // standard days
        } else { // Weekends
          if (rand > 0.85) count = Math.floor(Math.random() * 3) + 1;
        }

        colData.push({
          count,
          date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        });
      }
      grid.push(colData);
    }
    return grid;
  }, []);

  // Determine contribution block color level
  const getColorClass = (count: number) => {
    if (count === 0) return 'bg-zinc-900 border-zinc-950 dark:bg-zinc-900/60 dark:border-zinc-950 light:bg-zinc-200 light:border-zinc-50';
    if (count <= 2) return 'bg-emerald-950/60 text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-900/10 light:bg-emerald-100 light:border-emerald-250';
    if (count <= 5) return 'bg-emerald-800/80 text-emerald-100 dark:bg-emerald-800/60 light:bg-emerald-300 light:border-emerald-400';
    if (count <= 8) return 'bg-emerald-600 dark:bg-emerald-600 light:bg-emerald-500';
    return 'bg-emerald-400 dark:bg-emerald-400 light:bg-emerald-600';
  };

  return (
    <section id="github-stats" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute left-0 bottom-[10%] w-[300px] h-[300px] bg-emerald-500/5 dark:bg-emerald-500/5 light:bg-emerald-500/2 blur-[110px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4"
        >
          <span className="text-[10px] font-mono tracking-wider uppercase">05 // Metrics</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient"
        >
          GitHub Open Source Activity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base max-w-xl font-sans"
        >
          A live representation of my developer logs, contributions, and open-source metric outputs.
        </motion.p>
      </div>

      {/* Stats Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contributions Calendar Card (span 2 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glow-card glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-zinc-950 flex items-center gap-2 font-sans">
                <TrendingUp size={16} className="text-emerald-400" />
                Contributions Calendar
              </h3>
              <span className="text-xs font-mono text-zinc-500">// Past 6 Months</span>
            </div>

            {/* Grid Container */}
            <div className="overflow-x-auto custom-scrollbar pb-4">
              <div className="flex gap-[3px] min-w-[360px] justify-center mx-auto">
                {contributionGrid.map((column, cIdx) => (
                  <div key={cIdx} className="flex flex-col gap-[3px]">
                    {column.map((cell, rIdx) => (
                      <div
                        key={rIdx}
                        onMouseEnter={() => setHoveredCell({ count: cell.count, date: cell.date })}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] rounded-[2px] transition-colors border-[0.5px] cursor-pointer ${getColorClass(cell.count)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Legend & Tooltip info */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-150 h-6">
              {/* Tooltip detail */}
              <div className="text-xs font-mono text-zinc-400">
                {hoveredCell ? (
                  <span className="text-emerald-400">
                    {hoveredCell.count === 0 ? 'No' : hoveredCell.count} {hoveredCell.count === 1 ? 'contribution' : 'contributions'} on {hoveredCell.date}
                  </span>
                ) : (
                  <span className="text-zinc-500">Hover over blocks for details</span>
                )}
              </div>
              
              {/* Legend scale */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded bg-zinc-900 border border-zinc-950" />
                <div className="w-2.5 h-2.5 rounded bg-emerald-950/60" />
                <div className="w-2.5 h-2.5 rounded bg-emerald-800/60" />
                <div className="w-2.5 h-2.5 rounded bg-emerald-600" />
                <div className="w-2.5 h-2.5 rounded bg-emerald-400" />
                <span>More</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GitHub Quick Stats metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glow-card glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-zinc-950 mb-8 font-sans">
              Repository Metrics
            </h3>

            <div className="space-y-6">
              {/* Commits */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <GitCommit size={18} />
                </div>
                <div>
                  <div className="text-lg font-bold text-white dark:text-white light:text-zinc-950 font-mono">1,124</div>
                  <div className="text-[11px] font-mono text-zinc-500">Total Commits</div>
                </div>
              </div>

              {/* PRs */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <GitPullRequest size={18} />
                </div>
                <div>
                  <div className="text-lg font-bold text-white dark:text-white light:text-zinc-950 font-mono">38</div>
                  <div className="text-[11px] font-mono text-zinc-500">PRs Merged (Enterprise)</div>
                </div>
              </div>

              {/* Repos */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <FolderGit2 size={18} />
                </div>
                <div>
                  <div className="text-lg font-bold text-white dark:text-white light:text-zinc-950 font-mono">14</div>
                  <div className="text-[11px] font-mono text-zinc-500">Public Repositories</div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Star size={18} />
                </div>
                <div>
                  <div className="text-lg font-bold text-white dark:text-white light:text-zinc-950 font-mono">68</div>
                  <div className="text-[11px] font-mono text-zinc-500">Stars Earned</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-[10px] font-mono text-zinc-600 mt-6 pt-4 border-t border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-150">
            Metrics aggregated via GitHub GraphQL API.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
