import { CardInterface, CardTypes } from "@/app/types/CardTypes";
import Image from "next/image";
import React, { MouseEventHandler } from "react";

export default function Card({
  index,
  card,
  handleCardClick,
}: {
  index: number;
  card: CardInterface;
  handleCardClick: MouseEventHandler<HTMLDivElement>;
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
      className={`cursor-pointer w-16 h-24 bg-gray-50 rounded-md flex flex-row justify-center items-center border-black border gap-1 ${getCardColor(
        card.type,
        card.isToggled
      )}`}
      onClick={handleCardClick}
    >
      <Image
        src={`/${card.type}.png`}
        width={15}
        height={15}
        alt={`${card.type} ${card.number} 이미지`}
      />
      <div className="text-base">{card.number}</div>
    </div>
  );
}
