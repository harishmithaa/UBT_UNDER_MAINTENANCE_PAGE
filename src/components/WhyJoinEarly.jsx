import React from 'react';
import { motion } from 'framer-motion';
import { Award, Flame, Gift } from 'lucide-react';

const benefits = [
  {
    icon: <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />,
    title: "Priority Listing Rank",
    desc: "Early registrations will be prioritized at the top of category searches during our launch, guaranteeing maximum initial views."
  },
  {
    icon: <Flame className="h-5 w-5 text-primary shrink-0 mt-0.5" />,
    title: "Early Profile Setup",
    desc: "Gain early entry to build your digital visiting card, list products, and set up your details before the public launch."
  },
  {
    icon: <Gift className="h-5 w-5 text-primary shrink-0 mt-0.5" />,
    title: "Referral Rewards",
    desc: "Invite other local businesses to UBT and earn premium account credits and marketing upgrades."
  }
];

export default function WhyJoinEarly() {
  return (
    <section id="benefits-section" className="w-full bg-[#FFFFFF] py-8 px-4 md:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Summary Graphic */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-white border border-slate-200/50 rounded-2xl p-6 shadow-md flex flex-col gap-5 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-emerald-50/55 z-0 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-3">
            <span className="text-[#d97706] font-bold text-xs uppercase tracking-widest bg-amber-50 border border-amber-100 rounded-full px-2.5 py-0.5 self-start">
              Early Access benefits
            </span>
            <h3 className="text-lg font-extrabold text-secondary tracking-tight">
              Why Register Today?
            </h3>
            <p className="text-sm text-slate-400 font-semibold leading-relaxed">
              Registering during the pre-launch phase guarantees your business gets prominent placement. Stand out to potential customers when we go live.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-4 flex flex-col gap-3.5 relative z-10">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center text-primary font-black text-xs shrink-0 select-none">
                1
              </div>
              <span className="text-sm font-bold text-slate-700">Priority Listing Rank</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center text-primary font-black text-xs shrink-0 select-none">
                2
              </div>
              <span className="text-sm font-bold text-slate-700">Exclusive Pre-Launch Features</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center text-primary font-black text-xs shrink-0 select-none">
                3
              </div>
              <span className="text-sm font-bold text-slate-700">Referral Rewards Upgrades</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Detailed Benefits */}
        <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10">
          <div>
            <span className="text-primary font-extrabold text-xs uppercase tracking-widest">Early Partner Benefits</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-secondary tracking-tight mt-1">
              Grow Your Business with Pre-Launch Exposure
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-2 leading-relaxed max-w-xl">
              Secure key directories, publish catalogs early, and accumulate initial customer search history to establish search ranking leadership.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6 sm:gap-8"
          >
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="h-7 w-7 rounded-lg bg-emerald-50 text-primary flex items-center justify-center shrink-0 mt-0.5 select-none">
                  {benefit.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-xs font-black text-secondary uppercase tracking-wider">{benefit.title}</h4>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed mt-1 max-w-md sm:max-w-lg">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
