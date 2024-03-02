"use client";
import { updateSelectedVehicle } from "@/lib/features/vehicleSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Vehicle } from "../components/vehicleList/vehicleTypes";

export const useVehicleListActions = () => {
  const dispatch = useAppDispatch();

  const changeSelectedVehicle = (vehicle: Vehicle) => {
    dispatch(updateSelectedVehicle(vehicle));
  };

  return {
    changeSelectedVehicle,
  };
};
