import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { stackBack, stackFront } from "../Utils";
const Skills = () => {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start center", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  const ref = useRef(null);
  const inview = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const inview2 = useInView(ref2, { once: true });
  return (
    <div className="my-skill" ref={parallaxRef}>
      <div className="skill-content">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={inview ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ delay: 0.3, ease: "easeOut" }}
        >
          My Skills
        </motion.h1>
        <motion.div
          className="my-skill-front"
          initial={{ opacity: 0, x: -30 }}
          animate={inview ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.3, ease: "easeOut" }}
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            corrupti, facilis fugit quam voluptate omnis, impedit id nisi
            voluptas cupiditate autem numquam quo odio laudantium rerum,
            perferendis in excepturi nobis.
          </p>
          <div className="my-skill-list">
            <h2>Front End</h2>
            {stackFront.map((data, number) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 130, scale: 0 }}
                animate={
                  inview
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 130, scale: 0 }
                }
                transition={{ delay: 0.3 + (number / 10) * 1.8 }}
              >
                <h3>{data.stackName}</h3>
                <img src={data.stackImg} alt="" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div style={{ margin: "1rem 0", padding: "3rem 0" }} ref={ref} />
        <motion.div
          className="my-skill-front"
          initial={{ opacity: 0, x: 100 }}
          animate={inview2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ delay: 0.3, ease: "easeOut" }}
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            corrupti, facilis fugit quam voluptate omnis, impedit id nisi
            voluptas cupiditate autem numquam quo odio laudantium rerum,
            perferendis in excepturi nobis.
          </p>
          <div className="my-skill-list">
            <h2>Database & Storage</h2>
            {stackBack.map((data, number) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: -130, scale: 0 }}
                animate={
                  inview2
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: -130, scale: 0 }
                }
                transition={{ delay: 0.3 + (number / 10) * 1.8 }}
              >
                <h3>{data.stackName}</h3>
                <img src={data.stackImg} alt="" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div ref={ref2} />
      </div>
      <motion.div className="skill-moon"  style={{ y: textY }} initial={{opacity: 0}} animate={inview ? {opacity: 1} : {opacity: 0}}>
        <img src="/bg/moon.png" alt=""/>
      </motion.div>
      <div className="skill-bg"/>
    </div>
  );
};
export default Skills;
