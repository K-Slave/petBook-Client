import { useRouter } from "next/router";

import { LoginSubmit } from "@components/login/LoginSubmit";
import { BsCheckCircleFill } from "react-icons/bs";
import { LoginWrap, NotLogin } from "./styled/styledLoginSubmit";

export const NotLoginWrap = () => {
  return (
    <NotLogin>
      <BsCheckCircleFill />
      <p>로그인이 필요한 서비스입니다.</p>
    </NotLogin>
  );
};

export const LoginIndex = () => {
  const router = useRouter();
  const isRedirect = router.query.redirect;
  return (
    <LoginWrap>{isRedirect ? <NotLoginWrap /> : <LoginSubmit />}</LoginWrap>
  );
};

LoginIndex.NotLoginWrap = NotLoginWrap;

export default LoginIndex;
