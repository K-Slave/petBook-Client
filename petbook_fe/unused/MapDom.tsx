import React from "react";
import { MapDiv } from "../components/map/maptest/MapHandler.style";

const MapDom = ({ mapRef }: { mapRef: React.RefObject<HTMLDivElement> }) => {
  return <MapDiv id="map" ref={mapRef} />;
};

export default React.memo(MapDom);
