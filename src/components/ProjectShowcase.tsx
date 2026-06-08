import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  screenshots: string[];
  url: string;
}
interface ProjectShowcaseProps {
  project: Project;
  index: number;
}
export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { title, description, technologies, screenshots, url } = project;
  const nextSlide = () => {
    setCurrentIndex((prev) => prev === screenshots.length - 1 ? 0 : prev + 1);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => prev === 0 ? screenshots.length - 1 : prev - 1);
  };
  useEffect(() => {
    if (isPaused || screenshots.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, screenshots.length]);
  return (
    <div className="max-w-5xl mx-auto">
      {/* Browser-window mockup */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-50px'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="mb-10 group">
        
        <div className="relative mx-auto w-full max-w-[860px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/15 ring-1 ring-slate-200 transition-transform duration-500 group-hover:-translate-y-2">
          {/* Browser top bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <div className="ml-4 flex-1 max-w-sm h-6 rounded-md bg-white border border-slate-200 flex items-center px-3">
              <span className="text-xs text-slate-400 truncate">{url}</span>
            </div>
          </div>

          {/* Screen content (carousel) */}
          <div className="relative bg-white aspect-video group/carousel">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={screenshots[currentIndex]}
                alt={`${title} screenshot ${currentIndex + 1} of ${screenshots.length}`}
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                exit={{
                  opacity: 0
                }}
                transition={{
                  duration: 0.35
                }}
                className="w-full h-full object-contain bg-white" />
              
            </AnimatePresence>

            {/* Carousel controls */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none">
              <button
                onClick={prevSlide}
                className="pointer-events-auto p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white shadow-lg transition-colors opacity-0 group-hover/carousel:opacity-100"
                aria-label={`Previous screenshot of ${title}`}>
                
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="pointer-events-auto p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white shadow-lg transition-colors opacity-0 group-hover/carousel:opacity-100"
                aria-label={`Next screenshot of ${title}`}>
                
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="mt-5 flex justify-center gap-2">
          {screenshots.map((_, idx) =>
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-brand-turquoise w-6' : 'bg-slate-300 hover:bg-slate-400 w-2'}`}
            aria-label={`Go to screenshot ${idx + 1} of ${title}`} />

          )}
        </div>
      </motion.div>

      {/* Project details */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        className="text-center max-w-3xl mx-auto">
        
        <span className="text-sm font-medium tracking-wider text-brand-turquoise uppercase">
          Project {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-4">
          {title}
        </h3>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) =>
          <span
            key={tech}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200">
            
              {tech}
            </span>
          )}
        </div>
      </motion.div>
    </div>);

}