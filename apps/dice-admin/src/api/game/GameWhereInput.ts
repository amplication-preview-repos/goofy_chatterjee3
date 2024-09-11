import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GameWhereInput = {
  betAmount?: FloatNullableFilter;
  id?: StringFilter;
  opponent?: StringNullableFilter;
  status?: "Option1";
  winner?: StringNullableFilter;
};
