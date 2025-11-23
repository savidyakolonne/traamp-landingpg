"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import image1 from "@/public/about/image1.jpg";
import image2 from "@/public/about/image2.jpg";
import image3 from "@/public/about/image3.png";

const gallery = [
  {
    img: image1,
    title: "Our Team Spirit",
    desc: "Creativity, late nights, teamwork — the energy behind TRAMMP.",
  },
  {
    img: image2,
    title: "Building TRAMMP",
    desc: "Every feature is crafted with intention and purpose.",
  },
  {
    img: image3,
    title: "Our Journey",
    desc: "From the first idea to a growing platform for travelers.",
  },
];

export default function AboutHero() {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-28 py-20 bg-gray-50">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-extrabold text-center text-gray-900"
      >
        Here&apos;s who we are <br />
        <span className="text-green-600">and what our project is about</span>
      </motion.h2>

      <p className="text-center text-gray-600 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
        A visual collection of the journey behind TRAMMP — the people, the process,
        and the passion that drives us forward.
      </p>

      {/* MOBILE / TABLET (STACKED) */}
      <div className="grid md:hidden gap-6 mt-12">
        {gallery.map((item, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-lg h-[300px]"
          >
            <Image
              src={item.img}
              alt={`gallery-mobile-${i}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
              <h1 className="text-2xl font-semibold">{item.title}</h1>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP EXPANDING GALLERY */}
      <div className="hidden md:flex items-center gap-6 h-[420px] w-full max-w-6xl mt-16 mx-auto">

        {gallery.map((item, i) => (
          <div
            key={i}
            className="relative group flex-grow transition-all w-56 h-[420px] duration-500 hover:w-full rounded-xl overflow-hidden"
          >
            {/* Image */}
            <Image
              src={item.img}
              alt={`gallery-${i}`}
              fill
              className="object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white 
                            bg-gradient-to-t from-black/70 to-transparent
                            opacity-0 group-hover:opacity-100 
                            transition-all duration-500">
              <h1 className="text-3xl font-semibold">{item.title}</h1>
              <p className="text-sm mt-2 max-w-xs opacity-90">{item.desc}</p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}
