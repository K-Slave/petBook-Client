import { useRouter } from "next/router";
import { BsCheckCircleFill } from "react-icons/bs";
import DefaultLoginForm from "@/stories/common/Form/DefaultLoginForm/DefaultLoginForm";
import { LoginWrap, NotLogin } from "./style";

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
    <LoginWrap>
      {isRedirect ? <NotLoginWrap /> : <DefaultLoginForm />}
    </LoginWrap>
  );
};

LoginIndex.NotLoginWrap = NotLoginWrap;

export default LoginIndex;
