"use client";

import {
  GoogleMap,
  useLoadScript,
  Polyline,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyle from "./mapStyle.json";
import { FeaturesEntity, MapProps } from "./mapTypes";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import Spinner from "@/app/components/spinner/spinner";
import { useEffect, useState } from "react";
import { fetchRoute } from "@/app/store/features/asyncThunks";
import { Vehicle } from "../vehicleList/vehicleTypes";

const Map = () => {
  const dispatch = useAppDispatch();
  const { selectedVehicle, routeDetail } = useAppSelector(
    (state) => state.vehicles,
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
  });
  const [selectedCenter, setSelectedCenter] = useState<Vehicle | null>(null);
  const [pinSelected, setPinSelected] = useState<FeaturesEntity | null>(null);

  useEffect(() => {
    dispatch(fetchRoute());
  }, [dispatch]);

  useEffect(() => {
    const listener = (e: { key: string }) => {
      if (e.key === "Escape") {
        setSelectedCenter(null);
        setPinSelected(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  if (!isLoaded)
    return (
      <div className="flex items-center justify-center w-full h-[400px]">
        <Spinner w="w-16" h="h-16" />
      </div>
    );

  let center = { lat: 19.59298, lng: -99.18688 };

  if (selectedVehicle !== undefined) {
    center = {
      lat: selectedVehicle.position.lat,
      lng: selectedVehicle.position.lng,
    };
  }

  const renderFetures = () => {
    let key: number = 0;
    return (
      routeDetail &&
      routeDetail[0].geojson.features.map((feature: FeaturesEntity) => {
        switch (feature.geometry.type) {
          case "Point":
            key++;
            return (
              <Marker
                key={key}
                position={{
                  lat: +feature.geometry.coordinates[1],
                  lng: +feature.geometry.coordinates[0],
                }}
                onClick={() => {
                  setPinSelected(feature);
                }}
              />
            );
          case "LineString":
            let coordArr: any = [];
            feature.geometry.coordinates?.map((coordinates: any) => {
              coordArr.push({ lat: coordinates[1], lng: coordinates[0] });
            });
            key++;
            return (
              <Polyline
                key={key}
                path={coordArr}
                options={{
                  strokeColor: "#D0DF00",
                  strokeOpacity: 1,
                  strokeWeight: 3,
                }}
              />
            );
          default:
            break;
        }
      })
    );
  };

  return (
    <div className="w-full">
      <GoogleMap
        zoom={12}
        center={center}
        options={{
          styles: mapStyle,
        }}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "100%", height: "400px", margin: "auto" }}
      >
        {renderFetures()}
        {selectedVehicle && (
          <Marker
            position={selectedVehicle.position}
            icon={{
              url: "https://cdn.jsdelivr.net/gh/JuanToledo23/cdns@main/technical_tests/traxion/stop_pin.svg",
              scaledSize: new google.maps.Size(40, 40),
            }}
            onClick={() => {
              setSelectedCenter(selectedVehicle);
            }}
          />
        )}
        {selectedCenter && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedCenter(null);
            }}
            onZindexChanged={() => {
              setSelectedCenter(null);
            }}
            position={{
              lat: selectedCenter.position.lat + 0.00125,
              lng: selectedCenter.position.lng,
            }}
          >
            <div className="text-black">
              <div className="bg-white overflow-hidden shadow rounded-lg border">
                <div className="flex items-center">
                  <div className="px-2 py-2 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {selectedCenter._id}
                    </h3>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-2 py-2 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-3 sm:py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        BRAND
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedCenter.brand}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        MODEL
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedCenter.model}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        COLOR
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedCenter.color}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        YEAR
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedCenter.year}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        SEATS
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedCenter.seats}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">VIM</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedCenter.vim}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        INSURANCE
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedCenter.insurance}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        INSURANCE NUMBER
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedCenter.insuranceNumber}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        ECONOMIC NUMBER
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedCenter.economicNumber}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        PLATE
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {selectedCenter.plate}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </InfoWindow>
        )}

        {pinSelected && (
          <InfoWindow
            onCloseClick={() => {
              setPinSelected(null);
            }}
            onZindexChanged={() => {
              setPinSelected(null);
            }}
            position={{
              lat: pinSelected.geometry.coordinates[1] + 0.00125,
              lng: pinSelected.geometry.coordinates[0],
            }}
          >
            <div className="text-black">
              <div className="bg-white overflow-hidden shadow rounded-lg border">
                <div className="flex items-center">
                  <div className="sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {pinSelected.properties.name}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
                  </div>
                </div>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
