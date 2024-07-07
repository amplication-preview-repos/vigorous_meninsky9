import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { SummaryListRelationFilter } from "../summary/SummaryListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatWhereInput = {
  chatId?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  summaries?: SummaryListRelationFilter;
  user?: UserWhereUniqueInput;
};
