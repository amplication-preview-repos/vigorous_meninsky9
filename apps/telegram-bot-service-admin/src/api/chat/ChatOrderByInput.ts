import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  chatId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
