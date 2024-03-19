import { motion } from "framer-motion";
import React, { useState } from "react";

const PortfolioDetail = (props) => {
  const [viewPage, set_viewPage] = useState(0);

  const nextView = (viewLength) => {
    set_viewPage((prev) => (prev === viewLength - 1 ? 0 : prev + 1));
  };
  const prevView = (viewLength) => {
    //이전 버튼 클릭
    set_viewPage((prev) => (prev === 0 ? viewLength - 1 : prev - 1)); //이전 숫자로 변경하여 페이지 넘김
  };
  return (
    <>
      <motion.div className="portfolio-modal">
        <motion.img className="macbook-device" src="/bg/macbook.png" alt="" />
        {props.viewImg.map(
          (data, number) =>
            number === viewPage && (
              <img className="macbook-view" src={data} alt="" key={number} 
              onClick={() => window.open(props.link, "_blank")}/>
            )
        )}
      </motion.div>
      <div className="detail-slide-button">
        <motion.button
          className="prev_btn"
          onClick={() => prevView(props.viewImg.length)}
          whileTap={{x: -7}}
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
        {props.viewImg.map((img, num) => (
          <motion.img
            src={img}
            alt=""
            onClick={() => set_viewPage(num)}
            animate={viewPage === num ? { width: "100px" } : { width: "60px" }}
          />
        ))}
        <motion.button
          className="next_btn"
          onClick={() => nextView(props.viewImg.length)}
          whileTap={{x: 7}}
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
    </>
  );
};

export default PortfolioDetail;
