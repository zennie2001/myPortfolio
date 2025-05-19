import React from 'react'
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import profile from "../assets/profile.webp"

function Hero() {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 w-full sm:h-[150vh] md:h-screen '>
        <div className='flex items-center justify-around md:flex-row lg:flex-row sm:flex-col gap-20 pt-20'>
            {/* Introduction */}
            <div className='md:w-[45%] md:pt-10 flex flex-col gap-8'>
                <p className='text-2xl font-serif text-blue-500'>Hello, I'm Jenny Dev</p>
                <div>
                <h1 className='text-5xl font-semibold'>MERN</h1>
                <h1 className="indent-20 text-5xl font-semibold">Stack</h1>
                <h1 className="indent-40 text-5xl font-semibold">Developer</h1>
                </div>
                <p className='text-xl pt-5 text-gray-800 dark:text-white'>I build exceptional digital experiences with modern technologies. Specializing in creating responsive, user-friendly applications with clean and efficient code.</p>

                <div className='flex gap-6 '>
                    <button className='bg-blue-500 text-white  px-4 py-2 rounded-md'>View Projects</button>
                    <button className='border border-blue-500 px-4 py-2 rounded-md'>Contact Me</button>
                </div>

                <div className='flex gap-6 '>
                    <FiGithub className='text-2xl'/>
                    <SlSocialLinkedin className='text-2xl'  />

                </div>
            </div>

            {/* picture */}
            <div className='flex '>
             <div className="rounded-full  border-[20px] border-blue-300">
                <img src={profile}
                className="w-80 h-80 rounded-full border-[20px] border-blue-400"
                />
            </div>

            </div>
        </div>
    </div>
  )
}

export default Hero