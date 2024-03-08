import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { portfolioList } from "../Utils";

const boxVar = {
  entry: (isBack) => ({
    x: isBack ? -100 : 100,
    y: 0,
    opacity: 0,
  }),
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  hide: (isBack) => ({
    x: isBack ? 100 : -100,
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  }),
};
const Portfolio = () => {
  const ref2 = useRef(null);
  const inview = useInView(ref2, { once: true });
  const [currentPage, set_currentPage] = useState(0);
  const [back, set_back] = useState(false);
  const nextCard = (imgLength) => {
    //다음 버튼 클릭
    set_currentPage((prev) =>
      prev === imgLength - 1 ? 0 : prev + 1
    ); //다음 숫자로 변경하여 페이지 넘김. 가장 끝일 경우 동작하지 않도록, 개수는 0부터 시작하지 않으므르 -1

    set_back(false);
  };
  const prevCard = () => {
    //이전 버튼 클릭
    set_currentPage((prev) => (prev === 0 ? portfolioList.length -1 : prev - 1)); //이전 숫자로 변경하여 페이지 넘김. 0일 경우 동작하지 않도록
    set_back(true);
  };
  return (
    <div className="portfolio-container">
      <motion.h1
        ref={ref2}
        initial={{ opacity: 0, x: 30 }}
        animate={inview ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ delay: 0.6, ease: "easeOut" }}
      >
        Portfolio
      </motion.h1>
      <motion.div
        className="portfolio-slider"
        initial={{ opacity: 0, x: 30 }}
        animate={inview ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ delay: 0.6, ease: "easeOut" }}
      >
        <AnimatePresence mode="sync" custom={back}>
          {portfolioList.map(
            (data, page) =>
              page === currentPage && (
                <motion.div
                  className="portfolio-slide"
                  key={page}
                  custom={back}
                  variants={boxVar}
                  initial="entry"
                  animate="center"
                  exit="hide"
                >
                  <div className="portfolio-slide-img">
                    <img src={data.viewImg} alt="" />
                  </div>
                  <div className="portfolio-slide-text">
                    <h2>{data.siteName}</h2>
                    <h3>{data.siteIntro}</h3>
                    <div className="portfolio-slide-stackImg">
                      {data.stackImg.map((img, num) => (
                        <img key={num} src={img} alt="" />
                      ))}
                    </div>
                    <h4>Feature</h4>
                    {data.feature.map((text, num) => (
                      <p key={num}>• {text}</p>
                    ))}
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
        <svg
        className="portfolio-slide-prev"
          onClick={prevCard}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <svg
        className="portfolio-slide-next"
          onClick={() => nextCard(portfolioList.length)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </motion.div>
      <div className="portfolio-slide-number">
        {currentPage + 1} / {portfolioList.length}
      </div>
    </div>
  );
};

export default Portfolio;
