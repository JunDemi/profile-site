import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioDetail = (props) => {
  const router = useNavigate();
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
      <motion.div
        className="portfolio-modal"
        layoutId={`macbook${props.pages}`}
      >
        <motion.img className="macbook-device" src="/bg/macbook.png" alt="" />
        {props.viewImg.map(
          (data, number) =>
            number === viewPage && (
              <img className="macbook-view" src={data} alt="" key={number} />
            )
        )}
        {/* <button
          className="prev_btn"
          onClick={() => prevView(props.viewImg.length)}
        >
          prev
        </button>
        <button
          className="next_btn"
          onClick={() => nextView(props.viewImg.length)}
        >
          next
        </button> */}
      </motion.div>
      <button className="close_btn" onClick={() => router("/")}>
        close
      </button>
      <div className="detail-slide-button">
        {props.viewImg.map((img, num) => (
          <img src={img} alt="" width="100px" />
        ))}
      </div>
    </>
  );
};

export default PortfolioDetail;
