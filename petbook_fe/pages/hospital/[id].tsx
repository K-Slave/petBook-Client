import HospitalDetailContainer from "@containers/hospital/HospitalDetailContainer";
import { HOSPITAL_DETAIL } from "@lib/commonValue/queries";
import { NextPage } from "next";
import styled from "styled-components";

// TODO: add required resource (hospital, review)

type Page = NextPage & {
  requiredResources?: [typeof HOSPITAL_DETAIL];
};

const HospitalDetail: Page = () => {
  return (
    <Main>
      <HospitalDetailContainer />
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  max-width: 605px;
  margin: 50px auto;
`;

HospitalDetail.requiredResources = [HOSPITAL_DETAIL];
export default HospitalDetail;
