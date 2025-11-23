"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import image1 from "@/public/about/image1.jpg";
import image2 from "@/public/about/image2.jpg";
import side1 from "@/public/about/side1.jpg";
import side2 from "@/public/about/side2.jpg";
import image3 from "@/public/about/image3.png";

const AboutHero = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-gray-50">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-12"
      >
        Here's who we are <br className="hidden md:block" /> & what our project is about
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col gap-6"
          style={{ backgroundColor: "#CDE8B1" }}
        >
          {/* BLOCK 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-900 text-3xl font-bold leading-snug">
              So as you know a lot about TRAMMP by now, but what about the team behind it?
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-[200px] h-[180px] rounded-xl overflow-hidden ">
                <Image src={side1} alt="Side 1" className="w-full h-full object-contain" />
              </div>

            </motion.div>
          </div>

          <div className="border-t border-gray-300"></div>

          {/* BLOCK 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center order-1 md:order-none"
            >
              <div className="w-full max-w-[200px] h-[180px] rounded-xl overflow-hidden shadow-md">
                <Image src={side2} alt="Side 2" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <p className="text-gray-900 text-2xl font-bold leading-snug">
              Find out who this team is and what they are all about. Discover our journey
              and the people who made it possible.
            </p>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col gap-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-md h-[130px] hover:scale-105 transition">
              <Image src={image1} alt="image1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md h-[130px] hover:scale-105 transition">
              <Image src={image2} alt="image2" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="text-gray-800 text-base md:text-lg leading-snug">
            Our team blends creativity, innovation, and teamwork to build something meaningful.
            Every idea is shaped with dedication, purpose, and a strong focus on user experience.
          </p>

          <div className="rounded-xl overflow-hidden shadow-md h-[200px] hover:scale-105 transition">
            <Image src={image3} alt="image3" className="w-full h-full object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;
