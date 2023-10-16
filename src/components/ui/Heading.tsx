import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeadingProps {
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <motion.h1
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="text-white text-center text-[2em] font-serif font-bold"
    >
      {children}
    </motion.h1>
  );
}

export default Heading;
