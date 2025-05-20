import React from 'react'
import { motion } from 'framer-motion';
import { HiOutlineGlobeAlt, HiServer  } from "react-icons/hi";

function Skills() {
  const frontend = [
  { name: 'React.js', percentage: 90 },
   {name:"Next.js", percentage: 80},
    {name:"TypeScript", percentage: 70},
  { name: 'JavaScript', percentage: 95 },
  { name: 'HTML/CSS', percentage: 98 },
  ];

  const backend = [
    {name:"Node.js", percentage: 85},
    {name:"Express", percentage: 88},
    {name:"Middleware", percentage: 80},
     {name:"RESTful APIs", percentage: 85},
      {name:"MongoDB", percentage: 85}
  ]
  return (
    <div id="skills" className='bg-slate-50 dark:bg-gray-900 w-full sm:h-[170vh] md:h-[110vh] pt-20 sm:px-16 md:px-14 lg:px-14'>
      {/* Title */}
      <div className='pb-16'>
      <div className='flex justify-center pb-10'>
        <h1 className=' text-center text-2xl font-bold border-b-4 border-blue-400 border-spacing-2'>My Skills</h1>
      </div>
        <p className='text-xl text-center '>Here are the technologies and skills I've acquired throughout my journey as a MERN Stack Developer.</p>
      </div>

      {/* skills */}
      <div className='flex items-center  md:flex-row lg:flex-row sm:flex-col px-2 md:px-32 gap-10 '>
        {/* frontend Development */}

      <div className='w-full px-2'>
        
      <div className="flex flex-col gap-1 p-6 bg-white dark:bg-gray-900 dark:text-white  rounded-2xl shadow-md">
        <div className=' flex flex-col gap-8 mb-4'>
          <div className='flex items-center gap-6'>
            <HiOutlineGlobeAlt className='text-4xl bg-blue-200 p-1 rounded-xl'/> 
          <h1 className=' text-2xl font-semibold'> Frontend Development</h1>
          </div>
        <p className='text-lg text-gray-800 dark:text-white'>Creating responsive and interactive user interfaces.</p>
        </div>

      {frontend.map((skill) => (
        <div key={skill.name} className="">
          <div className="flex justify-between font-semibold text-gray-700 dark:text-white mb-2">
            <p>{skill.name}</p>
            <p> {skill.percentage}%</p>
          </div>
          <div className=" bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
              initial={{ width: 0 }}
              animate={{ width: `${skill.percentage}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>
          <div className="text-center text-sm text-gray-500 mt-1">
           
          </div>
        </div>
      ))}
    </div>
      </div>

      {/* Backend development */}
      <div className='w-full px-2'>
        
      <div className="flex flex-col gap-1 p-6 bg-white dark:bg-gray-900 dark:text-white  rounded-2xl shadow-md">
        <div className=' flex flex-col gap-8 mb-4'>
          <div className='flex items-center gap-6'>
            <HiServer className='text-4xl bg-blue-200 p-1 rounded-xl'/>
            <h1 className=' text-2xl font-semibold'>Backend Development</h1>

          </div>
        <p className='text-lg text-gray-800 dark:text-white'>Building robust and scalable server applications.</p>
        </div>
      
      {backend.map((skill) => (
        <div key={skill.name} className="">
          <div className="flex justify-between font-semibold text-gray-700 dark:text-white mb-2">
            <p>{skill.name}</p>
            <p> {skill.percentage}%</p>
          </div>
          <div className=" bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
              initial={{ width: 0 }}
              animate={{ width: `${skill.percentage}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>
          <div className="text-center text-sm text-gray-500 mt-1">
           
          </div>
        </div>
      ))}
    </div>
      </div>

      </div>


    </div>
  )
}

export default Skills