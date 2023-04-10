import Skeleton from "@components/common/Skeleton/Skeleton";
import KakaoMap from "@components/map/KakaoMap";
import MapScript from "@components/map/MapScript";
import useMapLoad from "@lib/hooks/map/useMapLoad";
import localConsole from "@lib/utils/localConsole";
import React from "react";

// const MapHandler = dynamic(() => import("@components/map/MapHandler"), {
//   ssr: false,
// });

const MapContainer = () => {
  const { isMapLoad, onLoad } = useMapLoad();

  return (
    <>
      <MapScript onLoad={onLoad} />
      {/* <MapDom mapRef={mapRef} /> */}
      {isMapLoad ? <KakaoMap /> : <Skeleton />}
    </>
  );
};

export default React.memo(MapContainer);
