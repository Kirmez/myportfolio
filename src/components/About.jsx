import React from "react";

import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>

        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        I'm a skilled web developer with experience in JavaScript and PHP, and
        expertise in frameworks like React and Three.js. I'm a quick learner and
        collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-world problems. Let's work
        together to bring your ideas to life
      </motion.p>
    </>
  );
};

export default About;
