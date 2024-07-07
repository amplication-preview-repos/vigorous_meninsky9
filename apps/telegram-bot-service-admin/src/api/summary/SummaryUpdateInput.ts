import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type SummaryUpdateInput = {
  chat?: ChatWhereUniqueInput | null;
  content?: string | null;
};
