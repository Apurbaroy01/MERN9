'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const images = [
  "/hospital1.png", "hospital3.jpg", "hospital2.png", "hospital4.jpg",

  
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-red-900 text-gray-400">
      {/* Carousel Section */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-full h-full object-cover flex-shrink-0"
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full shadow-lg hover:bg-gray-300 focus:outline-none"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full shadow-lg hover:bg-gray-300 focus:outline-none"
        >
          &#8594;
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Icon & Text Section */}
      <div className="py-16 px-6 sm:py-24 sm:px-10 text-gray-200">
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-10 sm:gap-16 lg:gap-32 justify-center max-w-5xl">
          <Link href={'/Tobacco'}>
            <div className="space-y-3 flex flex-col items-center justify-center">
              <img
                src="health-check.png"
                alt="Quit Tobacco"
                className="bg-slate-100 rounded-full p-1"
                width={88}
              />
              <p className="font-bold text-center text-sm sm:text-base">Quit Tobacco</p>
            </div>
            </Link>
            <Link href={'/Healthy'}>
            <div className="space-y-3 flex flex-col items-center justify-center">
              <img
                src="health-insurance.png"
                alt="Healthy Aging"
                className="bg-gray-100 rounded-full p-1"
                width={88}
              />
              <p className="font-bold text-center text-sm sm:text-base">Healthy Aging</p>
            </div>
            </Link>
            <Link href={'/Health'}>
            <div className="space-y-3 flex flex-col items-center justify-center">
              <img
                src="hospital.png"
                alt="Health Insurance"
                className="bg-gray-100 rounded-full p-1"
                width={100}
              />
              <p className="font-bold text-center text-sm sm:text-base">Health Insurance</p>
            </div>
            </Link>
            <Link href={'/AHEC'}>
            <div className="space-y-3 flex flex-col items-center justify-center">
              <img
                src="patient.png"
                alt="AHEC SCHOLARS"
                className="bg-gray-100 rounded-full p-1"
                width={88}
              />
              <p className="font-bold text-center text-sm sm:text-base">AHEC SCHOLARS</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-slate-200">
      <img src="hospitall.png" alt="Loding.." className="max-w-full h-auto" />
    </div>
    </div>
  );
};

export default Hero;
