import React from "react";
import ministry from "@/app/assets/ministry.png";
import Image from "next/image";
import youth from "@/app/assets/youth.png";
import mhath from "@/app/assets/mhath.png";
import UG from "@/app/assets/UG.png";
import Uhas from "@/app/assets/Uhas.png";
import KGL from "@/app/assets/KGL.png";
import GPC from "@/app/assets/GPC.png";
import knust from "@/app/assets/knust.png";

function Partners() {
  const partners = [ministry, youth, mhath, UG, Uhas, knust, GPC, KGL];
  return (
    <div>
      <div className="flex justify-center">
        <p>Trusted by:</p>
      </div>
      <div className="flex items-center  justify-around overflow-hidden whitespace-nowrap ">
        {partners.map((partner, index) => (
          <div key={index} className="flex-1 min-w-[40px] max-w-[80px] m-2  ">
            {/* Adjust min-width as needed */}
            <Image
              src={partner}
              width={80}
              height={80}
              alt="partner"
              className="w-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
