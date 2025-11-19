"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useRef } from "react";

interface TeamMember {
  name: string;
  position: string;
  photo: string;
  linkedin: string;
  github: string;
  instagram: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alice Johnson",
    position: "Frontend Developer",
    photo: "/team/alice.jpg",
    linkedin: "https://www.linkedin.com/in/alicejohnson",
    github: "https://github.com/alicejohnson",
    instagram: "https://www.instagram.com/alicejohnson",
  },
  {
    name: "Bob Smith",
    position: "Backend Developer",
    photo: "/team/bob.jpg",
    linkedin: "https://www.linkedin.com/in/bobsmith",
    github: "https://github.com/bobsmith",
    instagram: "https://www.instagram.com/bobsmith",
  },
  {
    name: "Charlie Lee",
    position: "UI/UX Designer",
    photo: "/team/charlie.jpg",
    linkedin: "https://www.linkedin.com/in/charlielee",
    github: "https://github.com/charlielee",
    instagram: "https://www.instagram.com/charlielee",
  },
  {
    name: "Diana King",
    position: "Fullstack Developer",
    photo: "/team/diana.jpg",
    linkedin: "https://www.linkedin.com/in/dianaking",
    github: "https://github.com/dianaking",
    instagram: "https://www.instagram.com/dianaking",
  },
  {
    name: "Ethan Wright",
    position: "DevOps Engineer",
    photo: "/team/ethan.jpg",
    linkedin: "https://www.linkedin.com/in/ethanwright",
    github: "https://github.com/ethanwright",
    instagram: "https://www.instagram.com/ethanwright",
  },
  {
    name: "Fiona Davis",
    position: "Project Manager",
    photo: "/team/fiona.jpg",
    linkedin: "https://www.linkedin.com/in/fionadavis",
    github: "https://github.com/fionadavis",
    instagram: "https://www.instagram.com/fionadavis",
  },
];

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.7;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-4 sm:px-8 md:px-20 py-20 bg-gray-50 relative">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-14">
        Meet Our Team
      </h2>

      {/* Desktop Arrows */}
      <div className="hidden md:flex absolute top-1/2 left-5 -translate-y-1/2 z-20">
        <button
          onClick={() => scroll("left")}
          className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
        >
          <FaArrowLeft size={22} />
        </button>
      </div>

      <div className="hidden md:flex absolute top-1/2 right-5 -translate-y-1/2 z-20">
        <button
          onClick={() => scroll("right")}
          className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
        >
          <FaArrowRight size={22} />
        </button>
      </div>

      {/* Team Horizontal Scroll */}
      <motion.div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-6 px-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* left padding for smooth scroll spacing */}
        <div className="min-w-[10px]"></div>

        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            className="min-w-[200px] sm:min-w-[220px] md:min-w-[250px] 
                      bg-white rounded-2xl shadow-lg border border-gray-200 
                      p-6 flex flex-col items-center gap-4 flex-shrink-0 
                      hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-full shadow">
              <Image
                src={member.photo}
                alt={member.name}
                width={130}
                height={130}
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center">
              {member.name}
            </h3>

            <p className="text-gray-600 text-sm md:text-base text-center">
              {member.position}
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-3">
              <a
                href={member.linkedin}
                target="_blank"
                className="text-blue-600 hover:opacity-80"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href={member.github}
                target="_blank"
                className="text-gray-900 hover:opacity-80"
              >
                <FaGithub size={22} />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                className="text-pink-500 hover:opacity-80"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </motion.div>
        ))}

        {/* right padding */}
        <div className="min-w-[10px]"></div>
      </motion.div>
    </section>
  );
};

export default Team;
