"use client";
import IconButton from "@mui/material/IconButton";
import { useVehicleActions } from "../../actions/useVehicleActions";
import { Vehicle } from "./vehicleTypes";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import FormDialog from "@/app/components/formDialog/formDialog";
import { useFormDialogActions } from "@/app/components/formDialog/useFormDialogActions";
import { useEffect } from "react";
import { fetchVehicles } from "@/app/store/features/asyncThunks";
import Spinner from "@/app/components/spinner/spinner";

const VehicleList = () => {
  const dispatch = useAppDispatch();
  const { selectedVehicle, allVehicles, page, perPage } = useAppSelector(
    (state) => state.vehicles,
  );
  const { changeSelectedVehicle } = useVehicleActions();
  const { putDialogProps } = useFormDialogActions();

  const headers: Array<string> = [
    "Seats",
    "Brand",
    "Model",
    "Color",
    "Year",
    "Plate",
    "Actions",
  ];

  useEffect(() => {
    dispatch(fetchVehicles({ page, perPage }));
  }, [dispatch, page, perPage]);

  return allVehicles?.items ? (
    <div className={`${selectedVehicle ? "w-3/4" : "w-full"}`}>
      <div className="shadow-md table-wrp block max-h-96 overflow-auto">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs z-10 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col" className="px-4 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {allVehicles.items.map((vehicle: Vehicle) => {
              return (
                <tr
                  key={vehicle._id}
                  className="ease-in-out cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th scope="row" className="px-4 py font-medium">
                    {vehicle.seats}
                  </th>
                  <td
                    className="px-4 py"
                    onClick={() => changeSelectedVehicle(vehicle)}
                  >
                    {vehicle.brand}
                  </td>
                  <td
                    className="px-4 py"
                    onClick={() => changeSelectedVehicle(vehicle)}
                  >
                    {vehicle.model}
                  </td>
                  <td
                    className="px-4 py"
                    onClick={() => changeSelectedVehicle(vehicle)}
                  >
                    {vehicle.color}
                  </td>
                  <td
                    className="px-4 py"
                    onClick={() => changeSelectedVehicle(vehicle)}
                  >
                    {vehicle.year}
                  </td>
                  <td
                    className="px-4 py"
                    onClick={() => changeSelectedVehicle(vehicle)}
                  >
                    {vehicle.plate}
                  </td>
                  <td
                    className="px-4 py text-right flex"
                    onClick={() => changeSelectedVehicle(vehicle)}
                  >
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() =>
                        putDialogProps({
                          title:
                            "Are you sure to delete the vehicle with the following ID?",
                          type: "DELETE",
                          okText: "OK",
                          cancelText: "CANCEL",
                          vehicle: vehicle,
                        })
                      }
                    >
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="secondary"
                      onClick={() =>
                        putDialogProps({
                          title: "EDIT VEHICLE",
                          type: "EDIT",
                          okText: "SAVE",
                          cancelText: "CANCEL",
                          vehicle: vehicle,
                        })
                      }
                    >
                      <EditOutlinedIcon />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <FormDialog />
    </div>
  ) : (
    <div className="flex items-center justify-center w-full h-[400px]">
      <Spinner w="w-16" h="h-16" />
    </div>
  );
};

export default VehicleList;
