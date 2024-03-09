import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";
import { introduceText } from "../Utils";
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
const bg1 =
  "https://res.cloudinary.com/dgmgeotyk/image/upload/f_auto,q_auto/v1/Wings/yv9xfkc2juzvbvbbxhsn";
const Intro = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true });
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
      <Parallax className="intro-container" strength={300} bgImage={bg1}>
        <div>
          <motion.img
            //src="https://res.cloudinary.com/dgmgeotyk/image/upload/f_auto,q_auto/v1/Wings/yrlrc4dczr4ezhyyaif5"
            src="/bannerbg.jpeg"
            alt=""
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Hi. I'm
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Front-End Developer.
          </motion.h2>
          <motion.div
            className="intro-text-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
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
                    >
                      {data}
                    </motion.p>
                  )
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            className="intro-text-radio"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            {introduceText.map((data, page) => (
              <button
                key={page}
                onClick={() => currentPageSet(page)}
                style={currentPage === page ? { backgroundColor: "#fff" } : {}}
              />
            ))}
            <span onClick={() => set_pause((prev) => !prev)}>
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
            </span>
          </motion.div>
          <motion.div
            className="intro-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
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
              <motion.svg
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.25781 3.11684C3.67771 3.45796 3.83523 3.43193 4.62369 3.37933L12.0571 2.93299C12.2147 2.93299 12.0836 2.77571 12.0311 2.74957L10.7965 1.85711C10.56 1.67347 10.2448 1.46315 9.64083 1.51576L2.44308 2.04074C2.18059 2.06677 2.12815 2.19801 2.2327 2.30322L3.25781 3.11684ZM3.7041 4.84917V12.6704C3.7041 13.0907 3.91415 13.248 4.38693 13.222L12.5562 12.7493C13.0292 12.7233 13.0819 12.4341 13.0819 12.0927V4.32397C13.0819 3.98306 12.9508 3.79921 12.6612 3.82545L4.12422 4.32397C3.80918 4.35044 3.7041 4.50803 3.7041 4.84917ZM11.7688 5.26872C11.8212 5.50518 11.7688 5.74142 11.5319 5.76799L11.1383 5.84641V11.6205C10.7965 11.8042 10.4814 11.9092 10.2188 11.9092C9.79835 11.9092 9.69305 11.7779 9.37812 11.3844L6.80345 7.34249V11.2532L7.61816 11.437C7.61816 11.437 7.61816 11.9092 6.96086 11.9092L5.14879 12.0143C5.09615 11.9092 5.14879 11.647 5.33259 11.5944L5.80546 11.4634V6.29276L5.1489 6.24015C5.09625 6.00369 5.22739 5.66278 5.5954 5.63631L7.53935 5.50528L10.2188 9.5998V5.97765L9.53564 5.89924C9.4832 5.61018 9.69305 5.40028 9.95576 5.37425L11.7688 5.26872ZM1.83874 1.33212L9.32557 0.780787C10.245 0.701932 10.4815 0.754753 11.0594 1.17452L13.4492 2.85424C13.8436 3.14309 13.975 3.22173 13.975 3.53661V12.7493C13.975 13.3266 13.7647 13.6681 13.0293 13.7203L4.33492 14.2454C3.78291 14.2717 3.52019 14.193 3.23111 13.8253L1.47116 11.5419C1.1558 11.1216 1.02466 10.8071 1.02466 10.4392V2.25041C1.02466 1.77825 1.23504 1.38441 1.83874 1.33212Z" />
              </motion.svg>
              <span>Notion</span>
            </motion.a>
          </motion.div>
        </div>
      </Parallax>

      <div className="my-skill">
        <motion.div
          style={{ width: "500px" }}
          initial={{ opacity: 0, x: -30 }}
          animate={inview ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.3, ease: "easeOut" }}
        >
          <h1>My Skills</h1>
          <p ref={ref}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            corrupti, facilis fugit quam voluptate omnis, impedit id nisi
            voluptas cupiditate autem numquam quo odio laudantium rerum,
            perferendis in excepturi nobis.
          </p>
        </motion.div>
        <motion.div
          className="my-skill-list"
          initial={{ opacity: 0, x: 30 }}
          animate={inview ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ delay: 0.3, ease: "easeOut" }}
        >
          <div className="list-1">
            <span>Front End</span>
            <img
              src="https://camo.githubusercontent.com/2523f1b49276896e987419226002b69d7e4dbdf7dc56f416f46040c62a17b0f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c2d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d666666666666"
              alt=""
            />
            <img
              src="https://camo.githubusercontent.com/4bd6d29d00fa50cc25218c0c13df1fdcb94a4499a36b35dd62fa3e2524a55456/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4353532d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d666666666666"
              alt=""
            />
            <img
              src="https://camo.githubusercontent.com/c55fa664aa79d4595a5d569ce68e45f504d2ee755611437c62440835543c43f2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d303030303030"
              alt=""
            />
            <img
              src="https://camo.githubusercontent.com/0bd8a63ca14821421455199e86267172d5dad9860859b46feaf71b32fee86245/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d666666666666"
              alt=""
            />
            <img
              src="https://camo.githubusercontent.com/f2354c79ec6bfb9ba6139a72bbc75c8c3a51a63801efdb6961d7a146b08e112d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3631444146423f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d303030303030"
              alt=""
            />
            <img
              src="https://camo.githubusercontent.com/e971e5d594ea270276afeb044d4dcfcf8c603c3a4e1a3a466d6322e61fe2462b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742e6a732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d6e657874646f746a73266c6f676f436f6c6f723d666666666666"
              alt=""
            />
          </div>
          <div className="list-2">
            <img
              src="https://camo.githubusercontent.com/df54a377e08d3e0a75275e2996009b2b988c5a94f08f66c8efa0b9d33a624601/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374796c656420436f6d706f6e656e74732d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c6564636f6d706f6e656e7473266c6f676f436f6c6f723d666666666666"
              alt=""
            />
            <img
              src="https://camo.githubusercontent.com/8ea312613ae2f44701fd5b6c099b485465760fd90dc2c462dc9ad78f701caf52/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5461696c77696e64204353532d3036423644343f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e64637373266c6f676f436f6c6f723d666666666666"
              alt=""
            />
            <img
              src="https://camo.githubusercontent.com/0fa22473518fc859b70d5b012952c972ac47648b3ea9295dd95d85a20aadbab4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f534353532d4343363639393f7374796c653d666f722d7468652d6261646765266c6f676f3d73617373266c6f676f436f6c6f723d666666666666"
              alt=""
            />
            <img
              src="https://camo.githubusercontent.com/e8d6c0d5b277382c8531105bdd0c848b09050f366f5d4f3c5ba971d9e4a0a9ea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4672616d6572204d6f74696f6e2d3030353546463f7374796c653d666f722d7468652d6261646765266c6f676f3d6672616d6572266c6f676f436f6c6f723d666666666666"
              alt=""
            />
          </div>
          <div className="list-3">
            <span>DB & Storage</span>
            <img
              src="https://camo.githubusercontent.com/37cf818a6b8239db38ac96d5f14b6e184e0e08dd3d529ddded59c3c94be89b7c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f66697265626173652d4646434132383f7374796c653d666f722d7468652d6261646765266c6f676f3d6669726562617365266c6f676f436f6c6f723d303030303030"
              alt=""
            />
            <img
              src="https://camo.githubusercontent.com/a2418e599756bf49ce248adf84a82eab59e57b0b8c9fb5db474e5e5f64d5c967/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506c616e6574205363616c652d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d706c616e65747363616c65266c6f676f436f6c6f723d666666666666"
              alt=""
            />
            <img
              src="https://camo.githubusercontent.com/c6f9de00e1c8f2852817a462203fe1cf3a0b95322cd08b9dd2054b455a42b067/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f507269736d612d3244333734383f7374796c653d666f722d7468652d6261646765266c6f676f3d707269736d61266c6f676f436f6c6f723d666666666666"
              alt=""
            />
            <img
              src="https://camo.githubusercontent.com/0e1c0c2399c288af7f6ca6bc6fccf1b0eb268e9c2f7fceabca2a19e74eb41d46/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f415753205244532d3532374646463f7374796c653d666f722d7468652d6261646765266c6f676f3d616d617a6f6e726473266c6f676f436f6c6f723d666666666666"
              alt=""
            />
            <img
              src="https://camo.githubusercontent.com/2e72b7371d76584a8f628d712e4ac2f5b7679d6882e91259b36ab71adba10cd3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636c6f7564696e6172792d3334343843353f7374796c653d666f722d7468652d6261646765266c6f676f3d636c6f7564696e617279266c6f676f436f6c6f723d666666666666"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Intro;
