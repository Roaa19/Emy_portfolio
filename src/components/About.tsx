import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, Smartphone } from 'lucide-react';
export function About() {
  const highlights = [
  {
    icon: <Code2 size={20} />,
    text: 'Junior Software Developer',
    color: 'text-brand-turquoise',
    bg: 'bg-brand-turquoise/10'
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Cairo University Student',
    color: 'text-brand-pink',
    bg: 'bg-brand-pink/10'
  },
  {
    icon: <Smartphone size={20} />,
    text: 'Aspiring Mobile & Web Dev',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  }];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
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
            once: true,
            margin: '-100px'
          }}
          className="mb-16 md:text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-turquoise to-brand-pink md:mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            className="space-y-6">
            
            <h3 className="text-2xl font-semibold text-slate-800">
              Passionate about creating elegant digital experiences.
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              As a Junior Software Developer and current student at Cairo
              University, I am deeply invested in the world of technology. My
              journey is driven by a strong aspiration to excel in both mobile
              and web development.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              I focus on writing clean, efficient code and building user-centric
              applications. I'm constantly learning new technologies and
              refining my skills to bridge the gap between complex problems and
              intuitive solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            className="grid gap-4">
            
            {highlights.map((item, index) =>
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300">
              
                <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}>
                
                  {item.icon}
                </div>
                <span className="text-lg font-medium text-slate-800">
                  {item.text}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}