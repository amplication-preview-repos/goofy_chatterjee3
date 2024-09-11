import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  balance?: number | null;
  email?: string | null;
  firstName?: string | null;
  games?: number | null;
  isPlaying?: boolean | null;
  lastName?: string | null;
  lossMoney?: number | null;
  losses?: number | null;
  password?: string;
  roles?: InputJsonValue;
  telegramId?: string | null;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  username?: string;
  winMoney?: number | null;
  wins?: number | null;
};
