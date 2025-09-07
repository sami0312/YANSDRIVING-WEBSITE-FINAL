'use client'

import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(-1) // -1 = video
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [carouselTextIndex, setCarouselTextIndex] = useState(0)

  const slides = [
    '/images/YansDrivingImageSlideshow1.jpg',
    '/images/YansDrivingImageSlideshow2.jpg',
    '/images/YansDrivingImageSlideshow3.jpg',
    '/images/AreasCovered.webp'
  ]

  const carouselTexts = [
    '100% DVSA APPROVED',
    'FRIENDLY INSTRUCTORS',
    'LEARN TO DRIVE WITH CONFIDENCE'
  ]

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Slideshow & video
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

  // Carousel text loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselTextIndex((prev) => (prev + 1) % carouselTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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

      {/* Overlay text */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 flex flex-col items-center text-center px-4 z-10 space-y-2">
        {/* BOOK NOW */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-sky-400 hero-text-outline-black whitespace-nowrap">
          BOOK NOW
        </h1>

        {/* WITH */}
        <p className="text-2xl md:text-3xl font-semibold text-white hero-text-outline-black mt-1">
          WITH
        </p>

        {/* YANS DRIVING */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-sky-400 hero-text-outline-black whitespace-nowrap mt-1">
          YANS DRIVING
        </h2>
      </div>

      {/* Bottom buttons (side by side) */}
      <div className="container mx-auto px-4 pb-8 flex flex-row gap-4 justify-center items-center z-10 relative">
        <a
          href="https://wa.me/447305556219"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-400 hover:bg-sky-500 text-white text-lg px-8 py-4 rounded-lg min-w-[200px] text-center font-bold"
        >
          Book Now
        </a>
        <button
          onClick={() => scrollToSection('courses')}
          className="btn-outline text-lg px-8 py-4 min-w-[200px] border-white text-white hover:bg-white hover:text-accent-blue rounded-lg"
        >
          View Courses
        </button>
      </div>
    </section>
  )
}
