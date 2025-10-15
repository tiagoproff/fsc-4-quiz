export type Stage = "loading" | "terms" | "menu" | "game" | "win" | "lose";

export type Question = {
  id: number;
  question: string;
  code: number;
  options: string[];
  answer: string;
  explanation?: string;
  tip?: string;
};

export type AvatarStatus = "neutral" | "happy" | "sad";
