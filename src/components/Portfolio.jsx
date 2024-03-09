import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { portfolioList } from "../Utils";

const boxVar = {
  entry: {
    x: 40,
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  hide: {
    x: -40,
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const viewVar = {
  entry: {
    x: 40,
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  hide: {
    x: -40,
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const Portfolio = () => {
  const ref2 = useRef(null);
  const inview = useInView(ref2, { once: true });
  const [currentPage, set_currentPage] = useState(0);
  const [viewPage, set_viewPage] = useState(0);
  const nextCard = (imgLength) => {
    //다음 버튼 클릭
    set_currentPage((prev) => (prev === imgLength - 1 ? 0 : prev + 1)); //다음 숫자로 변경하여 페이지 넘김. 가장 끝일 경우 동작하지 않도록, 개수는 0부터 시작하지 않으므르 -1
    set_viewPage(0);
  };
  const nextView = (imgLength) => {
    set_viewPage((prev) => (prev === imgLength - 1 ? 0 : prev + 1)); 
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
        <AnimatePresence mode="sync">
          {portfolioList.map(
            (data, page) =>
              page === currentPage && (
                <motion.div
                  className="portfolio-slide"
                  key={page}
                  variants={boxVar}
                  initial="entry"
                  animate="center"
                  exit="hide"
                >
                  <div className="portfolio-slide-img">
                    <img className="macbook-img" src="/macbook.webp" alt="" />
                    <div
                      className="macbook-img-slider"
                    >
                      <div>
                        <AnimatePresence mode="sync">
                          {data.viewImg.map((img, num) => (
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
                                window.open(
                                  "https://the-market-omega.vercel.app/",
                                  "_blank"
                                )
                              }
                            />
                            )
                          ))}
                        </AnimatePresence>
                        <button onClick={() => nextView(data.viewImg.length)}>next</button>
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
                      <p key={num}>• {text}</p>
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
          className="portfolio-slider-button"
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
