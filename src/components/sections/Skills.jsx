
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu } from 'lucide-react';

const Skills = ({ data }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
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
       <Cpu className="w-4 h-8" /> Skill Set
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {data.map((category, index) => (
          <motion.custom
            key={category.category}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="w-full"
            component={Card}
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-700">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {category.items.map((item) => (
                  <li key={item} className="text-gray-600 flex items-center">
                     <span className="inline-block w-2 h-2 mr-2 bg-purple-500 rounded-full"></span>
                     {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </motion.custom>
        ))}
      </div>
    </div>
  );
};

export default Skills;
