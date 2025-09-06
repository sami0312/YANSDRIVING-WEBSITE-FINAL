'use client'

import Image from 'next/image'

export default function AreasCovered() {
  const areas = [
    'Mitcham', 'Croydon', 'Tooting', 'Brixton', 
    'Streatham', 'Norbury', 'West Wickham', 
    'Purley', 'Wallington'
  ]

  const pickupLocations = [
    'East Croydon Station', 
    'Thornton Heath Station', 
    'Norbury Station'
  ]

  const testCentres = [
    'Mitcham', 
    'West Wickham'
  ]

  return (
    <section id="areas-covered" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Areas Covered & Test Centres
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yans Driving Lessons covers most areas in South East London and offers convenient pick-up locations. We guarantee a test at Mitcham within 24 hours!
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-12 w-full h-[400px] relative">
          <Image
            src="/images/AreasCovered.webp"
            alt="Areas Covered"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Areas Covered */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Areas Covered
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 text-lg">
            {areas.map((area) => (
              <li key={area} className="flex items-center">
                <span className="w-2 h-2 bg-accent-blue rounded-full mr-2"></span>
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Pick-up Locations */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Pick-up Locations
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-gray-700 text-lg">
            {pickupLocations.map((location) => (
              <li key={location} className="flex items-center">
                <span className="w-2 h-2 bg-accent-green rounded-full mr-2"></span>
                {location}
              </li>
            ))}
          </ul>
        </div>

        {/* Test Centres */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Test Centres
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-lg">
            {testCentres.map((centre) => (
              <li key={centre} className="flex items-center">
                <span className="w-2 h-2 bg-accent-red rounded-full mr-2"></span>
                {centre} – <span className="font-semibold text-accent-blue">Guaranteed test within 24 hours</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
