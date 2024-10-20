import React from "react";

type Props = {
  title: string;
};

function TitleCard({ title }: Props) {
  return (
    <div className="rounded-lg border-1 border-[#2222221A] py-2.5 px-3.5 w-fit ">
      <span className="text-[#3973E1]">{title}</span>
    </div>
  );
}

export default TitleCard;
