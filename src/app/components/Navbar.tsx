"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/app/assets/Logo.png";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  //   const menuItems = ["Home", "About", "Contact"];
  useEffect(() => {
    // Disable body scrolling when the menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up when component unmounts or state changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div className=" flex flex-row items-center justify-between m-2">
      <div className="m-3">
        <Image src={Logo} alt="Logo" width={120} />
      </div>
      <div className="hidden md:flex">
        <ol className="inline-flex gap-8 font-semibold text-[#475467] ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ol>
      </div>
      <div className="flex md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <svg
            className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        className={` fixed inset-0 bg-white flex flex-col items-center justify-center transition-transform transform ${
          isOpen ? "translate-y-0 " : "-translate-y-full"
        } duration-300 ease-in-out md:hidden z-40 `}
      >
        <div className="flex flex-col overflow-hidden items-center justify-start ">
          <a
            // href="#home"
            className="text-2xl text-gray-700 hover:text-blue-600"
          >
            Home
          </a>
          <a
            // href="#about"
            className="text-2xl text-gray-700 hover:text-blue-600"
          >
            About
          </a>
          <a
            // href="#contact"
            className="text-2xl text-gray-700 hover:text-blue-600"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
