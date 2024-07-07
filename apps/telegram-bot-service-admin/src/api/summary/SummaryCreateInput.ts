import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type SummaryCreateInput = {
  chat?: ChatWhereUniqueInput | null;
  content?: string | null;
};
