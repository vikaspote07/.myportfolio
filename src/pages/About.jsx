import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 min-h-screen flex items-center justify-center py-16 px-4"
    >
      <motion.div
        className="containers"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
              Hello, I'm VIKAS POTE
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Front-End Developer
            </h2>
            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              With over two years of experience, I specialize in creating
              interactive and user-friendly web applications.
            </p>
            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              My expertise includes:
            </p>
            <ul className="list-none space-y-2 mb-6">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "React",
                "Tailwind CSS",
              ].map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="inline-block bg-gray-800 text-green-400 px-3 py-1 rounded-full mr-2 mb-2 shadow-lg"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
            <p className="text-lg mb-6 text-gray-300 leading-relaxed border-l-4 border-green-500 pl-4 bg-gray-800 rounded-lg">
              I am passionate about building clean, efficient code and creating
              delightful user experiences. In addition to my technical skills, I
              am always eager to learn new technologies and adapt to the latest
              trends in web development.
            </p>
            <p className="text-lg mb-6 text-gray-300 leading-relaxed border-l-4 border-green-500 pl-4 bg-gray-800 rounded-lg">
              Whether you’re looking for a dedicated developer for a new project
              or need help with an existing one, feel free to reach out. I am
              always open to new opportunities and collaborations.
            </p>
            <Link to={"/contact-me"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 border-lime-500 transition-colors duration-300"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={profile}
              alt="Profile"
              className="w-64 h-64 rounded-full shadow-lg border-4 border-green-400"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
