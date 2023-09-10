"use client";

import Card from "@/app/components/Card";
import {
  CardInterface,
  CardNumberTypes,
  CardTypes,
} from "@/app/types/CardTypes";
import { useEffect, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [clubCards, setClubCards] = useState<CardInterface[]>([]);
  const [spadeCards, setSpadeCards] = useState<CardInterface[]>([]);
  const [heartCards, setHeartCards] = useState<CardInterface[]>([]);
  const [diamondCards, setDiamondCards] = useState<CardInterface[]>([]);

  useEffect(() => {
    const cardTypes: CardTypes[] = ["club", "spade", "heart", "diamond"];
    const cardNumbers: CardNumberTypes[] = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];

    // get all Cards
    cardTypes.forEach((cardType) => {
      cardNumbers.forEach((cardNumber) => {
        setCards((prev) => [
          ...prev,
          {
            type: cardType,
            number: cardNumber,
            isToggled: false,
          },
        ]);
      });
    });
  }, []);

  const handleClick = () => {};

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-4xl text-center">카드 카운팅</h1>
      <br />
      <div className="flex flex-row flex-wrap gap-4">
        {cards.map((card, index) => (
          <Card
            key={`${card.type}-${index}`}
            index={index}
            card={card}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
