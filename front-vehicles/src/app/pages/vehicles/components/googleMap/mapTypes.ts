export type MapProps = {
  routeDetail: Array<RouteInfo>;
};

export type RouteInfo = {
  client_id: string;
  status: string;
  route_title: string;
  code: string;
  distance: number;
  is_active: boolean;
  stations: Array<StationsEntity>;
  error: null;
  time_zone: string;
  created_at: string;
  updated_at: string;
  geojson: Geojson;
  route_id: string;
};
export type StationsEntity = {
  id: string;
  type: string;
  order: number;
};
export type Geojson = {
  type: string;
  features: Array<FeaturesEntity>;
};
export type FeaturesEntity = {
  type: string;
  geometry: Geometry;
  properties: Properties;
};
export type Geometry = {
  type: string;
  coordinates: Array<number>;
};
export type Properties = {
  name: string | null;
  address: string | null;
  type: string;
};
