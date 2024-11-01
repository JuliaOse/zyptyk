import TestimonialCard from "@/app/components/TestimonialCard";
import TitleCard from "@/app/components/TitleCard";

import React from "react";

function Testimonial() {
  const Testimonials = [
    {
      review:
        "Their strategic partnerships with key stakeholders have been instrumental in expanding the reach of mental health services to underserved areas",
      name: "Alex Rivera",
      tag: "@jamietechguru00",
    },
    {
      review:
        "I am truly impressed with their commitment to empowering local communities in mental health.",
      name: "Casey Jordan",
      tag: "@caseyj",
    },
    {
      review:
        "Their AI-powered platform is a game-changer in the health landscape. It has the potential to reach millions of individuals in need.",
      name: "Jordan Patels",
      tag: "@jpatelsdesign",
    },
    {
      review:
        "They understand the importance of tailoring mental health services to meet the unique needs of our diverse communities.",
      name: "Josh Smith",
      tag: "@jjsmith",
    },
    {
      review:
        "Their strategic partnerships with key stakeholders have been instrumental in expanding the reach of mental health services to underserved areas",
      name: "Dr. Emmanuel Odame ",
      tag: "Former Director, PPME, Ministry of Health",
    },
    {
      review:
        "I am truly impressed with their commitment to empowering local communities in  healthcare.",
      name: "Sam Dawson",
      tag: "@dawsontechtips",
    },
    {
      review:
        "Zyptyk’s focus on culturally sensitive interventions sets them apart.",
      name: "Dr. Wisdom Atiwoto",
      tag: "Director of Research, Ministry of Health",
    },
    {
      review:
        "Zyptyk’s innovative use of technology, particularly their AI-powered platform, is a testament to their forward-thinking approach to health care.",
      name: "Riley Smith",
      tag: "@rileysmith1",
    },
    {
      review:
        "Their AI-powered platform is a game-changer in the health landscape. It has the potential to reach millions of individuals in need.",
      name: "Horen Quarshiga",
      tag: "Director, RSM, Ministry of Youth & Sports",
    },
  ];
  return (
    <div className="items-center justify-center flex flex-col">
      <div className="items-center justify-center flex flex-col gap-8">
        <TitleCard title="Testimonial" />
        <span className="font-semibold text-4xl">What our users say</span>
      </div>
      <div className="scroll-shadow-top carousel-container p-8 justify-items-center ">
        <div className="carousel-content ">
          {/* grid grid-cols-1 md:grid-cols-3 gap-2 */}
          <div className=" items-start justify-center  grid grid-cols-1 md:grid-cols-3 gap-y-2">
            {Testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                review={testimonial.review}
                name={testimonial.name}
                tag={testimonial.tag}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
