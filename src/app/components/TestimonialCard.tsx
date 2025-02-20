import React from "react";
import { Card, CardBody } from "@nextui-org/react";

type Props = {
  review: string;
  name: string;
  tag: string;
};
//{review, name t
function TestimonialCard({ review, name, tag }: Props) {
  return (
    <Card className="flex flex-col  w-3/4 text-[#333274] border-none p-3">
      <CardBody className="justify-between gap-4 border-none">
        <div>
          <p className="text-base">{review}</p>
        </div>
        <div className="flex flex-col">
          <span className="font-medium">{name}</span>
          <span>{tag}</span>
        </div>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;
