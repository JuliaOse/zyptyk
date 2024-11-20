"use client";

import React, { useEffect, useState } from "react";
import DottedMap from "dotted-map/without-countries";
import Image from "next/image";
import { caveat } from "@/app/fonts/fonts";
import TitleCard from "@/app/components/TitleCard";
import ContactForm from "@/app/components/ContactForm";
import Waitlist from "@/app/components/Waitlist";
// import Footer from "@/app/components/Footer";

const ContactPage: React.FC = () => {
  const [svgMap, setSvgMap] = useState<string>("");

  useEffect(() => {
    const fetchMapData = async () => {
      if (typeof window !== "undefined") {
        try {
          // Fetch the precomputed map JSON from the public folder
          const response = await fetch("./myMap.json");
          const mapJsonString = await response.text();

          // Create a DottedMap instance with the precomputed JSON
          const map = new DottedMap({ map: JSON.parse(mapJsonString) });

          // Add pins to the map
          map.addPin({
            lat: 5.6037,
            lng: -0.187,
            svgOptions: { color: "#0050E5", radius: 0.7 },
          });

          // Generate the SVG map
          const svg = map.getSVG({
            radius: 0.17,
            color: "#d0d5dd",

            shape: "circle",
            // backgroundColor: "#020300",
          });

          setSvgMap(svg);
        } catch (error) {
          console.error("Error generating SVG map:", error);
        }
      }
    };

    fetchMapData();
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="items-center justify-center flex flex-col gap-10">
        <TitleCard title="Contact Us" />
        <div className="items-center justify-center flex flex-col gap-5">
          <p className="font-semibold text-center text-4xl text-[#101828]">
            We’d{" "}
            <span className={`${caveat.className} antialiased text-[#FE7575]`}>
              love
            </span>{" "}
            to hear from you
          </p>
          <span className="text-[#475467] text-center">
            We’re only just getting started on our journey{" "}
          </span>
        </div>
        {/* Render the SVG map if available */}

        {svgMap && (
          <Image
            width={1120}
            height={1010}
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
            alt="Dotted Map"
            className="hidden lg:block"
          />
        )}
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 justify-between w-full lg:w-[60%]">
        <div className=" flex flex-col items-center gap-3">
          <p className="text-[#101828] font-semibold text-lg">Location</p>
          <p className="text-[#475467] font-normal text-base">
            Korle-Bu, Accra. Ghana
          </p>
          <p className="text-[#0050E5] font-semibold text-base">
            admin@zyptyk.com
          </p>
        </div>
        <div className=" flex flex-col items-center gap-3">
          <p className="text-[#101828] font-semibold text-lg">Phone</p>
          <p className="text-[#475467] font-normal text-base">
            Mon-Fri from 8am to 5pm.
          </p>
          <p className="text-[#0050E5] font-semibold text-base">
            + (233) 0303-955992
          </p>
        </div>
      </div>
      <div className="gap-20 flex flex-col">
        <ContactForm />
        <Waitlist />
      </div>
      {/* <div></div> */}
    </div>
  );
};

export default ContactPage;
