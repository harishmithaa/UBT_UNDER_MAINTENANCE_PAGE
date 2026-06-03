import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Features from './components/Features';
import WhyJoinEarly from './components/WhyJoinEarly';
import WaitingListForm from './components/WaitingListForm';
import Footer from './components/Footer';
import { CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [stats, setStats] = useState({
    businessesInterested: 127,
    categoriesPlanned: 50,
    eventsPlanned: 100,
    launchTarget: 'July 2026'
  });
  const [scriptUrl, setScriptUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [toastTimeoutId, setToastTimeoutId] = useState(null);

  // Load backend configuration dynamically
  useEffect(() => {
    fetch('/config.json')
      .then(res => res.json())
      .then(data => {
        if (data.stats) {
          setStats(data.stats);
        }
        if (data.googleAppsScriptUrl) {
          setScriptUrl(data.googleAppsScriptUrl);
        }
        setLoading(false);
      })
      .catch(err => {
        console.warn("Using offline configuration fallback:", err);
        setLoading(false);
      });
  }, []);

  const showToast = (message, type = 'success') => {
    // Clear any active timeout
    if (toastTimeoutId) {
      clearTimeout(toastTimeoutId);
    }
    
    setToast({ message, type });

    const timeout = setTimeout(() => {
      setToast(null);
    }, 4500);
    
    setToastTimeoutId(timeout);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-[#F8FAFC] select-none text-slate-800 animate-page-entrance font-sans">
      {/* Top Banner Notice */}
      <div className="w-full bg-[#001c41] text-white py-2 px-4 text-center text-[10px] sm:text-xs font-bold tracking-wide flex items-center justify-center gap-2 border-b border-slate-850">
        <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-bounce" />
        <span>Udumalpet's Largest Local Business Ecosystem is launching in {stats.launchTarget}!</span>
      </div>

      {/* Header Navigation */}
      <Navbar />

      <main className="flex-grow flex flex-col">
        {/* Hero Banner Section */}
        <Hero launchTarget={stats.launchTarget} />

        {/* Dynamic Statistic Counters */}
        {!loading && <Statistics stats={stats} />}

        {/* Features Showcase Grid */}
        <Features />

        {/* Founding Member Value Section */}
        <WhyJoinEarly />

        {/* Waiting List Database Form */}
        <WaitingListForm scriptUrl={scriptUrl} showToast={showToast} />
      </main>

      {/* Footer Branding Links */}
      <Footer />

      {/* Premium Toast Notification System */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4.5 py-3 rounded-2xl border shadow-2xl animate-fadeIn ${
          toast.type === 'success' 
            ? 'bg-emerald-50 border-emerald-200 text-emerald-950' 
            : toast.type === 'error' 
              ? 'bg-red-50 border-red-200 text-red-950' 
              : 'bg-amber-50 border-amber-200 text-amber-950'
        }`}>
          {toast.type === 'success' && <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />}
          {toast.type === 'error' && <AlertCircle className="h-5 w-5 text-red-650 shrink-0" />}
          {toast.type === 'warning' && <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 font-bold" />}
          <div className="flex flex-col">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
              {toast.type === 'success' ? 'Success' : toast.type === 'error' ? 'Error' : 'Notification'}
            </span>
            <span className="text-xs font-bold mt-0.5 leading-snug">{toast.message}</span>
          </div>
          <button 
            onClick={() => setToast(null)} 
            className="ml-3 text-slate-450 hover:text-slate-650 shrink-0 font-black text-xs cursor-pointer h-5 w-5 flex items-center justify-center rounded-full hover:bg-slate-200/50"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
