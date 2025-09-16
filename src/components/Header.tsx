'use client';

import { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const navItems = ['Home', 'Gallery', 'Courses', 'Contact'];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative z-20">
      {/* Top WhatsApp bar */}
      <div className="w-full bg-green-500 flex justify-center py-1 text-white font-bold">
        <a
          href="https://wa.me/447305556219"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <FaWhatsapp />
          <span>07305556219</span>
        </a>
      </div>

      {/* Main header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/images/YansDrivingSchool.jpg"
              alt="Yan's Driving Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((section) => (
              <Link
                key={section}
                to={section}
                smooth
                duration={500}
                className="cursor-pointer text-gray-800 font-medium hover:text-gray-600"
              >
                {section}
              </Link>
            ))}
          </nav>

          {/* Desktop WhatsApp */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/447305556219"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg flex items-center"
            >
              <FaWhatsapp className="mr-2" />
              07305556219
            </a>
          </div>

          {/* Mobile: WhatsApp + hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href="https://wa.me/447305556219"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-3 py-2 rounded-lg flex items-center text-sm"
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
              .fill('100% DVSA APPROVED DRIVING INSTRUCTOR')
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
    </header>
  );
}
