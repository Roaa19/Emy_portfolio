import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-turquoise/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-pink/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass-panel text-sm font-medium text-brand-turquoise border-brand-turquoise/20">
          
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.1
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6">
          
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-turquoise to-brand-pink">
            Eman Osama
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.2
          }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          
          Junior Software Developer | Cairo University Student | Aspiring Mobile
          and Web Developer
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-turquoise text-white font-medium hover:bg-teal-400 transition-all shadow-lg shadow-brand-turquoise/30 flex items-center justify-center gap-2 group">
            
            View Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform" />
            
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel text-slate-700 font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2">
            
            <Mail size={18} className="text-brand-pink" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>);

}