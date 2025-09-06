import React, { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "../index.css"; // where we'll add the text-outline CSS

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/YansDrivingLogoNew.jpg"
            alt="Yan's Driving Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Middle content */}
        <div className="flex flex-col items-center text-center flex-grow">
          <h1 className="text-2xl md:text-3xl font-bold text-outline">
            YAN's
          </h1>
          <p className="text-sm md:text-base font-bold">DRIVING LESSONS</p>
          <div className="flex items-center space-x-2 mt-1">
            <FaPhoneAlt className="text-green-500" />
            <span className="font-medium">0730 555 6219</span>
          </div>
          <p className="text-outline text-lg mt-2">BOOK NOW</p>
        </div>

        {/* Hamburger menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="courses"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            Courses
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            Pricing
          </Link>
          <Link
            to="happyDrivers"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            Gallery
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="courses"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="cursor-pointer hover:text-blue-500"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="cursor-pointer hover:text-blue-500"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="happyDrivers"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="cursor-pointer hover:text-blue-500"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="cursor-pointer hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
