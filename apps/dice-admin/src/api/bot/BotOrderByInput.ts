import { SortOrder } from "../../util/SortOrder";

export type BotOrderByInput = {
  balance?: SortOrder;
  createdAt?: SortOrder;
  gamesLost?: SortOrder;
  gamesPlayed?: SortOrder;
  gamesWon?: SortOrder;
  id?: SortOrder;
  isPlaying?: SortOrder;
  updatedAt?: SortOrder;
};
