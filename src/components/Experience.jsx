import React from 'react'
import { HiOutlineBriefcase, HiOutlineCalendar} from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";

function Experience() {
  const tools = ["React", "Node.js", "MongoDB", "Express", "TailwindCSS", "JWT"];

  return (
    <div id="experience" className='bg-slate-50 dark:bg-gray-900 w-full sm:h-[100vh] md:h-[100vh] pt-20'>
      {/* Title */}
      <div className='pb-16'>
      <div className='flex justify-center pb-10'>
        <h1 className=' text-center text-2xl font-bold border-b-4 border-blue-400 border-spacing-2'>Work Experience</h1>
      </div>
        <p className='text-xl text-center '>My professional journey and work experience in the tech industry.</p>
      </div>

      {/* experience */}
      <div className='flex items-center  md:flex-row lg:flex-row sm:flex-col px-2 md:px-32 gap-10 '>
        <div className='md:w-[50%] shadow-md rounded-2xl overflow-hidden p-4 flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold text-blue-500'>Web Developer Intern</h1>
          <p className='flex items-center gap-2 '><HiOutlineBriefcase /> CodSoft</p>

          <div className='flex gap-16 items-center'>
            <p className='flex items-center gap-2 '> <HiOutlineCalendar /> Apr 2025 - May 2025</p>
            <p className='flex items-center gap-1'><RxDotFilled />Remote</p>
          </div>

          <div className='mb-4'>
            <ul className="  dark:text-white text-gray-700">
            <li className="pl-4 relative">
                <span className="absolute left-0 top-1 text-xl">•</span>
                Contributed significantly to the design and development of full-stack web applications using the MERN stack
              </li>              
              <li className="pl-4 relative">
                <span className="absolute left-0 top-1 text-xl">•</span>
                 Played a key role in creating responsive user interfaces with React while building secure and scalable APIs using Node.js and Express.
              </li>
               <li className="pl-4 relative">
                <span className="absolute left-0 top-1 text-xl">•</span>
                 Gained hands-on experience with real-world projects, applying best practices in modern web development, database integration with MongoDB, and end-to-end deployment.
              </li>
            </ul>
          </div>

           <div className="flex flex-wrap gap-3 justify-start px-4">
                {tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>

        </div>
      </div>
      </div>
  )
}

export default Experience