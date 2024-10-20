import React from "react";
import Image from "next/image";
import check from "@/app/assets/Check icon.png";

type Props ={
  header: string;
  desc: string
}

function FeaturesCard({header, desc}: Props) {
  return (
    <div className="flex flex-row items-baseline gap-2   m-4">
      <Image src={check} alt="check" width={20} />
      <div className="flex flex-col items-start gap-2">
        <span className="text-[#181818] text-lg font-semibold">{header}</span>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default FeaturesCard;
