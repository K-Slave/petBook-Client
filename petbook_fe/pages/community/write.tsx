import { NextPage } from "next";
import styled from "styled-components";
import HtmlHeader from "../../components/common/HtmlHeader";
import WriteEditor from "../../components/writer/WriteEditor";

const Write: NextPage = () => {
  return (
    <>
      <HtmlHeader />
      <Container className='cont'>
        <WriteEditor />
      </Container>
    </>
  );
};

export default Write;

const Container = styled.div`
  width: 600px;
  height: 400px;
`;

// const Sections = styled.div`
//   width: 90vw;
//   max-width: 1280px;
//   margin: 0 auto;
//   padding-top: 80px;
// `;
