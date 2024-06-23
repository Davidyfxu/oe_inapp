import React from "react";
import { motion } from "framer-motion";
import LazyRouter from "../LazyRouter";
interface IMotion {
  children: React.ReactNode;
  duration?: number;
}
const MotionWrapper = (props: IMotion) => {
  const { children, duration = 1 } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
