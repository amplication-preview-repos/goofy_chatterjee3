import { Game as TGame } from "../api/game/Game";

export const GAME_TITLE_FIELD = "opponent";

export const GameTitle = (record: TGame): string => {
  return record.opponent?.toString() || String(record.id);
};
