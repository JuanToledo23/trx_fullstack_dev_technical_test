"use client";
import { useFormDialogActions } from "@/app/components/formDialog/useFormDialogActions";
import { useAppSelector } from "@/app/store/hooks";
import Button from "@mui/material/Button";

const VehicleInformation = () => {
  const { selectedVehicle } = useAppSelector((state) => state.vehicles);
  const { putDialogProps } = useFormDialogActions();
  return (
    <>
      {selectedVehicle && (
        <div className="max-h-96 max-w-md p-4 pt-0 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-auto shadow-md w-1/4">
          <div className="flex items-center justify-between sticky top-0 bg-gray-800 w-full pt-4">
            <Button
              variant="outlined"
              size="medium"
              color="error"
              onClick={() =>
                putDialogProps({
                  title:
                    "Are you sure to delete the vehicle with the following ID?",
                  type: "DELETE",
                  okText: "OK",
                  cancelText: "CANCEL",
                  vehicle: selectedVehicle,
                })
              }
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              size="medium"
              color="secondary"
              onClick={() =>
                putDialogProps({
                  title: "EDIT VEHICLE",
                  type: "EDIT",
                  okText: "SAVE",
                  cancelText: "CANCEL",
                  vehicle: selectedVehicle,
                })
              }
            >
              Edit
            </Button>
          </div>
          <div className="border-slate-600">
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
                      {selectedVehicle.seats}
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
