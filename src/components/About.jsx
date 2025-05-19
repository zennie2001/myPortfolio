import React from 'react'
import profile from "../assets/profile.webp"

function About() {
  return (
   <div className=' w-full sm:h-[200vh] md:h-[110vh] pt-20'>
    <div className='flex justify-center pb-16'>
      <h1 className='text-center text-2xl font-bold border-b-4 border-blue-400 border-spacing-2'>About Me</h1>

    </div>
        <div className='flex items-center  md:flex-row lg:flex-row sm:flex-col gap-10 '>

          {/* picture */}
          <div className=' md:w-[50%] lg:w-[50%] md:pl-32'>
            <img src={profile}
            className="w-[500px] h-[500px] rounded-3xl shadow-2xl shadow-blue-200   "
            />
          </div>

          <div className='md:w-[50%] lg:w-[50%] flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold '>I'm a <span className='text-blue-500'>MERN Stack Developer</span> with a passion for building digital experiences...</h2>
            <p>With over 1.5 years of experience in web development, I specialize in building responsive, user-centric applications across the full stack — from crafting smooth front-end interfaces to developing stable and scalable back-end systems.</p>
            <p>I'm particularly drawn to working with emerging technologies like AI, machine learning, and deep learning. I enjoy solving real problems with clean, efficient code and constantly explore new tools and best practices to stay ahead in the field.</p>
            
            <div>
              <p className='text-lg font-semibold'>Personal Information:</p>
              <div className='flex flex-col gap-1 pt-2 pb-6'>
              <p><span className='font-semibold'>Name:</span> Jenny Dev</p>
              <p><span className='font-semibold'>Email:</span> jennydev2001@gmail.com</p>
              <p><span className='font-semibold'>Location:</span> Kathmandu, Nepal</p>
              <p><span className='font-semibold'>Phone:</span> +977-9844888976</p>
              </div>
              <button className='px-4 py-2 border bg-blue-500 text-white rounded-md'>My Resume</button>

            </div>

          </div>




        </div>
    </div>
  )
}

export default About