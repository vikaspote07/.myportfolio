const WorkExperience = () => {
  return (
    <section id="work-experience" className="bg-white min-h-screen bottom-0">
      <div className="container">
        <h2 className="text-4xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Front-End Developer 1</h3>
            <p className="text-gray-700">Raysonic technology - 3 month</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <span>
                <ul className="list-disc">
                  <li>
                    Built a library of reusable React components and implemented
                    Redux for state management, boosting development efficiency
                    by 40% and reducing debugging time by 50%.
                  </li>
                  <li>
                    Leveraged advanced tools like ChatGPT to streamline
                    workflows, enhance code quality, and introduce innovative
                    functionalities, driving superior project outcomes and
                    cutting-edge features
                  </li>
                </ul>
              </span>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Front-End Developer</h3>
            <p className="text-gray-700">
              Equinox Solution pvt - Sep-21 Dec-23
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li className="list-disc">
                Develope responsive, role-based management system using React,
                Redux, and Tailwind CSS/Material UI, featuring secure logins for
                admin, teachers, students, and parents, with an integrated
                review system
              </li>
              <li>
                Built CI/CD pipelines, decreasing release cycles by 39% and
                ensuring high-quality software delivery in collaboration with QA
                and cross-functional teams.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


export default WorkExperience;