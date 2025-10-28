
import { Poppins } from "next/font/google"
import Image from "next/image"

// const playlist = localFont({
//   src: "/fonts/Playlist-Script.ttf", 
//   display: "swap",
// })

const poppins = Poppins({
  weight: ["700", "800"],
  subsets: ["latin"],
  display: "swap",
})

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-25 py-20 bg-gray-50">
      {/* Left Side */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <div className="mb-8">
          <h1 className="leading-tight">
            {/* Orange cursive text */}
            {/* <span
              className={`${playlist.className} block text-[2.5rem] md:text-[3rem]`}
              style={{
                color: "#ff9f1c",
                lineHeight: "0.9",
                textShadow:
                  "0 0 0 #fff, 0 2px 0 #fff, 0 6px 10px rgba(0,0,0,0.12)",
              }}
            >
              It&apos;s time to
            </span> */}

            {/* Big teal TRAAMP */}
            <span
              className={`${poppins.className} block text-[4.5rem] md:text-[5.5rem] font-extrabold`}
              style={{
                color: "#0f5660",
                lineHeight: "0.9",
              }}
            >
              Traamp
            </span>
          </h1>
        </div>

        <p className="text-gray-600 mb-8">
          Our platform helps you connect.
        </p>

        <div className="flex mt-6 space-x-4 pt-5">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/playstore.png"
              alt="Get it on Google Play"
              width={150}
              height={50}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/applestore.png"
              alt="Download on the App Store"
              width={150}
              height={50}
            />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/hero-image.png"
          alt="Hero"
          width={500}
          height={400}
          className="rounded-lg"
        />
      </div>
    </section>
  )
}

export default HeroSection
