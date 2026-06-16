import React from 'react';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
              <svg 
                viewBox="0 0 24 24" 
                className="h-4.5 w-4.5 text-emerald-500 shrink-0" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* White background circle so the cutout phone shows up in white */}
                <circle cx="12" cy="12" r="9.2" fill="white" />
                {/* WhatsApp logo filled with green text color */}
                <path 
                  d="M12.008 2c-5.523 0-10 4.477-10 10 0 1.76.45 3.42 1.25 4.89l-1.32 4.8 4.93-1.29c1.42.77 3.03 1.2 4.74 1.2 5.52 0 10-4.47 10-10s-4.48-10-10-10zm5.66 14.19c-.24.68-1.24 1.25-1.71 1.3-.47.05-1.08.26-3.15-.59-2.07-.85-3.41-2.96-3.51-3.1-.1-.14-.85-1.13-.85-2.16 0-1.03.54-1.54.73-1.75.19-.2.42-.26.56-.26.14 0 .28 0 .4.01.13.01.3.01.46.4.17.4.58 1.41.63 1.52.05.11.08.24.01.38-.07.14-.15.24-.3.41-.15.17-.31.38-.45.51-.16.15-.33.32-.14.65.19.33.84 1.39 1.81 2.25.97.86 1.79 1.13 2.12 1.27.33.14.52.12.72-.11.2-.23.86-1 .99-1.34.13-.34.26-.29.43-.22.17.07 1.09.51 1.28.6.19.09.31.14.36.22.05.08.05.47-.19 1.15z" 
                  fill="currentColor"
                />
              </svg>
              <a href="https://wa.me/919787241221" target="_blank" rel="noopener noreferrer" onClick={() => handleContactClick('WhatsApp')} className="hover:text-emerald-500 transition-colors">+91 9787241221</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
              <a href="mailto:udumalpetbusinesstour@gmail.com" onClick={() => handleContactClick('Email Mailto')} className="hover:text-emerald-500 transition-colors">udumalpetbusinesstour@gmail.com</a>
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
