import { ChatUpdateManyWithoutUsersInput } from "./ChatUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  chats?: ChatUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  roles?: InputJsonValue;
  telegramId?: string | null;
  username?: string;
};
