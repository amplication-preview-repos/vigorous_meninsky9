import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  telegramId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
