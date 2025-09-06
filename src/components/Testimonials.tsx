'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      age: 22,
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      review: "Yan is an amazing instructor! I was so nervous about driving but he made me feel comfortable from day one. Passed first time with only 2 minor faults. Highly recommended!",
      course: "Automatic"
    },
    {
      id: 2,
      name: "James Thompson",
      age: 25,
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      review: "Excellent teaching methods and very patient. Yan helped me understand all the technical aspects of manual driving. Great value for money and flexible with lesson times.",
      course: "Manual"
    },
    {
      id: 3,
      name: "Emily Chen",
      age: 19,
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      review: "I failed my test twice with another instructor, but Yan identified exactly what I needed to work on. His structured approach got me through on the third attempt!",
      course: "Automatic"
    },
    {
      id: 4,
      name: "Marcus Johnson",
      age: 28,
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      review: "Professional, punctual, and very knowledgeable. Yan's calm demeanor really helped during stressful moments. Would definitely recommend to anyone learning to drive.",
      course: "Manual"
    },
    {
      id: 5,
      name: "Priya Patel",
      age: 21,
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      review: "Amazing experience from start to finish! Yan made learning enjoyable and stress-free. His teaching style really suits different learning preferences. Passed first time!",
      course: "Automatic"
    },
    {
      id: 6,
      name: "Daniel Brown",
      age: 24,
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      review: "Great instructor who really cares about his students' success. Yan went above and beyond to help me feel confident on the road. Couldn't have asked for better lessons.",
      course: "Manual"
    },
    {
      id: 7,
      name: "Sophie Williams",
      age: 20,
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      review: "Fantastic instructor! Very patient and explains everything clearly. The lesson structure was perfect and I always felt prepared for my test. Thank you Yan!",
      course: "Automatic"
    },
    {
      id: 8,
      name: "Ryan O'Connor",
      age: 26,
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      review: "Yan is simply the best driving instructor in South London. His expertise and patience made all the difference. Highly professional and always on time.",
      course: "Manual"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Get testimonials to show (responsive)
  const getVisibleTestimonials = () => {
    const testimonialsCopy = [...testimonials, ...testimonials] // Duplicate for infinite scroll effect
    return testimonialsCopy.slice(currentSlide, currentSlide + 3)
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our successful students who passed their driving tests with Yan's expert guidance.
          </p>
        </div>

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Carousel */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`}
                  className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Quote Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-accent-blue/10 rounded-full mb-6">
                    <Quote className="w-6 h-6 text-accent-blue" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.review}"
                  </p>

                  {/* Student Info */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Age {testimonial.age} • {testimonial.course} Course
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-accent-blue scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-accent-blue to-accent-green rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-xl">Happy Students</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">92%</h3>
              <p className="text-xl">First Time Pass Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">5★</h3>
              <p className="text-xl">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}