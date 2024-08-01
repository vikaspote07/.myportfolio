import React from "react";
import { motion } from "framer-motion";
import Projects from "../pages/Projects";
import WorkExperience from "../pages/WorkExperience ";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import PageWrapper from "./PageWrapper";
import About from "../pages/About";
import AnimatedSection from "./AnimatedSection"; 


const Layout = () => {
  return (
    <div>
     
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <WorkExperience />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </div>
  );
};

export default Layout;
