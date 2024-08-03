import React from 'react'
import Aboutimg from '../assets/aboutcard.gif'

const Service = () => {
  return (
<div className='text-gray-500 py-24' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center text-gray-800 px-8'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={Aboutimg} alt="" 
            className='w-120 h-100 rounded object-cover mb-8 md:mb'/>
            <p>
                I am a passionate Backend Developer with a fous on building modern and responsive web applications. With a strong foundation in Python, Django Framework. I am strongly interested in learning new technologies 
                and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.
            </p>
        </div>
      </div>
    </div>

  )
}

export default Service
