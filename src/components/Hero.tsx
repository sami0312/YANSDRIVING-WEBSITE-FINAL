'use client'

import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(-1) // -1 = video
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const slides = [
    '/images/YansDrivingImageSlideshow1.jpg',
    '/images/YansDrivingImageSlideshow2.jpg',
    '/images/YansDrivingImageSlideshow3.jpg',
    '/images/AreasCovered.webp'
  ]

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle slideshow after video ends on desktop
  useEffect(() => {
    if (isMobile) return

    const videoEl = videoRef.current
    if (videoEl) {
      const onVideoEnd = () => {
        setCurrentSlide(0)
        const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        videoEl.removeEventListener('ended', onVideoEnd)
      }
      videoEl.addEventListener('ended', onVideoEnd)
    }
  }, [isMobile, slides.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative h-[80vh] flex flex-col justify-end overflow-hidden">
      {/* Hero video */}
      {currentSlide === -1 && (
        <video
          ref={videoRef}
          src="/images/Happy Driver 10.mp4"
          autoPlay
          controls
          playsInline
          className="absolute inset-0 w-full h-full object-contain"
        />
      )}

      {/* Background slideshow */}
      {currentSlide >= 0 && (
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain transition-all duration-1000"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${slides[currentSlide]}')`
          }}
        ></div>
      )}

      {/* Overlay content: Logo + Header text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <img
  src="/images/YansDrivingSchool.jpg"
  alt="Yan's Driving Logo"
  className="h-12 w-auto"
/>
        <h1 className="text-3xl md:text-4xl font-bold text-white -webkit-text-stroke-[1px] drop-none mb-1">
          YAN's
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-white -webkit-text-stroke-[1px] drop-none mb-2">
          DRIVING LESSONS
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl text-white mb-2 -webkit-text-stroke-[1px] drop-none">
          <span>📞</span>
          <span>0730 555 6219</span>
        </div>
        <p className="text-lg md:text-xl font-bold text-accent-blue mt-2 mb-4">
          BOOK NOW
        </p>
      </div>

      {/* Buttons */}
      <div className="container mx-auto px-4 pb-20 flex flex-col sm:flex-row gap-4 justify-center items-center z-10 relative">
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
