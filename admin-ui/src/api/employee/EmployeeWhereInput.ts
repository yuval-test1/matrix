import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
};
