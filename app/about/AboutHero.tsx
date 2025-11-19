"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import small1 from "@/public/about/small1.jpg";
import small2 from "@/public/about/small2.jpg";
import side1 from "@/public/about/side1.jpg";
import side2 from "@/public/about/side2.jpg";
import big from "@/public/about/big.jpg";

const AboutHero = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-20 bg-gray-50">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-16"
      >
        Here's who we are <br className="hidden md:block" /> & what our project is about
      </motion.h2>

      {/* Layout Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT CARD (text + images) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 md:p-10"
          style={{ backgroundColor: "#CDE8B1" }}
        >
          {/* BLOCK 01 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Paragraph */}
            <p className="text-gray-800 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Curabitur ut ligula eu
              lectus tincidunt consequat.
            </p>

            {/* Image */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[260px] h-[330px] rounded-xl overflow-hidden shadow-lg">
                <Image src={side1} alt="Image 1" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="my-12 border-t border-gray-300"></div>

          {/* BLOCK 02 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Image LEFT on Desktop */}
            <div className="w-full flex justify-center order-1 md:order-none">
              <div className="w-full max-w-[260px] h-[330px] rounded-xl overflow-hidden shadow-lg">
                <Image src={side2} alt="Image 2" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-800 text-lg leading-relaxed">
              Sed efficitur, eros eu commodo venenatis, justo sapien malesuada
              nulla, nec volutpat magna nunc ut mi. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

          </div>
        </motion.div>

        {/* RIGHT CARD (2 small + 1 big image + text) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 md:p-10 flex flex-col gap-8"
        >
          {/* Two Small Images Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden hover:scale-105 transition duration-300">
              <Image src={small1} alt="Small 1" className="w-full h-40 md:h-48 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden hover:scale-105 transition duration-300">
              <Image src={small2} alt="Small 2" className="w-full h-40 md:h-48 object-cover" />
            </div>
          </div>

          {/* Text */}
          <p className="text-gray-800 text-lg leading-relaxed">
            We work with passion and clarity. Our team collaborates closely to
            bring ideas to life — combining design, technology and user
            experience into one seamless journey.
          </p>

          {/* Big Image */}
          <div className="rounded-lg overflow-hidden hover:scale-105 transition duration-300">
            <Image src={big} alt="Big Image" className="w-full h-56 md:h-80 object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;
