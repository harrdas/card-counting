"use client";

import Card from "@/app/components/Card";
import {
  CardInterface,
  CardNumberTypes,
  CardTypes,
} from "@/app/types/CardTypes";
import { useState } from "react";

export default function Home() {
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

  const initializeCards = (type: CardTypes) =>
    cardNumbers.map((cardNumber) => ({
      type: type,
      number: cardNumber,
      isToggled: false,
    }));

  const [clubCards, setClubCards] = useState<CardInterface[]>(
    initializeCards("club")
  );
  const [spadeCards, setSpadeCards] = useState<CardInterface[]>(
    initializeCards("spade")
  );
  const [heartCards, setHeartCards] = useState<CardInterface[]>(
    initializeCards("heart")
  );
  const [diamondCards, setDiamondCards] = useState<CardInterface[]>(
    initializeCards("diamond")
  );

  const handleClick = () => {};

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-4xl text-center">카드 카운팅</h1>
      <br />
      <div className="flex flex-row flex-wrap gap-4 mb-6">
        {clubCards.map((card, index) => (
          <Card
            key={`${card.type}-${index}`}
            index={index}
            card={card}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-4 mb-6">
        {spadeCards.map((card, index) => (
          <Card
            key={`${card.type}-${index}`}
            index={index}
            card={card}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-4 mb-6">
        {heartCards.map((card, index) => (
          <Card
            key={`${card.type}-${index}`}
            index={index}
            card={card}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-4 mb-6">
        {diamondCards.map((card, index) => (
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
