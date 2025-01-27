"use client";
import TitleCard from "@/app/components/TitleCard";
import React from "react";
import Image from "next/image";
import {Accordion, AccordionItem} from "@nextui-org/react";
import plus from "@/app/assets/plus-circle.png";
import minus from "@/app/assets/Icon wrap.png";

function Faq() {
    const questions = [
        {
            title: "Is there a free trial available?",
            answer:
                "No, but peer counseling services are free and available to anyone who needs guidance, emotional support, or a listening ear.",
        },
        {
            title: "Can I change my plan later?",
            answer:
                "You can't switch between plans once you've chosen one. The platform will automatically use your selected plan, either a Subscription with bundled packages or Pay-as-you-go with one-time payments. However, you can purchase another plan if needed based on your usage.",
        },
        {
            title: "What is your cancellation policy?",
            answer:
                "There's no need to cancel. Subscription plans are one-time purchases with no future charges unless you buy another. Pay-as-you-go plans are also one-time payments. All plans are non-refundable, and no additional charges will occur unless you make a new purchase.",
        },
        // {
        //     title: "Can other info be added to an invoice?",
        //     answer:
        //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresreprehenderit debitis soluta",
        // },
        {
            title: "How does billing work?",
            answer:
                "We offer two flexible billing options to suit your needs: Subscription and Pay-as-you-go. The Subscription plan provides bundled packages designed for ongoing usage, offering convenience and value for regular users. On the other hand, the Pay-as-you-go option allows for one-time payments, giving you the flexibility to pay only for what you use without any long-term commitment.",
        },
        {
            title: "How do I change my account email?",
            answer:
                " To change your account email, go to the Profile screen and navigate to the Settings section. From there, select Edit Profile, where you'll find the option to update your email address. Simply make the changes and update them.",
        },
    ];
    return (
        <div className="flex flex-col gap-10  items-center justify-center">
            <div className="items-center justify-center flex flex-col gap-10">
                <TitleCard title="Questions"/>
                <div className="items-center justify-center flex flex-col gap-5">
          <span className="font-semibold text-center text-4xl text-[#101828]">
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
            <div className="w-[120%] lg:w-4/6 p-4 flex flex-col justify-between items-stretch">
                <Accordion>
                    {questions.map((question, index) => (
                        <AccordionItem

                            key={index}
                            aria-label="Anchor"
                            indicator={({isOpen}) => (
                                <div className="flex flex-row justify-between w-full items-center">

                                    {/* Title on the left */}
                                    <div>
                                        <Image
                                            width={15}
                                            src={isOpen ? minus : plus}
                                            alt={isOpen ? "minus icon" : "plus icon"}
                                            className="ml-auto" // Ensure icon is aligned to the right
                                        />
                                    </div>
                                </div>
                            )}
                            // title=
                            startContent={question.title}

                            // style={{textAlign: "end",}}
                        >
                            {question.answer}
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>


        </div>
    );
}

export default Faq;
