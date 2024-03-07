import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Intro = () => {
  const ref = useRef(null);
  const inview = useInView(ref);
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
            transition={{ delay: 1.0 }}
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
        <motion.div
          style={{ width: "500px" }}
          initial={{ opacity: 0, x: 30 }}
          animate={inview ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ delay: 0.6, ease: "easeOut" }}
        >
          <h1>My Skills</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            corrupti, facilis fugit quam voluptate omnis, impedit id nisi
            voluptas cupiditate autem numquam quo odio laudantium rerum,
            perferendis in excepturi nobis.
          </p>
        </motion.div>
        <motion.div
          className="my-skill-list"
          initial={{ opacity: 0, x: -30 }}
          animate={inview ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 1.0, ease: "easeOut" }}
        >
          <div className="list-1">
            <span>주요 기술 스택</span>
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
            <span>주요 스타일링</span>
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
