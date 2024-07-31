import React from "react";
import profile from "../assets/profile/profile.png"

const About = () => {
  return (
    <section
      id="about"
      className="bg-neutral-700 flex  items-center justify-center min-h-screen"
    >
      <div>
        <h2 className="text-4xl font-bold mb-4 text-white justify-center">
          <h3> About Me</h3>
        </h2>
        <p className="text-lg text-center max-w-prose text-white animate-fadeInUp">
          I'm V.P a passionate front-end developer with over two years of experience
          in creating interactive and user-friendly web applications. My
          expertise includes <span className="font-bold">HTML</span>,{" "}
          <span className="font-bold">CSS</span>,{" "}
          <span className="font-bold">JavaScript</span>,{" "}
          <span className="font-bold">Node.js</span>,{" "}
          <span className="font-bold">React</span>, and{" "}
          <span className="font-bold">Tailwind CSS</span>.
        </p>
      </div>
      <div className="image">
        <img
          src={profile}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 shadow-lg z-1"
        />
      </div>
    </section>
  );
};

export default About;
