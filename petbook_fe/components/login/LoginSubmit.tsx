import { loginFormState } from "@atoms/pageAtoms/login/userState";
import ValidationInput from "@components/common/ValidationInput";
import { authRequest } from "@lib/API/petBookAPI";
import { createRequest, useSetResource } from "@lib/hooks/useResource";
import navigator from "@lib/modules/navigator";
import Link from "next/link";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { Container, ButtonBox, PassGuide } from "./styled/styledLoginSubmit";

export const SocialLogin = () => {
  const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_PY_URL;
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

export const LoginSubmitForm = () => {
  return (
    <>
      <div className="login_title">
        <p>이색동물 유저들의 소통공간, Petbook</p>
        <h2>로그인 후 다양한 콘텐츠를 즐겨보세요!</h2>
      </div>
      <form>
        <ValidationInput
          submitType="login"
          axiosValue="email"
          current="이메일"
        />
        <ValidationInput
          submitType="login"
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
      <p>비밀번호를 잊으셨나요?</p>
      <Link href="/password">비밀번호 찾기</Link>
    </PassGuide>
  );
};
export const LoginSubmitButton = () => {
  const user = useRecoilValue(loginFormState);
  const LOGIN = createRequest({
    key: "LOGIN",
    requester: authRequest.login,
  });

  const { isSuccess, mutate } = useSetResource(LOGIN);

  const onSubmit = () => {
    mutate(user);
  };

  return (
    <button type="submit" onClick={onSubmit}>
      로그인
    </button>
  );
};

export const LoginSubmit = () => {
  return (
    <>
      <LoginSubmit.LoginSubmitForm />
      <LoginSubmit.LoginSubmitButton />
      <LoginSubmit.SocialLogin />
      <LoginSubmit.InduceSign />
      <LoginSubmit.LoginPassGuide />
    </>
  );
};

LoginSubmit.LoginSubmitForm = LoginSubmitForm;
LoginSubmit.LoginSubmitButton = LoginSubmitButton;
LoginSubmit.SocialLogin = SocialLogin;
LoginSubmit.InduceSign = InduceSign;
LoginSubmit.LoginPassGuide = LoginPassGuide;

export default LoginSubmit;
