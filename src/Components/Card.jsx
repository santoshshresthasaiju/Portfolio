import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Cardimg from '../assets/card.jpg'
const Card = () => {
  return (
    <div className='bg-sky-200 px-8 md:px-16 lg:px-24 text-white text-center py-16'>
            <img src={Cardimg} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
            <h1 className='text-4xl font-bold'>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-sky-400'>Santosh Shrestha Saiju</span>
                , Backend Developer
            </h1>
            <p className='mt-4 text-lg text-rose-50'>
                I specialize in building modern and responsive web applications.      
            </p>
        <div className="flex space-x-4 py-4">
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
          <a href="https://www.linkedin.com/in/santosh-shrestha-saiju" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
        </div>
        <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>
    </div>
  )
}

export default Card
