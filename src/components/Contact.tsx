import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';
const contactLinks = [
{
  name: 'LinkedIn',
  value: 'Eman Osama',
  icon: <Linkedin size={24} />,
  href: 'https://www.linkedin.com/in/eman-osama-1b6437311/',
  color: 'text-blue-600',
  bgHover: 'hover:bg-blue-50',
  borderHover: 'hover:border-blue-200'
},
{
  name: 'Email',
  value: 'eman.aggan123@gmail.com',
  icon: <Mail size={24} />,
  href: 'mailto:eman.aggan123@gmail.com',
  color: 'text-brand-turquoise',
  bgHover: 'hover:bg-teal-50',
  borderHover: 'hover:border-brand-turquoise/30'
},
{
  name: 'GitHub',
  value: 'Eman-Aggan',
  icon: <Github size={24} />,
  href: 'https://github.com/Eman-Aggan',
  color: 'text-slate-800',
  bgHover: 'hover:bg-slate-100',
  borderHover: 'hover:border-slate-300'
}];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
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
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-turquoise to-brand-pink md:mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((link, index) =>
          <motion.a
            key={link.name}
            href={link.href}
            target={link.name !== 'Email' ? '_blank' : undefined}
            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
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
            transition={{
              delay: index * 0.1
            }}
            className={`glass-panel p-8 rounded-2xl flex flex-col items-center text-center gap-4 transition-all duration-300 hover:-translate-y-2 ${link.bgHover} ${link.borderHover} group`}>
            
              <div
              className={`w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center ${link.color} group-hover:scale-110 transition-transform duration-300`}>
              
                {link.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {link.name}
                </h3>
                <p className="text-sm text-slate-500 break-all">{link.value}</p>
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </section>);

}