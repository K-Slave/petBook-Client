import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Typography from "@/stories/common/Typography";
import { SocialLoginDiv, SocialIconImage } from "@components/socialLogin/style";
import { authRequest } from "@lib/API/petBookAPI";
import { createRequest, useSetResource } from "@lib/hooks/common/useResource";
// import BackgroundImage from "@/stories/common/Image/BackgroundImage/BackgroundImage";

const originUrl =
  process.env.NODE_ENV === "production"
    ? "https://petbook.site"
    : "http://localhost:3000";
const SOCIAL_LOGIN = createRequest({
  key: ["SOCIAL_LOGIN"],
  requester: authRequest.login,
});

export const SocialSubmit = () => {
  const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_PY_URL;
  const router = useRouter();

  const [href, setHref] = useState("");

  useEffect(() => {
    setHref(window.location.href);
  }, []);

  return (
    <SocialLoginDiv>
      {/* <a
        className="naver"
        href={`${BACKEND_BASE_URL}/naver/login${
          router.asPath ? `?redirect_url=${href}` : ""
        }`}
      >
        <Typography
          variant="body-default-bold"
          tag="p"
          color="var(--bg_white_02)"
          className="TextWrap"
        >
          <SocialIconImage
            url="/icons/naver.svg"
            width="1.25rem"
            height="1.25rem"
            bgPosition="center"
          />
          네이버로 로그인
        </Typography>
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
        <Typography
          variant="body-default-bold"
          tag="p"
          color="var(--bg_white_02)"
          className="TextWrap"
        >
          카카오로 로그인
        </Typography>
      </a>
      {/* <a
        className="google"
        href={`${BACKEND_BASE_URL}/google/login${
          router.asPath ? `?redirect_url=${href}` : ""
        }`}
      >
        <Typography
          variant="body-default-bold"
          tag="p"
          color="var(--bg_white_02)"
          className="TextWrap"
        >
          구글로 로그인
        </Typography>
      </a> */}
    </SocialLoginDiv>
  );
};

// export const socialLoginButton = () => {
//   const { data, isSuccess, error, isError } = useSetResource(SOCIAL_LOGIN);
//   const client = useQueryClient();
// }

export const SocialLogin = () => {
  return <SocialLogin.SocialSubmit />;
};

SocialLogin.SocialSubmit = SocialSubmit;

export default SocialLogin;
