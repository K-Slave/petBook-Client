/* global kakao */
import geoLocationState from "@atoms/pageAtoms/hospitalmap/geoLocation";
import mapState, {
  currentPoiState,
  currentZoomLevelState,
} from "@atoms/pageAtoms/hospitalmap/mapState";
import rectBoundsState from "@atoms/pageAtoms/hospitalmap/rectBounds";
import Skeleton from "@components/common/Skeleton/Skeleton";
import type {
  HospitalFullInfo,
  HospitalInfo,
} from "@lib/API/petBookAPI/types/hospitalRequest";
import useDidMountEffect from "@lib/hooks/common/useDidMountEffect";
import useBounds from "@lib/hooks/map/useBounds";
import useGetRect from "@lib/hooks/map/useGetRect";
import usePoiData from "@lib/hooks/map/usePoiData";
import mapsLevelSelector from "@lib/modules/mapsLevelSelector";
import getBoundsCenter from "@lib/utils/kakaoMaps/getBoundsCenter";
import getRectBounds, { Coordinates } from "@lib/utils/kakaoMaps/getRectBounds";
import localConsole from "@lib/utils/localConsole";

import { koreaGeoLocationValidate } from "@lib/utils/validation/geoLocationValidate";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect, useMemo } from "react";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { RectSearchButton } from "./KakaoMap.style";
import KaKaoOverlay from "./KakaoOverlayItem";

export let kakaoUseMap: kakao.maps.Map;

const KakaoMap = () => {
  const { router, data, status } = usePoiData();

  let idMatchedData: HospitalFullInfo | undefined;

  // if (status === "loading") {
  //   return <Skeleton />;
  // }

  if (status === "success" && data && router.query.id) {
    idMatchedData = data.data.hospitals.find(
      (poiData) => poiData.hospitals.id.toString() === router.query.id
    );
  }

  return (
    <KakaoMap.Wrap
      poiData={
        status === "success" && data
          ? idMatchedData || data.data.hospitals[0]
          : undefined
      }
      isIdData={!!router.query.id}
    >
      <KakaoMap.Observer />
      <KakaoMap.Rect />

      {status === "success" &&
        data &&
        data.data.hospitals.length > 1 &&
        !router.query.id && (
          <KakaoMap.Bound poiDataList={data.data.hospitals} />
        )}
      {status === "success" && data && (
        <KakaoMap.List poiDataList={data?.data.hospitals} />
      )}
      <KakaoMap.RectSearch />
    </KakaoMap.Wrap>
  );
};

// {
//   hospitals: {
//     id: 0,
//     name: "",
//     address: "",
//     latitude: 37.495417,
//     longitude: 127.033201,
//     n_id: 0,
//     modifiedAt: "",
//     createdAt: "",
//   },
//   bestReview: {
//     bestContent: "",
//     bestId: 0,
//     bestListCount: 0,
//   },
//   worstReview: {
//     worstContent: "",
//     worstId: 0,
//     worstLikeCount: 0,
//   },
// }

interface WrapProps {
  poiData: HospitalFullInfo | undefined;
  isIdData: boolean;
}

const Wrap = ({
  children,
  poiData,
  isIdData,
}: PropsWithChildren<WrapProps>) => {
  const currentGeoLocation = useRecoilValue(geoLocationState);
  const setMapState = useSetRecoilState(mapState);

  const initLat = useMemo(() => {
    return poiData && isIdData
      ? poiData.hospitals.latitude
      : currentGeoLocation.latitude;
  }, []);

  const initLng = useMemo(() => {
    return poiData && isIdData
      ? poiData.hospitals.longitude
      : currentGeoLocation.longitude;
  }, []);

  return (
    <>
      <Map
        center={{
          lat: initLat,
          lng: initLng,
        }}
        level={mapsLevelSelector(initLat)}
        style={{
          position: "relative",
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

const Observer = () => {
  const map = useMap();
  kakaoUseMap = map;

  const setMapState = useSetRecoilState(mapState);

  const currentPoi = useRecoilValue(currentPoiState);
  const currentZoomLevel = useRecoilValue(currentZoomLevelState);
  const { latitude, longitude } = currentPoi;

  useEffect(() => {
    setMapState((state) => ({
      ...state,
      currentZoomLevel: map.getLevel(),
    }));
  }, []);

  // TODO : 고정 레벨 말고 다른 방법이 있는지
  //  현재 선택되어진 개별 병원 데이터가 변경될시 지도 이동과 레벨 조정
  useDidMountEffect(() => {
    const geoValidation = koreaGeoLocationValidate(latitude, longitude);

    if (geoValidation) {
      if (currentZoomLevel >= 9) {
        // TODO
        map.setLevel(6);
      }
      map.panTo(new kakao.maps.LatLng(latitude, longitude));
    }
  }, [currentPoi]);

  return <></>;
};

const Rect = React.memo(() => {
  useGetRect();

  return <></>;
});

interface BoundProps {
  poiDataList: HospitalFullInfo[];
}

const Bound = ({ poiDataList }: BoundProps) => {
  // useBounds({ poiDataList });
  // const map = useMap();
  // const currentRectBounds = useRecoilValue(rectBoundsState);

  // useEffect(() => {
  //   const boundsCenter = getBoundsCenter(
  //     currentRectBounds.SW_7,
  //     currentRectBounds.NE_1
  //   );
  //   map.panTo(new kakao.maps.LatLng(boundsCenter.lat, boundsCenter.lng));
  // }, [currentRectBounds]);

  return <></>;
};

interface ListProps {
  poiDataList: HospitalFullInfo[];
}

const List = ({ poiDataList }: ListProps) => {
  const router = useRouter();

  return (
    <>
      {poiDataList.map((poiData, idx) => {
        const isMatched = poiData.hospitals.id.toString() === router.query.id;
        return (
          <KakaoMap.Item
            key={poiData.hospitals.id}
            poiData={poiData.hospitals}
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

const RectSearch = () => {
  const map = useMap();
  const setCurrentRectBounds = useSetRecoilState(rectBoundsState);

  const onClick = () => {
    const NE_Coordinates: Coordinates = {
      lat: map.getBounds().getNorthEast().getLat(),
      lng: map.getBounds().getNorthEast().getLng(),
    };

    const SW_Coordinates: Coordinates = {
      lat: map.getBounds().getSouthWest().getLat(),
      lng: map.getBounds().getSouthWest().getLng(),
    };

    const rectBounds = getRectBounds(SW_Coordinates, NE_Coordinates);

    setCurrentRectBounds(rectBounds);
  };

  return <RectSearchButton onClick={onClick}>현위치 재검색</RectSearchButton>;
};

KakaoMap.Wrap = React.memo(Wrap);
KakaoMap.Observer = Observer;
KakaoMap.Rect = Rect;
KakaoMap.Bound = React.memo(Bound);
KakaoMap.List = React.memo(List);
KakaoMap.Item = React.memo(Item);
KakaoMap.Marker = React.memo(Marker);
KakaoMap.Overlay = React.memo(KaKaoOverlay);
KakaoMap.RectSearch = RectSearch;

export default KakaoMap;
