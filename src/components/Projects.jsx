import React from "react";


const Projects = () => {
  return (
    <section id="projects" className="bg-gray-gradient min-h-screen">
      <div className="container">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Projects
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Project 1</h3>
            <p className="text-gray-700 mt-2">
              Description of the project. Technologies used: HTML, CSS,
              JavaScript, React.
            </p>
            <img
              src="path-to-project-screenshot.jpg"
              alt="Project 1"
              className="mt-4 rounded-lg"
            />
            <a href="project-link" className="mt-4 inline-block text-blue-600">
              View Live
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Project 2</h3>
            <p className="text-gray-700 mt-2">
              Description of the project. Technologies used: Node.js, Express,
              MongoDB.
            </p>
            <img
              src="path-to-project-screenshot.jpg"
              alt="Project 2"
              className="mt-4 rounded-lg"
            />
            <a href="project-link" className="mt-4 inline-block text-blue-600">
              View Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
