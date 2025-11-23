"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import img1 from "@/public/about/image1.jpg";
import img2 from "@/public/about/image2.jpg";
import img3 from "@/public/about/image3.png";

const journey = [
  {
    year: "October 2025",
    title: "Interview with Government",
    description: "Initial research and planning phase for Traamp. Established core team and project vision.",
    images: [img1, img2, img3],
  },
  {
    year: "December 2025",
    title: "Development Phase",
    description: "Building core features and establishing the technical infrastructure.",
    images: [img1, img2, img3],
  },
];

const Journey = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-20 bg-gray-50">

      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gray-900">
        Our Journey
      </h2>

      <div className="max-w-3xl mx-auto relative">

        {/* Timeline Line */}
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-1 bg-gray-300 rounded-xl" />

        <div className="flex flex-col gap-12">

          {journey.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-14 md:pl-24"
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-7 top-1.5 w-4 h-4 bg-green-500 border-4 border-white rounded-full shadow-md" />

              {/* Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex flex-col gap-3">

                  <span className="text-lg font-semibold text-gray-900">{item.year}</span>

                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>

                  <p className="text-gray-700">{item.description}</p>

                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {item.images.map((img, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden shadow">
                        <Image src={img} alt="timeline" className="w-full h-24 object-cover" />
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Journey;
