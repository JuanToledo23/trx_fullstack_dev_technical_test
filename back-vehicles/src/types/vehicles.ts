import { ObjectId } from "mongodb";

export type Vehicle = {
  plate: string;
  economicNumber: string;
  vim: string;
  seating: number;
  insurance: string;
  insuranceNumber: string;
  BRAND: string;
  MODEL: string;
  YEAR: number;
  COLOR: string;
  id?: ObjectId;
};
