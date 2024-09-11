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

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="games" source="games" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_playing" source="isPlaying" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="loss_money" source="lossMoney" />
        <TextField label="losses" source="losses" />
        <TextField label="Roles" source="roles" />
        <TextField label="telegramId" source="telegramId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="win_money" source="winMoney" />
        <TextField label="wins" source="wins" />
      </Datagrid>
    </List>
  );
};
