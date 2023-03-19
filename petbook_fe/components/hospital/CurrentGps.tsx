/* global kakao */

import loadingState from "@atoms/common/loadingState";
import { kakaoUseMap } from "@components/map/KakaoMap";
import { cookieRequest } from "@lib/API/petBookAPI";
import { LocationCacheData } from "@lib/API/petBookAPI/types/cookieRequest";
import getGeoLocation from "@lib/utils/getGeoLocation";
import getCoord2RegionH from "@lib/utils/kakaoMaps/getCoord2RegionH";
import localConsole from "@lib/utils/localConsole";
import { koreaGeoLocationValidate } from "@lib/utils/validation/geoLocationValidate";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import mapsLevelSelector from "@lib/modules/mapsLevelSelector";
import geoLocationState from "@atoms/pageAtoms/hospitalmap/geoLocation";
import regionDataState from "@atoms/pageAtoms/hospitalmap/regionData";
import keyName from "@lib/commonValue/keyName";

const CurrentGps = () => {
  const setRegionData = useSetRecoilState(regionDataState);
  const regionData = useRecoilValue(regionDataState);
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

      const kakaoRegionData = await getCoord2RegionH(latitude, longitude);

      // : kakao.maps.services.RegionCode & {latitude: number, longitude : number }

      const locationData: LocationCacheData = {
        latitude,
        longitude,
        petBookRegionName:
          kakaoRegionData.region_2depth_name +
          " " +
          kakaoRegionData.region_3depth_name,
        ...kakaoRegionData,
      };

      const cookieRes = await cookieRequest.setCookie({
        body: {
          key: keyName.location,
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

      setRegionData((state) => {
        return {
          ...kakaoRegionData,
          petBookRegionName:
            regionData.region_2depth_name + " " + regionData.region_3depth_name,
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
        {regionData.region_2depth_name + " " + regionData.region_3depth_name}
      </h1>
      <button type="button" onClick={onClick}>
        위치수정
      </button>
    </header>
  );
};

export default CurrentGps;
