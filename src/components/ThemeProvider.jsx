// src/components/ThemeProvider.jsx
import { useEffect, useState } from 'react';
import { HiOutlineSun, HiMiniMoon } from "react-icons/hi2";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className="fixed right-16 lg:right-8 top-4 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800"
      >
         {theme === 'dark' ? <HiOutlineSun /> : <HiMiniMoon />} 
      </button>
      {children}
    </div>
  );
};

export default ThemeProvider;
