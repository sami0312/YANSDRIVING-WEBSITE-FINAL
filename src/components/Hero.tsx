'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    '/images/YansDrivingImageSlideshow1.jpg',
    '/images/YansDrivingImageSlideshow2.jpg',
    '/images/YansDrivingImageSlideshow3.jpg',
    '/images/AreasCovered.webp'
  ]

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative h-[80vh] flex flex-col justify-end bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${images[currentImage]}')`
      }}
    >
      {/* Overlay text */}
      <div className="absolute top-1/3 w-full text-center text-white text-3xl md:text-5xl font-bold drop-shadow-lg px-4">
        BOOK WITH YANS TODAY
      </div>

      {/* Buttons container - lifted with responsive padding */}
      <div className="container mx-auto px-4 pb-16 sm:pb-20 md:pb-28 flex flex-col sm:flex-row gap-4 justify-center items-center z-10 relative">
        <a
          href="https://wa.me/447305556219"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg px-8 py-4 min-w-[200px]"
        >
          Book Now
        </a>
        <button
          onClick={() => scrollToSection('courses')}
          className="btn-outline text-lg px-8 py-4 min-w-[200px] border-white text-white hover:bg-white hover:text-accent-blue"
        >
          View Courses
        </button>
      </div>
    </section>
  )
}
