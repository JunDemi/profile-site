import { AnimatePresence, motion } from "framer-motion";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useImgLoadStatus } from "../hooks/useImgLoadStatus";

const PortfolioDetail = (props) => {
  const router = useNavigate();
  const viewRef = useRef(null);
  const isImgLoaded = useImgLoadStatus(
    viewRef,
    props.viewImg
  );
  
  console.log(isImgLoaded);
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
            {isImgLoaded && (
              <>
                <img
                  className="macbook-view"
                  src={props.viewImg[1]}
                  alt=""
                  ref={viewRef}
                />
                <img
                  className="macbook-view"
                  src={props.viewImg[2]}
                  alt=""
                  ref={viewRef}
                />
                <img
                  className="macbook-view"
                  src={props.viewImg[3]}
                  alt=""
                  ref={viewRef}
                />
                <img
                  className="macbook-view"
                  src={props.viewImg[4]}
                  alt=""
                  ref={viewRef}
                />
              </>
            )}
            {
              /* {props.viewImg ? (
           props.viewImg.map((data, number) => (
             <img className="macbook-view" src={data} alt="" key={number} />
           ))
         ) : (
           
         )} */
              //모달이 될 때 잔렉이 발생하는 원인: 여러개의 이미지를 불러오기 때문
            }
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PortfolioDetail;
