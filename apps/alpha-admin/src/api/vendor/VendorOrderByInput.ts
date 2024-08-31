import { SortOrder } from "../../util/SortOrder";

export type VendorOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
