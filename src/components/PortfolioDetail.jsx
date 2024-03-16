import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioDetail = (props) => {
  const router = useNavigate();
  const [viewPage, set_viewPage] = useState(0);
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="overlay-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => router("/")}
        >
          <motion.div
            className="portfolio-modal"
            layoutId={`macbook${props.pages}`}
          >
            <motion.img
              className="macbook-device"
              src="/bg/macbook.png"
              alt=""
            />
            {props.viewImg.map(
              (data, number) =>
                number === props.pages && (
                  <img
                    className="macbook-view"
                    src={data}
                    alt=""
                    key={number}
                  />
                )
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PortfolioDetail;
