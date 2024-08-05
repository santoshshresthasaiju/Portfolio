import React from "react";
import emoji from "react-easy-emoji";
import { Icon } from "@iconify/react";
import Aboutimg from "../assets/aboutcard.gif";

const About = () => {
  const skillsSection = {
    title: "What I do",
    subTitle: "BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH FIELD",
    data: [
      {
        title: "Backend Development",
        skills: [
          emoji("⚡Building RESTful APIs in Django & Django REST Framework"),
        ],
        softwareSkills: [
          {
            skillName: "Python",
            iconifyTag: "logos:python",
          },
          {
            skillName: "Django",
            iconifyTag: "vscode-icons:file-type-django",
          },
          {
            skillName: "JavaScript",
            iconifyTag: "logos:javascript",
          },
          {
            skillName: "Reactjs",
            iconifyTag: "vscode-icons:file-type-reactjs",
          },
          {
            skillName: "Github",
            iconifyTag: "akar-icons:github-fill",
          },
          {
            skillName: "Docker",
            iconifyTag: "logos:docker-icon",
          },
        ],
      },
    ],
  };

  return (
    <div className="text-gray-500 py-20" id="about">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <h2 className="text-4xl font-bold text-center mb-4">
          {skillsSection.title}
        </h2>
        <h3 className="text-xl text-center mb-8 text-gray-800">
          {skillsSection.subTitle}
        </h3>
        {skillsSection.data.map((skill, index) => (
          <div key={index} className="skill mb-8">
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
              <img
                src={Aboutimg}
                alt="About"
                className="w-auto h-auto rounded object-cover mb-8 md:mb-0"
              />
              <div>
                <h4 className="text-2xl font-semibold mb-4">{skill.title}</h4>
                <div className="list-disc list-inside mb-4">
                  {skill.skills.map((skillItem, idx) => (
                    <div key={idx} className="mb-2 p-4 md:p-6 lg:p-8">
                      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                        I am a passionate Backend Developer with a focus on
                        building modern and responsive web applications. With a
                        strong foundation in Python and Django Framework, I am
                        strongly interested in learning new technologies and
                        implementing them in my projects. I'm a self-motivated
                        and hardworking individual who is always ready to learn
                        new things and work in a team.
                      </p>
                      <div className="mt-2">{skillItem}</div>
                    </div>
                  ))}
                </div>
                <div className="software-skills flex flex-wrap gap-4">
                  {skill.softwareSkills.map((softwareSkill, id) => (
                    <div
                      key={id}
                      className="software-skill flex items-center space-x-2 py-8"
                    >
                      <div className="rounded-full bg-gray-200 p-3 flex items-center justify-center">
                        <Icon
                          icon={softwareSkill.iconifyTag}
                          className="text-2xl"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
