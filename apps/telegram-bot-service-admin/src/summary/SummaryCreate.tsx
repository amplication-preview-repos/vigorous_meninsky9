import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatTitle } from "../chat/ChatTitle";

export const SummaryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="chat.id" reference="Chat" label="Chat">
          <SelectInput optionText={ChatTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
