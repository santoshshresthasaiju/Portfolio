import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/card.jpg";
const Footer = () => {
  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="order-2 lg:order-1 lg:w-1/2 p-4">
            <h2 className="text-white text-3xl font-bold">Reach Out to me!</h2>
            <p className="text-white mt-3">
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
            </p>
            <p className="text-white mt-3">
              Backend Developer | Python | Django - Crafting Reliable Backend
              Systems for Optimal Performance
            </p>
            <div className="flex items-center my-3 bg-white text-info shadow rounded p-2">
              <i className="ni ni-pin-3 text-info mr-2"></i>
              <span>Urlabari, Nepal</span>
            </div>
            <div className="flex space-x-2 mt-4">
              <button
                className="bg-white text-info rounded-full p-3 shadow-lg"
                aria-label="Email"
              >
                <FaEnvelope />
              </button>
              <a
                href="https://www.linkedin.com/in/santosh-shrestha-saiju"
                target="_blank"
                className="bg-white text-blue-600 rounded-full p-3 shadow-lg"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/santoshshresthasaiju"
                target="_blank"
                className="bg-white text-gray-800 rounded-full p-3 shadow-lg"
                aria-label="Github"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/santoshshersthasaiju"
                target="_blank"
                className="bg-white text-pink-500 rounded-full p-3 shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:w-1/2 p-4 flex justify-center">
            <img
              src={logo}
              alt=""
              className="rounded-full shadow-lg w-48 h-48 mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
