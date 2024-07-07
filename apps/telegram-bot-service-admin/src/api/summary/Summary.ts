import { Chat } from "../chat/Chat";

export type Summary = {
  chat?: Chat | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
