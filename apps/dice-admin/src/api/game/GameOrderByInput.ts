import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  betAmount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  opponent?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  winner?: SortOrder;
};
