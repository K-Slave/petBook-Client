import styled from "styled-components";
import { FindIdForm } from "@components/find/FindIdForm";

const Main = styled.main`
  overflow: auto;
  padding-top: 194px;
  margin: 0 auto;
  max-width: 400px;
  height: calc(100vh - 61px);
  background-color: var(--bg_white_02);
`;

export const FindUserInfo = () => {
  return (
    <Main>
      <FindIdForm />
    </Main>
  );
};
export default FindUserInfo;
