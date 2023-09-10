export type CardTypes = "spade" | "heart" | "diamond" | "club";
export type CardNumberTypes =
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

export interface CardInterface {
  type: CardTypes;
  number: CardNumberTypes;
  isToggled: boolean;
}
