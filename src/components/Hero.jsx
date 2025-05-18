import React from 'react'
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

function Hero() {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 w-full h-screen '>
        <div className='flex sm:flex-col pt-20'>
            {/* Introduction */}
            <div className='flex flex-col gap-8'>
                <p className='text-2xl font-serif text-blue-500'>Hello, I'm Jenny Dev</p>
                <div>
                <h1 className='text-5xl'>Full</h1>
                <h1 className="indent-16 text-5xl">Stack</h1>
                <h1 className="indent-36 text-5xl">Developer</h1>
                </div>
                <p className='text-gray-800 dark:text-white'>I build exceptional digital experiences with modern technologies. Specializing in creating responsive, user-friendly applications with clean and efficient code.</p>

                <div className='flex gap-6 px-4'>
                    <button className='bg-blue-500 text-white  px-4 py-2 rounded-md'>View Projects</button>
                    <button className='border border-blue-500 px-4 py-2 rounded-md'>Contact Me</button>
                </div>

                <div className='flex gap-6 px-5'>
                    <FiGithub />
                    <SlSocialLinkedin />

                </div>
            </div>

            {/* picture */}
            <div>
                
            </div>

        </div>
    </div>
  )
}

export default Hero