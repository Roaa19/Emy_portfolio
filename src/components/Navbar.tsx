import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const navLinks = [
{
  name: 'About',
  href: '#about'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass-panel' : 'py-5 bg-transparent'}`}>
      
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-heading font-bold tracking-tighter text-slate-900 group relative">
          
          <span className="text-brand-turquoise">E</span>O
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-slate-600 hover:text-brand-turquoise transition-colors">
            
              {link.name}
            </a>
          )}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-brand-turquoise transition-colors shadow-lg shadow-slate-900/20">
            
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="absolute top-full left-0 right-0 glass-panel border-t border-white/20 py-4 px-6 flex flex-col gap-4 shadow-2xl md:hidden">
          
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-700 hover:text-brand-turquoise py-2">
            
                {link.name}
              </a>
          )}
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}