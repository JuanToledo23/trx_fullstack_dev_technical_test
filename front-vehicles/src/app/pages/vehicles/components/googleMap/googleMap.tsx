"use client";

import {
  GoogleMap,
  useLoadScript,
  Polyline,
  Marker,
} from "@react-google-maps/api";
import mapStyle from "./mapStyle.json";
import { FeaturesEntity, RouteInfo } from "./mapTypes";
import { useAppSelector } from "@/lib/hooks";

type MapProps = {
  routeDetail: Array<RouteInfo>;
};

const Map = ({ routeDetail }: MapProps) => {
  const { selectedVehicle } = useAppSelector((state) => state.vehicles);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
  });

  if (!isLoaded) return <div>Loading....</div>;

  let center = { lat: 19.59298, lng: -99.18688 };

  if (selectedVehicle !== undefined) {
    center = {
      lat: selectedVehicle.position.lat,
      lng: selectedVehicle.position.lng,
    };
  }

  const renderFetures = () => {
    let key: number = 0;
    return routeDetail[0].geojson.features.map((feature: FeaturesEntity) => {
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
              // label={{text:"" + feature.properties.name, color: "#ffffff", className:"mb-14", fontSize: "xs", fontWeight:"bold"}}
              // icon={{url: "https://cdn.jsdelivr.net/gh/JuanToledo23/cdns@main/technical_tests/traxion/stop_pin.svg",
              // scaledSize: new google.maps.Size(40, 40) }}
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
    });
  };

  // const handleClick = () => {
  //   serverRequest({
  //     url: `${process.env.NEXT_PUBLIC_HOST as string}/vehicles/65e1f90b8b684d8110b88152`,
  //     method: "PUT",
  //     body: {
  //       plate: "6157184027",
  //       economicNumber: "7686239403",
  //       vim: "1C3BC8EG8BN532515",
  //       seating: 40,
  //       insurance: "Considine, Hirthe and Schmitt",
  //       insuranceNumber: "3582601633",
  //       BRAND: "Lincoln",
  //       MODEL: "MKT",
  //       YEAR: 2012,
  //       COLOR: "Red",
  //     },
  //   });
  // };

  return (
    <div className="w-full">
      <GoogleMap
        zoom={12}
        center={center}
        options={{
          styles: mapStyle,
        }}
        // zoom={currentLocation || selectedPlace ? 18 : 12}
        // center={currentLocation || searchLngLat || center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "100%", height: "400px", margin: "auto" }}
      >
        {renderFetures()}
        {selectedVehicle && (
          <Marker
            position={selectedVehicle.position}
            // label={{text:"" + feature.properties.name, color: "#ffffff", className:"mb-14", fontSize: "xs", fontWeight:"bold"}}
            icon={{
              url: "https://cdn.jsdelivr.net/gh/JuanToledo23/cdns@main/technical_tests/traxion/stop_pin.svg",
              scaledSize: new google.maps.Size(40, 40),
            }}
          />
        )}
      </GoogleMap>
      {/* <button onClick={handleClick}>Butotn</button> */}
    </div>
  );
};

export default Map;
