import { CardInterface, CardTypes } from "@/app/types/CardTypes";
import React from "react";

export default function Card({
  index,
  card,
  handleCardClick,
}: {
  index: number;
  card: CardInterface;
  handleCardClick: Function;
}) {
  const getCardColor = (type: CardTypes, isToggled: boolean) => {
    if (isToggled) {
      return "bg-gray-600";
    }

    switch (type) {
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
      className={`cursor-pointer w-16 h-24 bg-gray-50 rounded-md flex flex-col justify-center items-center border-black border ${getCardColor(
        card.type,
        card.isToggled
      )}`}
      onClick={handleCardClick}
    >
      <div className="text-sm">{card.type}</div>
      <div className="text-sm">{card.number}</div>
    </div>
  );
}
