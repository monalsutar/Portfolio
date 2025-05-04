
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const Experience = ({ data }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
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
        <Briefcase className="w-8 h-8" /> Internships & Experience
      </motion.h2>
      <div className="relative pl-6 after:absolute after:left-3 after:top-0 after:bottom-0 after:w-0.5 after:bg-gradient-to-b after:from-blue-200 after:to-purple-200">
        {data.map((exp, index) => (
          <motion.custom
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="mb-8 pl-8 relative"
            component={Card}
             whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)" }}
          >
             <div className="absolute left-[-1.5rem] top-1 flex items-center justify-center w-6 h-6 bg-white rounded-full ring-4 ring-purple-500">
               <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
             </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-800">{exp.role}</CardTitle>
              <CardDescription className="text-md text-purple-700 font-medium">{exp.company} | {exp.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{exp.description}</p>
            </CardContent>
          </motion.custom>
        ))}
      </div>
    </div>
  );
};

export default Experience;
