'use client'

export default function Gallery() {
  const images = [
    "Happy Driver 1.jpg",
    "Happy Driver 2.jpg",
    "Happy Driver 3.jpg",
    "Happy Driver 4.jpg",
    "Happy Driver 5.jpg",
    "Happy Driver 6.jpg",
    "Happy Driver 7.jpg",
    "Happy Driver 8.jpg",
    "Happy Driver 9.jpg",
  ]

  const video = "Happy Driver 10.mp4"

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Gallery
        </h2>

        <div className="
          grid grid-cols-3 grid-rows-3 gap-2 
          max-w-3xl mx-auto
        ">
          {images.slice(0, 4).map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={`/images/${item}`}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Center video */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <video
              src={`/images/${video}`}
              controls
              className="w-full h-full object-cover"
            />
          </div>

          {images.slice(4).map((item, index) => (
            <div key={index + 4} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={`/images/${item}`}
                alt={`Gallery item ${index + 5}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
