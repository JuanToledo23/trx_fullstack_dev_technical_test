import { ObjectId } from "mongodb";

export type Vehicle = {
  plate: string;
  economicNumber: string;
  vim: string;
  seating: number;
  insurance: string;
  insuranceNumber: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  id?: ObjectId;
};
