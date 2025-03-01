"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StaticImageData } from "next/image";

interface CarouselProps {
  images: StaticImageData[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-[360px] h-[360px] overflow-hidden max-[400px]:w-[300px] max-[400px]:h-[300px]">
      <Image 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        width={360} 
        height={360} 
        className="w-[360px] h-[360px] object-cover transition-opacity duration-300 max-[400px]:w-[300px] max-[400px]:h-[300px]"
      />

      {/* Left Arrow */}
      <button 
        onClick={prevSlide} 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
