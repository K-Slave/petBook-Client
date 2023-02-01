import HospitalList from "@components/hospital/HospitalList";
import MapContainer from "@containers/map/MapContainer";
import type { NextPage } from "next";
import { createGlobalStyle } from "styled-components";

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

const HospitalMapPage: NextPage = (pageProps: any) => {
  return (
    <>
      <HospitalMapGlobalStyle />
      <MapContainer />
      <HospitalList />
    </>
  );
};

export default HospitalMapPage;
