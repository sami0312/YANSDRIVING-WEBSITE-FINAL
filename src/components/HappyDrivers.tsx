'use client'

import { useState } from 'react'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

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
    "Happy Driver 10.mp4" // video in the center
  ]

  const videoIndex = media.findIndex((m) => m.endsWith(".mp4"))

  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-2 max-w-3xl mx-auto">
          {/* First 4 images */}
          {media.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => { setIsOpen(true); setPhotoIndex(index) }}
            >
              <img
                src={`/images/${item}`}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Center video larger */}
          <div
            className="col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => { setIsOpen(true); setPhotoIndex(videoIndex) }}
          >
            <video
              src={`/images/${media[videoIndex]}`}
              controls
              className="w-full h-full object-cover"
            />
          </div>

          {/* Remaining images */}
          {media.slice(4, -1).map((item, index) => (
            <div
              key={index + 4}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => { setIsOpen(true); setPhotoIndex(index + 4) }}
            >
              <img
                src={`/images/${item}`}
                alt={`Gallery item ${index + 5}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={media.map((item) =>
              item.endsWith(".mp4")
                ? { type: "video", src: `/images/${item}` }
                : { src: `/images/${item}` }
            )}
            onIndexChange={setPhotoIndex}
          />
        )}
      </div>
    </section>
  )
}

