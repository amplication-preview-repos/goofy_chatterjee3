import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  balance?: number | null;
  email?: string | null;
  firstName?: string | null;
  games?: number | null;
  isPlaying?: boolean | null;
  lastName?: string | null;
  lossMoney?: number | null;
  losses?: number | null;
  password: string;
  roles: InputJsonValue;
  telegramId?: string | null;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
  winMoney?: number | null;
  wins?: number | null;
};
