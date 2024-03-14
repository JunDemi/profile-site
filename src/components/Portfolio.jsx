import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { portfolioList } from "../Utils";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import PortfolioDetail from "./PortfolioDetail";

const boxVar = {
  entry: (isBack) => ({
    y: isBack ? -50 : 50,
    scale: isBack ? 0.9 : 1.1,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  }),
  center: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  hide: (isBack) => ({
    y: isBack ? 50 : -50,
    scale: isBack ? 1.1 : 0.9,
    opacity: 0,
    transition: {
      duration: 0.4,
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
  const [overlay, set_overlay] = useState(false);

  const currentPageSet = (current) => {
    if (currentPage > current) {
      set_back(true);
      set_viewPage(0);
    } else if (currentPage < current) {
      set_viewPage(0);
      set_back(false);
    }
    set_currentPage(current);
  };
  // const nextCard = (imgLength) => {
  //   //다음 버튼 클릭
  //   set_back(false);
  //   set_currentPage((prev) => (prev === imgLength - 1 ? 0 : prev + 1)); //다음 숫자로 변경하여 페이지 넘김. 가장 끝일 경우 동작하지 않도록, 개수는 0부터 시작하지 않으므르 -1
  //   set_viewPage(0);
  // };
  // const prevCard = (imgLength) => {
  //   //이전 버튼 클릭
  //   set_back(true);
  //   set_currentPage((prev) => (prev === 0 ? imgLength - 1 : prev - 1)); //이전 숫자로 변경하여 페이지 넘김
  //   set_viewPage(0);
  // };
  const nextView = (imgLength) => {
    set_viewPage((prev) => (prev === imgLength - 1 ? 0 : prev + 1));
  };
  const prevView = (imgLength) => {
    //이전 버튼 클릭
    set_viewPage((prev) => (prev === 0 ? imgLength - 1 : prev - 1)); //이전 숫자로 변경하여 페이지 넘김
  };

  const portfolioOverlay = () => {
    set_overlay(true);
  }
  const overlayClose = () => {
    set_overlay(false);
  }
  return (
    <>
    <div className="portfolio-container">
      <Parallax
        strength={350}
        bgImage="/bg/portfoliobg.png"
        className="portfolio-bg"
      />
      <div className="portfolio-content">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={inview ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ delay: 0.3, ease: "easeOut" }}
        >
          Portfolio
        </motion.h1>
        <motion.div
          className="portfolio-slider"
          initial={{ opacity: 0, x: 150 }}
          animate={inview ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
          transition={{ delay: 0.3, ease: "easeOut" }}
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
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div 
                    className="portfolio-slide-img"
                    layoutId={`macbook${page}`}
                    >
                      <motion.img
                        className="macbook-img"
                        src="/bg/macbook.png"
                        alt=""
                      />
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
                                    onClick={portfolioOverlay}
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
                    </motion.div>
                    <div className="portfolio-slide-text">
                      <div>
                        <Link to={data.link} target="_blank">
                          {data.siteName}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                            />
                          </svg>
                        </Link>
                      </div>
                      <h3>{data.siteIntro}</h3>
                      <div className="portfolio-slide-stackImg">
                        {data.stackImg.map((img, num) => (
                          <img key={num} src={img} alt="" />
                        ))}
                      </div>
                      <div className="feature-list">
                        <h4>Feature</h4>
                        {data.feature.map((text, num) => (
                          <p key={num}>{text}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="slide-progress-bar"
        >
          {[...Array(portfolioList.length)].map((data, number) => (
            <>
              <motion.button
                ref={ref2}
                onClick={() => currentPageSet(number)}
                initial={{ opacity: 0, scale: 0 }}
                animate={inview ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0}}
                transition={{ delay: 0.8 + number / 10 * 1.5}}
                key={number}
                style={
                  currentPage === number
                    ? {
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#fff",
                        color: "#000",
                        fontSize: "16px",
                      }
                    : {}
                }
              >
                {number + 1}
              </motion.button>
              <motion.hr initial={{ opacity: 0, scale: 0 }}
                animate={inview ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0}}
                transition={{ delay: 0.8 + number / 10 * 1.5}}/>
            </>
          ))}
        </motion.div>
        {/* <motion.div className="portfolio-slide-button"
        initial={{ opacity: 0 }}
        animate={inview ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, ease: "easeOut" }}>
          <motion.div
            className="portfolio-slider-button-prev"
            onClick={() => prevCard(portfolioList.length)}
            initial={{ y: 0 }}
            whileTap={{ y: -8 }}
          >
            Prev
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
                d="m4.5 18.75 7.5-7.5 7.5 7.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </motion.div>
          <div className="portfolio-slide-number">
            {currentPage + 1} / {portfolioList.length}
          </div>
          <motion.div
            className="portfolio-slider-button-next"
            onClick={() => nextCard(portfolioList.length)}
            initial={{ y: 0 }}
            whileTap={{ y: 8 }}
            ref={ref2}
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
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
            Next
          </motion.div>
        </motion.div> */}
      </div>
    </div>

    <AnimatePresence>
      {overlay && 
      <motion.div className="overlay-dark" onClick={overlayClose}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
          <PortfolioDetail page={currentPage}/>
      </motion.div>
      }
    </AnimatePresence>
    </>
  );
};

export default Portfolio;
