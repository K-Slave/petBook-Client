import MapDom from "@components/map/MapDom";
import MapScript from "@components/map/MapScript";
import useMapLoad from "@lib/hooks/map/useMapLoad";
import dynamic from "next/dynamic";
import React from "react";

const MapHandler = dynamic(() => import("@components/map/MapHandler"), {
  ssr: false,
});

const MapContainer = () => {
  const { mapRef, isMapLoad, onLoad } = useMapLoad();
  return (
    <>
      <MapScript onLoad={onLoad} />
      <MapDom mapRef={mapRef} />
      {isMapLoad && <MapHandler mapRef={mapRef} />}
    </>
  );
};

export default MapContainer;
