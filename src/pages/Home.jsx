import React from "react";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <>
      <Intro />
      <Skills/>
      <Portfolio />
      <Contact/>
      <ThemeToggle/>
    </>
  );
};

export default Home;
