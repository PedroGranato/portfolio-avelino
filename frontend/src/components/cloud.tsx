import React from 'react';
import { motion } from 'framer-motion';

interface ImgProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  delay?: number; 
}

const Cloud: React.FC<ImgProps> = ({ src, alt, style, delay = 0 }) => { 
  return (
    <motion.img
      src={src}
      alt={alt}
      className="w-30 h-30 absolute top-150 left-0"
      style={{ ...style, zIndex: -10 }}
      animate={{
        x: ["100vw", "-100vw"],
      }}
      transition={{
        duration: 50,
        ease: "linear",
        delay: delay,
        repeat: Infinity
      }}
    />
  );
}

export default Cloud;