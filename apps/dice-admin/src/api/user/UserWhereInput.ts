import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  balance?: FloatNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  games?: IntNullableFilter;
  id?: StringFilter;
  isPlaying?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  lossMoney?: FloatNullableFilter;
  losses?: IntNullableFilter;
  telegramId?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
  winMoney?: FloatNullableFilter;
  wins?: IntNullableFilter;
};
