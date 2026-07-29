import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field on type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Trigger canvas-confetti blast
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#10b981'],
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success alert after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute left-[10%] top-[40%] w-[300px] h-[300px] bg-indigo-500/5 dark:bg-indigo-500/5 light:bg-indigo-500/2 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4"
        >
          <span className="text-[10px] font-mono tracking-wider uppercase">07 // Connections</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-gradient"
        >
          Start A Conversation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base max-w-xl font-sans"
        >
          Have a role in mind, a project idea, or just want to chat about .NET architecture? Drop me a message.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info & Details (span 5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="glow-card glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white dark:text-white light:text-zinc-950 font-sans mb-2">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500">Email Address</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-zinc-300 hover:text-white dark:text-zinc-300 dark:hover:text-white light:text-zinc-700 light:hover:text-zinc-950 transition-colors font-sans break-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500">Phone Number</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-zinc-300 hover:text-white dark:text-zinc-300 dark:hover:text-white light:text-zinc-700 light:hover:text-zinc-950 transition-colors font-sans">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500">Location</div>
                  <div className="text-sm font-semibold text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-sans">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="glow-card glass-panel rounded-2xl p-6 sm:p-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-6 font-semibold">
              // Find Me Online
            </h3>
            
            <div className="flex gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white dark:bg-zinc-900 dark:border-zinc-800 light:bg-zinc-100 light:border-zinc-200 light:text-zinc-700 light:hover:bg-zinc-200 hover:bg-zinc-800 transition-colors cursor-pointer text-xs font-semibold"
              >
                <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white dark:bg-zinc-900 dark:border-zinc-800 light:bg-zinc-100 light:border-zinc-200 light:text-zinc-700 light:hover:bg-zinc-200 hover:bg-zinc-800 transition-colors cursor-pointer text-xs font-semibold"
              >
                <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form (span 7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 glow-card glass-panel rounded-2xl p-6 sm:p-8"
        >
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-white dark:text-white light:text-zinc-950 mb-2 font-sans">
                Message Sent Successfully!
              </h3>
              <p className="text-zinc-450 dark:text-zinc-400 light:text-zinc-650 text-sm max-w-sm font-sans mb-8 leading-relaxed">
                Thank you for reaching out. I've received your query and will reply within 24 hours.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white transition-colors cursor-pointer text-xs font-semibold"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-zinc-950 font-sans">
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-zinc-450 dark:text-zinc-450 light:text-zinc-550 font-mono">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all dark:bg-zinc-950/80 dark:border-zinc-800 dark:text-white light:bg-zinc-50 light:border-zinc-200 light:text-zinc-900 ${
                      errors.name ? 'border-red-500/50' : 'border-zinc-800/80'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-[11px] text-red-400 font-mono">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-zinc-450 dark:text-zinc-450 light:text-zinc-550 font-mono">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all dark:bg-zinc-950/80 dark:border-zinc-800 dark:text-white light:bg-zinc-50 light:border-zinc-200 light:text-zinc-900 ${
                      errors.email ? 'border-red-500/50' : 'border-zinc-800/80'
                    }`}
                    placeholder="name@company.com"
                  />
                  {errors.email && <p className="text-[11px] text-red-400 font-mono">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-semibold text-zinc-450 dark:text-zinc-450 light:text-zinc-550 font-mono">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all dark:bg-zinc-950/80 dark:border-zinc-800 dark:text-white light:bg-zinc-50 light:border-zinc-200 light:text-zinc-900 ${
                    errors.subject ? 'border-red-500/50' : 'border-zinc-800/80'
                  }`}
                  placeholder="How can I help you?"
                />
                {errors.subject && <p className="text-[11px] text-red-400 font-mono">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-zinc-450 dark:text-zinc-450 light:text-zinc-550 font-mono">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none dark:bg-zinc-950/80 dark:border-zinc-800 dark:text-white light:bg-zinc-50 light:border-zinc-200 light:text-zinc-900 ${
                    errors.message ? 'border-red-500/50' : 'border-zinc-800/80'
                  }`}
                  placeholder="Tell me more about your requirements..."
                />
                {errors.message && <p className="text-[11px] text-red-400 font-mono">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
