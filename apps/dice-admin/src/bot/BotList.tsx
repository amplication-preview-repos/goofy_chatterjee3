import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BotList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bots"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="games_lost" source="gamesLost" />
        <TextField label="games_played" source="gamesPlayed" />
        <TextField label="games_won" source="gamesWon" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_playing" source="isPlaying" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
