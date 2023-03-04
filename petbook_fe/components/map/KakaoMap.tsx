/* global kakao */
import mapState, {
  currentGeoLocationState,
  currentPoiState,
  currentRectBoundsState,
  currentZoomLevelState,
} from "@atoms/pageAtoms/hospitalmap/mapState";
import Skeleton from "@components/common/Skeleton/Skeleton";
import type {
  HospitalInfo,
  HospitalListResponse,
} from "@lib/API/petBookAPI/types/hospitalRequest";
import useDidMountEffect from "@lib/hooks/common/useDidMountEffect";
import usePoiData from "@lib/hooks/map/usePoiData";
import mapsLevelSelector from "@lib/modules/mapsLevelSelector";
import getRectBounds, { Coordinates } from "@lib/utils/kakaoMaps/getRectBounds";

import geoLocationValidate, {
  koreaGeoLocationValidate,
} from "@lib/utils/validation/geoLocationValidate";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect, useMemo } from "react";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { useRecoilValue, useSetRecoilState } from "recoil";
import KaKaoOverlay from "./KakaoOverlay";

export let kakaoUseMap: kakao.maps.Map;

const KakaoMap = () => {
  const { router, data, status } = usePoiData();

  let idMatchedData: HospitalInfo | undefined;

  if (status === "loading") {
    return <Skeleton />;
  }

  if (status === "success" && data) {
    idMatchedData = data.data.hospitals.find(
      (poiData) => poiData.id.toString() === router.query.id
    );
  }

  return (
    <KakaoMap.Wrap
      poiData={
        status === "success" && data
          ? idMatchedData || data.data.hospitals[0]
          : {
              id: 0,
              name: "",
              address: "",
              latitude: 37.495417,
              longitude: 127.033201,
              n_id: 0,
            }
      }
      isIdData={!!router.query.id}
    >
      <KakaoMap.Observer />

      {status === "success" &&
        data &&
        data.data.hospitals.length > 1 &&
        !router.query.id && (
          <KakaoMap.Bound poiDataList={data.data.hospitals} />
        )}
      {status === "success" && data && (
        <KakaoMap.List poiDataList={data?.data.hospitals} />
      )}
    </KakaoMap.Wrap>
  );
};

interface WrapProps {
  poiData: HospitalInfo;
  isIdData: boolean;
}

const Wrap = ({
  children,
  poiData,
  isIdData,
}: PropsWithChildren<WrapProps>) => {
  const currentGeoLocation = useRecoilValue(currentGeoLocationState);
  const setMapState = useSetRecoilState(mapState);

  const initLat = useMemo(() => {
    return isIdData ? poiData.latitude : currentGeoLocation.latitude;
  }, []);

  const initLng = useMemo(() => {
    return isIdData ? poiData.longitude : currentGeoLocation.longitude;
  }, []);

  // useEffect(() => {
  //   map.setLevel(mapsLevelSelector(initLat));
  // }, []);

  return (
    <>
      <Map
        center={{
          lat: initLat,
          lng: initLng,
        }}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(200, 200, 200, 0.3)",
        }}
        onZoomChanged={(mapObj) => {
          setMapState((state) => ({
            ...state,
            currentZoomLevel: mapObj.getLevel(),
          }));
        }}
        onBoundsChanged={(mapObj) => {}}
      >
        {children}
      </Map>
    </>
  );
};

// Wrap.defaultProps = {
//   poiData: {
//     id: 0,
//     name: "",
//     address: "",
//     latitude: 37.495417,
//     longitude: 127.033201,
//     n_id: 0,
//   },
// };

const Observer = () => {
  const map = useMap();
  kakaoUseMap = map;

  const setMapState = useSetRecoilState(mapState);

  // const { router, data, status } = usePoiData();

  // useEffect(() => {
  //   localConsole?.log("asd");

  //   if (data) {
  //     const { hospitals } = data?.data as HospitalListResponse;
  //     const idMatchedData = hospitals.find(
  //       (poiData) => poiData.id.toString() === router.query.id
  //     );

  //     if (idMatchedData) {
  //       const { latitude, longitude } = idMatchedData;
  //       const geoValidation = geoLocationValidate(latitude, longitude);

  //       if (geoValidation) {
  // map.panTo(new kakao.maps.LatLng(latitude, longitude));
  //       }
  //     }
  //   }
  // }, [data]);

  const currentPoi = useRecoilValue(currentPoiState);
  const currentZoomLevel = useRecoilValue(currentZoomLevelState);
  const currentRectBounds = useRecoilValue(currentRectBoundsState);
  const currentGeoLocation = useRecoilValue(currentGeoLocationState);
  const { latitude, longitude } = currentPoi;

  // TODO : id 값으로 접속했다면 currentPoi 를 기준으로 소수점 자리만큼 레벨 조정 구현 해야함. 초기 레벨과 동적 레벨 지정 포함
  useEffect(() => {
    setMapState((state) => ({
      ...state,
      currentZoomLevel: map.getLevel(),
    }));
  }, []);

  // 현재 화면의 지도 좌표 경계 추출
  // poi 데이터가 바뀌거나 줌레벨이 바뀌면 동작
  useEffect(() => {
    const NE_Coordinates: Coordinates = {
      lat: map.getBounds().getNorthEast().getLat(),
      lng: map.getBounds().getNorthEast().getLng(),
    };

    const SW_Coordinates: Coordinates = {
      lat: map.getBounds().getSouthWest().getLat(),
      lng: map.getBounds().getSouthWest().getLng(),
    };

    const rectBounds = getRectBounds(SW_Coordinates, NE_Coordinates);

    setMapState((state) => ({ ...state, currentRectBounds: rectBounds }));
  }, [currentGeoLocation]);

  useDidMountEffect(() => {
    const geoValidation = koreaGeoLocationValidate(latitude, longitude);

    if (geoValidation) {
      // if (currentZoomLevel >= 9) {
      //   // TODO
      //   // currentPoi.latitude.toString().split(".")[1].length
      //   map.setLevel(6);
      // }

      map.panTo(new kakao.maps.LatLng(latitude, longitude));
    }
  }, [currentPoi]);

  useEffect(() => {
    if (
      koreaGeoLocationValidate(
        currentGeoLocation.latitude,
        currentGeoLocation.longitude
      )
    ) {
      // const boundary = Object.values(rectBounds);
      // localConsole?.log(boundary, "boundary");
      // client.refetchQueries([HOSPITAL_LIST.key[0], { page: 1,   }]);
      // {
      //   animate: {
      //     duration: 500,
      //   },
      // }
      // level
      setTimeout(() => {
        kakaoUseMap.setLevel(mapsLevelSelector(currentGeoLocation.latitude));
      }, 200);
    }
  }, [currentGeoLocation]);

  return <></>;
};

interface BoundProps {
  poiDataList: HospitalInfo[];
}

const Bound = ({ poiDataList }: BoundProps) => {
  const setMapState = useSetRecoilState(mapState);
  const map = useMap();
  const bounds = new kakao.maps.LatLngBounds();
  const latLngList = poiDataList.map((poiData) => {
    return new kakao.maps.LatLng(poiData.latitude, poiData.longitude);
  });

  latLngList.forEach((latLng) => {
    bounds.extend(latLng);
  });

  // TODO : 바운즈 처리 해줘야함
  // useEffect(() => {
  //   map.setBounds(bounds);
  //   setMapState((state) => ({ ...state, isBounded: true }));
  // }, []);

  return <></>;
};

interface ListProps {
  poiDataList: HospitalInfo[];
}

const List = ({ poiDataList }: ListProps) => {
  const router = useRouter();

  return (
    <>
      {poiDataList.map((poiData, idx) => {
        const isMatched = poiData.id.toString() === router.query.id;
        return (
          <KakaoMap.Item
            key={poiData.id}
            poiData={poiData}
            isMatched={isMatched}
          />
        );
      })}
    </>
  );
};

const Item = ({
  poiData,
  isMatched,
}: {
  poiData: HospitalInfo;
  isMatched: boolean;
}) => {
  return (
    <>
      <KakaoMap.Marker poiData={poiData} />
      <KakaoMap.Overlay poiData={poiData} isMatched={isMatched} />
    </>
  );
};

interface MarkerProps {
  poiData: HospitalInfo;
}

const Marker = ({ poiData }: MarkerProps) => {
  const image = useMemo(() => {
    return {
      src: "",
      size: {
        width: 0,
        height: 0,
      },
    };
  }, []);

  return (
    <MapMarker
      key={poiData.id}
      position={{ lat: poiData.latitude, lng: poiData.longitude }}
      image={image}
      // zIndex={isMatched ? 200 : 0}
    />
  );
};

KakaoMap.Wrap = React.memo(Wrap);
KakaoMap.Observer = Observer;
KakaoMap.Bound = Bound;
KakaoMap.List = React.memo(List);
KakaoMap.Item = React.memo(Item);
KakaoMap.Marker = React.memo(Marker);
KakaoMap.Overlay = React.memo(KaKaoOverlay);

export default KakaoMap;
