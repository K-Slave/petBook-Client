import { loginFormState } from "@atoms/pageAtoms/login/userState";
import LoginInput from "@components/login/LoginInputBox";
import { authRequest } from "@lib/API/petBookAPI";
import Link from "next/link";
import Image from "next/image";

import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { createRequest, useSetResource } from "@lib/hooks/common/useResource";
import useLoaderNavigate from "@lib/hooks/common/useLoaderNavigate";
import { AxiosError } from "axios";
import { useSetUserInfo } from "@lib/hooks/common/useUserInfo";
import {
  ButtonBox,
  PassGuide,
  AutomaticLabel,
  InfoText,
} from "./styled/styledLoginSubmit";

const LOGIN = createRequest({
  key: ["LOGIN"],
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
      <Link href="/find/pass">계정을 잊으셨나요?</Link>
      {/* <Link href="/find/pass">비밀번호 찾기</Link>
      <Link href="/find/id">아이디 찾기</Link> */}
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
  const [errorText, setErrorText] = useState("");
  const { navigator } = useLoaderNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(newValue);
  };

  const loginForm = useRecoilValue(loginFormState);
  const { data, isSuccess, error, isError, mutate } = useSetResource(LOGIN);
  const onSubmit = () => {
    mutate(loginForm);
  };
  useEffect(() => {
    if (isSuccess) {
      navigator({
        url: "/info",
        thenCallback: () => {
          // TODO: API 로 만들어볼것. 낭비를 줄여야 할듯
          Router.reload();
        },
      });

      return;
    }
    if (isError) {
      // error type 린트에러
      const errorObj = error as AxiosError;

      if (errorObj.response && errorObj.response.data) {
        const { message } = errorObj.response.data as {
          message?: string;
        };

        if (message) {
          setErrorText(message);
        }
      }
      setErrorState(true);
    } else {
      setErrorState(false);
    }
  }, [isError, data]);

  return (
    <>
      <div>
        <InfoText errorState={errorState}>{errorText}</InfoText>
        <AutomaticLabel htmlFor="login">
          <input type="checkbox" id="login" onChange={onChange} />
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
