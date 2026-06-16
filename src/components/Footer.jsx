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
                className="h-4.5 w-4.5 text-emerald-500 shrink-0 fill-current" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 5.348 1.495 5.249.002 9.522-4.267 9.525-9.521.001-2.546-.985-4.94-2.779-6.736-1.793-1.795-4.186-2.782-6.73-2.783-5.253 0-9.526 4.268-9.529 9.523-.001 2.11.554 4.168 1.61 5.922l-1.055 3.854 3.96-1.033zm11.593-5.62c-.265-.133-1.57-.775-1.812-.863-.242-.088-.419-.133-.596.133-.177.265-.683.863-.837 1.04-.154.177-.308.2-.573.067-.265-.133-1.12-.413-2.133-1.317-.789-.704-1.321-1.573-1.476-1.839-.154-.265-.016-.409.118-.542.121-.12.265-.308.397-.462.133-.154.177-.265.265-.442.088-.177.044-.331-.022-.464-.066-.133-.596-1.436-.816-1.966-.215-.518-.462-.447-.63-.447-.163-.002-.35-.002-.537-.002-.187 0-.49.07-.747.35-.257.28-.98 1.0-.98 2.44 0 1.44 1.05 2.83 1.196 3.03.146.2.207.314.45.684.394.6.866 1.066 1.34 1.46.51.42 1.012.63 1.442.6.438-.03 1.345-.55 1.533-1.08.188-.53.188-.99.133-1.08-.055-.09-.203-.133-.468-.266z" />
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
