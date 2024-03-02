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
  position: {
    lat: number;
    lng: number;
  };
  _id: string;
};
