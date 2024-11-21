import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo1.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-gray-800 text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 sticky top-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-gray-800 shadow-lg' : 'bg-sky-300'}`}>
      <div className="container py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto transition-transform transform hover:scale-110 hover:opacity-80" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        <ul className="hidden md:flex space-x-4">
          <li><a href="#home" className="hover:text-gray-500">Home</a></li>
          <li><a href="#about" className="hover:text-gray-500">About</a></li>
          <li><a href="#services" className="hover:text-gray-500">Services</a></li>
          <li><a href="#projects" className="hover:text-gray-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/santoshshresthasaiju" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.instagram.com/santoshshersthasaiju" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/santosh-shrestha-saiju" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li><a href="#home" className="hover:text-gray-500">Home</a></li>
          <li><a href="#about" className="hover:text-gray-500">About</a></li>
          <li><a href="#services" className="hover:text-gray-500">Services</a></li>
          <li><a href="#projects" className="hover:text-gray-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
        </ul>
        <div className="flex justify-center space-x-4 py-4">
          <a href="https://github.com/santoshshresthasaiju" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.instagram.com/santoshshersthasaiju" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/santosh-shrestha-saiju" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
