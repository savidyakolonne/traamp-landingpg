import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-[#06790E] text-white py-12 px-6 md:px-40">
      <div className="
        max-w-7xl mx-auto 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
        gap-12 
        text-center md:text-left
      ">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <Image
              src="/logo.png"
              alt="Traamp Logo"
              width={50}
              height={50}
              className="rounded-md"
            />
            <h1 className="text-[40px] font-semibold text-[#71CD65]">
              Traamp
            </h1>
          </div>

          <p className="mt-4 leading-relaxed max-w-sm">
            Helping tourists discover amazing destinations and experiences
            worldwide.
          </p>
        </div>

        {/* Get to Know Us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-3">Get to Know Us</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:underline">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                F&Qs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>

          <div className="flex space-x-6 text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-[#71CD65]">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#71CD65]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#71CD65]">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#71CD65]">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-white/40 mt-10 pt-5 text-center">
        <p className="text-sm">© 2025 Traamp. All rights reserved.</p>
        <p className="text-sm"> Developed by SE-01</p>
        
      </div>
    </footer>
  );
}
