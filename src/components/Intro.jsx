import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { introduceText } from "../Utils";
import { useFollowPointer } from "../hooks/useFollowPointer";
const boxVar = {
  entry: (isBack) => ({
    x: isBack ? -360 : 360,
    y: 2,
    rotateY: isBack ? 90 : -90,
    rotateZ: isBack ? -1 : 1,
    opacity: 0,
  }),
  center: {
    x: 0,
    y: 0,
    rotateY: 0,
    rotateZ: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  hide: (isBack) => ({
    x: isBack ? 360 : -360,
    y: 2,
    rotateY: isBack ? -90 : 90,
    rotateZ: isBack ? 1 : -1,
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  }),
};
const Intro = () => {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
  });
  const cloudY1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const cloudY2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);

  const followRef = useRef(null);
  const { x, y } = useFollowPointer(followRef);

  const [back, set_back] = useState(false);
  const [pause, set_pause] = useState(false);
  const [currentPage, set_currentPage] = useState(0);
  const currentPageSet = (current) => {
    if (currentPage > current) {
      set_back(true);
    } else if (currentPage < current) {
      set_back(false);
    }
    set_currentPage(current);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!pause) {
        set_currentPage((prevValue) => (prevValue + 1) % 3);
        set_back(false);
      }
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [pause]);
  return (
    <>
      <div className="parallax-container" ref={parallaxRef}>
        <motion.div className="intro-container" style={{ y: textY }}>
          <div className="intro-left">
            <div className="intro-name">
              <motion.img
                src="https://res.cloudinary.com/dgmgeotyk/image/upload/f_auto,q_auto/v1/Wings/yrlrc4dczr4ezhyyaif5"
                alt=""
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              />
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Hi, I'm Park Jung Wook.
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Front-End Developer.
                </motion.h2>
              </div>
            </div>
            <motion.div
              className="intro-text-container"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <AnimatePresence mode="sync" custom={back}>
                {introduceText.map(
                  (data, page) =>
                    page === currentPage && (
                      <motion.p
                        key={page}
                        custom={back}
                        variants={boxVar}
                        initial="entry"
                        animate="center"
                        exit="hide"
                        style={pause ? {color: "#6b6b6b"} : {}}
                      >
                        {data}
                      </motion.p>
                    )
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          <motion.img
            className="intro-moon"
            src="/bg/sun.png"
            alt=""
            // animate={{ rotateZ: -240}}
            // transition={{ duration: 3, repeat: Infinity,repeatType: "reverse", ease: "easeInOut" }}
            ref={followRef}
            animate={{ x, y }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 50,
              restDelta: 0.001,
            }}
          />
        </motion.div>
        <motion.div className="bg-full" style={{ y: mountainY }} />
        <motion.div className="bg-mountain" style={{ y: cloudY1 }} />
        <motion.div className="bg-mountain1" style={{ y: cloudY2 }} />
        <div className="intro-buttons">
          <motion.div
            className="intro-text-radio"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            {introduceText.map((data, page) => (
              <button
                key={page}
                onClick={() => currentPageSet(page)}
                style={currentPage === page ? { backgroundColor: "#aef4fb" } : {}}
              />
            ))}
            <motion.span onClick={() => set_pause((prev) => !prev)}
            whileTap={{backgroundColor: "#7dbcc3", scale: 1.15}}>
              {pause ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              )}
            </motion.span>
          </motion.div>
          <motion.div
            className="intro-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/JunDemi"
              target="_blank"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
              </svg>
              <span>GitHub</span>
            </motion.a>
            <hr />
            <motion.a
              href=""
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.1 }}
            >
              <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.25781 3.11684C3.67771 3.45796 3.83523 3.43193 4.62369 3.37933L12.0571 2.93299C12.2147 2.93299 12.0836 2.77571 12.0311 2.74957L10.7965 1.85711C10.56 1.67347 10.2448 1.46315 9.64083 1.51576L2.44308 2.04074C2.18059 2.06677 2.12815 2.19801 2.2327 2.30322L3.25781 3.11684ZM3.7041 4.84917V12.6704C3.7041 13.0907 3.91415 13.248 4.38693 13.222L12.5562 12.7493C13.0292 12.7233 13.0819 12.4341 13.0819 12.0927V4.32397C13.0819 3.98306 12.9508 3.79921 12.6612 3.82545L4.12422 4.32397C3.80918 4.35044 3.7041 4.50803 3.7041 4.84917ZM11.7688 5.26872C11.8212 5.50518 11.7688 5.74142 11.5319 5.76799L11.1383 5.84641V11.6205C10.7965 11.8042 10.4814 11.9092 10.2188 11.9092C9.79835 11.9092 9.69305 11.7779 9.37812 11.3844L6.80345 7.34249V11.2532L7.61816 11.437C7.61816 11.437 7.61816 11.9092 6.96086 11.9092L5.14879 12.0143C5.09615 11.9092 5.14879 11.647 5.33259 11.5944L5.80546 11.4634V6.29276L5.1489 6.24015C5.09625 6.00369 5.22739 5.66278 5.5954 5.63631L7.53935 5.50528L10.2188 9.5998V5.97765L9.53564 5.89924C9.4832 5.61018 9.69305 5.40028 9.95576 5.37425L11.7688 5.26872ZM1.83874 1.33212L9.32557 0.780787C10.245 0.701932 10.4815 0.754753 11.0594 1.17452L13.4492 2.85424C13.8436 3.14309 13.975 3.22173 13.975 3.53661V12.7493C13.975 13.3266 13.7647 13.6681 13.0293 13.7203L4.33492 14.2454C3.78291 14.2717 3.52019 14.193 3.23111 13.8253L1.47116 11.5419C1.1558 11.1216 1.02466 10.8071 1.02466 10.4392V2.25041C1.02466 1.77825 1.23504 1.38441 1.83874 1.33212Z" />
              </svg>
              <span>Notion</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Intro;
