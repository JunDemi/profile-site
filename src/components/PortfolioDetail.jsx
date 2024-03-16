import { motion } from "framer-motion";
import React from "react";
import { portfolioList } from "../Utils";

const PortfolioDetail = (page) => {
  return (
    <motion.div className="portfolio-modal" layoutId={`macbook${page.page}`}>
      <motion.img className="macbook-device" src="/bg/macbook.png" alt="" />
      {portfolioList[page].viewImg.map((src, number) => (
        <img key={number} className="macbook-view" src={src} alt="" />
      ))}
    </motion.div>
  );
};

export default PortfolioDetail;
