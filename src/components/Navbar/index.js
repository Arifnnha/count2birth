// src/app/components/Navbar/index.js
"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-purple-600 text-white shadow-lg fixed w-full z-10 h-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Count2Birth
        </Link>
        
        {/* Menu button for mobile */}
        <button onClick={toggleMenu} className="text-3xl md:hidden focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Off-canvas menu for mobile */}
        <div
          className={`fixed inset-y-0 right-0 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out bg-purple-700 w-3/4 md:hidden`}
        >
          <div className="flex flex-col items-start p-6 space-y-4">
            <button onClick={toggleMenu} className="text-2xl self-end text-white focus:outline-none">
              <FaTimes />
            </button>
            <Link href="/" className="text-lg flex items-center space-x-2" onClick={toggleMenu}>
              <FaHome /> <span>Home</span>
            </Link>
            <Link href="/events" className="text-lg flex items-center space-x-2" onClick={toggleMenu}>
              <FaCalendarAlt /> <span>Events</span>
            </Link>
            <Link href="/about" className="text-lg flex items-center space-x-2" onClick={toggleMenu}>
              <FaInfoCircle /> <span>About</span>
            </Link>
          </div>
        </div>

        {/* Menu for desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-purple-200 flex items-center space-x-2">
            <FaHome /> <span>Home</span>
          </Link>
          <Link href="/events" className="hover:text-purple-200 flex items-center space-x-2">
            <FaCalendarAlt /> <span>Events</span>
          </Link>
          <Link href="/about" className="hover:text-purple-200 flex items-center space-x-2">
            <FaInfoCircle /> <span>About</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
