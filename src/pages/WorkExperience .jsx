import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Equinox IT Solution pvt",
      role: "Frontend Developer",
      duration: "Sep 2021 - Dec 2023",
      description: [
        "Built a responsive management system using React, Redux, and Tailwind CSS/Material UI, with secure logins for admins, teachers, students, and parents, plus a review system.",
        "Converted a React class component to a functional component with hooks to make the code easier to read and maintain. Used Redux for state management, improving the app's performance and cutting load time by 47%.",
        "Worked on existing React projects, adding new features based on business needs. Made sure everything fit together well and improved the user experience, leading to happier clients and smoother projects.",
      ],
    },
    {
      company: "Raysonic Technologies",
      role: "Freelance Web Developer",
      duration: "mar-24 jun-24",
      description: [
        "Led the development of an internal project from scratch using Bootstrap and Material-UI, creating a responsive, visually appealing interface.",
        "Built a library of reusable React components and implemented Redux for state management, boosting development efficiency by 40% and reducing debugging time by 50%.",
        "Leveraged advanced tools like ChatGPT to streamline workflows, enhance code quality, and introduce innovative functionalities, driving superior project outcomes and cutting-edge features.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="container mx-auto p-6 bg-black min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        Work Experience
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-lg w-full md:w-2/5 hover:border-green-400 transition-all duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {experience.company}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {experience.role} | {experience.duration}
            </p>
            <div className="text-gray-300">
              {experience.description.map((item, idx) => (
                <p key={idx} className="mb-4">
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
