"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useRef } from "react";

import PramodyaImg from "@/public/about/Pramodya.jpg";
import SavidyaImg from "@/public/about/Savidya.jpg";
import LimashaImg from "@/public/about/Limasha.jpg";
import DinukiImg from "@/public/about/Dinuki.jpg";
import DiharaImg from "@/public/about/Dihara.jpg";
import DiyanaImg from "@/public/about/Diyana.jpg";


interface TeamMember {
  name: string;
  position: string;
  photo: StaticImageData;
  linkedin: string;
  github: string;
  instagram: string;
}


const teamMembers: TeamMember[] = [
  {
    name: "Pramodya Lakmuthu",
    position: "Developer",
    photo: PramodyaImg,
    linkedin: "http://linkedin.com/in/pramodya-lakmuthu-563a7b30a",
    github: "https://github.com/promaa-97",
    instagram: "https://www.instagram.com/p_r_o_m_a_a/",
  },
  {
    name: "Savidya Kolonne",
    position: "Developer",
    photo: SavidyaImg,
    linkedin: "https://www.linkedin.com/in/savidyakolonne/",
    github: "https://github.com/savidyakolonne",
    instagram: "https://www.instagram.com/savidyakolonne",
  },
  {
    name: "Limasha Githmal",
    position: "Developer",
    photo: LimashaImg,
    linkedin: "https://www.linkedin.com/in/limasha-githmal-867897322",
    github: "https://github.com/Limasha-Githmal",
    instagram: "https://www.instagram.com/limashagithmal/",
  },
  {
    name: "Dinuki Ranaweera",
    position: "Developer",
    photo: DinukiImg,
    linkedin: "https://www.linkedin.com/in/dinuki-ranaweera-46582827a",
    github: "https://gist.github.com/Dinuki-Ranaweera",
    instagram: "https://www.instagram.com/watashiwa.dinukiii",
  },
  {
    name: "Dihara Sathmi",
    position: "Developer",
    photo: DiharaImg,
    linkedin: "https://www.linkedin.com/in/dihara-palihakkara-3aa573334/",
    github: "https://github.com/Dihara2004",
    instagram: "https://www.instagram.com/dihara.sathmi",
  },
  {
    name: "Diyana Senadi",
    position: "Developer",
    photo: DiyanaImg,
    linkedin: "https://linkedin.com/in/diyana-senadi-jayasekara-65b0a4324",
    github: "https://github.com/Diyana1111",
    instagram: "https://www.instagram.com/diyana_1_1_1_1",
  },
];

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll Buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-4 sm:px-8 md:px-20 py-20 bg-gray-50 relative">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-14">
        Meet Our Team
      </h2>

      {/* LEFT ARROW */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute top-1/2 left-6 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition"
      >
        <FaArrowLeft size={22} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute top-1/2 right-6 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition"
      >
        <FaArrowRight size={22} />
      </button>

      {/* SCROLL AREA */}
      <motion.div
        ref={scrollRef}
        className="
          flex gap-8 overflow-x-auto scroll-smooth py-6 px-4 snap-x snap-mandatory
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
        "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            className="
              min-w-[240px] bg-white rounded-2xl shadow-lg border border-gray-200 
              p-6 flex flex-col items-center gap-4 flex-shrink-0 hover:shadow-xl 
              transition-all duration-300 snap-center
            "
            whileHover={{ scale: 1.05 }}
          >
            {/* PHOTO */}
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow">
              <Image
                src={member.photo}
                alt={member.name}
                width={130}
                height={130}
                className="object-cover w-full h-full"
              />
            </div>

            {/* NAME */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center">
              {member.name}
            </h3>

            {/* POSITION */}
            <p className="text-gray-600 text-sm md:text-base text-center">
              {member.position}
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 mt-2">
              <a href={member.linkedin} target="_blank" className="text-blue-600 hover:opacity-80">
                <FaLinkedin size={22} />
              </a>
              <a href={member.github} target="_blank" className="text-gray-900 hover:opacity-80">
                <FaGithub size={22} />
              </a>
              <a href={member.instagram} target="_blank" className="text-pink-500 hover:opacity-80">
                <FaInstagram size={22} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
