import { Message } from "../message/Message";
import { Summary } from "../summary/Summary";
import { User } from "../user/User";

export type Chat = {
  chatId: string | null;
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  summaries?: Array<Summary>;
  updatedAt: Date;
  user?: User | null;
};
