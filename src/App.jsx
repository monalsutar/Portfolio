
import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import { portfolioData } from '@/data/portfolioData';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const App = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800 font-sans">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {portfolioData.name}
          </h1>
          <div className="space-x-4 hidden md:flex">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition duration-300">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition duration-300">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
          </div>
          <div className="flex md:hidden items-center space-x-4">
             {/* Mobile menu could be added here */}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 md:py-16 space-y-16 md:space-y-24">
        <motion.section
          id="hero"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Hero data={portfolioData.hero} />
        </motion.section>

        <motion.section
          id="about"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <About data={portfolioData.about} />
        </motion.section>

        <motion.section
          id="skills"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Skills data={portfolioData.skills} />
        </motion.section>

        <motion.section
          id="experience"
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Experience data={portfolioData.experience} />
        </motion.section>

        <motion.section
          id="projects"
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Projects data={portfolioData.projects} />
        </motion.section>

        <motion.section
          id="education"
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Education data={portfolioData.education} />
        </motion.section>

        <motion.section
          id="achievements"
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Achievements data={portfolioData.achievements} participations={portfolioData.participations} />
        </motion.section>

        <motion.section
          id="contact"
          custom={7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Contact data={portfolioData.contact} />
        </motion.section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
             <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
               <Linkedin size={24} />
             </a>
             <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition duration-300">
               <Github size={24} />
             </a>
             <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-red-400 transition duration-300">
               <Mail size={24} />
             </a>
             <a href={`tel:${portfolioData.contact.phone}`} className="hover:text-green-400 transition duration-300">
               <Phone size={24} />
             </a>
          </div>
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          {/* <p className="text-sm mt-2">Built with Hostinger Horizons</p> */}
        </div>
      </footer>

      <Toaster />
    </div>
  );
};

export default App;
