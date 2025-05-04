
import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = ({ data }) => {
  return (
    <div className="py-12 md:py-16 bg-white rounded-lg shadow-md p-6 md:p-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center gap-3"
      >
        <User className="w-8 h-8" /> {data.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto"
      >
        {data.description}
      </motion.p>
    </div>
  );
};

export default About;
