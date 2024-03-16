import { motion } from "framer-motion";
import React from "react";
import { portfolioList } from "../Utils";
import { useLocation } from "react-router-dom";

const PortfolioModal = () => {
    const pathname = useLocation().pathname.replace("/", "");
    return( 
        <motion.div className="portfolio-modal" layoutId={`macbook${pathname}`}>
        <motion.img className="macbook-device" src="/bg/macbook.png" alt="" />
          <img className="macbook-view" src={portfolioList[pathname].viewImg[0]} alt="" />
      </motion.div>
    );
}

export default PortfolioModal;