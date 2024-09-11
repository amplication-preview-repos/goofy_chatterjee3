import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type User = {
  balance: number | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  games: number | null;
  id: string;
  isPlaying: boolean | null;
  lastName: string | null;
  lossMoney: number | null;
  losses: number | null;
  roles: JsonValue;
  telegramId: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
  winMoney: number | null;
  wins: number | null;
};
