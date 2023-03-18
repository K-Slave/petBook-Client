import HospitalDetailContainer from "@containers/hospital/HospitalDetailContainer";
import styled from "styled-components";

// TODO: add required resource (hospital, review)

const HospitalDetail = () => {
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

export default HospitalDetail;
