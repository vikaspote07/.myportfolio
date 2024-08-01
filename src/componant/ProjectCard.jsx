import React from "react";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa"; // Importing a lock icon from react-icons

const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectLink,
  isComplete,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-green-400 transition-all duration-300 ease-in-out relative"
    >
      {!isComplete && (
        <div className="absolute top-0 left-0 bg-gray-800 p-2 rounded-br-lg text-white flex items-center space-x-2">
          <FaLock className="text-red-500" />
          <span>Project not completed yet</span>
        </div>
      )}
      <img
        src={imageUrl}
        // alt={title}
        className={`w-full h-48 object-cover transition-transform duration-300 ${
          isComplete ? "hover:scale-105" : "opacity-60"
        }`}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        {isComplete ? (
          <motion.a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.a>
        ) : (
          <button className="inline-block bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg cursor-not-allowed">
            Coming Soon
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
