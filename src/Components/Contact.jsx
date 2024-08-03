import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bg-sky-200 py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-sky-500 py-16">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="flex-1">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-amber-500 to-sky-200 mb-4">Let's Talk</h3>
                <p>I'm open to discussing web development projects or partnership opportunities.</p>
                <div className="mb-4 mt-4">
                    <FaEnvelope className='inline-block text-orange-300 mr-2'></FaEnvelope>
                    <a href="mailto:santoshshrestha002@gmail.com" className="hover:underline">
                        santoshshrestha002@gmail.com
                    </a>
                </div>
                <div className="mb-4 mt-4">
                    <FaPhone className='inline-block text-orange-300 mr-2'></FaPhone>
                    <span>+977-9804353544</span>
                </div>
                <div className="mb-4 mt-4">
                    <FaMapMarkedAlt className='inline-block text-orange-300 mr-2'></FaMapMarkedAlt>
                    <span>street, city, province, country</span>
                </div>
            </div>
            <div className="flex-1 w-full">
                <form action=""></form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
