"use client";

import Image from "next/image";

export default function Partners() {
  const logos = [
    
    {
      src: "/logos/sltda.png",
      name: "Sri Lanka Tourism Development Authority",
      link: "https://www.sltda.gov.lk",
    },
    { src: "/logos/srilankatravel.png", name: "SriLanka.Travel", link: "https://srilanka.travel" },
    { src: "/logos/rdmns.png", name: "RDMNS", link: "https://rdmns.com" },
    
    { src: "/logos/suwaseriya.png", name: "Suwa Seriya 1990", link: "https://www.1990.lk/" },
  ];

  const loopLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-16">
      <div className="flex">
        <div className="animate-slide flex gap-14">
          {loopLogos.map((logo, i) => (
            <div key={i} className="inline-block">
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white shadow-lg rounded-2xl
                  p-6 w-60 h-64 
                  flex flex-col items-center justify-between
                  hover:scale-105 transition
                  text-center
                "
              >
                {/* EVEN BIGGER LOGO */}
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={200}
                  height={200}
                  className="object-contain max-h-40"
                />

                {/* TITLE */}
                <p className="text-sm font-semibold text-gray-800 leading-tight px-2 mt-2 break-words">
                  {logo.name}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
