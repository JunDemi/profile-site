import { motion } from "framer-motion";
import React from "react";
import { portfolioList } from "../Utils";

const PortfolioDetail = (page) => {
  return (
    <motion.div className="portfolio-modal" layoutId={`macbook${page.page}`}>
      <motion.img className="macbook-device" src="/bg/macbook.png" alt="" />
        <img className="macbook-view" src={portfolioList[page.page].viewImg[0]} alt="" />
    </motion.div>
  );
};

export default PortfolioDetail;
