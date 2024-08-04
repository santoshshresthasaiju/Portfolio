import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import icon from "../assets/element3.png";
const Contact = () => {
  return (
    <div className="bg-sky-200 py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="flex items-center px-3">
          <div>
            <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center text-blue-500">
              <img src={icon} />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="text-sky-500 text-4xl font-semibold">Contact Me</h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 mt-6">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-amber-500 to-sky-200 mb-4">
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-4">
              <FaEnvelope className="inline-block text-orange-300 mr-2"></FaEnvelope>
              <a
                href="mailto:santoshshrestha002@gmail.com"
                className="hover:underline"
              >
                santoshshrestha002@gmail.com
              </a>
            </div>
            <div className="mb-4 mt-4">
              <FaPhone className="inline-block text-orange-300 mr-2"></FaPhone>
              <span>+977-9804353544</span>
            </div>
            <div className="mb-4 mt-4">
              <FaMapMarkedAlt className="inline-block text-orange-300 mr-2"></FaMapMarkedAlt>
              <span>street, city, province, country</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-sky-100 border border-gray-600 focus:outline-none
                    focus:border-yellow-600"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-sky-100 border border-gray-600 focus:outline-none
                    focus:border-yellow-600"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 rounded bg-sky-100 border border-gray-600 focus:outline-none
                    focus:border-yellow-600"
                  rows="5"
                  placeholder="Enter your message"
                />
              </div>
              <button className="bg-gradient-to-r from-amber-500 to-yellow-100 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                {" "}
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
