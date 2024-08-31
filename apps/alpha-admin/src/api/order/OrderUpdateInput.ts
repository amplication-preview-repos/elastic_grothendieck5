import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  orderItems?: InputJsonValue;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
