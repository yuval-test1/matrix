import { Event } from "../event/Event";

export type Customer = {
  comments: string | null;
  createdAt: Date;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
