import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Button from "@/stories/common/Button";
import { loginFormState } from "@atoms/pageAtoms/login/userState";
import LoginInput from "@components/login/LoginInputBox";
import { authRequest } from "@lib/API/petBookAPI";
import { cookieKeyName } from "@lib/globalConst";
import useLoaderNavigate from "@lib/hooks/common/useLoaderNavigate";
import { createRequest, useSetResource } from "@lib/hooks/common/useResource";
import tokenParser from "@lib/server/parse/tokenParser";
import { SocialLoginButton, AutomaticLabel, InfoText } from "./style";

const LOGIN = createRequest({
  key: ["LOGIN"],
  requester: authRequest.login,
});

export const SocialLogin = () => {
  const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_PY_URL;
  const router = useRouter();

  const [href, setHref] = useState("");

  useEffect(() => {
    setHref(window.location.href);
  }, []);

  return (
    <SocialLoginButton>
      {/* <a
        className="naver"
        href={`${BACKEND_BASE_URL}/naver/login${
          router.asPath ? `?redirect_url=${href}` : ""
        }`}
      >
        네이버로 로그인
      </a> */}
      <a
        className="kakao"
        href={`${BACKEND_BASE_URL}/kakao/login${
          router.asPath ? `?redirect_url=${href}` : ""
        }`}
      >
        <Image
          src="/icons/kakao.svg"
          className="kakaoIcon"
          alt="kakao"
          width={20}
          height={20}
        />{" "}
        <p>카카오로 로그인</p>
      </a>
      {/* <a
        className="google"
        href={`${BACKEND_BASE_URL}/google/login${
          router.asPath ? `?redirect_url=${href}` : ""
        }`}
      >
        구글로 로그인
      </a> */}
    </SocialLoginButton>
  );
};

export const LoginSubmitButton = () => {
  const [errorState, setErrorState] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { navigator } = useLoaderNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(newValue);
  };

  const loginForm = useRecoilValue(loginFormState);
  const { data, isSuccess, error, isError, mutate } = useSetResource(LOGIN);
  const client = useQueryClient();
  const onSubmit = () => {
    mutate(loginForm);
  };
  useEffect(() => {
    if (isSuccess) {
      navigator({
        url: "/info",
        thenCallback: () => {
          if (data.response.data?.result.accessToken) {
            const { userInfo } = tokenParser(
              data.response.data.result.accessToken
            );

            client.setQueryData([cookieKeyName.userInfo], userInfo);
          }

          // Router.reload();
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
      <Button variant="primary" onClick={onSubmit}>
        로그인
      </Button>
    </>
  );
};

export const LoginSubmit = () => {
  return (
    <>
      {/* <LoginSubmit.LoginSubmitButton /> */}
      <LoginSubmit.SocialLogin />
    </>
  );
};

LoginSubmit.LoginSubmitButton = LoginSubmitButton;
LoginSubmit.SocialLogin = SocialLogin;

export default LoginSubmit;
