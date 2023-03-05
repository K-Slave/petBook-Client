/* global kakao */
import isMapLoadState from "@atoms/pageAtoms/hospitalmap/isMapLoad";
import { useCallback, useRef } from "react";
import { useRecoilState } from "recoil";

const useMapLoad = () => {
  const [isMapLoad, setIsMapLoad] = useRecoilState(isMapLoadState);
  const mapRef = useRef<HTMLDivElement>(null);

  const onLoad = useCallback(() => {
    kakao.maps.load(() => {
      setIsMapLoad(true);
    });
  }, []);

  // useEffect(() => {
  //   if (window.kakao) {
  //     // setIsMapLoad(true);
  //   }
  // }, []);

  return { mapRef, isMapLoad, onLoad };
};

export default useMapLoad;
