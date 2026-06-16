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
                {/* Solid Green speech bubble background */}
                <path 
                  d="M12.007 0C5.398 0 .06 5.338.057 11.948c0 2.112.551 4.17 1.6 5.922L.057 24l6.22-1.632c1.713.934 3.64 1.426 5.722 1.428h.005c6.608 0 11.947-5.339 11.95-11.95A11.914 11.914 0 0024 8.435 11.914 11.914 0 0020.413 3.5 11.924 11.924 0 0012.007 0z" 
                  fill="currentColor" 
                />
                {/* Solid White phone receiver on top */}
                <path 
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" 
                  fill="white" 
                />
              </svg>
              <a href="https://wa.me/919787241221" target="_blank" rel="noopener noreferrer" onClick={() => handleContactClick('WhatsApp')} className="hover:text-emerald-500 transition-colors">WhatsApp</a>
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
