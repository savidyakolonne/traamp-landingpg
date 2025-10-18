"use client"

import React from "react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-25 py-20 bg-gray-50">
      {/* Left Side */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Help to guide tourist
        </h1>
        <p className="text-gray-600 mb-8">
          Our platform helps you connect.
        </p>

        {/* App Store / Play Store Buttons */}
        <div className="flex mt-6 space-x-4 pt-5">
         
         <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/playstore.png" 
              alt="Get it on Google Play"
              width={150}
              height={50}
            />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/applestore.png" 
              alt="Download on the App Store"
              width={150}
              height={50}
            />
          </a>
          
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/hero-image.png"
          alt="Hero"
          width={500}
          height={400}
          className="rounded-lg"
        />
      </div>
    </section>
  )
}

export default HeroSection
