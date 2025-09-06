'use client'

import { Phone, MessageCircle, Mail, Instagram, MapPin, Clock, Award } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-accent-blue mb-4">
              YAN'S DRIVING LESSONS
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional driving instruction in South London with DVSA approved instructors. 
              Helping students pass their driving test with confidence since 2018.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <Award className="w-4 h-4 mr-2" />
              <span>DVSA Approved Driving Instructor</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-accent-blue transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="text-gray-300 hover:text-accent-blue transition-colors"
                >
                  Courses & Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-accent-blue transition-colors"
                >
                  Student Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('happy-drivers')}
                  className="text-gray-300 hover:text-accent-blue transition-colors"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-accent-blue transition-colors"
                >
                  Book Lessons
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Automatic Driving Lessons</li>
              <li>• Manual Driving Lessons</li>
              <li>• Intensive Courses</li>
              <li>• Refresher Lessons</li>
              <li>• Pass Plus Training</li>
              <li>• Theory Test Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-accent-green flex-shrink-0" />
                <div>
                  <a href="tel:07305556219" className="text-gray-300 hover:text-accent-green transition-colors">
                    07305 556 219
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-accent-blue flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@yansdrivinglessons.com" 
                    className="text-gray-300 hover:text-accent-blue transition-colors"
                  >
                    info@yansdrivinglessons.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    South London<br />
                    Croydon, Sutton, Mitcham,<br />
                    Wimbledon & surrounding areas
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-3 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Mon-Sun: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="https://wa.me/447305556219" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent-green hover:bg-green-600 p-2 rounded-full transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com/yansdrivinglessons" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:info@yansdrivinglessons.com"
                  className="bg-accent-blue hover:bg-blue-600 p-2 rounded-full transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Areas We Cover</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-gray-400">
              <div>Croydon</div>
              <div>Sutton</div>
              <div>Mitcham</div>
              <div>Wimbledon</div>
              <div>Morden</div>
              <div>Purley</div>
              <div>Thornton Heath</div>
              <div>South Croydon</div>
              <div>Wallington</div>
              <div>Carshalton</div>
              <div>Raynes Park</div>
              <div>New Malden</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 Yan's Driving Lessons. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              Yan's Driving Lessons is a registered driving school operating under DVSA regulations. 
              All instructors are fully qualified and DBS checked for your safety and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}