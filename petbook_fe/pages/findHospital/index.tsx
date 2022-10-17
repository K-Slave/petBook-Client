import type { NextPage } from "next";
import { createResource } from "../../hooks/useResource";
import MapContainer from "../../components/map/MapContainer";

const FindHospital: NextPage = (initProps: any) => {
  return (
    <>
      <MapContainer />
    </>
  );
};

export default FindHospital;
