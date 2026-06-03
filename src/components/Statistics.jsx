import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users2, FolderOpen, CalendarDays, Rocket } from 'lucide-react';

function AnimatedCounter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const endValue = parseInt(value, 10);
    if (isNaN(endValue)) {
      setCount(value);
      return;
    }

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function Statistics({ stats }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-8 px-4 md:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Row Grid with tighter card padding */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {/* Businesses Interested */}
          <motion.div
            variants={cardVariants}
            className="border border-slate-200/60 rounded-2xl py-4 px-5 bg-white flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-primary flex items-center justify-center shrink-0">
              <Users2 className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-secondary tracking-tight">
                <AnimatedCounter value={stats.businessesInterested} />+
              </span>
              <span className="text-[10px] text-slate-450 font-bold uppercase tracking-wider mt-1">Businesses Interested</span>
            </div>
          </motion.div>

          {/* Categories Planned */}
          <motion.div
            variants={cardVariants}
            className="border border-slate-200/60 rounded-2xl py-4 px-5 bg-white flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-primary flex items-center justify-center shrink-0">
              <FolderOpen className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-secondary tracking-tight">
                <AnimatedCounter value={stats.categoriesPlanned} />+
              </span>
              <span className="text-[10px] text-slate-450 font-bold uppercase tracking-wider mt-1">Categories Planned</span>
            </div>
          </motion.div>

          {/* Events Expected */}
          <motion.div
            variants={cardVariants}
            className="border border-slate-200/60 rounded-2xl py-4 px-5 bg-white flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-primary flex items-center justify-center shrink-0">
              <CalendarDays className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-secondary tracking-tight">
                <AnimatedCounter value={stats.eventsPlanned} />+
              </span>
              <span className="text-[10px] text-slate-450 font-bold uppercase tracking-wider mt-1">Events Expected</span>
            </div>
          </motion.div>

          {/* Launch Target */}
          <motion.div
            variants={cardVariants}
            className="border border-slate-200/60 rounded-2xl py-4 px-5 bg-white flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-primary flex items-center justify-center shrink-0">
              <Rocket className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-secondary tracking-tight font-sans">
                {stats.launchTarget}
              </span>
              <span className="text-[10px] text-slate-450 font-bold uppercase tracking-wider mt-1">Launch Target</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
