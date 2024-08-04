import React, { useState } from "react";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Cardimg from "../assets/card.jpg";

const Card = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className="relative bg-sky-200 text-white text-center py-20"
      id="home"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <img
          src={Cardimg}
          alt=""
          className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-4xl font-bold">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-sky-400">
            Santosh Shrestha Saiju
          </span>
          , Backend Developer
        </h1>
        <p className="mt-4 text-lg text-rose-50">
          I specialize in building modern and responsive web applications.
        </p>
        <div className="flex space-x-4 py-4 mt-16">
          <a
            href="https://github.com/santoshshresthasaiju"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 rounded-full p-3 inline-block text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            href="https://www.instagram.com/santoshshersthasaiju"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-insta-gradient rounded-full p-3 inline-block text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/santosh-shrestha-saiju"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 rounded-full p-3 inline-block text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
        </div>
        <div className="flex justify-center text-xl text-center mb-12 space-x-4">
          <button
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            onClick={handleOpenModal}
          >
            Resume
          </button>
        </div>
        <Modal show={showModal} onClose={handleCloseModal} />
        {/* <div className="absolute button-0 left-0 w-full h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bae6fd" fillOpacity="1" d="M0,288L80,266.7C160,245,320,203,480,197.3C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div> */}
      </div>
    </div>
  );
};

export default Card;
