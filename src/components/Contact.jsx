import React from "react";
import { Parallax } from "react-parallax";
import Footer from "./Footer";

const Contact = () => {
  return (
    <Parallax
      strength={300}
      bgImage={"/bg/sky.jpeg"}
    >
        <div className="contact-section">
          <div className="bg-stars"/>
        </div>
    </Parallax>
  );
};

export default Contact;
