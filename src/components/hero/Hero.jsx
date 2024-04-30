import React from "react";
import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.1,
    },
  },
  scrollbutton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Dhruv Mishra</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          <motion.div className="buttons">
            {/* <a href="#Projects">
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </a> */}
            <motion.a href="#Contact" variants={textVariants}>
              <motion.button>Contact Me</motion.button>
            </motion.a>
          </motion.div>
          <motion.a href="#Contact" variants={textVariants}>
            <motion.img
              animate="scrollbutton"
              src="/scroll.png"
              className="scroll-btn"
              alt=""
            />
          </motion.a>
        </motion.div>
      </div>
      {/* <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Engineer Web Developer
      </motion.div> */}

      <div className="imageContainer">
        {/* <img src="/hero.png" alt="" /> */}
        <img src="/devloper.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
