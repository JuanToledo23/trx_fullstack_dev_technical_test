import { combineSlices, configureStore } from "@reduxjs/toolkit";
import vehiclesSlice from "./features/vehicleSlice";
import formSlice from "./features/formSlice";
import notificationSlice from "./features/systemNotificationSlice";

const rootReducer = combineSlices(vehiclesSlice, formSlice, notificationSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
