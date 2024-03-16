import { motion } from "framer-motion";
import React from "react";
import { portfolioList } from "../Utils";

const PortfolioDetail = (page) => {
  return (
    <motion.div className="portfolio-modal" layoutId={`macbook${page.page}`}>
      <motion.img className="macbook-device" src="/bg/macbook.png" alt="" />
      <iframe className="macbook-view" title={portfolioList[page.page].link} frameborder="0" src={portfolioList[page.page].link}>로딩 불가 메세지</iframe>
    </motion.div>
  );
};

export default PortfolioDetail;
