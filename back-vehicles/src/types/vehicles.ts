import { ObjectId } from "mongodb";

export type Vehicle = {
  plate: string;
  economicNumber: string;
  vim: string;
  seats: number;
  insurance: string;
  insuranceNumber: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  id?: ObjectId;
};
