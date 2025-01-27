import TitleCard from "@/app/components/TitleCard";
import React from "react";
import { Inter } from "next/font/google";
import FeaturesCard from "@/app/components/FeaturesCard";
import Image from "next/image";
import featImg from "@/app/assets/featImage.png";
import featImg2 from "@/app/assets/featImg2.png";
import featImg3 from "@/app/assets/featImg3.png";

const inter = Inter({ subsets: ["latin"] });

const features = [
  {
    header: "Mental Health",
    desc: "Addressing mental health issues through digital interventions and support systems.",
  },
  {
    header: "Healthcare Financing",
    desc: "Innovating financial models to make healthcare affordable and accessible.",
  },
  {
    header: "Interoperability & Health Information Exchange",
    desc: "Facilitating seamless data exchange among healthcare providers for improved patient care.",
  },
  {
    header: "Public Health Surveillance & Response",
    desc: "Leveraging technology for early detection and effective management of public health threats.",
  },
  {
    header: "Healthcare Analytics & Insights",
    desc: "Harnessing data analytics to drive informed decision-making and improve health outcomes",
  },
  {
    header: "Telehealth & Remote Consultations:",
    desc: "Expanding access to healthcare services through virtual consultations and remote monitoring.",
  },
];

function Features() {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-20 ${inter.className}`}
    >
      <TitleCard title="About Us" />
      <div className="sm:w-2/3 text-center gap-5 flex flex-col font-Inter">
        <p className="font-semibold text-4xl ">
          Advancing Digitally Enabled Health Services to Close the Health Equity
          Gap
        </p>
        <p className="text-[#475467]">
          Empowering communities through digital health innovations to bridge
          the gap in healthcare accessibility and ensure equitable healthcare
          for all
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {features.map((feature, index) => (
            <FeaturesCard
              key={index}
              header={feature.header}
              desc={feature.desc}
            />
          ))}
        </div>
        <div className="space-y-4 flex flex-col">
          <div>
            <Image
              src={featImg}
              width={2300}
              // layout="responsive"
              alt="doc"
              className="rounded-2xl "
            />
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-5">
            <Image
              src={featImg2}
              // layout="responsive"
              alt="doc"
              width={290}
              height={304}
              className="rounded-2xl  w-full sm:flex-grow "
            />
            <Image
              src={featImg3}
              // layout="responsive"
              alt="doc"
              width={290}
              height={304}
              className="rounded-2xl  w-full sm:flex-grow "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
