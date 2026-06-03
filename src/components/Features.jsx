import React from 'react';
import { motion } from 'framer-motion';
import { Store, Contact, CalendarDays, FileText, Star, Gift } from 'lucide-react';

const features = [
  {
    icon: <Store className="h-5 w-5 text-white" />,
    title: "Business Directory",
    desc: "Find and connect with verified local businesses easily."
  },
  {
    icon: <Contact className="h-5 w-5 text-white" />,
    title: "Digital Visiting Cards",
    desc: "Share your business instantly with digital visiting cards."
  },
  {
    icon: <CalendarDays className="h-5 w-5 text-white" />,
    title: "Events",
    desc: "Promote and discover local events and programs."
  },
  {
    icon: <FileText className="h-5 w-5 text-white" />,
    title: "Business Blogs",
    desc: "Publish blogs and share knowledge to grow your brand."
  },
  {
    icon: <Star className="h-5 w-5 text-white" />,
    title: "Reviews",
    desc: "Build trust and grow your reputation with customer reviews."
  },
  {
    icon: <Gift className="h-5 w-5 text-white" />,
    title: "Referral Rewards",
    desc: "Refer businesses and earn exciting rewards & benefits."
  }
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <section id="features-section" className="w-full bg-[#FFFFFF] pt-2 pb-10 px-4 md:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Horizontal divider heading matching screenshot with tighter spacing */}
        <div className="relative flex items-center justify-center my-3">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-[#027244]/25"></div>
          </div>
          <div className="relative bg-white px-5">
            <span className="text-[11px] sm:text-xs font-black text-primary uppercase tracking-widest font-sans">
              WHAT YOU CAN EXPECT
            </span>
          </div>
        </div>

        {/* Features 6-Column Grid with tighter gaps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="card-premium rounded-xl py-4 px-3 bg-white hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group border border-slate-200/50 shadow-sm hover:shadow-md"
            >
              {/* Solid Green circular background with white icon - Reduced size */}
              <div className="h-11 w-11 rounded-full bg-primary flex items-center justify-center shrink-0 mb-3 transition-transform duration-300 group-hover:scale-105 shadow-md shadow-emerald-950/5">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-1 flex-grow justify-start">
                <h3 className="font-extrabold text-secondary text-[11.5px] sm:text-xs leading-tight transition-colors duration-300 group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-[10px] sm:text-[11px] leading-relaxed mt-0.5">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
