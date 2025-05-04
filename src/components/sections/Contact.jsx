
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = ({ data }) => {
 const contactInfoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="py-12 md:py-16 bg-white rounded-lg shadow-md p-6 md:p-10">
      <motion.h2
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center gap-3"
      >
       <Send className="w-8 h-8" /> Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-6">
           <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={contactInfoVariants} className="flex items-center gap-4 text-gray-700">
             <Mail className="w-6 h-6 text-blue-500 flex-shrink-0" />
             <a href={`mailto:${data.email}`} className="hover:text-blue-600 break-all">{data.email}</a>
           </motion.div>
           <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={contactInfoVariants} className="flex items-center gap-4 text-gray-700">
             <Phone className="w-6 h-6 text-purple-500 flex-shrink-0" />
             <a href={`tel:${data.phone}`} className="hover:text-purple-600">{data.phone}</a>
           </motion.div>
           <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={contactInfoVariants} className="flex items-start gap-4 text-gray-700">
             <MapPin className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
             <span>{data.address}</span>
           </motion.div>
           <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={contactInfoVariants} className="flex items-center gap-6 pt-4">
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition duration-300">
                 <Linkedin size={28} />
              </a>
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition duration-300">
                 <Github size={28} />
              </a>
           </motion.div>
        </div>

        <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-center md:text-left"
        >
            <p className="text-lg text-gray-600 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
            </p>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
             <Button size="lg" asChild className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg transition duration-300 transform hover:-translate-y-1">
               <a href={`mailto:${data.email}`}>
                 Send me an Email <Mail className="ml-2 h-5 w-5" />
               </a>
             </Button>
           </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
