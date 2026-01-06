import clouds from "/images/clouds.png";
import animatedBirds from "/images/animated-birds.png";

import { motion } from "motion/react";

export function Clouds() {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-10 md:-bottom-35 left-0 w-full"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Clouds  */}
      <img
        src={clouds}
        className="absolute -bottom-20 left-0 w-full z-10"
        alt="clouds design"
      />

      {/* Flying carrier birds  */}
      <img
        src={animatedBirds}
        className="absolute -bottom-10 left-0 md:left-35 md:w-5/6 z-20"
        alt="birds"
      />
    </motion.div>
  );
}
