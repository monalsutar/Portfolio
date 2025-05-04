
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, ExternalLink } from 'lucide-react';

const Projects = ({ data }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="py-12 md:py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center gap-3"
      >
        <Code className="w-8 h-8" /> Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((project, index) => (
          <motion.custom
            key={project.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            component={Card}
            className="overflow-hidden flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-800">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-gray-600 mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
             {project.link !== '#' && (
                <div className="p-4 pt-0 mt-auto">
                    <Button variant="outline" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            )}
          </motion.custom>
        ))}
      </div>
    </div>
  );
};

export default Projects;
