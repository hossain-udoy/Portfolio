import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Intro from "../Intro/Intro";
import Portfolio from "../Portfolio/Portfolio";
import Project from "../Projects/Project";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Intro />

      <div>
        <h1 className="text-5xl font-bold text-center my-10">My Projects</h1>
        <Project />
      </div>
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
