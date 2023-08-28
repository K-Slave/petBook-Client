import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authRequest } from "@lib/API/petBookAPI";
import { cookieKeyName } from "@lib/globalConst";
import useLoaderNavigate from "@lib/hooks/common/useLoaderNavigate";
import { createRequest, useSetResource } from "@lib/hooks/common/useResource";
import tokenParser from "@lib/server/parse/tokenParser";
import { SocialLoginButton, InfoText } from "./style";

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

  const { data, isSuccess, error, isError } = useSetResource(LOGIN);
  const client = useQueryClient();

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
      <InfoText errorState={errorState}>{errorText}</InfoText>
    </>
  );
};

export const LoginSubmit = () => {
  return (
    <>
      <LoginSubmit.LoginSubmitButton />
      <LoginSubmit.SocialLogin />
    </>
  );
};

LoginSubmit.LoginSubmitButton = LoginSubmitButton;
LoginSubmit.SocialLogin = SocialLogin;

export default LoginSubmit;
