import {
  deleteRequest,
  fetchRequest,
  serverRequest,
} from "@/app/api/serverRequest";
import { Vehicle } from "@/app/pages/vehicles/components/vehicleList/vehicleTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type putType = {
  id: string;
  body: Vehicle;
};

export type fetchInformationType = {
  page: number;
  perPage: number;
  search?: string;
};

export const fetchRoute = createAsyncThunk("fetchRoute", async () => {
  const data = await fetchRequest(
    process.env.NEXT_PUBLIC_ROUTE_DETAIL_URL as string,
  );
  return data;
});

export const fetchVehicles = createAsyncThunk(
  "fetchVehicles",
  async (fetchInformation: fetchInformationType) => {
    let fetchString: string = "";
    if (fetchInformation.search) {
      fetchString = `/vehicles?search=${fetchInformation.search}`;
    } else {
      fetchString = `/vehicles?page=${fetchInformation.page ? fetchInformation.page : 1}&perPage=${fetchInformation.perPage ? fetchInformation.perPage : 10}`;
    }
    const data = await fetchRequest(
      `${process.env.NEXT_PUBLIC_HOST}${fetchString}`,
    );
    return data;
  },
);

export const deleteVehiclesService = createAsyncThunk(
  "deleteVehiclesService",
  async (id: string) => {
    deleteRequest(`${process.env.NEXT_PUBLIC_HOST}/vehicles/${id}`);
  },
);

export const postVehiclesService = createAsyncThunk(
  "postVehiclesService",
  async (body: Vehicle) => {
    serverRequest({
      url: `${process.env.NEXT_PUBLIC_HOST}/vehicles/`,
      method: "POST",
      body: body,
    });
  },
);

export const putVehiclesService = createAsyncThunk(
  "putVehiclesService",
  async (data: putType) => {
    serverRequest({
      url: `${process.env.NEXT_PUBLIC_HOST}/vehicles/${data.id}`,
      method: "PUT",
      body: data.body,
    });
  },
);
