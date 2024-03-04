export type PaginatedVehicles = {
  previousPage: number | null;
  nextPage: number | null;
  total: number;
  totalPages: Number;
  items: Array<Vehicle>;
};

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
  position: {
    lat: number;
    lng: number;
  };
  _id?: string;
};

export type VehicleListProps = {
  vehicles: Array<Vehicle>;
};
