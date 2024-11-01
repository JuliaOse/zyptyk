"use client";
import TitleCard from "@/app/components/TitleCard";
import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import plus from "@/app/assets/plus-circle.png";
import minus from "@/app/assets/Icon wrap.png";

function Faq() {
  const questions = [
    {
      title: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can i change my plan later?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresreprehenderit debitis soluta",
    },
    {
      title: "What is your cancellation policy?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresreprehenderit debitis soluta",
    },
    {
      title: "Can other info be added to an invoice?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresreprehenderit debitis soluta",
    },
    {
      title: "How does billing work?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresreprehenderit debitis soluta",
    },
    {
      title: "How do i change my account email?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresreprehenderit debitis soluta",
    },
  ];
  return (
    <div className="flex flex-col  items-center justify-center">
      <div className="items-center justify-center flex flex-col gap-10">
        <TitleCard title="Questions" />
        <div className="items-center justify-center flex flex-col gap-5">
          <span className="font-semibold text-4xl text-[#101828]">
            Frequently asked questions
          </span>
          <span className="text-[#475467]">
            Everything you need to know about the product an billing
          </span>
        </div>
      </div>
      {/* <div className="w-3/6 flex flex-col justify-between items-stretch">
        <Accordion className="items-center justify-center">
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              aria-label="Anchor"
              indicator={({ isOpen }) => (
                <Image
                  src={isOpen ? minus : plus}
                  alt={isOpen ? "plus icon" : "minus icon"}
                />
              )}
              className="items-center justify-start m-2 "
              title={question.title}
            >
              {question.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div> */}
      <div className="w-3/6 flex flex-col justify-between items-stretch">
        <Accordion>
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              aria-label="Anchor"
              indicator={({ isOpen }) => (
                <div className="flex justify-between w-full items-center">
                  <span className="text-[#101828] font-semibold ">
                    {question.title}
                  </span>{" "}
                  {/* Title on the left */}
                  <Image
                    src={isOpen ? minus : plus}
                    alt={isOpen ? "minus icon" : "plus icon"}
                    className="ml-auto" // Ensure icon is aligned to the right
                  />
                </div>
              )}
            >
              {question.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* //text-[#101828] font-semibold */}
    </div>
  );
}

export default Faq;
