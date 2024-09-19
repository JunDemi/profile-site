import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { stackBack, stackFront } from "../Utils";
import { Parallax } from "react-parallax";
import { useRecoilState } from "recoil";
import { themeState } from "../atom";
const Skills = () => {
  const [themeMode] = useRecoilState(themeState);

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
    <Parallax
      strength={350}
      bgImage={`/bg/${themeMode ? "dark" : "light"}/skillbg.jpeg`}
    >
      <div className="my-skill" ref={parallaxRef}>
        <div className="skill-content">
          <motion.h1
            className="cloud-title"
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
              사용자들의 편의성이나 트렌드 기술에 알맞는 다양한 라이브러리를 적극적으로
              수용하고, 배포 후에도 유저의 사용성 편의의 발전을 위해 끊임없이 새로운 라이브러리들을 공부하며
              지속적인 기술 업데이트를 이어나갑니다.
            </p>
            <div className="my-skill-list">
              <h2>Front End</h2>
              <span />
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
                  <img
                    src={`/stack icons/${
                      (themeMode ? "/white/" : "/black/") + data.stackImg
                    }`}
                    alt=""
                  />
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
              개발 프로세스에 참여한 모든 순간 백엔드의 접근성과 클라이언트의
              전체적인 품질 향상을 강조하며, 지속적인 코드 리뷰와 사용자 피드백을
              통해 이슈에 대한 원인을 정리하고 구글링, AI챗, 단위 테스트 등 가릴 것 없이 
              다양한 방안으로 끈기있게 이슈를 해결해 나갑니다.
            </p>
            <div className="my-skill-list">
              <h2>DB & Storage</h2>
              <span />
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
                  <img
                    src={`/stack icons/${
                      (themeMode ? "/white/" : "/black/") + data.stackImg
                    }`}
                    alt=""
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div ref={ref2} />
        </div>
        <motion.div
          className="skill-moon"
          style={{ y: textY }}
          initial={{ opacity: 0 }}
          animate={inview ? { opacity: 1 } : { opacity: 0 }}
        >
          <img
            src={`/bg/${themeMode ? "dark" : "light"}/skillmoon.png`}
            alt=""
          />
        </motion.div>
        <div className="skill-bg" />
      </div>
    </Parallax>
  );
};
export default Skills;
