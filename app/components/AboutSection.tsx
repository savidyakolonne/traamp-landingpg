import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50 flex flex-col items-center text-center">

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        About Us
      </h2>

      <p className="text-gray-600 max-w-2xl mb-8 text-lg">
        Traamp is built to help travelers explore destinations smarter.  
        Our mission is to connect tourists with local guides, discover hidden spots,
        and make every journey safer, easier, and more enjoyable.
      </p>

      <Link href="/about">
        <button className="px-8 py-3 bg-[#99C75C] text-white font-semibold rounded-lg hover:bg-[#86b351] transition-transform hover:scale-105 active:scale-95">
          More
        </button>
      </Link>

    </section>
  );
}
