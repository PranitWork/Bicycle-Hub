import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full ${
        isSticky ? "fixed top-0 left-0 bg-black shadow-md" : "absolute"
      } flex justify-center py-4 z-50 transition-all duration-500 ease-in-out`}
    >
      <div
        className={`transition-all duration-500 ease-in-out ${
          isSticky
            ? "w-full max-w-[1280px] px-6 rounded-none"
            : "w-[80%] md:w-[50%] px-8 rounded-full"
        } bg-black py-4 flex items-center justify-between space-x-8`}
      >
        <h1 className="text-white md:text-3xl font-bold transition-all duration-500 ease-in-out">Bicycle Hub</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6">
          <li><NavLink to="/" className="text-white hover:text-gray-300 transition duration-300">Home</NavLink></li>
          <li><NavLink to="/products" className="text-white hover:text-gray-300 transition duration-300">bicycle</NavLink></li>
          <li><NavLink to="/about" className="text-white hover:text-gray-300 transition duration-300">About</NavLink></li>
                    <li><NavLink to="/contact" className="text-white hover:text-gray-300 transition duration-300">Contact</NavLink></li>

          <li><NavLink to="/signup" className="text-white hover:text-gray-300 transition duration-300">Sign Up</NavLink></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer transition duration-300" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] md:hidden"
            onClick={toggleMenu}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[75%] sm:w-[60%] bg-black text-white transform ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } transition-all duration-500 ease-in-out p-8 flex flex-col gap-6 z-[999]`}
        >
          <button className="self-end text-3xl" onClick={toggleMenu}><FiX /></button>
          <NavLink
            to="/"
            className="hover:text-gray-300 transition duration-300 delay-100"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="hover:text-gray-300 transition duration-300 delay-150"
            onClick={toggleMenu}
          >
            bicycle
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-gray-300 transition duration-300 delay-200"
            onClick={toggleMenu}
          >
            About
          </NavLink>
           <NavLink
            to="/contact"
            className="hover:text-gray-300 transition duration-300 delay-200"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/signup"
            className="hover:text-gray-300 transition duration-300 delay-300"
            onClick={toggleMenu}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
