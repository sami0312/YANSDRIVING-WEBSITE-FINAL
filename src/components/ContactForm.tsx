'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock, Award } from 'lucide-react'

interface FormData {
  fullName: string
  email: string
  phone: string
  courseType: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    courseType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = (): boolean => {
    return !!(
      formData.fullName.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.courseType
    )
  }

  const generateWhatsAppMessage = (): string => {
    const message = `Hi Yan! I'd like to book driving lessons.

📝 *Details:*
• Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Course: ${formData.courseType}

${formData.message ? `💬 *Message:*\n${formData.message}` : ''}

Looking forward to hearing from you!`

    return encodeURIComponent(message)
  }

  const generateEmailSubject = (): string => {
    return encodeURIComponent(`Driving Lesson Booking - ${formData.fullName}`)
  }

  const generateEmailBody = (): string => {
    const body = `Hi Yan,

I would like to book driving lessons with you.

CONTACT DETAILS:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Course Type: ${formData.courseType}

${formData.message ? `ADDITIONAL MESSAGE:\n${formData.message}\n\n` : ''}

Please contact me to arrange my first lesson.

Best regards,
${formData.fullName}`

    return encodeURIComponent(body)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Generate WhatsApp link
      const whatsappMessage = generateWhatsAppMessage()
      const whatsappUrl = `https://wa.me/447305556219?text=${whatsappMessage}`
      
      // Generate email fallback
      const emailSubject = generateEmailSubject()
      const emailBody = generateEmailBody()
      const emailUrl = `mailto:Yansdriving@gmail.com?subject=${emailSubject}&body=${emailBody}`
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank')
      
      // Set success status
      setSubmitStatus('success')
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          courseType: '',
          message: ''
        })
        setSubmitStatus('idle')
      }, 3000)
      
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    }
    
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section-padding bg-yan-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Driving Lessons Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your driving journey? Fill out the form below and we'll get back to you within 24 hours to schedule your first lesson.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Book Your Lessons
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Course Type */}
              <div>
                <label htmlFor="courseType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Type *
                </label>
                <select
                  id="courseType"
                  name="courseType"
                  value={formData.courseType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                >
                  <option value="">Select a course type</option>
                  <option value="Automatic Lessons">Automatic Lessons</option>
                  <option value="Manual Lessons">Manual Lessons</option>
                  <option value="Intensive Course">Intensive Course</option>
                  <option value="Refresher Lessons">Refresher Lessons</option>
                  <option value="Pass Plus">Pass Plus Course</option>
                </select>
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell us about your experience level, preferred lesson times, or any questions you have..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !validateForm()}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isSubmitting || !validateForm()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'btn-primary hover:shadow-lg transform hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Book My Lessons Now'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <p className="font-semibold">Success! 🎉</p>
                  <p>WhatsApp has opened with your details. We'll respond within 24 hours!</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  <p className="font-semibold">Please fill in all required fields</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:07305556219" className="text-accent-green hover:underline">
                      07305 556 219
                    </a>
                    <p className="text-sm text-gray-500">Call or text anytime</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircle className="w-6 h-6 text-accent-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/447305556219" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent-green hover:underline"
                    >
                      Message on WhatsApp
                    </a>
                    <p className="text-sm text-gray-500">Quick response guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent-blue mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a 
                      href="mailto:Yansdriving@gmail.com" 
                      className="text-accent-blue hover:underline"
                    >
                      Yansdriving@gmail.com
                    </a>
                    <p className="text-sm text-gray-500">24-hour response time</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Service Area</h4>
                    <p className="text-gray-600">South London</p>
                    <p className="text-sm text-gray-500">Croydon, Sutton, Mitcham, Wimbledon & surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-accent-blue to-accent-green rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Why Choose Yan?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>DVSA Approved Instructor</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>Flexible lesson scheduling</span>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>Free pickup & drop-off</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>92% first-time pass rate</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm opacity-90">
                  "Patient, professional, and passionate about helping students succeed. 
                  Start your driving journey with confidence!"
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h4 className="font-semibold text-amber-800 mb-2">
                Need to Contact During Lessons?
              </h4>
              <p className="text-amber-700 text-sm">
                For urgent matters during lesson hours, please call directly. 
                For general inquiries, WhatsApp is preferred for faster response.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Prefer Direct Contact?
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:07305556219"
              className="bg-accent-green hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center min-w-[200px] justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            
            <a 
              href="https://wa.me/447305556219?text=Hi%20Yan,%20I'd%20like%20to%20book%20driving%20lessons"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-blue hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center min-w-[200px] justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}