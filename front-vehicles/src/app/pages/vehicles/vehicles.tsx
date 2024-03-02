import { fetchRequest } from "@/app/api/serverRequest";
import GoogleMap from "./components/googleMap/googleMap";
import VehicleList from "./components/vehicleList/vehicleList";
import VehicleInformation from "./components/vehicleInformation/vehicleInformation";
import HeaderList from "./components/headerList/headerList";

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
      <HeaderList />
      <div className="flex">
        <div className="w-1/4">
          <VehicleInformation />
        </div>
        <div className="w-3/4">
          <VehicleList vehicles={vehicleList} />
        </div>
      </div>
    </>
  );
}
