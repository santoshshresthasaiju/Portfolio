import React from "react";
import mmsedashboard from "../assets/mmsedashboard.png";
import smsdashboard from "../assets/smsdashboard.png";
import portfolio from "../assets/portfolio.png"

const projects = [
  {
    name: "Portfolio",
    technologies: "React",
    image: portfolio,
    github: "https://github.com/santoshshresthasaiju/Portfolio.git",
  },
  {
    name: "MMSE",
    technologies: "Django and React",
    image: mmsedashboard,
    github: "https://github.com/santoshshresthasaiju/BMC_IICQuest.git",
  },
  {
    name: "SMS",
    technologies: "Django",
    image: smsdashboard,
    github: "https://github.com/Prooey/simis.git",
  },
];

const Project = () => {
  return (
    <div className="bg-sky-200 py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-sky-500 py-16">
         My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-cyan-300 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
