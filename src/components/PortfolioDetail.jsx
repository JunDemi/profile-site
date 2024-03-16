import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

const PortfolioDetail = (props) => {
    const router = useNavigate();
  return (
        <AnimatePresence>
          <motion.div
            className="overlay-dark"
            initial={{ opacity: 0 }}
            animate={props.viewImg ? {opacity: 1} : {display: "none", opacity: 0}}
            exit={{ opacity: 0 }}
            onClick={() => router('/')}
          >
            <motion.div
              className="portfolio-modal"
              layoutId={`macbook${props.page}`}
            >
              <motion.img
                className="macbook-device"
                src="/bg/macbook.png"
                alt=""
              />
              {/* <img className="macbook-view" src={props.viewImg[0]} alt=""/> */}
              {props.viewImg.map((data, number) => (
                <img className="macbook-view" src={data} alt="" key={number} />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
  );
};

export default PortfolioDetail;
