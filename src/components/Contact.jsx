import React, { useRef } from "react";
import { Parallax } from "react-parallax";
import Footer from "./Footer";
import { motion, useScroll, useTransform } from "framer-motion";

//이메일, 전화번호
//방명록 목록, 방명록 작성

const Contact = () => {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["end end", "start end"],
  });
  const starY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  return (
    <Parallax
      strength={300}
      bgImage={"/bg/sky.jpeg"}
    >
        <div className="contact-section" ref={parallaxRef}>
          <motion.div className="bg-stars" style={{y: starY}}/>
          <Footer/>
        </div>
    </Parallax>
  );
};

export default Contact;
