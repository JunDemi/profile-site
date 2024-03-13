import React from "react";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Intro />
      <Skills/>
      <Portfolio />
      <Contact/>
    </>
  );
};

export default Home;
