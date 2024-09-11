import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
