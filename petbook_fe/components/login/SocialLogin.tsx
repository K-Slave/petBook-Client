import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const BACKEND_BASE_URL = "https://pypetbook.herokuapp.com";

const ButtonBox = styled.div`
  margin-top: 60px;
`;

const SocialLogin = () => {
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

export default SocialLogin;
