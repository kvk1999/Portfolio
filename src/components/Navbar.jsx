import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Update with the path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-indigo-700 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-indigo-300">Home</a>
          <a href="#about" className="hover:text-indigo-300">About</a>
          <a href="#skills" className="hover:text-indigo-300">Skills</a>
          <a href="#projects" className="hover:text-indigo-300">Projects</a>
          <a href="#contact" className="hover:text-indigo-300">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-600">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#home" className="hover:text-indigo-300">Home</a>
            <a href="#about" className="hover:text-indigo-300">About</a>
            <a href="#skills" className="hover:text-indigo-300">Skills</a>
            <a href="#projects" className="hover:text-indigo-300">Projects</a>
            <a href="#contact" className="hover:text-indigo-300">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
