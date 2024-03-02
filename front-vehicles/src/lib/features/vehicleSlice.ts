import { Vehicle } from "@/app/pages/vehicles/components/vehicleList/vehicleTypes";
import { createSlice } from "@reduxjs/toolkit";

export interface vehiclesSliceState {
  selectedVehicle: Vehicle | undefined;
}

const initialState: vehiclesSliceState = {
  selectedVehicle: undefined,
};

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    updateSelectedVehicle: (state, action) => {
      console.log(action.payload);
      state.selectedVehicle = action.payload;
    },
  },
});

export const { updateSelectedVehicle } = vehiclesSlice.actions;
export default vehiclesSlice;
