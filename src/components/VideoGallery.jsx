import React from 'react'
import gif1 from '../assets/gif1.gif'
import gif2 from '../assets/gif2.gif'

export default function VideoGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
      <img src={gif1} className="w-full aspect-[16/10] object-cover rounded-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(244,114,182,0.6)] cursor-pointer" alt="First Custom GIF" />
      <img src={gif2} className="w-full aspect-[16/10] object-cover rounded-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(244,114,182,0.6)] cursor-pointer" alt="Second Custom GIF" />
    </div>
  )
}
