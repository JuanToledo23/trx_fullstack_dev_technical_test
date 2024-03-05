"use client";
import {
  updatePage,
  updatePerPage,
  updateSelectedVehicle,
} from "@/app/store/features/vehicleSlice";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { Vehicle } from "../components/vehicleList/vehicleTypes";
import {
  deleteVehiclesService,
  fetchVehicles,
  postVehiclesService,
  putType,
  putVehiclesService,
} from "@/app/store/features/asyncThunks";
import { useSystemNotification } from "@/app/components/systemNotification/useSystemNotification";

export const useVehicleActions = () => {
  const { selectedVehicle, page, perPage } = useAppSelector(
    (state) => state.vehicles,
  );
  const dispatch = useAppDispatch();
  const { displayNotification } = useSystemNotification();

  const changeSelectedVehicle = (vehicle: Vehicle) => {
    dispatch(updateSelectedVehicle(vehicle));
  };

  const removeVehicle = (id: string) => {
    dispatch(deleteVehiclesService(id))
      .finally(() => {
        dispatch(fetchVehicles({ page, perPage }));
      })
      .then(() => {
        displayNotification({
          message: "Vehicle removed correctly",
        });
      })
      .catch(() => {
        displayNotification({
          message: "Could not delete vehicle",
          type: "error",
        });
      });
  };

  const addVehicle = (data: Vehicle) => {
    dispatch(postVehiclesService(data))
      .finally(() => {
        dispatch(fetchVehicles({ page, perPage }));
      })
      .then(() => {
        displayNotification({
          message: "Vehicle added successfully",
        });
      })
      .catch(() => {
        displayNotification({
          message: "Could not add vehicle",
          type: "error",
        });
      });
  };

  const updateVehicle = (data: putType) => {
    dispatch(putVehiclesService(data))
      .finally(() => {
        dispatch(fetchVehicles({ page, perPage }));
        dispatch(updateSelectedVehicle({ ...selectedVehicle, ...data.body }));
      })
      .then(() => {
        displayNotification({
          message: "The vehicle was modified correctly",
        });
      })
      .catch(() => {
        displayNotification({
          message: "The vehicle could not be modified",
          type: "error",
        });
      });
  };

  const changePage = (page: number) => {
    dispatch(updatePage(page));
  };

  const changePerPage = (perPage: number) => {
    dispatch(updatePerPage(perPage));
  };

  return {
    changeSelectedVehicle,
    removeVehicle,
    addVehicle,
    updateVehicle,
    changePage,
    changePerPage,
  };
};
