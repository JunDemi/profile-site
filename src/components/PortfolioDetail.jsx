import { motion } from "framer-motion";
import React from "react";

const PortfolioDetail = (page) => {
  return (
    <motion.div className="portfolio-modal" 
    layoutId={`macbook${page.page}`}>
      <motion.img
        src="/bg/macbook.png"
        alt=""
      />
    </motion.div>
  );
};

export default PortfolioDetail;
