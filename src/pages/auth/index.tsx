import React from "react";
import styled from "styled-components";
import LoginForm from "@/stories/LoginModule";
import commonServerSideProps from "@lib/server/commonServerSideProps";
import Cookies from "js-cookie";
import { memoizedValue } from "@lib/globalConst";
import { AuthRedirectWrapper } from "@/stories/common/Auth/AuthWrapper";
import { useRouter } from "next/router";
import localConsole from "@lib/utils/localConsole";

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
  const prevPath = Cookies.get(memoizedValue.prevPath);
  const { query } = useRouter();

  localConsole?.log(query, "query");

  Cookies.remove(memoizedValue.prevPath);

  return (
    <AuthRedirectWrapper pathTo={prevPath || "/"}>
      <Main>
        {query.register !== "true" && <LoginForm />}
        {query.register === "true" && <>{/* 회원가입 컴포넌트 */}</>}
      </Main>
    </AuthRedirectWrapper>
  );
};

export const getServerSideProps = commonServerSideProps();

export default Auth;
