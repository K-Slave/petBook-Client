import React from "react";
import styled from "styled-components";
import LoginForm from "@/stories/LoginForm";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 10.25rem);

  padding-bottom: 3rem;

  background-color: var(--bg_white_02);
`;

const Login = () => {
  return (
    <Main>
      {/* <LoginIndex /> */}
      <LoginForm />
    </Main>
  );
};

export default Login;
