"use client";

import Card from "@/app/components/Card";
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
          <Card index={index} card={card} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}
