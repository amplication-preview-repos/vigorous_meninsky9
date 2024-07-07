import { Chat as TChat } from "../api/chat/Chat";

export const CHAT_TITLE_FIELD = "chatId";

export const ChatTitle = (record: TChat): string => {
  return record.chatId?.toString() || String(record.id);
};
