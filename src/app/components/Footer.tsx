import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/Logo.png";

function Footer() {
    const Links = [
        { name: "Home", slug: "#home" },
        { name: "About", slug: "#about" },
        { name: "FAQs", slug: "#faqs" },
        { name: "Contact Us", slug: "#contact" },
        // { name: "Help", slug: "#help" },
        { name: "Privacy", slug: "https://pages.flycricket.io/zomujo-2/privacy.html" },
        { name: "Terms and Conditions", slug: "https://doc-hosting.flycricket.io/terms-and-condition-zomujo/f65c6b08-594f-496b-92f2-14f647252cf2/terms" },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center py-8">
            {/* Logo Section */}
            <div className="flex items-center mb-3">
                <Image src={Logo} width={100} height={100} alt="logo" />
            </div>

            {/* Links Section */}
            <ul className="lg:flex flex-wrap justify-center grid-cols-2 grid gap-6 m-4">
                {Links.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.slug}
                            className="text-sm text-[#475467] font-semibold hover:text-blue-600 transition-colors"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Divider */}
            <hr className="w-full border-t border-[#EAECF0] m-6" />

            {/* Copyright Section */}
            <div>
        <span className="text-base text-gray-600">
          © {currentYear} Zyptyk. All rights reserved.
        </span>
            </div>
        </footer>
    );
}

export default Footer;
