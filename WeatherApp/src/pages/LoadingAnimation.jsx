import { motion } from "framer-motion";

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center mt-5">
      <motion.div
        className="w-4 h-4 bg-white rounded-full mx-1"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="w-4 h-4 bg-white rounded-full mx-1"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className="w-4 h-4 bg-white rounded-full mx-1"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.4 }}
      />
    </div>
  );
};

export default LoadingAnimation;
