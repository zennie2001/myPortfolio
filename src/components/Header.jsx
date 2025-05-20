import React, { useState } from 'react'
import logo from "../assets/logoBrand.png"
import ThemeProvider from './ThemeProvider';
import { IoCodeSharp } from "react-icons/io5";

function Header() {

  const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
  ];

  const [activeSection, setActiveSection] = useState('home');

  const handleClick = (id) => {
    setActiveSection(id);
  };


  return (
    <nav  className="scroll-smooth w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-md opacity-90 z-50">
      <div className="max-w-7xl    md:px-14 sm:px-16 lg:px-14 flex justify-between items-center h-16">
        {/* Logo */}
        <div >
          <img src={logo} className='w-10 h-10'/>
        </div>


        {/* Desktop Menu */}
        <div className='flex items-center'>
        <ul className="hidden group relative md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          {navItems.map((item) => (
            <li key={item.id} className=" ">
              <a href={`#${item.id}`}  onClick={() => handleClick(item.id)}
                className={`pb-1 transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'border-b-2 border-blue-500  '
                    : 'hover:border-b-2 hover:border-blue-500 group-hover:w-full cursor-pointer'
                }`}>
              {item.label}
              </a>

            </li>
            
          ))}
          {/* <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span> */}

           
        </ul>
        
        
          
       

        <ThemeProvider/>
        </div>
        
           
      </div>
      

     

    </nav>
  )
}

export default Header