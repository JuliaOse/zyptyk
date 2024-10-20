"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo2 from "@/app/assets/Featured icon (4).png";
import { caveat } from "@/app/fonts/fonts";
import CountUp from "react-countup";
import { Divider } from "@nextui-org/divider";

function Stats() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the section is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef?.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef?.current) {
        observer.unobserve(sectionRef?.current);
      }
    };
  }, []);
  return (
    <div className="self-center gap-10">
      <div
        ref={sectionRef}
        className="  text-center gap-10 flex flex-col items-center font-Inter"
      >
        <div>
          <Image src={Logo2} alt="logo" />
        </div>
        <div className="flex flex-col gap-5 sm:w-4/5 items-center">
          <p className="font-semibold text-4xl sm:w-2/3 text-center ">
            Developing Artificial Intelligence{" "}
            <span
              className={`${caveat.className} antialiased text-[#3973E1] font-bold`}
            >
              Responsibly
            </span>{" "}
            and
            <span
              className={`${caveat.className} antialiased text-[#3973E1] font-bold`}
            >
              Transparently
            </span>
            .
          </p>
          <p className="text-[#475467]">
            Empowering communities through digital health innovations. we are
            dedicated to advancing digitally enabled health services to close
            the health equity gap across Africa.
          </p>
        </div>
      </div>

      {/* <div className="flex gap-10 mt-10 justify-center items-center">
        {startCount && (
          <>
            <div className="text-center justify-center items-center ">
              <div className="items-center justify-center flex text-[#3973E1] font-semibold text-6xl gap-2">
                <CountUp
                  end={500}
                  duration={3}
                  className="text-[#3973E1] font-semibold text-6xl"
                />
                <span className="">+</span>
              </div>
              <p className="text-[#222222] font-medium">
                Across all 16 regions in Ghana
              </p>
            </div>
            <Divider
              orientation="vertical"
              style={{
                borderWidth: "1px",
                borderColor: "#909090",
                height: "80px",
              }}
            />
            <div className="text-center justify-center items-center">
              <div className="items-center justify-center flex text-[#3973E1] font-semibold text-6xl gap-2">
                <CountUp end={1000} duration={3} className="" />
                <span className="">+</span>
              </div>
              <p className="text-[#222222] font-medium">Empowered Clients</p>
            </div>
            <Divider
              orientation="vertical"
              style={{
                borderWidth: "1px",
                borderColor: "#909090",
                height: "80px",
              }}
            />
            <div className="text-center justify-center items-center">
              <CountUp
                end={150}
                duration={3}
                className="text-[#3973E1] font-semibold text-6xl"
              />
              <p className="text-[#222222] font-medium">
                Expert Collaborations
              </p>
            </div>
          </>
        )}
      </div> */}
      <div className="flex gap-10 mt-10 justify-center items-center sm:flex-row flex-col">
        {startCount && (
          <>
            <div className="text-center flex flex-col justify-center items-center">
              <div className="flex items-center justify-center text-[#3973E1] font-semibold text-6xl gap-2">
                {/* Fixed-width container for CountUp to prevent shifting */}
                <div className="w-[120px] text-right">
                  <CountUp end={500} duration={3} />
                </div>
                <span>+</span>
              </div>
              <p className="text-[#222222] font-medium">
                Across all 16 regions in Ghana
              </p>
            </div>

            <Divider
              orientation="vertical"
              style={{
                borderWidth: "1px",
                borderColor: "#909090",
                height: "80px",
              }}
              className="hidden sm:flex"
            />

            <div className="text-center flex flex-col justify-center items-center">
              <div className="flex items-center justify-center text-[#3973E1] font-semibold text-6xl gap-2">
                <div className="w-[150px] text-right">
                  <CountUp end={1000} duration={3} />
                </div>
                <span>+</span>
              </div>
              <p className="text-[#222222] font-medium">Empowered Clients</p>
            </div>

            <Divider
              orientation="vertical"
              style={{
                borderWidth: "1px",
                borderColor: "#909090",
                height: "80px",
              }}
              className="hidden sm:flex"
            />

            <div className="text-center flex flex-col justify-center items-center">
              <div className="flex items-center justify-center text-[#3973E1] font-semibold text-6xl gap-2">
                <div className="w-[90%] text-right">
                  <CountUp end={150} duration={3} />
                </div>
              </div>
              <p className="text-[#222222] font-medium">
                Expert Collaborations
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Stats;
