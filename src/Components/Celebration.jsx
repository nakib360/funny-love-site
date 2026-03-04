//eslint-disable-next-line
import { motion } from "motion/react";
import celebration from "../assets/celebration.gif";

const Celebration = () => {
  return (
    <section className="px-4 py-8 text-center md:px-8 md:py-12">
      <motion.img
        src={celebration}
        alt="Happy celebration"
        className="mx-auto mb-6 w-44 md:w-56"
        initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" }}
        animate={{
          opacity: 1,
          y: [0, -20, 0],
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          filter: { duration: 0.8 },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <motion.h1
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-['Pacifico',cursive] text-[clamp(2rem,5vw,3rem)] text-rose-700 drop-shadow-[0_5px_18px_rgba(219,39,119,0.25)]"
      >
        I know you love me.
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto mt-4 max-w-xl font-['Pacifico',cursive] text-[clamp(1rem,2.3vw,1.15rem)] leading-relaxed text-rose-700/90"
      >
        Loving you is my only destiny. You're the center of my world, through every sunrise and every star.
      </motion.p>
    </section>
  );
};

export default Celebration;
