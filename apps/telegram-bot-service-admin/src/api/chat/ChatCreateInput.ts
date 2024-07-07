import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";
import { SummaryCreateNestedManyWithoutChatsInput } from "./SummaryCreateNestedManyWithoutChatsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatCreateInput = {
  chatId?: string | null;
  messages?: MessageCreateNestedManyWithoutChatsInput;
  summaries?: SummaryCreateNestedManyWithoutChatsInput;
  user?: UserWhereUniqueInput | null;
};
