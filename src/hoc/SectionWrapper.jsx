import { motion } from "framer-motion";


import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0 }}
        className={` mx-auto relative z-0`}
      >
        <div id={idName}> </div>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;