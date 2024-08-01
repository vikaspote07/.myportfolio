import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./Header";
import About from "../pages/About";
// import Projects from "./pages/Projects";
import Projects from "../pages/Projects";
import WorkExperience from "../pages/WorkExperience ";
// import WorkExperience from "./pages/WorkExperience";
// import Skills from "./pages/Skills";
import Skills from "../pages/Skills";
// import Contact from "./pages/Contact";
import Contact from "../pages/Contact";
import PageWrapper from "./PageWrapper";
import "../App.css";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/project"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/experiance"
          element={
            <PageWrapper>
              <WorkExperience />
            </PageWrapper>
          }
        />
        <Route
          path="/skills"
          element={
            <PageWrapper>
              <Skills />
            </PageWrapper>
          }
        />
        <Route
          path="/contact-me"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
