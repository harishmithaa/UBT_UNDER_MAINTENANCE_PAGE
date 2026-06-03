import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Store, Phone, FolderOpen, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const categories = [
  'Automotive',
  'Beauty & Wellness',
  'Education',
  'Electronics',
  'Food & Restaurants',
  'Health & Medical',
  'Home Services',
  'Real Estate',
  'Shopping',
  'Manufacturing',
  'Professional Services',
  'Travel & Hospitality',
  'Construction',
  'Agriculture',
  'Finance & Insurance',
  'Events & Entertainment',
  'Sports & Fitness',
  'Others'
];

export default function WaitingListForm({ scriptUrl, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    mobile: '',
    category: '',
    customCategory: '',
    email: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required.";
    else if (formData.name.trim().length < 3) tempErrors.name = "Name must be at least 3 characters.";

    if (!formData.businessName.trim()) tempErrors.businessName = "Business Name is required.";
    else if (formData.businessName.trim().length < 3) tempErrors.businessName = "Business Name must be at least 3 characters.";

    // Mobile number validation (exactly 10 digits)
    const mobileClean = formData.mobile.replace(/[^0-9]/g, "");
    if (!formData.mobile) tempErrors.mobile = "Mobile Number is required.";
    else if (mobileClean.length !== 10) tempErrors.mobile = "Please enter a valid 10-digit mobile number.";

    if (!formData.category) tempErrors.category = "Please select a business category.";

    // Email validation (optional)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        tempErrors.email = "Please enter a valid email address.";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for field on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast("Please fix the validation errors before submitting.", "error");
      return;
    }

    setLoading(true);

    if (!scriptUrl || scriptUrl.includes("SAMPLE")) {
      // Offline fallback for demo if script URL is not yet updated by user
      setTimeout(() => {
        setLoading(false);
        // Track analytics events on successful form submission in demo mode
        trackEvent({
          category: 'Form',
          action: 'submit_waitlist_form',
          label: 'Waitlist Signup Success (Demo Mode)'
        });
        if (formData.email.trim()) {
          trackEvent({
            category: 'Form',
            action: 'email_subscription_submit',
            label: 'Email Opt-In Success (Demo Mode)'
          });
        }
        showToast("Demo Mode: Early access registration submitted successfully (No spreadsheet configured)!", "warning");
        setFormData({ name: '', businessName: '', mobile: '', category: '', customCategory: '', email: '' });
      }, 1500);
      return;
    }

    try {
      // Using text/plain content type to avoid preflight OPTIONS check (CORS issues)
      // Google Apps Script will parse this as e.postData.contents successfully.
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          businessName: formData.businessName.trim(),
          mobile: formData.mobile.replace(/[^0-9]/g, "").trim(),
          category: formData.category === 'Others' ? formData.customCategory.trim() : formData.category,
          email: formData.email.trim()
        })
      });

      const result = await response.json();

      if (result.success) {
        // Track analytics events on successful form submission
        trackEvent({
          category: 'Form',
          action: 'submit_waitlist_form',
          label: 'Waitlist Signup Success'
        });
        if (formData.email.trim()) {
          trackEvent({
            category: 'Form',
            action: 'email_subscription_submit',
            label: 'Email Opt-In Success'
          });
        }
        showToast(result.message || "Successfully registered for early access!", "success");
        setFormData({ name: '', businessName: '', mobile: '', category: '', customCategory: '', email: '' });
      } else {
        showToast(result.message || "Registration failed. Please try again.", "error");
      }
    } catch (err) {
      console.error("Fetch Error: ", err);
      showToast("Failed to connect to registration server. Please check your internet connection.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waiting-list-section" className="w-full bg-[#FFFFFF] py-12 px-4 md:px-8 border-t border-slate-100 relative overflow-hidden">
      {/* Decorative backdrop curves */}
      <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-emerald-50/20 z-0 pointer-events-none blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#001c41]/5 z-0 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto flex flex-col gap-10 relative z-10">
        
        {/* Header */}
        <div className="text-center flex flex-col gap-2">
          <span className="text-primary font-extrabold text-xs uppercase tracking-widest">Join Waiting List</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
            Claim Your Spot on the Platform
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto">
            Be the first to know when we launch! Fill out the form below to lock in your priority directory listing and founding member benefits.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl w-full mx-auto">
          
          {/* Left Column: Related Illustration */}
          <div className="lg:col-span-6 flex justify-center items-center select-none pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md lg:max-w-full"
            >
              <img 
                src="/sample_profile_page.png?v=2" 
                alt="Sample Business Profile Landing Page Preview" 
                className="w-full h-auto object-contain drop-shadow-xl rounded-2xl border border-slate-200/50"
              />
            </motion.div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-slate-200/60 rounded-2xl p-5 md:p-7 shadow-xl w-full max-w-lg relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-[11px] font-bold text-slate-600">Full Name *</label>
                  <div className={`flex items-center gap-2.5 px-3 py-2 bg-slate-50 rounded-xl border transition-all ${errors.name ? 'border-red-400 focus-within:border-red-500' : 'border-slate-200/80 focus-within:border-primary'}`}>
                    <User className="h-4 w-4 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent text-[11px] font-semibold text-slate-700 placeholder-slate-450 focus:outline-none"
                      disabled={loading}
                    />
                  </div>
                  {errors.name && (
                    <span className="text-[9.5px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3 w-3 shrink-0" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Business Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="businessName" className="text-[11px] font-bold text-slate-600">Business Name *</label>
                  <div className={`flex items-center gap-2.5 px-3 py-2 bg-slate-50 rounded-xl border transition-all ${errors.businessName ? 'border-red-400 focus-within:border-red-500' : 'border-slate-200/80 focus-within:border-primary'}`}>
                    <Store className="h-4 w-4 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      placeholder="Enter your registered business name"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full bg-transparent text-[11px] font-semibold text-slate-700 placeholder-slate-450 focus:outline-none"
                      disabled={loading}
                    />
                  </div>
                  {errors.businessName && (
                    <span className="text-[9.5px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3 w-3 shrink-0" /> {errors.businessName}
                    </span>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="mobile" className="text-[11px] font-bold text-slate-600">Mobile Number *</label>
                  <div className={`flex items-center gap-2.5 px-3 py-2 bg-slate-50 rounded-xl border transition-all ${errors.mobile ? 'border-red-400 focus-within:border-red-500' : 'border-slate-200/80 focus-within:border-primary'}`}>
                    <Phone className="h-4 w-4 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      placeholder="Enter 10-digit mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full bg-transparent text-[11px] font-semibold text-slate-700 placeholder-slate-450 focus:outline-none"
                      disabled={loading}
                    />
                  </div>
                  {errors.mobile && (
                    <span className="text-[9.5px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3 w-3 shrink-0" /> {errors.mobile}
                    </span>
                  )}
                </div>

                {/* Category Dropdown */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="category" className="text-[11px] font-bold text-slate-600">Business Category *</label>
                  <div className={`flex items-center gap-2.5 px-3 py-2 bg-slate-50 rounded-xl border transition-all ${errors.category ? 'border-red-400 focus-within:border-red-500' : 'border-slate-200/80 focus-within:border-primary'}`}>
                    <FolderOpen className="h-4 w-4 text-slate-400 shrink-0" />
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-transparent text-[11px] font-bold text-slate-700 focus:outline-none cursor-pointer"
                      disabled={loading}
                    >
                      <option value="">Select Business Category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  {errors.category && (
                    <span className="text-[9.5px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3 w-3 shrink-0" /> {errors.category}
                    </span>
                  )}

                  {/* Conditional input when "Others" is selected */}
                  {formData.category === 'Others' && (
                    <div className="flex flex-col gap-1 mt-2.5 animate-fadeIn">
                      <label htmlFor="customCategory" className="text-[10.5px] font-bold text-slate-600">Please Specify Category *</label>
                      <div className={`flex items-center gap-2.5 px-3 py-2 bg-slate-50 rounded-xl border transition-all ${errors.customCategory ? 'border-red-400 focus-within:border-red-500' : 'border-slate-200/80 focus-within:border-primary'}`}>
                        <FolderOpen className="h-4 w-4 text-slate-400 shrink-0" />
                        <input
                          type="text"
                          id="customCategory"
                          name="customCategory"
                          placeholder="Enter your custom business category"
                          value={formData.customCategory}
                          onChange={handleChange}
                          className="w-full bg-transparent text-[11px] font-semibold text-slate-700 placeholder-slate-450 focus:outline-none"
                          disabled={loading}
                        />
                      </div>
                      {errors.customCategory && (
                        <span className="text-[9.5px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                          <AlertCircle className="h-3 w-3 shrink-0" /> {errors.customCategory}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <label htmlFor="email" className="text-[11px] font-bold text-slate-600">Email Address</label>
                    <span className="text-[10px] text-slate-400 font-semibold">(Optional)</span>
                  </div>
                  <div className={`flex items-center gap-2.5 px-3 py-2 bg-slate-50 rounded-xl border transition-all ${errors.email ? 'border-red-400 focus-within:border-red-500' : 'border-slate-200/80 focus-within:border-primary'}`}>
                    <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email address (e.g. info@business.com)"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent text-[11px] font-semibold text-slate-700 placeholder-slate-450 focus:outline-none"
                      disabled={loading}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-[9.5px] text-red-500 font-bold flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3 w-3 shrink-0" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Privacy note */}
                <span className="text-[9.5px] text-slate-400 font-medium leading-relaxed mt-0.5 block">
                  🛡️ We respect your privacy. Your information is securely stored and will never be shared. No spam, ever.
                </span>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white text-[11.5px] font-extrabold py-3 px-6 rounded-xl transition-all shadow-md shadow-emerald-950/15 flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:bg-slate-300 disabled:shadow-none"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 text-emerald-100" />
                      <span>Join Early Access Waitlist</span>
                    </>
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
