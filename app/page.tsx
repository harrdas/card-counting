"use client";

import { useEffect, useState } from "react";

interface Card {
  type: "spade" | "heart" | "diamond" | "club";
  number:
    | "A"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "J"
    | "Q"
    | "K";
  color: "red" | "black";
  isToggled: boolean;
}

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const cardTypes: ("spade" | "heart" | "diamond" | "club")[] = [
      "spade",
      "heart",
      "diamond",
      "club",
    ];
    const cardNumbers: (
      | "A"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "J"
      | "Q"
      | "K"
    )[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    cardTypes.forEach((cardType) => {
      cardNumbers.forEach((cardNumber) => {
        setCards((prev) => [
          ...prev,
          {
            type: cardType,
            number: cardNumber,
            color:
              cardType === "spade" || cardType === "club" ? "black" : "red",
            isToggled: false,
          },
        ]);
      });
    });
  }, []);

  const handleClick = () => {};

  return (
    <div className="p-4">
      <h1 className="text-4xl">카드 카운팅</h1>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        {cards.map((card, index) => (
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
        ))}
      </div>
    </div>
  );
}
