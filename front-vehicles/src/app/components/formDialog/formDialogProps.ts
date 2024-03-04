import { Vehicle } from "@/app/pages/vehicles/components/vehicleList/vehicleTypes";

export type FormDialogProps = {
  title?: string;
  type: string;
  okText: string;
  cancelText: string;
  vehicle?: Vehicle;
};
