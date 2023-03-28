import { Address_table } from "../addressTable/Address_table";
import { Order } from "../order/Order";

export type Customer = {
  address?: Address_table | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
