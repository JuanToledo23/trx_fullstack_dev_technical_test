"use client";
import IconButton from "@mui/material/IconButton";
import { useVehicleListActions } from "./vehicleListActions";
import { Vehicle } from "./vehicleTypes";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

type VehicleListProps = {
  vehicles: Array<Vehicle>;
};

const VehicleList = ({ vehicles }: VehicleListProps) => {
  const { changeSelectedVehicle } = useVehicleListActions();

  return (
    <div className="w-full">
      <div className="shadow-md sm:rounded-lg table-wrp block max-h-96 overflow-auto">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              <th scope="col" className="px-6 py-3">
                Seats
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Model
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Plate
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {vehicles.map((vehicle: Vehicle) => {
              return (
                <tr
                  key={vehicle._id}
                  className="ease-in-out cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {vehicle.seating}
                  </th>
                  <td className="px-6 py-4" onClick={() => changeSelectedVehicle(vehicle)}>{vehicle.brand}</td>
                  <td className="px-6 py-4" onClick={() => changeSelectedVehicle(vehicle)}>{vehicle.model}</td>
                  <td className="px-6 py-4" onClick={() => changeSelectedVehicle(vehicle)}>{vehicle.color}</td>
                  <td className="px-6 py-4" onClick={() => changeSelectedVehicle(vehicle)}>{vehicle.year}</td>
                  <td className="px-6 py-4" onClick={() => changeSelectedVehicle(vehicle)}>{vehicle.plate}</td>
                  <td className="px-6 py-4 text-right flex">
                    <IconButton aria-label="delete" color="secondary">
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="secondary">
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleList;
