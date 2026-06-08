import React from 'react';
import { motion } from 'framer-motion';
import { ProjectShowcase, Project } from './ProjectShowcase';
const projects: Project[] = [
{
  title: 'Graphics Website',
  description:
  'A modern and responsive agency website showcasing services, portfolio projects, technical skills, testimonials, and contact information with a clean and professional user interface.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  url: 'graphics-website.app',
  screenshots: ["/Leon_Template_1_-_Personal_2_-_Microsoft\u200B_Edge_6_7_2026_8_48_22_PM.png", "/Leon_Template_1_-_Personal_2_-_Microsoft\u200B_Edge_6_7_2026_8_48_33_PM.png", "/Leon_Template_1_-_Personal_2_-_Microsoft\u200B_Edge_6_7_2026_8_48_45_PM.png", "/Leon_Template_1_-_Personal_2_-_Microsoft\u200B_Edge_6_7_2026_8_48_58_PM.png", "/Leon_Template_1_-_Personal_2_-_Microsoft\u200B_Edge_6_7_2026_8_49_12_PM.png"]






},
{
  title: 'Travel Website UI',
  description:
  'A responsive travel website designed to present destinations through a modern interface, interactive sections, and visually appealing layouts with a smooth user experience.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  url: 'travel-website.app',
  screenshots: ["/Leon_Template_1_-_Personal_2_-_Microsoft\u200B_Edge_6_7_2026_8_49_51_PM.png", "/Leon_Template_1_-_Personal_2_-_Microsoft\u200B_Edge_6_7_2026_8_50_03_PM.png", "/Leon_Template_1_-_Personal_2_-_Microsoft\u200B_Edge_6_7_2026_8_50_38_PM.png", "/Leon_Template_1_-_Personal_2_-_Microsoft\u200B_Edge_6_7_2026_8_51_19_PM.png", "/Leon_Template_1_-_Personal_2_-_Microsoft\u200B_Edge_6_7_2026_8_51_36_PM.png"]






}];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white relative">
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
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-turquoise to-brand-pink md:mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) =>
          <ProjectShowcase
            key={project.title}
            project={project}
            index={index} />

          )}
        </div>
      </div>
    </section>);

}