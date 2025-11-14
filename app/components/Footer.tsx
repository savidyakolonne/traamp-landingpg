import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-[#06790E] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Traamp Logo"
              width={50}
              height={50}
              className="rounded-md"
            />
            <h1 className="text-2xl font-semibold italic text-[40px] text-[#71CD65]">
              Traamp
            </h1>
          </div>

          <p className="mt-4 leading-relaxed">
            Helping tourists discover amazing destinations and experiences
            <br></br>worldwide.
          </p>
        </div>

        <div>
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

        <div>
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

        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-5 text-2xl">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>

            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/40 mt-10 pt-5 text-center">
        <p className="text-sm">© 2025 Traamp. All rights reserved.</p>
      </div>
    </footer>
  );
}
