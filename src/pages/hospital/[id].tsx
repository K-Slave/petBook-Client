import HospitalDetailContainer from "@containers/hospital/HospitalDetailContainer";
import { NextPageWithOptions } from "@lib/queries";
import { HOSPITAL_DETAIL } from "@lib/resources/hospitalResource";
import commonServerSideProps from "@lib/server/commonServerSideProps";
import { GetServerSideProps } from "next";
import styled from "styled-components";

// TODO: add hospital review resource

const HospitalDetail: NextPageWithOptions = () => {
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

export const getServerSideProps: GetServerSideProps = commonServerSideProps([
  HOSPITAL_DETAIL,
]);

export default HospitalDetail;
