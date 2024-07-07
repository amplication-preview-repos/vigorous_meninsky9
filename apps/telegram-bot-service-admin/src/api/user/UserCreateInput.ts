import { ChatCreateNestedManyWithoutUsersInput } from "./ChatCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  chats?: ChatCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  roles: InputJsonValue;
  telegramId?: string | null;
  username: string;
};
