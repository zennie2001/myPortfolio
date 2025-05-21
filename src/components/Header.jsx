import React, { useState } from 'react';
import logo from "../assets/logoBrand.png";
import ThemeProvider from './ThemeProvider';
import { IoMenu, IoClose } from "react-icons/io5";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false); // Close menu on selection
  };

  return (
    <nav className="scroll-smooth w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-md opacity-90 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-14 flex justify-between items-center h-16">
        {/* Logo */}
        <div>
          <img src={logo} className='w-10 h-10' alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleClick(item.id)}
                className={`pb-1 transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'border-b-2 border-blue-500'
                    : 'hover:border-b-2 hover:border-blue-500 cursor-pointer'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle and mobile menu icon */}
        <div className="flex items-center gap-4">
          <ThemeProvider />
          {/* Mobile Menu Toggle */}
          <button
            className="text-2xl text-gray-800 dark:text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4">
          <ul className="flex flex-col space-y-4 text-gray-800 dark:text-gray-200 font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`block transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-500'
                      : 'hover:text-blue-500'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
