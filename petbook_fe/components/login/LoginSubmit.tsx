import ValidationInput from "@components/common/ValidationInput";
import navigator from "@lib/modules/navigator";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Container, ButtonBox } from "./styled/styledLoginSubmit";

const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_PY_URL as string;

export const SocialLogin = () => {
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

export const InduceSign = () => {
  return (
    <Container onClick={() => navigator("/register")}>
      <p>아직 Petbook 계정이 없으신가요?</p>
      <h3>
        회원가입을 통해 Petbook 유저들과 <br /> 소통할 수 있어요!
      </h3>
    </Container>
  );
};

export const LoginSubmitButton = () => {
  const onSubmit = () => {
    console.log("onSubmit");
  };
  return (
    <button type="button" onClick={onSubmit}>
      로그인
    </button>
  );
};

export const LoginSubmitForm = () => {
  return (
    <form>
      <ValidationInput submitType="login" axiosValue="email" current="이메일" />
      <ValidationInput
        submitType="login"
        axiosValue="password"
        current="비밀번호"
      />
    </form>
  );
};

export const LoginSubmit = () => {
  return (
    <>
      <LoginSubmit.LoginSubmitForm />
      <LoginSubmit.LoginSubmitButton />
      <LoginSubmit.SocialLogin />
      <LoginSubmit.InduceSign />
    </>
  );
};

LoginSubmit.LoginSubmitForm = LoginSubmitForm;
LoginSubmit.LoginSubmitButton = LoginSubmitButton;
LoginSubmit.SocialLogin = SocialLogin;
LoginSubmit.InduceSign = InduceSign;

export default LoginSubmit;
