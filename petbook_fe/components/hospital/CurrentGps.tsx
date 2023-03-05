/* global kakao */

import loadingState from "@atoms/common/loadingState";
import { kakaoUseMap } from "@components/map/KakaoMap";
import { cookieRequest } from "@lib/API/petBookAPI";
import { LocationCacheData } from "@lib/API/petBookAPI/types/cookieRequest";
import getGeoLocation from "@lib/utils/getGeoLocation";
import getCoord2RegionH from "@lib/utils/kakaoMaps/getCoord2RegionH";
import localConsole from "@lib/utils/localConsole";
import { koreaGeoLocationValidate } from "@lib/utils/validation/geoLocationValidate";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import getRectBounds, { Coordinates } from "@lib/utils/kakaoMaps/getRectBounds";
import mapsLevelSelector from "@lib/modules/mapsLevelSelector";
import geoLocationState from "@atoms/pageAtoms/hospitalmap/geoLocation";
import regionDataState from "@atoms/pageAtoms/hospitalmap/regionData";

const CurrentGps = () => {
  const [currentRegionData, setCurrentRegionData] =
    useRecoilState(regionDataState);
  const setCurrentGeoLocation = useSetRecoilState(geoLocationState);
  const setLoading = useSetRecoilState(loadingState);

  const onClick = async () => {
    setLoading(true);
    try {
      const { coords } = await getGeoLocation();
      const { latitude, longitude } = coords;

      if (!koreaGeoLocationValidate(latitude, longitude)) {
        throw new Error(
          `사용자의 위치(${
            process.env.TZ ? process.env.TZ : "알수없음"
          })가 서비스 가능한 지역(한국)이 아닙니다.`
        );
      }

      const regionData = await getCoord2RegionH(latitude, longitude);

      // : kakao.maps.services.RegionCode & {latitude: number, longitude : number }

      const locationData: LocationCacheData = {
        latitude,
        longitude,
        petBookRegionName:
          regionData.region_2depth_name + " " + regionData.region_3depth_name,
        ...regionData,
      };

      const cookieRes = await cookieRequest.setCookie({
        body: {
          key: "USER_LOCATION_DATA",
          value: locationData,
        },
      });

      // const geocoder = new kakao.maps.services.Geocoder();

      // geocoder.addressSearch("서울시 강남구 역삼1동", (result, status) => {
      //   localConsole?.log(status, "status");
      //   localConsole?.log(result);
      // });
      kakaoUseMap.setLevel(mapsLevelSelector(latitude));

      kakaoUseMap.panTo(new kakao.maps.LatLng(latitude, longitude));

      setCurrentGeoLocation((state) => {
        return { latitude, longitude };
      });

      setCurrentRegionData((state) => {
        return {
          ...regionData,
        };
      });

      setLoading(false);
    } catch (err) {
      localConsole?.warn(err);
      setLoading(false);
    }
  };

  return (
    <header>
      <h1>
        {currentRegionData.region_2depth_name +
          " " +
          currentRegionData.region_3depth_name}
      </h1>
      <button type="button" onClick={onClick}>
        위치수정
      </button>
    </header>
  );
};

export default CurrentGps;
