"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import ComingSoonPopup from "./ComingSoonPopup";

// Poppins font (Google)
const poppins = Poppins({
  weight: ["700", "800"],
  subsets: ["latin"],
  display: "swap",
});

// Playlist Script (local)
const playlistScript = localFont({
  src: "../fonts/playlist-script/PlaylistScript.otf",
  variable: "--font-playlist-script",
  weight: "400",
});

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-20 bg-gray-50 text-center md:text-left">

        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center md:pl-12 lg:pl-20">
          <div className="mb-8">
            <p
              className={`${playlistScript.className} text-[2.5rem] md:text-[3rem] text-gray-800`}
            >
              It&apos;s time to
            </p>

            <h1 className="leading-tight">
              <span
                className={`${poppins.className} block text-[4.5rem] md:text-[5.5rem] font-extrabold`}
                style={{
                  color: "#99C75C",
                  lineHeight: "0.9",
                }}
              >
                Traamp
              </span>
            </h1>
          </div>

          <p className="text-gray-600 mb-6 text-lg max-w-md">
            Our platform helps you connect with other travelers and share experiences.
          </p>

          {/* 🔥 Shaking Text */}
          <p className="text-3xl md:text-4xl font-semibold mb-6 animate-downloadShake">
            Download NOW
          </p>

          {/* STORE BADGES */}
          <div className="flex flex-wrap justify-center md:justify-start mt-4 space-x-4">

            {/* Google Play Badge */}
            <button onClick={() => setShowPopup(true)}>
              <div className="w-[150px] h-[50px] bg-white flex items-center justify-center overflow-hidden rounded-md transition-transform hover:scale-105">
                <Image
                  src="/playstore.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            </button>

            {/* App Store Badge */}
            <button onClick={() => setShowPopup(true)}>
              <div className="w-[150px] h-[50px] bg-white flex items-center justify-center overflow-hidden rounded-md transition-transform hover:scale-105">
                <Image
                  src="/applestore.png"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                  className="object-contain scale-110"
                />
              </div>
            </button>

          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src="/heroImg.png"
            alt="Hero"
            width={600}
            height={400}
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* POPUP */}
      <ComingSoonPopup open={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default HeroSection;
