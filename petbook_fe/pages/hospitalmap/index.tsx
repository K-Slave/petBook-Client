import HospitalDetail from "@components/hospital/HospitalDetail";
import HospitalList from "@components/hospital/HospitalList";
import HospitalReview from "@components/hospital/HospitalReview";
import MapContainer from "@containers/map/MapContainer";
import { hospitalRequest } from "@lib/API/petBookAPI";
import { createResource } from "@lib/hooks/common/useResource";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";

export const HOSPITAL_LIST = createResource({
  key: ["HOSPITAL_LIST"],
  fetcher: hospitalRequest.hospital_list,
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

const HospitalMap: NextPage = (pageProps: any) => {
  const router = useRouter();
  return (
    <>
      <HospitalReview />
      <HospitalMapGlobalStyle />
      <MapContainer />
      {router.query.name ? <HospitalDetail /> : <HospitalList />}
    </>
  );
};

type HospitalMapPageType = NextPage & {
  requiredResources?: [typeof HOSPITAL_LIST];
};

const HospitalMapPage: HospitalMapPageType = HospitalMap;
HospitalMapPage.requiredResources = [HOSPITAL_LIST];

export default HospitalMapPage;
