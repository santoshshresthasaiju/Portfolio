import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo1.png';
function Navbar() {
  return (
    <nav className='bg-gray-800 text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-4 flex justify-center md:justify-between items-center'>
        <div className='flex items-center md:inline'>
          <img src={logo} alt="Logo" className="h-10 w-35 " />
        </div>  
        <ul className='flex space-x-4 text-white'>
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
        <div className="flex space-x-4">
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
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
