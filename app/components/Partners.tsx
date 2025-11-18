"use client";

import Image from "next/image";

export default function Partners() {
  const logos = [
    { src: "/logos/google.png", name: "NTC" },
    { src: "/logos/apple.png", name: "SriLanka Airlines" },
    { src: "/logos/meta.png", name: "SLITHM" },
    { src: "/logos/iitlogo.png", name: "IIT" },
    { src: "/logos/SLTDAlogo.png", name: "Sri Lanka Tourism Development Authority" },
  ];

  const loopLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-16">
      <div className="flex">
        <div className="flex animate-slide gap-10 whitespace-nowrap">
          {loopLogos.map((logo, i) => (
            <div
  key={i}
  className="flex items-center justify-center bg-white shadow-sm rounded-xl p-6 w-40 h-28"
>
  <Image
    src={logo.src}
    alt={logo.name}
    width={260}
    height={260}
    className="object-contain"
  />
</div>

          ))}
        </div>
      </div>
    </div>
  );
}
