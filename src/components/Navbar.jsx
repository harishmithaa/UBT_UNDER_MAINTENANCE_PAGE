import React from 'react';
import { Facebook, Instagram, Send } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function Navbar() {
  const scrollToForm = (e) => {
    e.preventDefault();
    const element = document.getElementById('waiting-list-section');
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

  const handleJoinClick = (e) => {
    trackEvent({
      category: 'Engagement',
      action: 'click_join_waitlist',
      label: 'Navbar CTA'
    });
    scrollToForm(e);
  };

  const handleSocialClick = (platform) => {
    trackEvent({
      category: 'Social',
      action: 'click_social_link',
      label: `Navbar ${platform}`
    });
  };

  return (
    <nav className="navbar-glass sticky top-0 left-0 w-full border-b border-slate-200/40 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center select-none cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logo.png" alt="Udumalpet Business Tour Logo" className="h-10 md:h-12 w-auto object-contain" />
        </div>

        {/* Social Icons & CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-3.5 text-xs font-bold text-slate-500">
            <span className="text-slate-400 font-semibold uppercase tracking-wider text-xs">Follow Us:</span>
            <a href="https://www.facebook.com/profile.php?id=61590472206771" onClick={() => handleSocialClick('Facebook')} target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full border border-slate-200 hover:border-emerald-500 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-500">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.instagram.com/udumalpet.business/" onClick={() => handleSocialClick('Instagram')} target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full border border-slate-200 hover:border-emerald-500 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-500">
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>

          <a
            href="#waiting-list-section"
            onClick={handleJoinClick}
            className="bg-primary hover:bg-primary-hover text-white text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-950/5 flex items-center gap-1.5 cursor-pointer"
          >
            <Send className="h-3 w-3" />
            <span>Join Waitlist</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
