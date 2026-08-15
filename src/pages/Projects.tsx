import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Shield, Layers, HelpCircle, Eye, Calendar } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import Modal from '../components/ui/Modal';

// --- Widget 1: TailorPro Interactive Order Tracker ---
function TailorProWidget() {
  const [activeStep, setActiveStep] = useState<'measure' | 'stitch' | 'deliver'>('measure');
  const [log, setLog] = useState<string>("Measurements recorded in database");

  const steps = [
    { id: 'measure' as const, label: 'Measurements' },
    { id: 'stitch' as const, label: 'Stitching' },
    { id: 'deliver' as const, label: 'Billed & Sent' }
  ];

  const handleStepClick = (stepId: 'measure' | 'stitch' | 'deliver') => {
    setActiveStep(stepId);
    if (stepId === 'measure') {
      setLog("Measurements logged in SQL Server JSON column.");
    } else if (stepId === 'stitch') {
      setLog("Order status transitioned to Stitching queue.");
    } else {
      setLog("Invoice generated, customer notified via automated billing.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-zinc-800/40 pb-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-mono text-zinc-400 font-medium">Order Tracker: #T-9928</span>
        </div>
        <span className="text-[9px] font-mono bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20 font-medium">
          TAILORPRO ENGINE
        </span>
      </div>

      <div className="my-auto py-2">
        <div className="grid grid-cols-3 gap-2">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={(e) => {
                e.stopPropagation();
                handleStepClick(step.id);
              }}
              className={`px-2 py-2 rounded-lg text-[9px] font-mono border transition-all duration-300 cursor-pointer ${
                activeStep === step.id
                  ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/20 scale-[0.98]'
                  : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-zinc-900/40 border border-zinc-800/60 p-2.5 rounded-lg text-center backdrop-blur-xs">
        <span className="text-[8px] font-mono text-indigo-400 font-semibold block uppercase tracking-wider mb-0.5">
          Real-Time Log
        </span>
        <span className="text-[10px] font-mono text-zinc-350 font-medium block truncate">
          {log}
        </span>
      </div>
    </div>
  );
}

// --- Widget 2: Employee Management Query Optimizer ---
function EmployeeDashboardWidget() {
  const [optimize, setOptimize] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-zinc-800/40 pb-2">
        <div>
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">Quarterly Reports Query</span>
          <span className="text-xs font-bold text-white font-mono">Database Index Profiler</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOptimize(!optimize);
          }}
          className={`text-[9px] font-mono px-2 py-0.5 rounded border transition-colors cursor-pointer ${
            optimize
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
          }`}
        >
          {optimize ? "Stored Proc Active" : "Raw Scan Active"}
        </button>
      </div>

      <div className="my-auto py-2 flex flex-col gap-2.5">
        {/* Row 1: Raw scan */}
        <div className="space-y-1">
          <div className="flex justify-between text-[8px] font-mono text-zinc-500">
            <span>Raw Full Table Scan</span>
            <span className="text-zinc-400 font-semibold">240ms</span>
          </div>
          <div className="w-full bg-zinc-900/60 h-2 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full w-[90%] rounded-full" />
          </div>
        </div>

        {/* Row 2: Optimized Stored Proc */}
        <div className="space-y-1">
          <div className="flex justify-between text-[8px] font-mono text-zinc-500">
            <span>Stored Procedure + CTE Index</span>
            <span className={optimize ? "text-emerald-400 font-semibold transition-colors" : "text-zinc-400 font-semibold"}>
              {optimize ? "15ms" : "240ms"}
            </span>
          </div>
          <div className="w-full bg-zinc-900/60 h-2 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: optimize ? "8%" : "90%" }}
              className="bg-indigo-500 h-full rounded-full"
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <span className="text-[8px] font-mono text-zinc-550 block uppercase tracking-wider">
          {optimize ? "// 35% DB CPU Load Saved Successfully" : "// Click top right button to run SQL Optimization"}
        </span>
      </div>
    </div>
  );
}

// --- Widget 3: Office PowerPoint Add-in Slide Deck ---
function OfficeAddinWidget() {
  const [template, setTemplate] = useState<'cover' | 'chart' | 'brand'>('cover');

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-zinc-800/40 pb-2">
        <div className="flex items-center gap-1.5">
          <Calendar size={11} className="text-zinc-450" />
          <span className="text-[10px] font-mono text-zinc-400 font-medium">PowerPoint Add-in Console</span>
        </div>
        <span className="text-[8px] font-mono text-zinc-500 tracking-wider">OFFICE.JS API</span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-auto py-2">
        {(['cover', 'chart', 'brand'] as const).map((t) => (
          <button
            key={t}
            onClick={(e) => {
              e.stopPropagation();
              setTemplate(t);
            }}
            className={`px-1 py-1.5 rounded-lg text-[9px] font-mono border transition-all duration-300 cursor-pointer ${
              template === t
                ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg'
                : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {t === 'cover' ? "Title Slide" : t === 'chart' ? "Insert Chart" : "Apply Brand"}
          </button>
        ))}
      </div>

      <div className="bg-zinc-900/40 border border-zinc-800/60 p-2.5 rounded-lg text-center backdrop-blur-xs font-mono text-[9px] text-zinc-400">
        {template === 'cover' && (
          <span>console: Injected Title Template (Corporate branding matching)</span>
        )}
        {template === 'chart' && (
          <span className="text-emerald-400">console: Rendered PowerPoint Chart vector (0ms lock)</span>
        )}
        {template === 'brand' && (
          <span className="text-indigo-400">console: Applied global presentation style theme guidelines</span>
        )}
      </div>
    </div>
  );
}

// --- Main Projects Component ---
export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Backend' | 'Software Tool'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  const renderProjectWidget = (id: string) => {
    if (id === 'tailorpro') return <TailorProWidget />;
    if (id === 'employeedashboard') return <EmployeeDashboardWidget />;
    return <OfficeAddinWidget />;
  };

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute right-0 top-[20%] w-[350px] h-[350px] bg-purple-500/5 dark:bg-purple-500/5 light:bg-purple-500/2 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4"
        >
          <span className="text-[10px] font-mono tracking-wider uppercase">04 // Portfolio</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base max-w-xl font-sans"
        >
          A selection of application ecosystem solutions built using scalable architectures, advanced SQL procedures, and custom frameworks.
        </motion.p>
      </div>

      {/* Category Filter Controls */}
      <div className="flex justify-center items-center gap-2 mb-12 sm:mb-16">
        {(['All', 'Full Stack', 'Backend', 'Software Tool'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
              filter === cat
                ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/15'
                : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-zinc-400 light:bg-zinc-100 light:border-zinc-250 light:text-zinc-655 light:hover:bg-zinc-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glow-card glass-panel rounded-2xl flex flex-col h-full group overflow-hidden border border-zinc-800/50 hover:border-zinc-700/80 transition-all duration-300"
            >
              {/* Interactive Widget Header (Seamless blend, no double-borders) */}
              <div className="relative overflow-hidden h-[200px] bg-zinc-950/40 p-5 flex items-center justify-center border-b border-zinc-800/50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.04),transparent_60%)] pointer-events-none" />
                {renderProjectWidget(project.id)}
                
                {/* Category Pill */}
                <span className="absolute top-6 left-6 bg-zinc-900/90 border border-zinc-800/85 text-[8px] font-mono text-zinc-400 px-2 py-0.5 rounded-full pointer-events-none">
                  {project.category}
                </span>

                {/* Open Modal overlay button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/45 backdrop-blur-xs transition-all duration-350 pointer-events-none group-hover:pointer-events-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-5 py-2.5 bg-zinc-900/95 border border-zinc-800 text-white rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-xl cursor-pointer hover:bg-black transition-colors"
                  >
                    <Eye size={14} />
                    Deep Dive
                  </button>
                </div>
              </div>

              {/* Card Content (Stretches to fill available height) */}
              <div className="flex-1 flex flex-col justify-between p-5 sm:p-6">
                {/* Text details (Title + Description) */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-zinc-950 mb-2 group-hover:text-indigo-400 transition-colors font-sans">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Details (Tags + Buttons) */}
                <div className="space-y-4">
                  {/* Tech stack items */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-150 border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 px-2.5 py-0.5 rounded text-zinc-400 dark:text-zinc-400 light:text-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] font-mono bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-150 border border-zinc-800/80 px-2 py-0.5 rounded text-zinc-500">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-zinc-800/30 dark:border-zinc-800/30 light:border-zinc-150 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 light:bg-zinc-100 light:border-zinc-250 light:text-zinc-700 light:hover:bg-zinc-200 rounded-lg transition-all cursor-pointer"
                    >
                      View Details
                      <ArrowRight size={12} />
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white dark:bg-zinc-900 dark:border-zinc-800 light:bg-zinc-100 light:border-zinc-250 light:text-zinc-650 hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                      aria-label="GitHub Repository"
                    >
                      <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Deep-Dive Modal Overlay */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          {/* Mock Visual */}
          <div className="rounded-xl overflow-hidden aspect-video bg-zinc-950 border border-zinc-800 mb-6 max-h-[220px]">
            <img
              src={`/${selectedProject.image}.jpg`}
              alt={selectedProject.title}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-zinc-350 dark:text-zinc-350 light:text-zinc-700 text-sm leading-relaxed mb-6 font-sans">
            {selectedProject.description}
          </p>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-1.5 mb-3 font-semibold">
              <Layers size={14} />
              Key Features
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-450 dark:text-zinc-400 light:text-zinc-600 font-sans pl-1">
              {selectedProject.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex gap-2 items-start leading-relaxed">
                  <span className="text-indigo-400 mt-1.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Challenge */}
          <div className="mb-6 bg-zinc-950/50 dark:bg-zinc-950/50 light:bg-zinc-50 border border-zinc-850 dark:border-zinc-850 light:border-zinc-200 rounded-xl p-4.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2 font-semibold">
              <HelpCircle size={14} />
              The Challenge
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-450 dark:text-zinc-400 light:text-zinc-650 font-sans">
              {selectedProject.challenge}
            </p>
          </div>

          {/* Technical Solution */}
          <div className="mb-8 bg-zinc-950/50 dark:bg-zinc-950/50 light:bg-zinc-50 border border-zinc-850 dark:border-zinc-850 light:border-zinc-200 rounded-xl p-4.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2 font-semibold">
              <Shield size={14} />
              The Solution (Senior Impact)
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-450 dark:text-zinc-400 light:text-zinc-650 font-sans">
              {selectedProject.solution}
            </p>
          </div>

          {/* Tech stack summary */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3 font-semibold">
              // Full Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-xs font-mono bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-md text-zinc-300 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 light:bg-zinc-100 light:border-zinc-250 light:text-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="flex gap-4 pt-6 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200">
            <a
              href={selectedProject.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-655 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer text-center"
            >
              <ExternalLink size={15} />
              Launch Live Demo
            </a>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 light:bg-zinc-100 light:border-zinc-250 light:text-zinc-700 light:hover:bg-zinc-200 transition-colors text-center"
            >
              <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub Repo
            </a>
          </div>
        </Modal>
      )}
    </section>
  );
}
