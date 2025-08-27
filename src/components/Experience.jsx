import React from 'react'
import { HiOutlineBriefcase, HiOutlineCalendar} from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";

function Experience() {
  const tools = ["Next.js", "Typescript", "React.js", "Node.js", "MongoDB", "Express", "TailwindCSS", "JWT"];

  return (
    <div id="experience" className='bg-blue-100 dark:bg-gray-800 w-full  pb-10 px-8 pt-20'>
      {/* Title */}
      <div className='pb-16'>
      <div className='flex justify-center pb-4'>
        <h1 className=' text-center text-2xl font-bold border-b-4 border-blue-400 border-spacing-2'>Work Experience</h1>
      </div>
        <p className='text-xl text-center '>My professional journey and work experience in the tech industry.</p>
      </div>

      {/* experience */}
      <div className='flex items-center md:flex-row lg:flex-row  px-2  sm:px-16 md:px-36 lg:px-36'>
        <div className='lg:w-[50%] bg-blue-50 shadow-md rounded-2xl overflow-hidden p-4 flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold text-blue-500'>Fullstack Developer</h1>
          <p className='flex items-center gap-2 '><HiOutlineBriefcase />Supreme IT Solutions</p>

          <div className='flex gap-16 items-center'>
            <p className='flex items-center gap-2 '> <HiOutlineCalendar /> April 2024 - August 2025</p>
            <p className='flex items-center gap-1'><RxDotFilled />Remote</p>
          </div>

          <div className='mb-4'>
            <ul className="list-disc ml-6  dark:text-white text-gray-700">
            <li className="">
                {/* <span className="absolute left-0 top-1 text-xl">•</span> */}
                Worked as a Full Stack Developer, contributing to multiple high-impact projects across diverse domains by designing and implementing scalable web applications with robust performance.
              </li>              
              <li className="">
                {/* <span className="absolute left-0 top-1 text-xl">•</span> */}
                Optimized backend systems, ensured seamless frontend–backend integration, and played a key role in adopting modern practices, improving CI/CD pipelines, and enhancing overall code quality.
              </li>
               <li className="">
                {/* <span className="absolute left-0 top-1 text-xl">•</span> */}
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
        <div className="h-[370px] border-l-2 border-blue-400 mx-4"></div> 
      </div>
      </div>
  )
}

export default Experience