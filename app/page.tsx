export default function Home() {
  const cardTypes: string[] = ["spade", "heart", "diamond", "club"];
  const cardNumbers: string[] = [
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

  return (
    <div className="p-4">
      <h1 className="text-4xl">카드 카운팅</h1>
      <br />

      {cardTypes.map((cardType: string) => (
        <>
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            {cardNumbers.map((cardNumber: string) => (
              <div className="w-16 h-24 bg-gray-100 rounded-md flex flex-col justify-center items-center">
                <div className="text-base">{cardType}</div>
                <div className="text-base">{cardNumber}</div>
              </div>
            ))}
          </div>
          <br />
        </>
      ))}
    </div>
  );
}
