/* global kakao */
import mapState from "@atoms/pageAtoms/hospitalmap/mapState";
import { useCallback, useRef } from "react";
import useSelectorState from "../common/useSelectorState";

const useMapLoad = () => {
  const [{ isMapLoad }, setIsMapLoad] = useSelectorState(mapState, {
    isMapLoad: false,
  });
  const mapRef = useRef<HTMLDivElement>(null);

  const onLoad = useCallback(() => {
    kakao.maps.load(() => {
      setIsMapLoad((state) => ({ ...state, isMapLoad: true }));
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
