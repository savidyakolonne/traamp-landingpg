import Image from "next/image";
import Link from "next/link";

export default function WhySection() {
  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-20 py-20 bg-gray-50 gap-5">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
        Why Traamp?
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition flex flex-col items-center text-center">
          <Image
            src="/icons/Link.svg"
            alt="Connect"
            width={80}
            height={80}
            className="mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Connect</h3>
          <p className="text-gray-600">
            Easily find trusted guides, travelers, and local experts to enhance your journey.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition flex flex-col items-center text-center">
          <Image
            src="/icons/Google maps.svg"
            alt="Recommendations"
            width={80}
            height={80}
            className="mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Recommendations</h3>
          <p className="text-gray-600">
            Discover hidden spots, popular attractions, and personalized suggestions with our interactive map.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition flex flex-col items-center text-center">
          <Image
            src="/icons/Trust.svg"
            alt="Trust"
            width={80}
            height={80}
            className="mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Trust</h3>
          <p className="text-gray-600">
            Verified profiles, honest reviews, and secure connections built for safe travel experiences.
          </p>
        </div>

      </div>

      {/* Button */}
      <div className="mt-8">
        <Link href="/features">
          <button className="group px-8 py-3 bg-green-400 rounded-lg text-white font-semibold cursor-pointer active:scale-95 transition duration-300 hover:bg-green-500">
            <p className="relative h-6 overflow-hidden">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                Explore Features
              </span>
              <span className="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:-translate-y-full">
                Explore Features
              </span>
            </p>
          </button>
        </Link>
      </div>

    </section>
  );
}
