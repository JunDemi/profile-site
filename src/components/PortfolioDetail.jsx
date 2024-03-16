import { motion } from "framer-motion";
import React from "react";

const PortfolioDetail = (page) => {
  return (
    <motion.div className="portfolio-modal" 
    layoutId={`macbook${page.page}`}>
      <motion.img
      className="macbook-device"
        src="/bg/macbook.png"
        alt=""
      />
      <div className="macbook-view">
      <img
       src="/the-market/themarket1.png" alt=""/>
      </div>
    </motion.div>
  );
};

export default PortfolioDetail;
