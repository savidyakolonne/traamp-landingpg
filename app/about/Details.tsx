"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Banu from "@/public/about/Banu.jpeg";
import Danushka from "@/public/about/Danushka.jpeg";

const lecturers = [
  {
    name: "Banu Athuraliya",
    role: "Lecturer | IIT • SDGP Module Leader",
    imgSrc: Banu,
    linkedIn: "https://www.linkedin.com/in/banuathuraliya/",
  },
  {
    name: "Dhanushka Surendra",
    role: "Lecturer | IIT • Project Supervisor",
    imgSrc: Danushka,
    linkedIn: "https://www.linkedin.com/in/dhanushka-surendra-rathnayake-776ba266/",
  },
];

const Details = () => {
  return (
    <section className="px-6 sm:px-12 md:px-20 lg:px-32 py-24 bg-white">

      {/* TOP DESCRIPTION */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-gray-700 flex flex-col gap-6"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          We are Team SE-01
        </h2>

        <p className="text-lg md:text-xl leading-relaxed">
          A passionate group of innovators from IIT & UOW, working to make travel
          safer and more connected.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          Guided by exceptional lecturers, we prioritized user trust, security,
          and real-world usability.
        </p>
      </motion.div>

      {/* LECTURER CARDS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-10 mt-20"
      >
        {lecturers.map((lec, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="w-72 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md 
                       hover:shadow-xl transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="h-56 w-full overflow-hidden">
              <Image
                src={lec.imgSrc}
                alt={lec.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col items-center pt-6 pb-7 px-5">
              <p className="text-xl font-bold text-gray-900">{lec.name}</p>
              <p className="text-gray-500 text-sm text-center mt-1">{lec.role}</p>

              {/* LINKEDIN BUTTON */}
              <a
                href={lec.linkedIn}
                target="_blank"
                className="mt-5 flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182]
                           text-white px-5 py-2.5 rounded-full text-sm font-medium
                           shadow-md transition-all"
              >
                
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5C4.98 4.6 4.07 5.5 2.98 5.5C1.89 5.5 0.98 4.6 0.98 3.5C0.98 2.4 1.89 1.5 2.98 1.5C4.07 1.5 4.98 2.4 4.98 3.5ZM0.98 22H4.98V7H0.98V22ZM8.98 7V22H12.84V14.5C12.84 12.57 13.36 10.76 15.76 10.76C18.13 10.76 18.16 12.83 18.16 14.63V22H22V13.76C22 9.42 20.15 7 16.57 7C14.23 7 12.84 8.26 12.26 9.34H12.2V7H8.98Z"/>
                </svg>

                LinkedIn
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Details;
