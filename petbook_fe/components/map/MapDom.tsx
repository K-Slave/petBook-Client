import React from "react";
import { MapDiv } from "./MapHandler.style";

const MapDom = ({ mapRef }: { mapRef: React.RefObject<HTMLDivElement> }) => {
  return <MapDiv id="map" ref={mapRef} />;
};

export default React.memo(MapDom);
