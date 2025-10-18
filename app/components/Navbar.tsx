"use client"

import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Image from "next/image" 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-6 md:px-25 py-4 bg-white shadow-md relative">
      {/* Logo */}
       <div className="cursor-pointer">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <ul
        className={`md:flex md:items-center md:space-x-8 text-gray-700 ${
          isOpen
            ? "absolute top-23 left-0 w-full bg-white py-4 pl-6 opacity-100"
            : "absolute top-[-490px] left-0 w-full bg-white py-4 pl-6 opacity-0"
        } md:static md:w-auto md:py-0 md:pl-0 md:opacity-100 transition-all duration-300 ease-in-out`}
      >
        <li className="hover:text-green-400 cursor-pointer py-2 md:py-0">Home</li>
        <li className="hover:text-green-400 cursor-pointer py-2 md:py-0">Features</li>
        <li className="hover:text-green-400 cursor-pointer py-2 md:py-0">About</li>
        <li className="mt-4 md:mt-0">
          <button className="bg-green-400 text-white px-5 py-2 rounded-lg hover:bg-green-500 transition-all">
            Join Now
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
