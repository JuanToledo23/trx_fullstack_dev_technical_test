"use client";
import GoogleMap from "./components/googleMap/googleMap";
import VehicleList from "./components/vehicleList/vehicleList";
import VehicleInformation from "./components/vehicleInformation/vehicleInformation";
import HeaderList from "./components/headerList/headerList";
import LinearProgress from "@mui/material/LinearProgress";
import { useAppSelector } from "@/app/store/hooks";

import { SystemNotification } from "@/app/components/systemNotification/systemNotification";
import Footer from "@/app/components/Footer/Footer";

export default function Vehicles() {
  const { loading } = useAppSelector((state) => state.vehicles);

  return (
    <>
      <GoogleMap />
      <HeaderList />
      {loading ? (
        <LinearProgress />
      ) : (
        <div className="bg-[#686f00] h-[4px] w-full"></div>
      )}
      <div className="flex">
        <VehicleInformation />
        <VehicleList />
      </div>
      <Footer />
      <SystemNotification />
    </>
  );
}
