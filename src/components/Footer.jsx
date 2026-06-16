import React from 'react';
import { Facebook, Instagram, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSocialClick = (platform) => {
    trackEvent({
      category: 'Social',
      action: 'click_social_link',
      label: `Footer ${platform}`
    });
  };

  const handleContactClick = (method) => {
    trackEvent({
      category: 'Contact',
      action: 'click_contact_info',
      label: method
    });
  };

  return (
    <footer className="w-full bg-[#001c41] text-slate-350 pt-16 pb-8 border-t border-slate-800 z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
        
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col gap-5 max-w-sm">
          <div className="flex items-center select-none py-1">
            <img src="/logo-dark.png" alt="Udumalpet Business Tour" className="h-12 w-auto object-contain" />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-semibold">
            A trusted local platform to discover, connect and grow with verified businesses in and around Udumalpet.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <a href="https://www.facebook.com/profile.php?id=61590472206771" onClick={() => handleSocialClick('Facebook')} target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full border border-slate-700 hover:border-emerald-500 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/udumalpet.business/" onClick={() => handleSocialClick('Instagram')} target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full border border-slate-700 hover:border-emerald-500 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-xs font-semibold text-slate-400">
            <li>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-emerald-500 transition-colors text-left cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('features-section')} className="hover:text-emerald-500 transition-colors text-left cursor-pointer">
                Platform Features
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('benefits-section')} className="hover:text-emerald-500 transition-colors text-left cursor-pointer">
                Early Access Benefits
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('waiting-list-section')} className="hover:text-emerald-500 transition-colors text-left cursor-pointer">
                Join Waiting List
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact Us</h4>
          <ul className="flex flex-col gap-3.5 text-xs font-semibold text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">Udumalpet, Tamil Nadu - 642126</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
              <a href="tel:+919787241221" onClick={() => handleContactClick('Phone Call')} className="hover:text-emerald-500 transition-colors">+91 9787241221</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
              <a href="mailto:udumalpetbusinesstour@gmail.com" onClick={() => handleContactClick('Email Mailto')} className="hover:text-emerald-500 transition-colors">udumalpetbusinesstour@gmail.com</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">Mon - Sat: 9:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-semibold">
        <span>© 2026 Udumalpet Business Tour. All rights reserved.</span>
        <span>Made with <span className="text-red-500">❤️</span> for Udumalpet</span>
      </div>
    </footer>
  );
}
