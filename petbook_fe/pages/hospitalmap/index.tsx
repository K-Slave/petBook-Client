import HospitalContainer from "@containers/map/HospitalContainer";
import MapContainer from "@containers/map/MapContainer";
import { hospitalRequest, imgRequest } from "@lib/API/petBookAPI";
import { HOSPITAL_DETAIL, HOSPITAL_LIST } from "@lib/commonValue/queries";
import { createRequest, createResource } from "@lib/hooks/common/useResource";
import { removeScrollPosition } from "@lib/modules/localStorage";
import type { NextPage } from "next";
import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";

export const HOSPITAL_REVIEW_LIST = createResource({
  key: ["HOSPITAL_REVIEW_LIST"],
  fetcher: hospitalRequest.hospital_review_list,
});
export const HOSPITAL_REVIEW_CREATE = createRequest({
  key: ["HOSPITAL_REVIEW_CREATE"],
  requester: hospitalRequest.hospital_review_create,
});
export const IMG_CREATE = createRequest({
  key: ["IMG_CREATE"],
  requester: imgRequest.img_create,
});

const HospitalMapGlobalStyle = createGlobalStyle`
  #__next {
    display: grid;
    grid-template-rows: 164px auto;
    grid-template-columns: auto 370px;

    min-width: 100%;
    height: 100vh;
    overflow-y: hidden;
  }

  .Top__Nav__Wrap {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const HospitalMap: NextPage = () => {
  useEffect(() => {
    return () => {
      removeScrollPosition();
    };
  }, []);
  return (
    <>
      <HospitalMapGlobalStyle />
      <MapContainer />
      <HospitalContainer />
    </>
  );
};

type HospitalMapPageType = NextPage & {
  requiredResources?: [typeof HOSPITAL_LIST, typeof HOSPITAL_DETAIL];
};

const HospitalMapPage: HospitalMapPageType = HospitalMap;
HospitalMapPage.requiredResources = [HOSPITAL_LIST, HOSPITAL_DETAIL];

export default HospitalMapPage;
