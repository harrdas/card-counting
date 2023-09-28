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

  const handleCardClick = (card: CardInterface) => {
    if (card.type === "club") {
      setClubCards(() =>
        clubCards.map((c) =>
          c.number === card.number ? { ...c, isToggled: !c.isToggled } : c
        )
      );
    }

    if (card.type === "spade") {
      setSpadeCards(() =>
        spadeCards.map((c) =>
          c.number === card.number ? { ...c, isToggled: !c.isToggled } : c
        )
      );
    }

    if (card.type === "heart") {
      setHeartCards(() =>
        heartCards.map((c) =>
          c.number === card.number ? { ...c, isToggled: !c.isToggled } : c
        )
      );
    }

    if (card.type === "diamond") {
      setDiamondCards(() =>
        diamondCards.map((c) =>
          c.number === card.number ? { ...c, isToggled: !c.isToggled } : c
        )
      );
    }
  };

  const handleInitializeClick = () => {
    setClubCards(() => initializeCards("club"));
    setSpadeCards(() => initializeCards("spade"));
    setHeartCards(() => initializeCards("heart"));
    setDiamondCards(() => initializeCards("diamond"));
  };

  return (
    <>
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-4xl text-center">카드 카운팅</h1>
        <button
          className="rounded-full bg-blue-300 p-2 cursor-pointer"
          onClick={handleInitializeClick}
        >
          초기화
        </button>
        <br />
        <br />
        <div className="flex justify-center">
          <div className="flex flex-row flex-wrap gap-4 mb-6">
            {clubCards.map((card, index) => (
              <Card
                key={`${card.type}-${index}`}
                index={index}
                card={card}
                handleCardClick={() => handleCardClick(card)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row flex-wrap gap-4 mb-6">
            {spadeCards.map((card, index) => (
              <Card
                key={`${card.type}-${index}`}
                index={index}
                card={card}
                handleCardClick={() => handleCardClick(card)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row flex-wrap gap-4 mb-6">
            {heartCards.map((card, index) => (
              <Card
                key={`${card.type}-${index}`}
                index={index}
                card={card}
                handleCardClick={() => handleCardClick(card)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row flex-wrap gap-4 mb-6">
            {diamondCards.map((card, index) => (
              <Card
                key={`${card.type}-${index}`}
                index={index}
                card={card}
                handleCardClick={() => handleCardClick(card)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
