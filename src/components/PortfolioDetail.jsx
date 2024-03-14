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
      <img
      className="macbook-view"
       src="/the-market/themarket1.png" alt=""/>
    </motion.div>
  );
};

export default PortfolioDetail;
