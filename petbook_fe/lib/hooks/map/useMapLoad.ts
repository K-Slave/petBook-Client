/* global kakao */
import React, { useCallback, useRef, useState } from "react";

const useMapLoad = () => {
  const [isMapLoad, setIsMapLoad] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const onLoad = useCallback(() => {
    kakao.maps.load(() => {
      setIsMapLoad(true);
    });
  }, []);

  return { mapRef, isMapLoad, onLoad };
};

export default useMapLoad;
