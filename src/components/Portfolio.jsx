import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { portfolioList } from "../Utils";
import { Parallax } from "react-parallax";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const pathname = useLocation().pathname.replace("/", "");
  const router = useNavigate();
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
  const nextView = (imgLength) => {
    set_viewPage((prev) => (prev === imgLength - 1 ? 0 : prev + 1));
  };
  const prevView = (imgLength) => {
    //이전 버튼 클릭
    set_viewPage((prev) => (prev === 0 ? imgLength - 1 : prev - 1)); //이전 숫자로 변경하여 페이지 넘김
  };

  const getOverlay = (siteName) => {
    set_overlay(true);
    router(`/${siteName}`);
  };
  const closeOverlay = () => {
    set_overlay(false);
    router("/");
  };

  useEffect(() => {
    if (pathname === "") {
      set_overlay(false);
    } else {
      set_overlay(true);
    }
  }, [pathname]);
  return (
    <>
      <div className="portfolio-container">
        <Parallax strength={-130} bgImage="/bg/birds.png">
          <Parallax
            strength={350}
            bgImage="/bg/yellowbg.png"
            className="portfolio-bg"
          />
           <div className="portfolio-content">
          <motion.h1
          className="cloud-title"
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
                      <motion.div className="portfolio-slide-img">
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
                                      onClick={() => getOverlay(page)}
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
                        <div className="portfolio-site-link">
                          <span>
                        {data.siteName}</span>
                          <Link to={data.link} target="_blank">
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
          <motion.div className="slide-progress-bar" >
            {[...Array(portfolioList.length)].map((data, number) => (
              <div key={number}>
                <motion.button
                  ref={ref2}
                  onClick={() => currentPageSet(number)}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inview ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: 0.8 + (number / 10) * 1.5 }}
                  key={number}
                  style={
                    currentPage === number
                      ? {
                          width: "50px",
                          height: "50px",
                          color: "#61cfff",
                          fontSize: "16px",
                          fontFamily: "SUITE-bold"
                        }
                      : {}
                  }
                >
                  {number + 1}
                </motion.button>
                <motion.hr
                className={`progress-line number${number}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inview ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: 0.8 + (number / 10) * 1.5 }}
                />
              </div>
            ))}
          </motion.div>
        </div>
        </Parallax>
      </div>
      <AnimatePresence>
        {overlay && (
          <motion.div
            className="overlay-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.svg
              className="close_btn"
              onClick={closeOverlay}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              whileHover={{ rotateZ: 90 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </motion.svg>
            <PortfolioDetail data={portfolioList} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
