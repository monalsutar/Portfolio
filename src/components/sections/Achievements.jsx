
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users } from 'lucide-react';

const Achievements = ({ data, participations }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="py-12 md:py-16">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
             <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center gap-3"
              >
               <Award className="w-7 h-7" /> Achievements
             </motion.h3>
            <ul className="space-y-4">
                {data.map((achievement, index) => (
                <motion.li
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                    className="flex items-start text-gray-700 bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400"
                >
                    <Award className="w-5 h-5 mr-3 mt-1 text-blue-500 flex-shrink-0" />
                    <span>{achievement}</span>
                </motion.li>
                ))}
            </ul>
        </div>

         <div>
             <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center gap-3"
             >
                <Users className="w-7 h-7" /> Participations
             </motion.h3>
             <ul className="space-y-4">
                {participations.map((participation, index) => (
                <motion.li
                    key={index}
                    custom={index + data.length}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                    className="flex items-start text-gray-700 bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400"
                >
                    <Users className="w-5 h-5 mr-3 mt-1 text-purple-500 flex-shrink-0" />
                    <span>{participation}</span>
                </motion.li>
                ))}
             </ul>
         </div>
       </div>
    </div>
  );
};

export default Achievements;
