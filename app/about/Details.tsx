"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// End Images
import end1 from "@/public/about/end1.jpg";
import end2 from "@/public/about/end3.png";
import end3 from "@/public/about/end2.png";

interface Lecturer {
  name: string;
  imgSrc: string;
  linkedIn: string;
}

const lecturers: Lecturer[] = [
  {
    name: "Lecturer One",
    imgSrc: "/lecturers/lecturer1.jpg",
    linkedIn: "https://www.linkedin.com/in/lecturerone",
  },
  {
    name: "Lecturer Two",
    imgSrc: "/lecturers/lecturer2.jpg",
    linkedIn: "https://www.linkedin.com/in/lecturertwo",
  },
];

const Details = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-20 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">

        {/* Top Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 text-gray-700 text-lg leading-relaxed"
        >
          <p>
            Our project is designed to connect travelers in a seamless and engaging
            way. By providing the tools and platform, we help people share
            experiences and make meaningful connections.
          </p>
          <p>
            Every feature has been carefully thought out to ensure user satisfaction,
            safety, and trust. We emphasize quality and reliability in everything we do.
          </p>
          <p>
            Meet our guiding educators, who inspired and supervised this project from
            start to finish.
          </p>
        </motion.div>

        {/* Lecturers Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center"
        >
          {lecturers.map((lecturer, idx) => (
            <a
              key={idx}
              href={lecturer.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-200 transition-transform hover:scale-105 w-full max-w-[260px]"
            >
              <div className="w-full h-[260px] sm:h-[280px] overflow-hidden">
                <Image
                  src={lecturer.imgSrc}
                  alt={lecturer.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-center px-2">
                  {lecturer.name}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Bottom Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          <p>
            We aim to bring innovative solutions to everyday problems for travelers,
            combining creativity with practical functionality.
          </p>
        </motion.div>

        {/* Bottom 3 Images */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[end1, end2, end3].map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
            >
              <div className="w-full h-56 sm:h-64 md:h-72 lg:h-64">
                <Image
                  src={img}
                  alt={`End image ${index + 1}`}
                  className="w-full h-full "
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Details;
