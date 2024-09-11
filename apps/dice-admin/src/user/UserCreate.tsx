import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { TransactionTitle } from "../transaction/TransactionTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="balance" source="balance" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <NumberInput step={1} label="games" source="games" />
        <BooleanInput label="is_playing" source="isPlaying" />
        <TextInput label="Last Name" source="lastName" />
        <NumberInput label="loss_money" source="lossMoney" />
        <NumberInput step={1} label="losses" source="losses" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="telegramId" source="telegramId" />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <NumberInput label="win_money" source="winMoney" />
        <NumberInput step={1} label="wins" source="wins" />
      </SimpleForm>
    </Create>
  );
};
