import HospitalDetailContainer from "@containers/hospital/HospitalDetailContainer";
import { HOSPITAL_DETAIL } from "@lib/queries/hospital";
import type { NextPageWithResources } from "@lib/queries";
import styled from "styled-components";

// TODO: add hospital review resource

const HospitalDetail: NextPageWithResources = () => {
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
