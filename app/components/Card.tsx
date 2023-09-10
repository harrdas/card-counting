import React from "react";

export default function Card({
  index,
  card,
  handleClick,
}: {
  index: number;
  card: any;
  handleClick: any;
}) {
  return (
    <div
      key={index}
      className={`cursor-pointer w-16 h-24 bg-gray-100 rounded-md flex flex-col justify-center items-center ${
        card.color === "red" ? "text-red-500" : "text-black-500"
      }`}
      onClick={handleClick}
    >
      <div className="text-base">{card.type}</div>
      <div className="text-base">{card.number}</div>
    </div>
  );
}
