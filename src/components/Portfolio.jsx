import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { portfolioList } from "../Utils";

const boxVar = {
  entry: (isBack) => ({
    x: isBack ? -40 : 40,
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  hide: (isBack) =>({
    x: isBack ? 40 : -40,
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  }),
};

const viewVar = {
  entry: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
const Portfolio = () => {
  const ref2 = useRef(null);
  const inview = useInView(ref2, { once: true });
  const [currentPage, set_currentPage] = useState(0);
  const [back, set_back] = useState(false);
  const [viewPage, set_viewPage] = useState(0);
  const nextCard = (imgLength) => {
    //다음 버튼 클릭
    set_back(false);
    set_currentPage((prev) => (prev === imgLength - 1 ? 0 : prev + 1)); //다음 숫자로 변경하여 페이지 넘김. 가장 끝일 경우 동작하지 않도록, 개수는 0부터 시작하지 않으므르 -1
    set_viewPage(0);
  };
  const prevCard = (imgLength) => {
    //이전 버튼 클릭
    set_back(true);
    set_currentPage((prev) => (prev === 0 ? imgLength - 1 : prev - 1)); //이전 숫자로 변경하여 페이지 넘김
    set_viewPage(0);
  };
  const nextView = (imgLength) => {
    set_viewPage((prev) => (prev === imgLength - 1 ? 0 : prev + 1));
  };
  const prevView = (imgLength) => {
    //이전 버튼 클릭
    set_viewPage((prev) => (prev === 0 ? imgLength - 1 : prev - 1)); //이전 숫자로 변경하여 페이지 넘김
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
                    <img className="macbook-img" src="/macbook.webp" alt="" />
                    <div className="macbook-img-slider">
                      <div className="view-slider">
                        <AnimatePresence mode="sync">
                          {data.viewImg.map(
                            (img, num) =>
                              num === viewPage && (
                                <motion.img
                                  src={img}
                                  alt=""
                                  key={num}
                                  variants={viewVar}
                                  initial="entry"
                                  animate="center"
                                  exit="hide"
                                  onClick={() =>
                                    window.open(data.link, "_blank")
                                  }
                                />
                              )
                          )}
                        </AnimatePresence>
                        <div className="view-page-button">
                          <svg
                            onClick={() => prevView(data.viewImg.length)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                          </svg>
                          <span>
                            {viewPage + 1}/{data.viewImg.length}
                          </span>
                          <svg
                            onClick={() => nextView(data.viewImg.length)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
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
                      <p key={num}>{text}</p>
                    ))}
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
        <div className="portfolio-slide-number">
          {currentPage + 1} / {portfolioList.length}
        </div>
        <div
          className="portfolio-slider-button-prev"
          onClick={() => prevCard(portfolioList.length)}
        >
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
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Prev
        </div>
        <div
          className="portfolio-slider-button-next"
          onClick={() => nextCard(portfolioList.length)}
        >
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
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
          Next
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
