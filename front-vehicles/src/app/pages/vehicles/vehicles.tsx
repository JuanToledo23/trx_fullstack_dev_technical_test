import { fetchRequest } from "@/app/api/serverRequest";
import GoogleMap from "./components/googleMap/googleMap";
import VehicleList from "./components/vehicleList/vehicleList";

export default async function Vehicles() {
  const routeMap = await fetchRequest(
    process.env.NEXT_PUBLIC_ROUTE_DETAIL_URL as string,
  );
  const vehicleList = await fetchRequest(
    `${process.env.NEXT_PUBLIC_HOST}/vehicles`,
  );

  return (
    <>
      <GoogleMap routeDetail={routeMap} />
      <div className="flex">
        <div className="w-1/3">Info</div>
        <div className="w-full">
          <VehicleList vehicles={vehicleList} />
        </div>
      </div>
    </>
  );
}
