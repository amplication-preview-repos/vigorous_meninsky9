import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  chat?: ChatWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
};
