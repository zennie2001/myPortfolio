import React, { useState } from 'react'
import { LuGithub } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import projectData from '../data/projectData';

function Projects() {
   const [selectedProject, setSelectedProject] = useState(null);
   const [activeTag, setActiveTag] = useState("All");

  const tags = ["All", "Full Stack", "Next.js", "React", "Node.js", "MongoDB", "API"];


   const filteredProjects = activeTag === "All"
    ? projectData
    : projectData.filter(project => project.tags.includes(activeTag));



  return (
   <div id="projects" className=' w-full sm:pb-10 md:h-[190vh] pt-20 sm:px-16 md:px-14 lg:px-14'>
      {/* Title */}
      <div className='pb-16'>
      <div className='flex justify-center pb-10'>
        <h1 className=' text-center text-2xl font-bold border-b-4 border-blue-400 border-spacing-2'>My Projects</h1>
      </div>
        <p className='text-xl text-center '>Here's a collection of my recent projects, showcasing my skills and experience throughout my journey.</p>
      </div>

      {/* Filter Badges */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1 rounded-full text-sm font-medium border ${
              activeTag === tag
                ? "bg-blue-500 text-white"
                : "bg-gray-50 text-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 dark:border-blue-50 md:grid-cols-3 gap-8 md:px-24">
        {filteredProjects.map((img, index) => (
          <div key={index} className=" rounded-lg shadow-md overflow-hidden pb-4">
            <div className="relative group overflow-hidden">
              <img
                src={img.url}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-2 left-2 text-gray-100  text-lg font-semibold px-2 py-1 rounded">
                {img.title}
              </div>
            </div> 
            
            <hr/>
            {/* Image description */}
            <div className="p-4  text-gray-700 dark:text-white text-lg">
              {img.description}
             
            </div>

              {/* tools used */}
             <div className="flex flex-wrap gap-2 justify-start px-4">
                {img.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* View detils */}
              <div className='p-4 flex justify-between'>
                <p  onClick={() => setSelectedProject(img)} className='text-xl text-blue-500 cursor-pointer'>View Details</p>
                <div className='flex gap-4'>
                  <a href={img.github} target="_blank" rel="noopener noreferrer">
                    <LuGithub className='text-xl cursor-pointer text-gray-700 hover:text-black dark:text-white' />
                  </a>
                  <a href={img.live} target="_blank" rel="noopener noreferrer">
                    <LuExternalLink className='text-xl cursor-pointer text-gray-700 hover:text-black dark:text-white' />
                  </a>
                </div>

              </div>


          </div>
        ))}
      </div>






      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-3xl p-6 relative mx-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-white  hover:text-black"
              onClick={() => setSelectedProject(null)}
            >
              <IoClose />
            </button>

            {/* Modal Content */}
            <img
              src={selectedProject.url}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            /><hr/>

            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-700 dark:text-white mb-4">{selectedProject.description}</p>

            {/* Tools */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {selectedProject.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold">Features:</h3>
              <ul className="list-disc list-inside dark:text-white text-gray-700">
                {selectedProject.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className='flex gap-8 pt-8'>
              
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
              <button className='flex items-center gap-4 text-lg bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 ' ><LuGithub/> View Code </button></a>

              <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
              <button className='flex items-center gap-4 text-lg px-3 py-1 border rounded-lg border-blue-500 hover:bg-blue-500 hover:text-white'><LuExternalLink /> Live Demo</button>
              </a>
            </div>



          </div>
        </div>
      )}


      </div>

  )
}

export default Projects