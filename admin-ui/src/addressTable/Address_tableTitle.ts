import { Address_table as TAddress_table } from "../api/addressTable/Address_table";

export const ADDRESS_TABLE_TITLE_FIELD = "address_1";

export const Address_tableTitle = (record: TAddress_table): string => {
  return record.address_1 || String(record.id);
};
