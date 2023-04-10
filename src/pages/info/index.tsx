import styled from "styled-components";

const Container = styled.main`
  overflow: auto;
  margin: 0 auto;
  max-width: 25rem;
  width: calc(100% - 32px);
  height: calc(100vh - 61px);
  background-color: var(--bg);
`;

const InfoPage = () => {
  return <Container>안내화면</Container>;
};

export default InfoPage;
