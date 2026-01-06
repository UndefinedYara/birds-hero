import { motion } from "motion/react";
import flyingBird1 from "/images/flying-bird-1.png";
import flyingBird2 from "/images/flying-bird-2.png";

export function CrissCrossBirds() {
  return (
    <div className="flex absolute bottom-0 w-full justify-between">
      {/* bird taking off from the left */}
      <motion.div
        className=" w-20"
        initial={{ x: -200, y: -10, opacity: 1 }}
        animate={{ x: 2500, y: -800, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 7, delay: 1, ease: [0.7, 0.01, 1, 0.02] }}
      >
        <img src={flyingBird1} className="z-10" alt="flying bird" />
      </motion.div>

      {/* bird taking off from the right */}
      <motion.div
        className=" w-20 "
        initial={{ x: 200, y: -140, opacity: 1 }}
        animate={{ x: -2500, y: -800, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 7, delay: 1, ease: [0.7, 0.01, 1, 0.02] }}
      >
        <img src={flyingBird2} className=" z-10" alt="flying bird" />
      </motion.div>
    </div>
  );
}
