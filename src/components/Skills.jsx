import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-700 min-h-screen">
      <div className="container  ">
        <h2 className="text-4xl text-white font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mt-20">
          <span className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-lg shadow-lg">
            HTML
          </span>
          <span className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-lg shadow-lg">
            CSS
          </span>
          <span className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-lg shadow-lg">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-lg shadow-lg">
            React
          </span>
          <span className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-lg shadow-lg">
            Node.js
          </span>
          <span className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-lg shadow-lg">
            Tailwind CSS
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
