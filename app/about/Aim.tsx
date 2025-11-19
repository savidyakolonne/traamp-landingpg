"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import aimImg from "@/public/about/aim.jpg"; // <-- Your left-side image

interface AimContent {
  title: string;
  description: string;
}

const aims: AimContent[] = [
  {
    title: "Vision",
    description:
      "Our vision is to create a platform that seamlessly connects travelers and provides them with meaningful experiences globally.",
  },
  {
    title: "Problem",
    description:
      "Travelers often struggle to find reliable recommendations and trustworthy guides, leading to missed opportunities and unsatisfactory trips.",
  },
  {
    title: "Mission",
    description:
      "Our mission is to simplify travel planning by providing a platform with personalized recommendations, community connections, and verified guides.",
  },
  {
    title: "Solution",
    description:
      "We offer an intuitive platform where travelers can discover, share, and connect with others, ensuring safe, enjoyable, and memorable journeys.",
  },
];

const Aim = () => {
  const [selected, setSelected] = useState<string>("Vision");

  const currentAim = aims.find((aim) => aim.title === selected);

  return (
    <section className="px-6 md:px-20 py-24 bg-gray-50">
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center mb-16">
        Our Aim
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {aims.map((aim) => (
          <button
            key={aim.title}
            onClick={() => setSelected(aim.title)}
            className={`px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 ${
              selected === aim.title
                ? "bg-green-400 text-white shadow-lg"
                : "bg-white border border-gray-300 text-gray-800 hover:bg-green-400 hover:text-white"
            }`}
          >
            {aim.title}
          </button>
        ))}
      </div>

      {/* IMAGE LEFT + CONTENT RIGHT */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[0.6fr_1.6fr] gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="w-full flex md:justify-start justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={aimImg}
                alt="Aim Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CARD */}
          <AnimatePresence mode="wait">
            {currentAim && (
              <motion.div
                key={currentAim.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-12"
                style={{ backgroundColor: "#D1FAE5" }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  {currentAim.title}
                </h3>

                <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                  {currentAim.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Aim;
