import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  comments?: string | null;
  events?: EventUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
};
