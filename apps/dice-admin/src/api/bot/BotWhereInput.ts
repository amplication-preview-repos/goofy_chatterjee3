import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type BotWhereInput = {
  balance?: FloatNullableFilter;
  gamesLost?: IntNullableFilter;
  gamesPlayed?: IntNullableFilter;
  gamesWon?: IntNullableFilter;
  id?: StringFilter;
  isPlaying?: BooleanNullableFilter;
};
