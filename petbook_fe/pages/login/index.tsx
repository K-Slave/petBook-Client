import styled from "styled-components";

import { LoginIndex } from "@components/login/LoginIndex";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 61px);
  overflow: auto;
  background-color: var(--bg);
  h1 {
    margin-bottom: 40px;
    font-size: 25px;
    font-weight: normal;
  }
`;

const Login = () => {
  return (
    <Main>
      <LoginIndex />
    </Main>
  );
};

export default Login;
