import React from "react";
import styled from "styled-components";
import LoginForm from "@/stories/LoginModule";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 10.25rem);

  padding-bottom: 3rem;

  background-color: var(--bg_white_02);
`;

// TODO : 로그인 되있을시 Redirection 또는 라우팅 처리하기
const Auth = () => {
  return (
    <Main>
      <LoginForm />
    </Main>
  );
};

export default Auth;
