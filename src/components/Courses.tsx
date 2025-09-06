'use client'

import { Car, Cog, Clock, Users, Award, MapPin } from 'lucide-react'

export default function Courses() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const courses = [
    {
      id: 'automatic',
      title: 'Automatic Driving Lessons',
      icon: <Car className="w-12 h-12 text-accent-blue mb-4" />,
      description:
        'You will be taught the most efficient and quick techniques to get you on the road.',
      pricing: [{ duration: '10 Hour Block (Minimum)', price: '£400 (£40/hr)' }]
    },
    {
      id: 'manual',
      title: 'Manual Driving Lessons',
      icon: <Cog className="w-12 h-12 text-accent-green mb-4" />,
      description:
        'You will be taught the most efficient and quick techniques to get you on the road.',
      pricing: [{ duration: '10 Hour Block (Minimum)', price: '£380 (£38/hr)' }]
    }
  ]

  return (
    <section id="courses" className="section-padding bg-yan-light-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Driving Courses</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose between automatic and manual lessons with our experienced, DVSA approved instructors.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Top area with icon */}
              <div className="p-8 flex items-start gap-6">
                <div className="flex-shrink-0">{course.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                </div>
              </div>

              {/* Pricing with full image backdrop */}
              <div className="relative mb-6 rounded-b-xl overflow-hidden flex-shrink-0">
                <img
                  src="/images/DrivingHoursPrices.jpg"
                  alt="Pricing"
                  className="w-full h-auto object-contain sm:object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 w-full p-6 sm:p-8 z-10">
                  <h4 className="text-lg font-semibold text-white mb-4">Pricing</h4>
                  <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                    {course.pricing.map((price, idx) => (
                      <div key={idx} className="bg-black/50 rounded-lg p-4 text-center">
                        <div className="font-bold text-2xl text-white">{price.price}</div>
                        <div className="text-sm text-white/90">{price.duration}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <div className="p-8 mt-auto">
                <button
                  onClick={() => scrollToSection('contact')}
                  className={course.id === 'automatic' ? 'btn-primary w-full' : 'btn-secondary w-full'}
                >
                  Book {course.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Yan's Driving Lessons?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="w-10 h-10 text-accent-blue mx-auto mb-3" />
              <div className="font-semibold">Flexible Scheduling</div>
            </div>
            <div className="text-center">
              <Users className="w-10 h-10 text-accent-green mx-auto mb-3" />
              <div className="font-semibold">Experienced Instructors</div>
            </div>
            <div className="text-center">
              <Award className="w-10 h-10 text-accent-red mx-auto mb-3" />
              <div className="font-semibold">High Pass Rate</div>
            </div>
            <div className="text-center">
              <MapPin className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <div className="font-semibold">Pickup Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
