import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const BotShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="games_lost" source="gamesLost" />
        <TextField label="games_played" source="gamesPlayed" />
        <TextField label="games_won" source="gamesWon" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_playing" source="isPlaying" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
