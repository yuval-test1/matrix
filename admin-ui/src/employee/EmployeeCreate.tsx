import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="first name" source="firstName" />
      </SimpleForm>
    </Create>
  );
};
