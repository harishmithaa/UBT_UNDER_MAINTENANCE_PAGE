import React from 'react';
import { motion } from 'framer-motion';
import { Award, Flame, Gift } from 'lucide-react';

const benefits = [
  {
    icon: <Award className="h-5 w-5 text-white" />,
    title: "Priority Listing Rank",
    desc: "Early registrations will be prioritized at the top of category searches during our launch, guaranteeing maximum initial views."
  },
  {
    icon: <Flame className="h-5 w-5 text-white" />,
    title: "Early Profile Setup",
    desc: "Gain early entry to build your digital visiting card, list products, and set up your details before the public launch."
  },
  {
    icon: <Gift className="h-5 w-5 text-white" />,
    title: "Referral Rewards",
    desc: "Invite other local businesses to UBT and earn premium account credits and marketing upgrades."
  }
];

export default function WhyJoinEarly() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <section id="benefits-section" className="w-full bg-[#FFFFFF] py-16 sm:py-24 px-4 md:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12">
        
        {/* Centered Header Section */}
        <div className="text-center flex flex-col gap-3 max-w-3xl mx-auto">
          <span className="text-primary font-extrabold text-xs uppercase tracking-widest">Early Partner Benefits</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
            Grow Your Business with Pre-Launch Exposure
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold leading-relaxed">
            Secure key directories, publish catalogs early, and accumulate initial customer search history to establish search ranking leadership.
          </p>
        </div>

        {/* Benefits Grid of Cards - matching Features sizing and style */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`card-premium rounded-xl py-6 px-5 bg-white hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group border border-slate-200/50 shadow-sm hover:shadow-md ${
                idx === 2 ? 'col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Solid Green circular background with white icon */}
              <div className="h-11 w-11 rounded-full bg-primary flex items-center justify-center shrink-0 mb-4 transition-transform duration-300 group-hover:scale-105 shadow-md shadow-emerald-950/5">
                {benefit.icon}
              </div>
              <div className="flex flex-col gap-1 flex-grow justify-start">
                <h3 className="font-extrabold text-secondary text-sm sm:text-base leading-tight transition-colors duration-300 group-hover:text-primary">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed mt-2">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
