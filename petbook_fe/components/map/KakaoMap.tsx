/* global kakao */
import mapState, {
  currentPoiState,
} from "@atoms/pageAtoms/hospitalmap/mapState";
import Skeleton from "@components/common/Skeleton/Skeleton";
import type { HospitalInfo } from "@lib/API/petBookAPI/types/hospitalRequest";
import useClientReady from "@lib/hooks/common/useClientReady";
import useDidMountEffect from "@lib/hooks/common/useDidMountEffect";
import useResource from "@lib/hooks/common/useResource";
import navigator from "@lib/modules/navigator";
import geoLocationValidate from "@lib/utils/validation/geoLocationValidate";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import { useRouter } from "next/router";
import React, {
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useMemo,
} from "react";
import { useMap } from "react-kakao-maps-sdk";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { KakaoMapDiv, KakaoMapMarker } from "./KakaoMap.style";
import KaKaoOverlay from "./KakaoOverlay";

const KakaoMap = () => {
  const router = useRouter();
  const pageParam = Number(router.query?.page);
  const currentPage = Number.isNaN(pageParam) ? 1 : pageParam;
  const page = currentPage - 1;

  const { data, status } = useResource({
    key: [HOSPITAL_LIST.key[0], { page }],
    fetcher: () =>
      HOSPITAL_LIST.fetcher({
        params: {
          page,
          size: 50,
        },
      }),
  });

  if (status === "success") {
    const idMatchedData = data.data.hospitals.find(
      (poiData) => poiData.id.toString() === router.query.id
    );

    return (
      <KakaoMap.Wrap poiData={idMatchedData || data.data.hospitals[0]}>
        {data.data.hospitals.length > 1 && !router.query.id && (
          <KakaoMap.Bound poiDataList={data.data.hospitals} />
        )}
        <KakaoMap.List poiDataList={data.data.hospitals} />
      </KakaoMap.Wrap>
    );
  }

  return <Skeleton />;
};

interface WrapProps {
  poiData?: HospitalInfo;
}

const Wrap = ({ children, poiData }: PropsWithChildren<WrapProps>) => {
  return (
    <>
      <KakaoMapDiv
        center={{
          lat: poiData ? poiData.latitude : 37.5,
          lng: poiData ? poiData.longitude : 127.5,
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

const Observer = () => {
  // const map = useMap();
  // const currentPoi = useRecoilValue(currentPoiState);
  // const { latitude, longitude } = currentPoi;
  // const geoValidation = geoLocationValidate(latitude, longitude);

  // useEffect(() => {
  //   if (geoValidation) {
  //     map.panTo(new kakao.maps.LatLng(latitude, longitude));
  //   }
  // }, [currentPoi]);
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
            key={poiData.name}
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
KakaoMap.Bound = Bound;
KakaoMap.Observer = Observer;
KakaoMap.List = React.memo(List);
KakaoMap.Item = React.memo(Item);
KakaoMap.Marker = React.memo(Marker);
KakaoMap.Overlay = React.memo(KaKaoOverlay);

export default KakaoMap;
