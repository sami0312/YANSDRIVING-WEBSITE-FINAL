'use client';

import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ['courses','pricing','gallery','contact'];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Main header bar */}
      <div className="bg-white shadow-md relative z-20">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/images/YansDrivingSchool.jpg"
              alt="Yan's Driving Logo"
              className="h-16 w-auto"  // larger logo
            />
          </div>

          {/* Phone / WhatsApp button (desktop) */}
          <div className="hidden md:flex justify-center flex-1">
            <a
              href="https://wa.me/447305556219"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" />
              07305556219
            </a>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href="https://wa.me/447305556219"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-3 py-2 rounded-lg flex items-center justify-center text-sm"
            >
              <FaWhatsapp className="mr-1" />
              07305556219
            </a>
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Conveyor belt strip */}
        <div className="w-full overflow-hidden bg-black h-8 flex items-center relative z-10">
          <div className="animate-marquee whitespace-nowrap flex min-w-full">
            {Array(4)
              .fill("100% DVSA APPROVED DRIVING INSTRUCTOR")
              .map((text, i) => (
                <span
                  key={i}
                  className="text-white font-bold text-xs sm:text-sm md:text-base mr-10"
                >
                  {text}
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex justify-end space-x-6 items-center mt-1 px-4 bg-white shadow-md">
        {navItems.map((section) => (
          <Link
            key={section}
            to={section}
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            {section.toUpperCase()}
          </Link>
        ))}
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth
                  duration={500}
                  onClick={toggleMenu}
                  className="cursor-pointer hover:text-blue-500"
                >
                  {section.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
