import React from 'react'
import ThemeProvider from './ThemeProvider';

function Header() {
    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];
  return (
     <nav className="w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-md opacity-90 z-50">
      <div className="max-w-7xl mx-auto  md:px-8 sm:px-8 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          <p>{`<>`}</p>
        </div>

        {/* Desktop Menu */}
        <div className='flex items-center'>
        <ul className="hidden group relative md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          {navItems.map((item) => (
            <li key={item} className=" hover:border-b-2 hover:border-blue-500 cursor-pointer">
              {item}

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