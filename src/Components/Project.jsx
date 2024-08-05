import React from "react";
import mmsedashboard from "../assets/mmsedashboard.png";
import smsdashboard from "../assets/smsdashboard.png";
import portfolio from "../assets/portfolio.png";
import icon from "../assets/element1.png";
import diabetes from "../assets/diabetes.png";

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
    github: "",
  },
  {
    name: "DiabetesPrediction",
    technologies: "Django and ML",
    image: diabetes,
    github: "https://github.com/santoshshresthasaiju/Final-Year-Project.git",
  },
];

const Project = () => {
  return (
    <div className="bg-sky-200 py-20" id="projects">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="flex items-center px-3">
          <div>
            <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center text-blue-500">
              <img src={icon} />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="text-sky-500 text-4xl font-semibold">Project</h4>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
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
