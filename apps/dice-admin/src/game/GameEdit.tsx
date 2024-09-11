import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const GameEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="bet_amount" source="betAmount" />
        <TextInput label="opponent" source="opponent" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="winner" source="winner" />
      </SimpleForm>
    </Edit>
  );
};
