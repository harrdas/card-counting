import { CardTypes } from "@/app/types/CardTypes";
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
  const getCardColor = (cardTypes: CardTypes) => {
    switch (cardTypes) {
      case "spade":
        return "text-blue-950";
      case "heart":
        return "text-pink-500";
      case "diamond":
        return "text-red-500";
      case "club":
        return "text-black";
      default:
        return "text-purple-500	";
    }
  };

  return (
    <div
      key={index}
      className={`cursor-pointer w-16 h-24 bg-gray-100 rounded-md flex flex-col justify-center items-center ${getCardColor(
        card.type
      )}`}
      onClick={handleClick}
    >
      <div className="text-base">{card.type}</div>
      <div className="text-base">{card.number}</div>
    </div>
  );
}
