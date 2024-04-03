import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { themeState } from "../atom";

const pageVar = {
  entry: {
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0.5,
    },
  },
  center: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.5,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
const viewVar = {
  entry: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  center: {
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
const PortfolioDetail = (prop) => {
  const [themeMode, ] = useRecoilState(themeState);
  const router = useNavigate();
  const pathname = useLocation().pathname.replace("/", "");
  const [viewPage, set_viewPage] = useState(0);
  const nextPage = (pageLength) => {
    set_viewPage(0);
    router(
      `/${Number(pathname) === pageLength - 1 ? 0 : Number(pathname) + 1}`
    );
  };
  const prevPage = (pageLength) => {
    set_viewPage(0); //이전 숫자로 변경하여 페이지 넘김
    router(
      `/${Number(pathname) === 0 ? pageLength - 1 : Number(pathname) - 1}`
    );
  };

  const nextView = (viewLength) => {
    set_viewPage((prev) => (prev === viewLength - 1 ? 0 : prev + 1));
  };
  const prevView = (viewLength) => {
    //이전 버튼 클릭
    set_viewPage((prev) => (prev === 0 ? viewLength - 1 : prev - 1)); //이전 숫자로 변경하여 페이지 넘김
  };
  return (
    <>
      {pathname ? (
        <>
          <motion.button
            className="detail-page-btn prev"
            onClick={() => prevPage(prop.data.length)}
            whileHover={{x: -3}}
          >
            <svg
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
          </motion.button>
          <motion.button
            className="detail-page-btn next"
            onClick={() => nextPage(prop.data.length)}
            whileHover={{x: 3}}
          >
            <svg
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
          </motion.button>
          <div className="detail-current-page">
            <p>{Number(pathname) + 1}</p>
            <hr/>
            <p>{prop.data.length}</p>
          </div>
          <AnimatePresence mode="sync">
            {prop.data.map(
              (pageData, pageNumber) =>
                pageNumber === Number(pathname) && (
                  <motion.div
                    className="modal-container"
                    key={pageNumber}
                    variants={pageVar}
                    initial="entry"
                    animate="center"
                    exit="hide"
                  >
                    <motion.div className="portfolio-modal">
                      <motion.img
                        className="macbook-device"
                        src={`/bg/${themeMode ? "dark" : "light"}/macbook.png`}
                        alt=""
                      />
                      <AnimatePresence mode="sync">
                        {pageData.viewImg.map(
                          (data, number) =>
                            number === viewPage && (
                              <motion.img
                                className="macbook-view"
                                src={data}
                                alt=""
                                key={number}
                                onClick={() =>
                                  window.open(pageData.link, "_blank")
                                }
                                variants={viewVar}
                                initial="entry"
                                animate="center"
                                exit="hide"
                              />
                            )
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <div className="detail-slide-button">
                      <motion.button
                        className="prev_btn"
                        onClick={() => prevView(pageData.viewImg.length)}
                        whileTap={{ x: -7 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                          />
                        </svg>
                      </motion.button>
                      {pageData.viewImg.map((img, num) => (
                        <motion.img
                          src={img}
                          key={num}
                          alt=""
                          onClick={() => set_viewPage(num)}
                          animate={
                            viewPage === num
                              ? { width: "100px", border: "2px solid #ffd500" }
                              : { width: "60px", border: "2px solid var(--color-background-inherit)" }
                          }
                        />
                      ))}
                      <motion.button
                        className="next_btn"
                        onClick={() => nextView(pageData.viewImg.length)}
                        whileTap={{ x: 7 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </>
      ) : (
        <img src="/bg/full.png" alt="" width="100px" />
      )}
    </>
  );
};

export default PortfolioDetail;
