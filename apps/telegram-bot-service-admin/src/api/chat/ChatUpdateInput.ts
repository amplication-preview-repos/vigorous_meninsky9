import { MessageUpdateManyWithoutChatsInput } from "./MessageUpdateManyWithoutChatsInput";
import { SummaryUpdateManyWithoutChatsInput } from "./SummaryUpdateManyWithoutChatsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatUpdateInput = {
  chatId?: string | null;
  messages?: MessageUpdateManyWithoutChatsInput;
  summaries?: SummaryUpdateManyWithoutChatsInput;
  user?: UserWhereUniqueInput | null;
};
