import React from "react";
import icon from "../assets/element2.png"

const eduInfo = [
  {
    schoolName: "Birendra Memorial College(Tribhuwan University)",
    subHeader: "Bachelor of Science in Computer Science and Information Technology(BSc. CSIT)",
    duration: "2019 - 2024",
    desc: "", // Description can be added here if needed
    grade: "",
    descBullets: [], // Array of Strings for bullet points, if applicable
  },
];

const EducationCard = () => {
  // Destructure the first item from the eduInfo array
  const { schoolName, subHeader, duration, desc, grade, descBullets } =
    eduInfo[0];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-0 left-0 w-full h-auto z-[-1]"
      >
        <path
          fill="#a2d9ff"
          fillOpacity="1"
          d="M0,224L120,224C240,224,480,224,720,202.7C960,181,1200,139,1320,117.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <div className="text-gray-500 py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex items-center px-3">
            <div>
              <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center text-blue-500">
                <img src={icon} />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="text-sky-500 text-4xl font-semibold">Education</h4>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <div className="bg-white p-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col">
                    <h5 className="text-blue-600 text-xl font-semibold">
                      {schoolName}
                    </h5>
                    <h6 className="text-gray-800 text-lg">{subHeader}</h6>
                    <div className="flex space-x-2 mt-2">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {duration}
                      </span>
                      {grade && (
                        <span className="bg-blue-500 text-white text-sm font-medium px-2.5 py-0.5 rounded">
                          {grade}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 mt-3">{desc}</p>
                    {descBullets && descBullets.length > 0 && (
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        {descBullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
