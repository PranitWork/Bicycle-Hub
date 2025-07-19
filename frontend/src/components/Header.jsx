import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, useAnimationControls } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const logoControls = useAnimationControls();
  const navControls = useAnimationControls();
  const mobileIconControls = useAnimationControls();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const animateTimeline = async () => {
      await logoControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      });

      await navControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      });

      await mobileIconControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      });
    };

    animateTimeline();
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
        {/* Animated Logo */}
        <motion.h1
          className="text-white md:text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={logoControls}
        >
          <Link to="/">Bicycle Hub</Link>
        </motion.h1>

        {/* Animated Desktop Nav */}
        <motion.ul
          className="hidden md:flex items-center space-x-6"
          initial={{ opacity: 0, y: -20 }}
          animate={navControls}
        >
          <li><NavLink to="/" className="text-white hover:text-gray-300 transition duration-300">Home</NavLink></li>
          <li><NavLink to="/products" className="text-white hover:text-gray-300 transition duration-300">bicycle</NavLink></li>
          <li><NavLink to="/about" className="text-white hover:text-gray-300 transition duration-300">About</NavLink></li>
          <li><NavLink to="/contact" className="text-white hover:text-gray-300 transition duration-300">Contact</NavLink></li>
          <li><NavLink to="/signup" className="text-white hover:text-gray-300 transition duration-300">Sign Up</NavLink></li>
        </motion.ul>

        {/* Animated Mobile Icon */}
        <motion.div
          className="md:hidden text-white text-2xl cursor-pointer transition duration-300"
          onClick={toggleMenu}
          initial={{ opacity: 0, y: -20 }}
          animate={mobileIconControls}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] md:hidden"
            onClick={toggleMenu}
          />
        )}

        {/* Mobile Menu Slide In */}
        <div
          className={`fixed top-0 right-0 h-full w-[75%] sm:w-[60%] bg-black text-white transform ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } transition-all duration-500 ease-in-out p-8 flex flex-col gap-6 z-[999]`}
        >
          <button className="self-end text-3xl" onClick={toggleMenu}>
            <FiX />
          </button>
          <NavLink to="/" onClick={toggleMenu} className="hover:text-gray-300 transition duration-300">Home</NavLink>
          <NavLink to="/products" onClick={toggleMenu} className="hover:text-gray-300 transition duration-300">bicycle</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className="hover:text-gray-300 transition duration-300">About</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className="hover:text-gray-300 transition duration-300">Contact</NavLink>
          <NavLink to="/signup" onClick={toggleMenu} className="hover:text-gray-300 transition duration-300">Sign Up</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
