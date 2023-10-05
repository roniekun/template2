import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageWrapper = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: .5,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={{width:'100%',height:'auto'}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
