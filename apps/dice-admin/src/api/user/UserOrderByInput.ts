import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  balance?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  games?: SortOrder;
  id?: SortOrder;
  isPlaying?: SortOrder;
  lastName?: SortOrder;
  lossMoney?: SortOrder;
  losses?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  telegramId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  winMoney?: SortOrder;
  wins?: SortOrder;
};
