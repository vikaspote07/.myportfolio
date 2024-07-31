import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience ";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import "./App.css"


function App() {
  return (
    <Router>
      <div className="flex app-container">
        <Sidebar />
        <div className="ml-64 w-full">
          <Element name="home">
            <Home />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="work-experience">
            <WorkExperience />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </div>
      </div>
    </Router>
  );
}

export default App;
