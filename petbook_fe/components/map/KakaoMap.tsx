/* global kakao */
import mapState, {
  currentPoiState,
} from "@atoms/pageAtoms/hospitalmap/mapState";
import Skeleton from "@components/common/Skeleton/Skeleton";
import type {
  HospitalInfo,
  HospitalListResponse,
} from "@lib/API/petBookAPI/types/hospitalRequest";
import useDidMountEffect from "@lib/hooks/common/useDidMountEffect";
import usePoiData from "@lib/hooks/map/usePoiData";
import geoLocationValidate from "@lib/utils/validation/geoLocationValidate";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect, useMemo } from "react";
import { useMap } from "react-kakao-maps-sdk";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { KakaoMapDiv, KakaoMapMarker } from "./KakaoMap.style";
import KaKaoOverlay from "./KakaoOverlay";

const KakaoMap = () => {
  const { router, data, status } = usePoiData();

  if (status === "success") {
    const hopitalData = data?.data as HospitalListResponse;

    const idMatchedData = hopitalData.hospitals.find(
      (poiData) => poiData.id.toString() === router.query.id
    );

    return (
      <KakaoMap.Wrap poiData={idMatchedData || hopitalData.hospitals[0]}>
        <KakaoMap.Observer />

        {hopitalData.hospitals.length > 1 && !router.query.id && (
          <KakaoMap.Bound poiDataList={hopitalData.hospitals} />
        )}
        <KakaoMap.List poiDataList={hopitalData.hospitals} />
      </KakaoMap.Wrap>
    );
  }

  return <Skeleton />;
};

interface WrapProps {
  poiData?: HospitalInfo;
}

const Wrap = ({ children, poiData }: PropsWithChildren<WrapProps>) => {
  const initLat = useMemo(() => {
    return poiData ? poiData.latitude : 37.5;
  }, []);

  const initLng = useMemo(() => {
    return poiData ? poiData.longitude : 127.5;
  }, []);

  return (
    <>
      <KakaoMapDiv
        center={{
          lat: initLat,
          lng: initLng,
        }}
      >
        {children}
      </KakaoMapDiv>
    </>
  );
};

Wrap.defaultProps = {
  poiData: {
    id: 0,
    name: "",
    address: "",
    latitude: 37.5,
    longitude: 127.5,
    n_id: 0,
  },
};

const Observer = () => {
  const map = useMap();
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
  const { latitude, longitude } = currentPoi;

  useDidMountEffect(() => {
    const geoValidation = geoLocationValidate(latitude, longitude);

    if (geoValidation) {
      map.panTo(new kakao.maps.LatLng(latitude, longitude));
    }
  }, [currentPoi]);
  return <></>;
};

interface MarkerListProps {
  poiDataList: HospitalInfo[];
}

const Bound = ({ poiDataList }: MarkerListProps) => {
  const setMapState = useSetRecoilState(mapState);
  const map = useMap();
  const bounds = new kakao.maps.LatLngBounds();
  const latLngList = poiDataList.map((poiData) => {
    return new kakao.maps.LatLng(poiData.latitude, poiData.longitude);
  });

  latLngList.forEach((latLng) => {
    bounds.extend(latLng);
  });

  useEffect(() => {
    map.setBounds(bounds);
    setMapState((state) => ({ ...state, isBounded: true }));
  }, []);

  return <></>;
};

const List = ({ poiDataList }: MarkerListProps) => {
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
    <KakaoMapMarker
      key={poiData.name}
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
