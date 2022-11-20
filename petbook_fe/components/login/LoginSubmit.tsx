import { loginFormState } from "@atoms/pageAtoms/login/userState";
import LoginInput from "@components/login/LoginInputBox";
import { authRequest } from "@lib/API/petBookAPI";
import navigator from "@lib/modules/navigator";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { createRequest, useSetResource } from "@lib/hooks/common/useResource";
import { UserLoginRequest } from "@lib/API/petBookAPI/types/userRequest";
import localConsole from "@lib/utils/localConsole";
import {
  ButtonBox,
  PassGuide,
  AutomaticLabel,
  InfoText,
} from "./styled/styledLoginSubmit";

const LOGIN = createRequest({
  key: "LOGIN",
  requester: authRequest.login,
});

export const SocialLogin = () => {
  const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_PY_URL as string;
  const router = useRouter();

  const [href, setHref] = useState("");

  useEffect(() => {
    setHref(window.location.href);
  }, []);

  return (
    <ButtonBox>
      <a
        className="naver"
        href={`${BACKEND_BASE_URL}/naver/login${
          router.asPath ? `?redirect_url=${href}` : ""
        }`}
      >
        네이버로 로그인
      </a>
      <a
        className="kakao"
        href={`${BACKEND_BASE_URL}/kakao/login${
          router.asPath ? `?redirect_url=${href}` : ""
        }`}
      >
        카카오로 로그인
      </a>
      <a
        className="google"
        href={`${BACKEND_BASE_URL}/google/login${
          router.asPath ? `?redirect_url=${href}` : ""
        }`}
      >
        구글로 로그인
      </a>
    </ButtonBox>
  );
};

export const LoginSubmitForm = () => {
  return (
    <>
      <div className="Login_Title">
        <Image
          src="/img/common/logo/logo.svg"
          alt="Picture of the author"
          width={160}
          height={27}
        />
        <h2>로그인 후 다양한 콘텐츠를 즐겨보세요!</h2>
      </div>
      <form>
        <LoginInput IconType="Login" axiosValue="email" current="이메일" />
        <LoginInput
          IconType="Password"
          axiosValue="password"
          current="비밀번호"
        />
      </form>
    </>
  );
};

export const LoginPassGuide = () => {
  return (
    <PassGuide>
      <Link href="/find/pass">비밀번호 찾기</Link>
      <Link href="/find/id">아이디 찾기</Link>
      <Link href="/register">회원가입</Link>
    </PassGuide>
  );
};

export const LoginSubmitButton = () => {
  // { test용
  //   "email": "test@petbook.com",
  //   "password": "p@55w0rd1!"
  // }
  const [errorState, setErrorState] = useState(false);
  const user = useRecoilValue(loginFormState);
  const { data, isSuccess, isError, mutate } = useSetResource(LOGIN);
  const onSubmit = () => {
    mutate(user);
  };

  useEffect(() => {
    console.log(errorState);
    if (isSuccess) {
      const { token } = data?.data as UserLoginRequest;

      localConsole?.log(token, "token");
      Cookies.set("petBookUser", token, { expires: 30 });
      navigator("/info");
    }
    if (isError) {
      setErrorState(true);
    } else {
      setErrorState(false);
    }
  }, [isError, data]);

  return (
    <>
      <div>
        <InfoText errorState={errorState}>
          아이디 또는 비밀번호를 확인하세요
        </InfoText>
        <AutomaticLabel htmlFor="login">
          <input type="checkbox" id="login" />
          <p>로그인 상태유지</p>
        </AutomaticLabel>
      </div>
      <button type="button" className="Primary" onClick={onSubmit}>
        로그인
      </button>
    </>
  );
};

export const LoginSubmit = () => {
  return (
    <>
      <LoginSubmit.LoginSubmitForm />
      <LoginSubmit.LoginSubmitButton />
      {/* <LoginSubmit.SocialLogin /> */}
      <LoginSubmit.LoginPassGuide />
    </>
  );
};

LoginSubmit.LoginSubmitForm = LoginSubmitForm;
LoginSubmit.LoginSubmitButton = LoginSubmitButton;
LoginSubmit.SocialLogin = SocialLogin;
LoginSubmit.LoginPassGuide = LoginPassGuide;

export default LoginSubmit;
