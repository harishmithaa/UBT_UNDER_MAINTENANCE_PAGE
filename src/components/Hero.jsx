import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Store, Calendar } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function Hero({ launchTarget = 'July 2026' }) {
  const scrollToForm = (e) => {
    e.preventDefault();
    const element = document.getElementById('waiting-list-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleJoinClick = (e) => {
    trackEvent({
      category: 'Engagement',
      action: 'click_join_early_access',
      label: 'Hero primary CTA'
    });
    scrollToForm(e);
  };

  const handleRegisterClick = (e) => {
    trackEvent({
      category: 'Engagement',
      action: 'click_register_business',
      label: 'Hero secondary CTA'
    });
    scrollToForm(e);
  };

  return (
    <section className="w-full relative min-h-[580px] lg:min-h-[640px] bg-[#F8FAFC] flex items-center justify-center pt-8 pb-24 px-4 md:px-8 overflow-hidden z-0 hero-gradient">
      {/* Background Image rendered at its native 1024x576 size (desktop only) */}
      <img 
        src="/thirumoorthy_dam.png" 
        alt="Thirumoorthy Hills Background"
        className="hidden lg:block absolute right-0 top-0 h-full w-auto object-contain lg:h-auto lg:w-[1024px] lg:max-h-[576px] lg:top-1/2 lg:-translate-y-1/2 pointer-events-none select-none z-0"
      />

      {/* Dynamic Gradient Overlay that smoothly blends image to transparent (desktop only) */}
      <div 
        className="hidden lg:block absolute inset-0 z-10 pointer-events-none select-none" 
        style={{ background: "linear-gradient(to right, rgba(248, 250, 252, 1) 15%, rgba(248, 250, 252, 0.7) 25%, rgba(248, 250, 252, 0) 35%)" }} 
      />

      {/* Background Image for mobile (portrait viewports) */}
      <img 
        src="/thirumoorthy_dam_mobile.png" 
        alt="Thirumoorthy Hills Mobile Background"
        className="block lg:hidden absolute right-0 bottom-0 w-full h-full object-cover object-bottom pointer-events-none select-none z-0"
      />

      {/* Dynamic Gradient Overlay that smoothly blends image to transparent (mobile only) */}
      <div 
        className="block lg:hidden absolute inset-0 z-10 pointer-events-none select-none" 
        style={{ background: "linear-gradient(to bottom, rgba(248, 250, 252, 1) 25%, rgba(248, 250, 252, 0.8) 45%, rgba(248, 250, 252, 0.1) 75%, rgba(248, 250, 252, 0) 100%)" }} 
      />

      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-20">
        {/* Content Column */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">

          {/* We are building something great Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-100 text-primary font-bold text-xs"
          >
            <Rocket className="h-3.5 w-3.5 animate-pulse text-primary" />
            <span className="uppercase tracking-wider">WE ARE BUILDING SOMETHING GREAT</span>
          </motion.div>

          {/* Large Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight leading-tight max-w-2xl font-sans"
          >
            Udumalpet's Largest <br />
            Business Network <br />
            is <span className="text-primary font-black relative inline-block">
              Coming Soon!
              <span className="absolute bottom-1 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base md:text-lg font-bold text-slate-700 flex items-center gap-2 flex-wrap"
          >
            <span>Connect</span>
            <span className="text-primary">•</span>
            <span>Collaborate</span>
            <span className="text-primary">•</span>
            <span>Grow</span>
          </motion.h3>

          {/* Subtext description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-sm md:text-base text-slate-500 font-medium max-w-xl leading-relaxed"
          >
            A trusted platform bringing together businesses, entrepreneurs, professionals, and customers across Udumalpet. Discover local services, check verified reviews, and build meaningful business relationships.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
          >
            <a 
              href="#waiting-list-section"
              onClick={handleJoinClick}
              className="bg-primary hover:bg-primary-hover text-white font-extrabold text-xs py-3.5 px-6 rounded-xl transition-all shadow-md shadow-emerald-950/10 flex items-center justify-center gap-2 cursor-pointer border border-transparent"
            >
              <Rocket className="h-4 w-4 text-emerald-100" />
              <span>Join Early Access</span>
            </a>
            <a 
              href="#waiting-list-section"
              onClick={handleRegisterClick}
              className="bg-white hover:bg-slate-50 border-2 border-primary text-primary font-extrabold text-xs py-3.5 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Store className="h-4 w-4" />
              <span>Register Your Business</span>
            </a>
          </motion.div>

          {/* Launch Date Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-600 border border-slate-200 bg-white rounded-xl py-2 px-3.5 shadow-sm"
          >
            <Calendar className="h-4 w-4 text-primary shrink-0" />
            <span>Official Launch: <span className="text-secondary font-black">{launchTarget}</span></span>
          </motion.div>
        </div>

        {/* Right side spacer for desktop layout balance */}
        <div className="lg:col-span-4 hidden lg:block" />
      </div>

      {/* Wavy bottom divider curves */}
      <div className="absolute -bottom-[2px] left-0 w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.41,27.35,163.81,47.28,243.68,67.23,321.39,56.44Z" fill="#FFFFFF"></path>
        </svg>
      </div>
    </section>
  );
}
