import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/Logo.png";

function Footer() {
  const Links = [
    "Home",
    "Features",
    "FAQ",
    "Contact Us",
    "Help",
    "Privacy",
    "Terms and Conditions",
  ];

  return (
    <footer className="flex flex-col items-center py-8">
      {/* Logo Section */}
      <div className="flex items-center mb-3">
        <Image src={Logo} width={100} height={100} alt="logo" />
        {/* <h1 className="ml-2 text-xl font-semibold text-gray-800">Zyptyk</h1> */}
      </div>

      {/* Links Section */}
      <ul className="flex flex-wrap justify-center gap-6 m-4">
        {Links.map((link, index) => (
          <li key={index}>
            <a
              href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm text-[#475467] font-semibold hover:text-blue-600 transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <hr className="w-full border-t border-[#EAECF0] m-6" />

      {/* Copyright Section */}
      <div>
        <span className="text-base text-gray-600">
          © 2024 Zyptyk. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
