import { CustomerCreateNestedManyWithoutAddressTablesInput } from "./CustomerCreateNestedManyWithoutAddressTablesInput";

export type Address_tableCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressTablesInput;
  state?: string | null;
  zip?: number | null;
};
