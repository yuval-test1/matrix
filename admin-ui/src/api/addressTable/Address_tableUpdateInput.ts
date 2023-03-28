import { CustomerUpdateManyWithoutAddressTablesInput } from "./CustomerUpdateManyWithoutAddressTablesInput";

export type Address_tableUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressTablesInput;
  state?: string | null;
  zip?: number | null;
};
