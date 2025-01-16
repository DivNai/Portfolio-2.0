import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); 
  };

  return (
    <nav className="w-full flex justify-between items-center px-4 md:px-10 py-5 sticky top-0 z-50 bg-black">
      {/* Logo */}
      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
        DN
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:space-x-10 text-lg text-white absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent z-50`}
      >
        {/* <li className="relative group p-4 md:p-0">
          <a href="#hero" onClick={handleLinkClick} className="hover:text-gray-400">
            Home
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li> */}
        <li className="relative group p-4 md:p-0">
          <a href="#about" onClick={handleLinkClick} className="hover:text-gray-400">
            About Me
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="relative group p-4 md:p-0">
          <a href="#services" onClick={handleLinkClick} className="hover:text-gray-400">
            Services
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="relative group p-4 md:p-0">
          <a href="#latestwork" onClick={handleLinkClick} className="hover:text-gray-400">
            Latest Work 
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="relative group p-4 md:p-0">
          <a href="#contactform" onClick={handleLinkClick} className="hover:text-gray-400">
            Contact
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-pink-500 to yellow-500 transition-all duration-300 group-hover:w-full scroll-behavior: smooth "></span>
          </a>
        </li>
      </ul>
      {/* Connect Button */}
      <button
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-lg mt-4 md:mt-0 absolute md:static top-28 left-4 w-[calc(100%-2rem)] md:w-auto`}>
        Connect with me
      </button>
    </nav>
  );
};

export default Navbar;