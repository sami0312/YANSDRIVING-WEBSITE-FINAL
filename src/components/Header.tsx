'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone, Instagram, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const beltRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  // Conveyor belt animation
  useEffect(() => {
    const belt = beltRef.current
    if (!belt) return
    let start = 0
    let animationFrame: number

    const animate = () => {
      start -= 1
      if (start <= -belt.scrollWidth / 2) start = 0
      belt.style.transform = `translateX(${start}px)`
      animationFrame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo + WhatsApp on mobile */}
            <div className="flex items-center space-x-2">
              <Image
                src="/images/YansDrivingLessons Logo.jpg"
                alt="Yan's Driving Lessons Logo"
                width={100}
                height={100}
                className="object-contain"
              />
              {/* WhatsApp number only visible on mobile */}
              <a
                href="https://wa.me/447305556219"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-bold text-base md:hidden"
              >
                +44 730 555 6219
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-accent-blue transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="text-gray-700 hover:text-accent-blue transition-colors"
              >
                Courses & Prices
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-accent-blue transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-accent-blue transition-colors"
              >
                Contact
              </button>
              <a
                href="https://wa.me/447305556219"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Online
              </a>
            </nav>

            {/* Desktop Contact Icons */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="tel:07305556219" className="p-2 text-accent-blue hover:bg-blue-50 rounded-full">
                <Phone size={20} />
              </a>
              <a
                href="https://wa.me/447305556219"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-500 text-white hover:bg-green-600 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.937 11.937 0 0012 .001C5.373.001 0 5.373 0 12c0 2.117.55 4.08 1.515 5.808L0 24l6.353-1.515A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12 0-3.182-1.24-6.178-3.48-8.52zM12 21.75c-2.042 0-3.937-.63-5.507-1.695l-.392-.238-3.77.896.898-3.708-.253-.407A9.72 9.72 0 012.25 12C2.25 6.624 6.624 2.25 12 2.25c2.525 0 4.874.927 6.684 2.607C21.073 6.126 22 8.475 22 12c0 5.376-4.624 9.75-10 9.75z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/yansdrivinglessons"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-pink-600 hover:bg-pink-50 rounded-full"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@yansdrivinglessons.com"
                className="p-2 text-accent-blue hover:bg-blue-50 rounded-full"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-accent-blue transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <nav className="py-4 space-y-3 border-t border-gray-200">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-accent-blue transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-accent-blue transition-colors"
              >
                Courses & Prices
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-accent-blue transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-accent-blue transition-colors"
              >
                Contact
              </button>

              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200">
                <a href="tel:07305556219" className="p-2 text-accent-blue hover:bg-blue-50 rounded-full">
                  <Phone size={20} />
                </a>
                <a
                  href="https://wa.me/447305556219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-500 text-white hover:bg-green-600 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.937 11.937 0 0012 .001C5.373.001 0 5.373 0 12c0 2.117.55 4.08 1.515 5.808L0 24l6.353-1.515A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12 0-3.182-1.24-6.178-3.48-8.52zM12 21.75c-2.042 0-3.937-.63-5.507-1.695l-.392-.238-3.77.896.898-3.708-.253-.407A9.72 9.72 0 012.25 12C2.25 6.624 6.624 2.25 12 2.25c2.525 0 4.874.927 6.684 2.607C21.073 6.126 22 8.475 22 12c0 5.376-4.624 9.75-10 9.75z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/yansdrivinglessons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-pink-600 hover:bg-pink-50 rounded-full"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="mailto:info@yansdrivinglessons.com"
                  className="p-2 text-accent-blue hover:bg-blue-50 rounded-full"
                >
                  <Mail size={20} />
                </a>
              </div>

              <div className="px-4 pt-4">
                <a
                  href="https://wa.me/447305556219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Book Online
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Conveyor Belt */}
      <div className="mt-20 bg-black text-white py-2 overflow-hidden relative">
        <div
          ref={beltRef}
          className="flex whitespace-nowrap text-lg font-bold"
          style={{ minWidth: '200%' }}
        >
          {'100% DVSA APPROVED INSTRUCTOR • '.repeat(20)}
        </div>
      </div>
    </>
  )
}
