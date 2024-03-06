import { motion } from "framer-motion";
import React, { useRef } from "react";

const Intro = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="intro-container">
        <div>
          <motion.img
            src="/bannerbg.jpeg"
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Hi. I'm
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Front-End Developer.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            corrupti, facilis fugit quam voluptate omnis, impedit id nisi
            voluptas cupiditate autem numquam quo odio laudantium rerum,
            perferendis in excepturi nobis.
          </motion.p>
          <motion.button
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            Read More
          </motion.button>
        </div>
      </div>

      <div className="my-skill" ref={ref}>
        <div>
          <h1>My Skills</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            corrupti, facilis fugit quam voluptate omnis, impedit id nisi
            voluptas cupiditate autem numquam quo odio laudantium rerum,
            perferendis in excepturi nobis.
          </p>
        </div>
        <img src="/bannerbg.jpeg" alt="" />
      </div>
    </>
  );
};

export default Intro;
