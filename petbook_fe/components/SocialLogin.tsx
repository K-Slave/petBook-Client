import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import localConsole from "../lib/localConsole";

const BACKEND_BASE_URL = "https://pypetbook.herokuapp.com";

const ButtonBox = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const Icon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
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
        href={`${BACKEND_BASE_URL}/kakao/login${
          router.asPath ? "?redirect_url=" + href : ""
        }`}
      >
        <Icon src='./img/kakao-icon.png' alt='kakao icon' />
      </a>
      <a
        href={`${BACKEND_BASE_URL}/naver/login${
          router.asPath ? "?redirect_url=" + href : ""
        }`}
      >
        <Icon src='./img/naver-icon.png' alt='naver icon' />
      </a>
      <a
        href={`${BACKEND_BASE_URL}/google/login${
          router.asPath ? "?redirect_url=" + href : ""
        }`}
      >
        <Icon src='./img/google-icon.png' alt='google icon' />
      </a>
    </ButtonBox>
  );
};

export default SocialLogin;
