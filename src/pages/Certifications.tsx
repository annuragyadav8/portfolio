import { motion } from 'framer-motion';
import { certificationsData } from '../data/portfolioData';
import type { Certification } from '../data/portfolioData';
import { Award, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute right-0 bottom-[20%] w-[250px] h-[250px] bg-purple-500/5 dark:bg-purple-500/5 light:bg-purple-500/2 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4"
        >
          <span className="text-[10px] font-mono tracking-wider uppercase">06 // Credentials</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient"
        >
          Industry Certifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base max-w-xl font-sans"
        >
          Verified certifications, cloud structures, and professional bootcamps proving my development skills.
        </motion.p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert: Certification, idx: number) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring', stiffness: 90 }}
            className="glow-card glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              {/* Badge Icon */}
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                {cert.issuer === 'Microsoft' ? <ShieldCheck size={20} /> : <Award size={20} />}
              </div>

              {/* Title & Details */}
              <h3 className="text-sm sm:text-base font-bold text-white dark:text-white light:text-zinc-950 mb-2 leading-snug font-sans">
                {cert.name}
              </h3>
              <p className="text-zinc-450 dark:text-zinc-450 light:text-zinc-550 text-xs font-semibold mb-1 font-sans">
                {cert.issuer}
              </p>
              <p className="text-zinc-550 text-[11px] font-mono mb-4">
                {cert.date}
              </p>
              
              {cert.credentialId && (
                <div className="text-[10px] font-mono text-zinc-500 mb-6 bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-100 border border-zinc-900 px-2.5 py-1 rounded w-fit">
                  ID: {cert.credentialId}
                </div>
              )}
            </div>

            {/* Credential Link */}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-indigo-400 transition-colors w-fit pt-2 cursor-pointer font-sans"
              >
                Verify Credential
                <ExternalLink size={12} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
