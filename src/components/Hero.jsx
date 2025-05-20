import React from 'react'
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import profile from "../assets/profile.webp"
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div id="home" className=' bg-slate-50 dark:bg-gray-900 w-full sm:h-[150vh] md:h-screen '>
        <div className='flex items-center justify-around md:flex-row lg:flex-row sm:flex-col gap-20 pt-20'>
            {/*  Animated Introduction Section */}
            <motion.div className='md:w-[45%] md:pt-10 flex flex-col gap-8'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}>
                <p className='text-2xl font-serif text-blue-500'>Hello, I'm Jenny Dev</p>
                <div>
                <h1 className='text-5xl font-semibold'>MERN</h1>
                <h1 className="indent-20 text-5xl font-semibold">Stack</h1>
                <h1 className="indent-40 text-5xl font-semibold">Developer</h1>
                </div>
                <p className='text-xl pt-5 text-gray-800 dark:text-white'>I build exceptional digital experiences with modern technologies. Specializing in creating responsive, user-friendly applications with clean and efficient code.</p>

                <div className='flex gap-6 '>
                    <a href='#projects'>
                    <button className='bg-blue-500 text-white  px-4 py-2 rounded-md'>View Projects</button>
                    </a>
                    <a href='#footer'>
                    <button className='border border-blue-500 px-4 py-2 rounded-md'>Contact Me</button>
                    </a>
                </div>

                <div className='flex gap-6 '>
                    <a href='https://github.com/zennie2001' target="_blank" rel="noopener noreferrer">
                    <FiGithub className='text-2xl'/>
                    </a>
                    <a href='' target="_blank" rel="noopener noreferrer">
                    <SlSocialLinkedin className='text-2xl'  />
                    </a>

                </div>
            </motion.div>

            {/* Animated Profile Picture Section */}
            <motion.div className='flex '
               initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "anticipate", delay: 0.3 }}>
             <div className="rounded-full  border-[20px] border-blue-300">
                <img src={profile}
                className="w-80 h-80 rounded-full border-[20px] border-blue-400"
                />
            </div>

            </motion.div>
        </div>
    </div>
  )
}

export default Hero