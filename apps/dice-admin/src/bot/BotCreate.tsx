import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const BotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="balance" source="balance" />
        <NumberInput step={1} label="games_lost" source="gamesLost" />
        <NumberInput step={1} label="games_played" source="gamesPlayed" />
        <NumberInput step={1} label="games_won" source="gamesWon" />
        <BooleanInput label="is_playing" source="isPlaying" />
      </SimpleForm>
    </Create>
  );
};
