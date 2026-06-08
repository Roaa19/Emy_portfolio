import React from 'react';
import { ArrowUp } from 'lucide-react';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="bg-white border-t border-slate-100 py-12 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-heading font-bold tracking-tighter text-slate-900">
            <span className="text-brand-turquoise">E</span>O
          </span>
        </div>

        <p className="text-slate-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Eman Osama. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-turquoise hover:border-brand-turquoise/30 hover:bg-teal-50 transition-colors"
          aria-label="Scroll to top">
          
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>);

}