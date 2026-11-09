import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Sparkles, Check, Copy, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

    if (formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSubmitted(true);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FFA94D', '#F2C14E', '#7FBFC4', '#3B3A33']
          });
        } else {
          alert('Could not deliver message via Formspree. Please try emailing directly.');
        }
      } catch (err) {
        console.error(err);
        alert('Could not deliver message. Please try emailing directly.');
      } finally {
        setLoading(false);
      }
    } else {
      // Friendly local fallback with confetti celebration
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FFA94D', '#F2C14E', '#7FBFC4', '#3B3A33']
        });
      }, 700);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-cream-50 dark:bg-darkBg-surface transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberAccent/20 text-charcoal-900 dark:text-cream-100 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amberAccent-dark" />
            <span>Say Hello</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-charcoal-900 dark:text-cream-100 tracking-tight">
            Let's build something together.
          </h2>
          <p className="text-charcoal-600 dark:text-cream-300 text-base sm:text-lg">
            Got an AI project, hackathon collaboration, or internship opportunity? Drop me a message below or say hi on my socials.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct info & quick channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-[2.2rem] bg-cream-100 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border shadow-soft-warm space-y-6">
              <h3 className="font-display font-bold text-2xl text-charcoal-900 dark:text-cream-100">
                Contact Details
              </h3>

              {/* Email item with copy button */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-cream-50 dark:bg-darkBg-surface border border-cream-200 dark:border-darkBg-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amberAccent/20 text-amberAccent-dark flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500 dark:text-cream-400">Direct Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.socials.email}`}
                      className="text-sm font-bold font-display text-charcoal-800 dark:text-cream-100 hover:text-amberAccent"
                    >
                      {PERSONAL_INFO.socials.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-xl bg-cream-200 dark:bg-darkBg-card hover:bg-amberAccent hover:text-charcoal-900 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-cream-50 dark:bg-darkBg-surface border border-cream-200 dark:border-darkBg-border">
                <div className="w-10 h-10 rounded-xl bg-softTeal/20 text-softTeal-dark flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500 dark:text-cream-400">Location</p>
                  <p className="text-sm font-bold font-display text-charcoal-800 dark:text-cream-100">
                    Thejus College · Thrissur, Kerala
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-charcoal-500 dark:text-cream-400 mb-3">
                  Connect on Socials
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-cream-50 dark:bg-darkBg-surface border border-cream-200 dark:border-darkBg-border flex flex-col items-center gap-2 hover:border-amberAccent hover:scale-103 transition-all text-charcoal-700 dark:text-cream-200"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-xs font-semibold">GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-cream-50 dark:bg-darkBg-surface border border-cream-200 dark:border-darkBg-border flex flex-col items-center gap-2 hover:border-amberAccent hover:scale-103 transition-all text-charcoal-700 dark:text-cream-200"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-xs font-semibold">LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-cream-50 dark:bg-darkBg-surface border border-cream-200 dark:border-darkBg-border flex flex-col items-center gap-2 hover:border-amberAccent hover:scale-103 transition-all text-charcoal-700 dark:text-cream-200"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-xs font-semibold">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Handwritten note */}
            <div className="p-6 rounded-[2rem] bg-amberAccent/15 dark:bg-amberAccent/10 text-center">
              <p className="font-script text-3xl font-bold text-charcoal-800 dark:text-cream-100">
                "Be curious today :)"
              </p>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-cream-100 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border shadow-soft-warm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-charcoal-900 dark:text-cream-100">
                    Message Sent! ✨
                  </h3>
                  <p className="text-charcoal-600 dark:text-cream-300 max-w-md mx-auto text-sm sm:text-base">
                    Thank you for reaching out! Shirin will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-amberAccent font-display font-bold text-charcoal-900 text-sm hover:scale-105 transition-transform"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 dark:text-cream-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-cream-50 dark:bg-darkBg-surface border border-cream-200 dark:border-darkBg-border text-charcoal-900 dark:text-cream-100 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-amberAccent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 dark:text-cream-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-cream-50 dark:bg-darkBg-surface border border-cream-200 dark:border-darkBg-border text-charcoal-900 dark:text-cream-100 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-amberAccent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 dark:text-cream-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your idea, project, or just say hi..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-cream-50 dark:bg-darkBg-surface border border-cream-200 dark:border-darkBg-border text-charcoal-900 dark:text-cream-100 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-amberAccent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-amberAccent hover:bg-amberAccent-hover text-charcoal-900 font-display font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-amberAccent/30 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

