'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReadMoreProps {
  children: React.ReactNode;
  maxLength?: number;
}

export default function ReadMore({ children, maxLength = 150 }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = typeof children === 'string' ? children : '';

  if (text.length <= maxLength) {
    return <>{children}</>;
  }

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <AnimatePresence initial={false}>
        <motion.div
          key={isExpanded ? 'expanded' : 'collapsed'}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? children : `${text.substring(0, maxLength)}...`}
        </motion.div>
      </AnimatePresence>
      <button 
        onClick={toggleReadMore} 
        className="text-red-600 hover:underline mt-2 font-semibold"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}
