import { Chat } from "../chat/Chat";
import { JsonValue } from "type-fest";

export type User = {
  chats?: Array<Chat>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  roles: JsonValue;
  telegramId: string | null;
  updatedAt: Date;
  username: string;
};
