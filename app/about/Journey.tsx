"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const journeyData = [
  {
    year: "October 2025",
    title: "Interview with Government",
    description:
      "Initial research and planning phase for Traamp. Established core team and project vision.",
    images: ["/about/small1.jpg", "/about/small1.jpg", "/about/small1.jpg"],
  },
  {
    year: "December 2025",
    title: "Development Phase",
    description:
      "Building core features and establishing the technical infrastructure.",
    images: ["/about/small1.jpg", "/about/small1.jpg", "/about/small1.jpg"],
  },
];

const Journey = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center">
          Our Journey
        </h2>

        <div className="relative">

          {/* Centered timeline line for md+, left on mobile */}
          <div className="hidden md:block absolute left-10 top-0 bottom-0 w-1 bg-black/20 rounded" />
          <div className="block md:hidden absolute left-6 top-0 bottom-0 w-1 bg-black/20 rounded" />

          <div className="flex flex-col gap-12">
            {journeyData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 * (i % 2 ? 1 : -1) }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative md:pl-28 pl-14"
              >
                {/* Timeline Dot */}
                <div
                  className="absolute -left-[0.7rem] md:-left-[0.95rem] top-1.5 
                             w-4 h-4 rounded-full bg-black border-4 border-white shadow-md"
                />

                {/* Card */}
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">

                    {/* Year */}
                    <div className="w-full sm:w-28">
                      <div className="font-semibold text-sm sm:text-base text-gray-900">
                        {item.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-2xl font-extrabold leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-gray-700 mt-2 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>

                      {/* Images */}
                      {item.images && item.images.length > 0 && (
                        <div className="mt-4">
                          <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                            {item.images.map((img, idx) => (
                              <div
                                key={idx}
                                className="rounded-lg overflow-hidden shadow-md border border-gray-200"
                              >
                                <div className="w-full h-20 md:h-24 relative">
                                  <Image
                                    src={img}
                                    alt={`${item.title} ${idx + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 120px"
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
