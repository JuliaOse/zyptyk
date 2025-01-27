import TitleCard from "@/app/components/TitleCard";
import React from "react";
import { Inter } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import icon1 from "@/app/assets/Featured icon.png";
import icon2 from "@/app/assets/Featured icon (1).png";
import icon3 from "@/app/assets/Featured icon (2).png";
import icon4 from "@/app/assets/Featured icon (3).png";

const inter = Inter({ subsets: ["latin"] });

type cardProps = {
  icon: StaticImageData;
  header: string;
  desc: string;
};

const Card = ({ icon, header, desc }: cardProps) => {
  return (
    <div className="flex flex-col justify-center text-center items-center sm:w-2/3 m-3 gap-2">
      <div>
        <Image src={icon} alt="icon" width={40} />
      </div>
      <div>
        <p className="font-medium text-lg">{header}</p>
      </div>
      <div>
        <p className="text-[#475467] text-base">{desc}</p>
      </div>
    </div>
  );
};

const solns = [
  {
    icon: icon1,
    header: "Health Systems Transformation",
    desc: "We offer comprehensive solutions to modernize and optimize healthcare delivery systems, improving efficiency and patient outcomes.",
  },
  {
    icon: icon2,
    header: "Technology & Innovation",
    desc: "Explore our innovative technologies that are reshaping the future of healthcare in Africa.",
  },
  {
    icon: icon3,
    header: "Environmental Sustainability",
    desc: "Discover how we integrate sustainability into healthcare practices to minimize environmental impact.",
  },
  {
    icon: icon4,
    header: "Equitable Access & Outcomes ",
    desc: "Explore our innovative technologies that are reshaping the future of healthcare in Africa.",
  },
];

function Solutions() {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-20 ${inter.className}`}
    >
      <TitleCard title="Solutions" />
      <div className="sm:w-3/5  text-center gap-5 flex flex-col font-Inter">
        <p className="font-semibold text-4xl  ">
          Our commitment to building clinical AI systems.
        </p>
        <p className="text-[#475467]">
          Through innovative solutions and strategic partnerships, we aim to
          transform health systems and foster technological innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {solns.map((solution, index) => (
          <Card
            key={index}
            header={solution.header}
            icon={solution.icon}
            desc={solution.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Solutions;
