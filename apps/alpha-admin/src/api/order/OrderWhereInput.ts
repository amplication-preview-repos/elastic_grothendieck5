import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderItems?: JsonFilter;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
