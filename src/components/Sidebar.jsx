import React from "react";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0  h-full bg-gray-800 text-white w-64 hidden md:flex flex-col items-center justify-center sidebar">
      <h1 className="text-3xl font-bold mb-8">My Portfolio</h1>
      <nav className="space-y-4">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center text-xl p-2 hover:bg-gray-700 rounded cursor-pointer"
        >
          <FaHome className="mr-2" /> Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center text-xl p-2 hover:bg-gray-700 rounded cursor-pointer"
        >
          <FaUser className="mr-2" /> About Me
        </Link>
        <Link
          to="work-experience"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center text-xl p-2 hover:bg-gray-700 rounded cursor-pointer"
        >
          <FaBriefcase className="mr-2" /> Work Experience
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center text-xl p-2 hover:bg-gray-700 rounded cursor-pointer"
        >
          <FaProjectDiagram className="mr-2" /> Projects
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center text-xl p-2 hover:bg-gray-700 rounded cursor-pointer"
        >
          <FaCode className="mr-2" /> Skills
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center text-xl p-2 hover:bg-gray-700 rounded cursor-pointer"
        >
          <FaEnvelope className="mr-2" /> Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
