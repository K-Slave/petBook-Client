import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import FormModuleWrap from "@/stories/common/Form/FormModuleWrap";
import ResetPasswordForm from "@pages/auth/form";
import {
  ResetModuleHintH4,
  ResetModuleSubTitleH3,
  ResetModuleTitleH4,
} from "@pages/auth/style";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 10.25rem);

  padding-bottom: 3rem;

  background-color: var(--bg_white_02);
`;

const Reset = () => {
  return (
    <Main>
      <Reset.Wrap>
        <Reset.Title />
        <Reset.SubTitle />
        <Reset.Form />
      </Reset.Wrap>
    </Main>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return <FormModuleWrap width="464px">{children}</FormModuleWrap>;
};

const Title = () => {
  return <ResetModuleTitleH4>비밀번호 재설정</ResetModuleTitleH4>;
};

const SubTitle = () => {
  return (
    <div style={{ position: "relative" }}>
      <ResetModuleSubTitleH3>이메일 주소 입력</ResetModuleSubTitleH3>
      <ResetModuleHintH4>
        찾으시려는 이메일 주소를 입력해주세요
      </ResetModuleHintH4>
    </div>
  );
};

Reset.Wrap = Wrap;
Reset.Title = Title;
Reset.SubTitle = SubTitle;
Reset.Form = ResetPasswordForm;

export default Reset;
