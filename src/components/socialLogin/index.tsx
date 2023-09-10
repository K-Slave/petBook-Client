import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "@/stories/common/Button";
import Typography from "@/stories/common/Typography";
import { SocialLoginDiv, SocialIconImage } from "@components/socialLogin/style";
import { authRequest } from "@lib/API/petBookAPI";
import { createRequest, useSetResource } from "@lib/hooks/common/useResource";

const SOCIAL_LOGIN = createRequest({
  key: ["SOCIAL_LOGIN"],
  requester: authRequest.login,
});

export const SocialSubmit = () => {
  const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_PY_URL;
  const router = useRouter();

  const [href, setHref] = useState("");

  const onClick = () => {
    `${BACKEND_BASE_URL}/naver/login${
      router.asPath ? `?redirect_url=${href}` : ""
    }`;
  };

  useEffect(() => {
    setHref(window.location.href);
  }, []);

  return (
    <SocialLoginDiv>
      {/* <Button
        className="Button_Wrap"
        bgColor="var(--green)"
        width="20.9375rem"
        onClick={onClick}
      >
        <Typography
          variant="body-default-bold"
          tag="p"
          color="var(--bg_white_02)"
        >
          네이버로 로그인
        </Typography>
      </Button> */}
      <Button
        className="Button_Wrap"
        bgColor="var(--orange)"
        width="20.9375rem"
        onClick={onClick}
      >
        <Image
          src="/icons/kakao.svg"
          className="Icon_wrap"
          alt="kakao"
          width={20}
          height={20}
        />{" "}
        <Typography
          variant="body-default-bold"
          tag="p"
          color="var(--bg_white_02)"
        >
          카카오로 로그인
        </Typography>
      </Button>

      {/* <Button
        className="Button_Wrap"
        bgColor="var(--violet)"
        width="20.9375rem"
        onClick={onClick}
      >
        <Typography
          variant="body-default-bold"
          tag="p"
          color="var(--bg_white_02)"
        >
          구글로 로그인
        </Typography>
      </Button> */}
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
