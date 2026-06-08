import React, { Children, lazy } from 'react';
import { motion } from 'framer-motion';
const skills = [
{
  name: 'HTML',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  color: 'hover:shadow-orange-500/20 hover:border-orange-500/30'
},
{
  name: 'CSS',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  color: 'hover:shadow-blue-500/20 hover:border-blue-500/30'
},
{
  name: 'JavaScript',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  color: 'hover:shadow-yellow-400/20 hover:border-yellow-400/30'
},
{
  name: 'React',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  color: 'hover:shadow-cyan-400/20 hover:border-cyan-400/30'
},
{
  name: 'Node.js',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  color: 'hover:shadow-green-500/20 hover:border-green-500/30'
},
{
  name: 'MongoDB',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  color: 'hover:shadow-green-600/20 hover:border-green-600/30'
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
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
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-turquoise to-brand-pink md:mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          
          {skills.map((skill) =>
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -5
            }}
            className={`glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 ${skill.color}`}>
            
              <div className="w-16 h-16 relative flex items-center justify-center">
                <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-full h-full object-contain drop-shadow-sm"
                loading="lazy" />
              
              </div>
              <span className="font-medium text-slate-700">{skill.name}</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}