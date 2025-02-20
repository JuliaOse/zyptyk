import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import React from "react";

function Waitlist() {
  return (
    <div className="text-[#FFFFFF] bg-blue-gradient flex flex-col lg:flex-row justify-between p-6 lg:p-12 gap-28 items-center w-full rounded-lg">
      <div className="flex flex-col items-start justify-between gap-3">
        <span className="font-semibold text-2xl">Join 2,000+ subscribers</span>
        <span className="text-base">
          Stay in the loop with everything you need to know
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <div>
          <Input type="email" placeholder="Enter your email" />
          <span className="text-sm">
            We care about your data in our{" "}
            <a href='https://pages.flycricket.io/zomujo-2/privacy.html'><span className="underline">privacy policy</span></a>
          </span>
        </div>
        <div>
          <Button color="primary">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}

export default Waitlist;
