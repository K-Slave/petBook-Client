import ValidationInput from "@components/common/ValidationInput";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_PY_URL;

export const SocialLogin = () => {
  const router = useRouter();

  const [href, setHref] = useState("");

  useEffect(() => {
    console.log(window.location, window.location.href);
    setHref(window.location.href);
  }, []);

  return (
    <ButtonBox>
      <a
        className="naver"
        href={`${BACKEND_BASE_URL}/naver/login${
          router.asPath ? "?redirect_url=" + href : ""
        }`}
      >
        네이버로 로그인
      </a>
      <a
        className="kakao"
        href={`${BACKEND_BASE_URL}/kakao/login${
          router.asPath ? "?redirect_url=" + href : ""
        }`}
      >
        카카오로 로그인
      </a>
      <a
        className="google"
        href={`${BACKEND_BASE_URL}/google/login${
          router.asPath ? "?redirect_url=" + href : ""
        }`}
      >
        구글로 로그인
      </a>
    </ButtonBox>
  );
};

export const InduceSign = () => {
  const router = useRouter();
  return (
    <>
      <Container onClick={() => router.push("/register")}>
        <p>아직 Petbook 계정이 없으신가요?</p>
        <h3>
          회원가입을 통해 Petbook 유저들과 <br /> 소통할 수 있어요!
        </h3>
      </Container>
    </>
  );
};

export const LoginSubmitButton = () => {
  useEffect(() => {}, []);
  const onSubmit = () => {
    console.log("onSubmit");
  };
  return (
    <>
      <button onClick={onSubmit}>로그인</button>
    </>
  );
};

export const LoginSubmitForm = () => {
  useEffect(() => {}, []);
  return (
    <>
      <form>
        <ValidationInput
          submitType={"login"}
          axiosValue={"email"}
          current={"이메일"}
        />
        <ValidationInput
          type={"login"}
          axiosValue={"password"}
          current={"비밀번호"}
        />
      </form>
    </>
  );
};

export const LoginSubmit = () => {
  useEffect(() => {}, []);
  return <></>;
};

LoginSubmit.LoginSubmitButton = LoginSubmitButton;
LoginSubmit.LoginSubmitForm = LoginSubmitForm;
LoginSubmit.SocialLogin = SocialLogin;
LoginSubmit.InduceSign = InduceSign;

export default LoginSubmit;
