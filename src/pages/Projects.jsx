import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../componant/ProjectCard";
import ecomm from "../assets/ecomm-DdlHDmKf.png";
import portfolio from "../assets/portfolio-DnU3xDbl.png";
import taskimg from "../assets/task manegement-DUwOO-QC.png";
import weather from "../assets/weather.png";
import chat from "../assets/livechat.png"

const Projects = () => {
const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack online shopping platform with React and Node.js",
    imageUrl: ecomm,
    projectLink: "https://shop-lee.vercel.app",
    isComplete: true,
  },
  {
    title: "portfolio web page",
    description: "design peronal porfolio web app",
    imageUrl: portfolio,
    projectLink:"https://vikaspoteportfolio-vikas-potes-projects.vercel.app",
    isComplete: true,
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting app using OpenWeatherMap API",
    imageUrl: weather,
    projectLink: "https://weather-app.example.com",
    isComplete: false,
  },
  {
    title: "Task Manager",
    description: "A productivity app for managing daily tasks and projects",
    imageUrl: taskimg,
    projectLink: "https://task-manager.example.com",
    isComplete: false,
  },
  {
    title: "Live chat",
    description: "Real-time chat application",
    imageUrl: chat,
    projectLink: "https://weather-app.example.com",
    isComplete: false,
  },
];


  return (
    <section
      id="projects"
      className="container mx-auto p-6 bg-gray-900 min-h-screen"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
