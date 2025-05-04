
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const Education = ({ data }) => {
 const itemVariants = {
    hidden: { opacity: 0, x: 50 },
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
    <div className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 md:p-10 shadow-inner">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center gap-3"
      >
        <GraduationCap className="w-8 h-8" /> Academic Credentials
      </motion.h2>
      <div className="space-y-8">
        {data.map((edu, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-blue-800">{edu.degree}</CardTitle>
                <CardDescription className="text-md text-purple-700 font-medium">{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                 <p className="text-sm text-gray-500">{edu.duration}</p>
                 <p className="text-sm font-semibold text-gray-700">{edu.grade}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
