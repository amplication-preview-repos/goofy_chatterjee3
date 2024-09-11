import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
