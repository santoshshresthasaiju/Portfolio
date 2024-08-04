import React from "react";
import icon from "../assets/element.png";
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Developing mordern and responsive applications.",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Developing robust server-side and databases.",
  },
  {
    id: 3,
    title: "Graphic Designer",
    description:
      "Designing visuals such as infographics, logos, and social media graphics.",
  },
  {
    id: 4,
    title: "Videographers",
    description:
      "Creating videos for platforms like Youtube, Social media or corporate use.",
  },
];
const Service = () => {
  return (
    <div className="bg-sky-200 py-20" id="services">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="flex items-center px-3">
          <div>
            <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center text-blue-500">
              <img src={icon} />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="text-sky-500 text-4xl font-semibold">Service</h4>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {services.map((Service) => (
            <div
              key={Service.id}
              className="bg-cyan-50 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform 
            duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-200 to-blue-400"
              >
                {Service.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-cyan-200 to-blue-500"
              >
                {Service.title}
              </h3>
              <p className="mt-2 text-gray-500">{Service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-sky-300 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
