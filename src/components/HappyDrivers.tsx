'use client'

export default function HappyDrivers() {
  const media = [
    "Happy Driver 1.jpg",
    "Happy Driver 2.jpg",
    "Happy Driver 3.jpg",
    "Happy Driver 4.jpg",
    "Happy Driver 5.jpg",
    "Happy Driver 6.jpg",
    "Happy Driver 7.jpg",
    "Happy Driver 8.jpg",
    "Happy Driver 9.jpg",
    "Happy Driver 10.mp4"
  ]

  return (
    <section id="happy-drivers" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Happy Drivers
        </h2>

        <div className="flex flex-wrap gap-4 justify-center items-start overflow-x-auto">
          {media.map((item, index) => {
            const isVideo = item.endsWith(".mp4")
            return (
              <div key={index} className="flex-shrink-0 w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                {isVideo ? (
                  <video
                    src={`/images/${item}`}
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={`/images/${item}`}
                    alt={`Happy Driver ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
