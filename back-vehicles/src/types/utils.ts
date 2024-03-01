import { Vehicle } from "./vehicles";

export type Pagination = {
  previousPage: number;
  nextPage: number;
  total: number;
  totalPages: number;
  items: Array<Vehicle>;
};
