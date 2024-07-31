import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-yellow-gradient text-white flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-6">I'm a Front-End Developer</p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg text-lg shadow-lg"
      >
        View My Work
      </a>
    </section>
  );
};

export default Home;
