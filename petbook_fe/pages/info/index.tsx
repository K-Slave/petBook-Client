import styled from "styled-components";

const Container = styled.main`
  overflow: auto;
  height: calc(100vh - 61px);
  background-color: var(--bg);
`;

const InfoPage = () => {
  return <Container>안내화면</Container>;
};

export default InfoPage;
