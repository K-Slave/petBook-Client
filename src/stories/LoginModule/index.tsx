import React, { PropsWithChildren } from "react";
import headerImg from "@/image/headerImg";
import SocialLogin from "@components/socialLogin";
import { VerticalDividerSpan } from "../common/Divider/Divider.style";
import DefaultLoginForm from "../common/Form/DefaultLoginForm/DefaultLoginForm";
import FormModuleWrap from "../common/Form/FormModuleWrap";
import {
  LoginModuleTitleH1,
  LoginModuleGuideDiv,
  LoginModuleLink,
  LoginModuleLogoSpan,
} from "./style";

const LoginModule = () => {
  return (
    <LoginModule.Wrap>
      <LoginModule.Title />
      <LoginModule.Form />
      <LoginModule.SocialLoginBottom />
      <LoginModule.Guide />
    </LoginModule.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return <FormModuleWrap width="464px">{children}</FormModuleWrap>;
};

const Title = () => {
  return (
    <LoginModuleTitleH1>
      <LoginModuleLogoSpan
        url={headerImg.petbook_logo}
        width="147.35px"
        height="26.65px"
      />
      로그인 후 다양한 콘텐츠를 즐겨보세요
    </LoginModuleTitleH1>
  );
};

const Guide = () => {
  return (
    <LoginModuleGuideDiv>
      <LoginModuleLink href="#" target="_blank">
        비밀번호 재설정
      </LoginModuleLink>
      <VerticalDividerSpan width="0.0625rem" height="0.75rem" />
      <LoginModuleLink href="/register" emText={true}>
        이메일 회원가입
      </LoginModuleLink>
    </LoginModuleGuideDiv>
  );
};

LoginModule.Wrap = Wrap;
LoginModule.Title = Title;
LoginModule.Form = DefaultLoginForm;
LoginModule.SocialLoginBottom = SocialLogin;
LoginModule.Guide = Guide;

// export default dynamic(() => Promise.resolve(LoginModule), {
//   ssr: false,
// });

export default LoginModule;
