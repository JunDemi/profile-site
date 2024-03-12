import React from "react";
import { Parallax } from "react-parallax";
import Footer from "./Footer";

const Contact = () => {
  const bg =
    "https://res.cloudinary.com/dgmgeotyk/image/upload/f_auto,q_auto/v1/Wings/swjcwybjg2adzimgjz0g";
  return (
    <Parallax
      className="contact-container"
      strength={-1000}
      bgImage={"https://res.cloudinary.com/dgmgeotyk/image/upload/f_auto,q_auto/v1/Wings/o0wyh5p9c1qvexvhrmtm"}
    >
        <div className="contact-section"></div>
        <Footer/>
    </Parallax>
  );
};

export default Contact;
