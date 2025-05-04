
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight } from 'lucide-react';

const Hero = ({ data }) => {
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[70vh] text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="md:w-1/2 space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight">
          {data.title}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">{data.subtitle}</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">{data.description}</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" asChild className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg transition duration-300 transform hover:-translate-y-1">
            <a href={data.ctaLink}>
              {data.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="md:w-1/3 flex justify-center"
      >
        <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-white shadow-lg ring-4 ring-blue-200">
          <AvatarImage src={data.imageUrl} alt={data.name} />
          <AvatarFallback className="text-4xl bg-gradient-to-br from-blue-200 to-purple-200 text-blue-800">
            {getInitials(data.name || 'MS')}
          </AvatarFallback>
        </Avatar>
      </motion.div>
    </div>
  );
};

export default Hero;
