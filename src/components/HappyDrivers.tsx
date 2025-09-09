'use client'

export default function Gallery() {
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

  const images = media.filter((item) => !item.endsWith(".mp4"))
  const video = media.find((item) => item.endsWith(".mp4"))

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Gallery
        </h2>

        {/* Circle layout */}
        <div className="relative flex items-center justify-center w-full h-[600px]">
          {/* Center video */}
          <div className="w-40 h-40 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg z-10">
            <video
              src={`/images/${video}`}
              controls
              className="w-full h-full object-cover"
            />
          </div>

          {/* Images positioned in a circle */}
          {images.map((item, index) => {
            const angle = (index / images.length) * 2 * Math.PI
            const radius = 200 // distance from center
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <div
                key={index}
                className="absolute w-20 h-20 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-lg"
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
              >
                <img
                  src={`/images/${item}`}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
