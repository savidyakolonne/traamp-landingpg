"use client";

import { useState, useRef } from "react";

export default function LocationDemoSection() {
  const [allowed, setAllowed] = useState(false);

  // FIX: Add the HTMLVideoElement type here
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleAllow = () => {
    setAllowed(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 300);
  };

  const handleVideoEnd = () => {
    setAllowed(false);
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Try the Traamp Map</h2>

      <div className="w-full max-w-xs bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
        {!allowed && (
          <div className="w-full flex flex-col items-center text-center">
            <div className="text-blue-500 text-2xl mb-3">📍</div>

            <h3 className="text-lg font-semibold mb-3 leading-tight">
              Allow Traamp to access your location?
            </h3>

            <div className="flex gap-6 mb-5">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                  📡
                </div>
                <p className="mt-1 text-xs font-medium">Precise</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-xl">
                  🗺️
                </div>
                <p className="mt-1 text-xs font-medium">Approx</p>
              </div>
            </div>

            <button
              onClick={handleAllow}
              className="text-blue-500 font-medium text-sm mb-1 hover:opacity-80 animate-iosFlashStrong"
            >
              While using the app
            </button>

            <button
              onClick={handleAllow}
              className="text-blue-500 font-medium text-sm mb-1 hover:opacity-80"
            >
              Only this time
            </button>

            <button
              onClick={() => setAllowed(true)}
              className="text-gray-400 font-medium text-sm hover:opacity-80"
            >
              Deny
            </button>
          </div>
        )}

        {allowed && (
          <video
            ref={videoRef}
            onEnded={handleVideoEnd}
            className="rounded-xl w-full mt-2"
            controls
          >
            <source src="/videos/mapvideo.mp4" type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  );
}
