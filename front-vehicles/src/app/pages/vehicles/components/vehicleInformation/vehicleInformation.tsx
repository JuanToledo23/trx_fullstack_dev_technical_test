"use client";
import { useAppSelector } from "@/lib/hooks";
import Button from "@mui/material/Button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const VehicleInformation = () => {
  const { selectedVehicle } = useAppSelector((state) => state.vehicles);
  return (
    <>
      {selectedVehicle && (
        <div className="w-full max-h-96 max-w-md p-4 pt-0  border border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-auto shadow-md">
          <div className="flex items-center justify-between mb-4 sticky top-0 bg-gray-800 w-full pt-4">
            <Button
              variant="outlined"
              size="medium"
              color="error"
              startIcon={<DeleteOutlineOutlinedIcon />}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              size="medium"
              color="secondary"
              startIcon={<EditOutlinedIcon />}
            >
              Edit
            </Button>
          </div>
          <div className="flow-root border-solid border-t-2 border-slate-600">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-3 md:py-4 ease-in-out">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                      VIM
                    </p>
                    <p className="text-sm text-gray-300 dark:text-gray-300">
                      {selectedVehicle.vim}
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 md:py-4 ease-in-out">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                      INSURANCE
                    </p>
                    <p className="text-sm text-gray-300 dark:text-gray-300">
                      {selectedVehicle.insurance}
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 md:py-4 ease-in-out">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                      INSURANCE NUMBER
                    </p>
                    <p className="text-sm text-gray-300 dark:text-gray-300">
                      {selectedVehicle.insuranceNumber}
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 md:py-4 ease-in-out">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                      ECONOMIC NUMBER
                    </p>
                    <p className="text-sm text-gray-300 dark:text-gray-300">
                      {selectedVehicle.economicNumber}
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 md:py-4 ease-in-out">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                      PLATE
                    </p>
                    <p className="text-sm text-gray-300 dark:text-gray-300">
                      {selectedVehicle.plate}
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 md:py-4 ease-in-out">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                      BRAND
                    </p>
                    <p className="text-sm text-gray-300 dark:text-gray-300">
                      {selectedVehicle.brand}
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 md:py-4 ease-in-out">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                      MODEL
                    </p>
                    <p className="text-sm text-gray-300 dark:text-gray-300">
                      {selectedVehicle.model}
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 md:py-4 ease-in-out">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                      COLOR
                    </p>
                    <p className="text-sm text-gray-300 dark:text-gray-300">
                      {selectedVehicle.color}
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 md:py-4 ease-in-out">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                      YEAR
                    </p>
                    <p className="text-sm text-gray-300 dark:text-gray-300">
                      {selectedVehicle.year}
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-3 md:py-4 ease-in-out">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                      SEATS
                    </p>
                    <p className="text-sm text-gray-300 dark:text-gray-300">
                      {selectedVehicle.seating}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default VehicleInformation;
