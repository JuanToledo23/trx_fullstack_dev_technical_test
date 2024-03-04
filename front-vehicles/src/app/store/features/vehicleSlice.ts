import {
  PaginatedVehicles,
  Vehicle,
} from "@/app/pages/vehicles/components/vehicleList/vehicleTypes";
import { createSlice } from "@reduxjs/toolkit";
import {
  deleteVehiclesService,
  fetchRoute,
  fetchVehicles,
  putVehiclesService,
} from "./asyncThunks";
import { RouteInfo } from "@/app/pages/vehicles/components/googleMap/mapTypes";

export interface vehiclesSliceState {
  selectedVehicle: Vehicle | undefined;
  showFormDialog: boolean;
  allVehicles: PaginatedVehicles | undefined;
  page: number;
  perPage: number;
  loading: boolean;
  routeDetail: Array<RouteInfo> | undefined;
}

const initialState: vehiclesSliceState = {
  selectedVehicle: undefined,
  showFormDialog: false,
  allVehicles: undefined,
  page: 1,
  perPage: 10,
  loading: false,
  routeDetail: undefined,
};

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    updateSelectedVehicle: (state, action) => {
      state.selectedVehicle = action.payload;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
    updatePerPage: (state, action) => {
      state.perPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRoute.fulfilled, (state, action) => {
      state.routeDetail = action.payload;
    });

    builder.addCase(fetchVehicles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchVehicles.fulfilled, (state, action) => {
      state.allVehicles = action.payload;
      state.loading = false;
    });

    builder.addCase(deleteVehiclesService.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteVehiclesService.fulfilled, (state) => {
      state.selectedVehicle = undefined;
      state.loading = false;
    });

    builder.addCase(putVehiclesService.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(putVehiclesService.fulfilled, (state) => {
      state.loading = false;
    });

    // builder.addCase(fetchVehicles.rejected, (state, action) => {

    // })
  },
});

export const { updateSelectedVehicle, updatePage, updatePerPage } =
  vehiclesSlice.actions;
export default vehiclesSlice;
