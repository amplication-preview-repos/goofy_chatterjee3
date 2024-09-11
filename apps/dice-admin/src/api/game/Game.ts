export type Game = {
  betAmount: number | null;
  createdAt: Date;
  id: string;
  opponent: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
  winner: string | null;
};
