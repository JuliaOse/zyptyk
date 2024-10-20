import React from "react";
import { Divider } from "@nextui-org/divider";
import { caveat } from "@/app/fonts/fonts";

import LandingImage from "@/app/assets/LandingImage.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";

// import { Button } from "@nextui-org/button";
import arrowRight from "@/app/assets/arrowRight.png";

export default function LandingPage() {
  return (
    <div className="mx-auto flex flex-col  ">
      <div className="flex gap-10 sm:flex-row flex-col mb-4  justify-between">
        <div className="md:w-1/2 max-w-[600px] sm:max-h-28">
          <p className="font-bold text-5xl md:text-6xl leading-tight whitespace-normal">
            Connecting Africa for{" "}
            <span className={`${caveat.className} antialiased text-[#3973E1]`}>
              better
            </span>{" "}
            Health!
          </p>
        </div>
        <Divider
          orientation="vertical"
          style={{
            borderWidth: "1px",
            borderColor: "#909090",
            height: "120px",
          }}
          className="hidden sm:flex"
        />

        <div className="md:w-1/2">
          <p className="text-[#909AA8]">
            At Zyptyk, we are dedicated to advancing digitally enabled health
            services to close the health equity gap across Africa. A new era of
            healthcare in Africa, where every individual, regardless of
            circumstance, has access to transformative, digitally enabled health
            services
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:relative mt-10 self-center">
        <div>
          <Image
            src={LandingImage}
            // layout="responsive"
            width={1300}
            height={500}
            alt="landingImage"

            // className="w-full sm:flex-grow"
          />
        </div>
        <div className="my-4 flex flex-col w-full sm:flex-row sm:items-center  sm:absolute top-[80%] left-[5%] gap-4 transform sm:translate-y-0">
          <Button
            color="primary"
            className="py-4 px-7 bg-[#3973E1]  rounded-[8px] sm:h-16 sm:mr-2 text-[#FFFFFF] font-semibold text-md"
          >
            Discover more
          </Button>
          <Button
            className="py-4 px-7  border border-[#D0D5DD] sm:h-16 rounded-[8px] font-semibold text-md"
            color="primary"
            endContent={
              <Image
                src={arrowRight}
                alt="Arrow Right"
                width={10}
                height={10}
              />
            }
          >
            Explore our service
          </Button>
        </div>
      </div>
    </div>
  );
}
