import styled from "styled-components";
import { useRecoilValue } from "recoil";
import Image from "next/image";

import { createRequest, useSetResource } from "@lib/hooks/common/useResource";
import { registerRequest } from "@lib/API/petBookAPI";
import { registerFormState } from "@atoms/pageAtoms/login/userState";

import RegisterInputBox from "@components/register/RegisterInputBox";
import PasswordInput from "@components/register/RegisterPasswordFrom";

// styled
import { RegisterFormWrap } from "./styled/styledRegisterForm";

const Main = styled.main`
  overflow: auto;
  height: calc(100vh - 61px);
  background-color: var(--bg);
`;

const SubmitBtn = styled.div`
  width: 100%;
  display: block;
  margin: 60px 0 0;
  padding: 20px 0;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  color: white;
  box-sizing: border-box;
  background-color: var(--primary);
  cursor: pointer;
`;

const REGISTER_CREATE = createRequest({
  key: "REGISTER_CREATE",
  requester: registerRequest.register,
});

const Register = () => {
  const user = useRecoilValue(registerFormState);

  const { isSuccess, mutate } = useSetResource(REGISTER_CREATE);

  const Sign = () => {
    mutate(user);
  };

  // const setRegisterForm = useSetRecoilState(registerFormState);

  return (
    <Main>
      <RegisterFormWrap>
        <div className="Login_Title">
          <Image
            src="/img/common/logo/logo.svg"
            alt="Picture of the author"
            width={160}
            height={27}
          />
        </div>
        <RegisterInputBox
          IconType="Login"
          axiosValue="email"
          current="이메일"
        />
        <PasswordInput />
        <RegisterInputBox
          IconType="Nicname"
          axiosValue="nickname"
          current="닉네임"
        />
        <SubmitBtn onClick={Sign} className="Submit__Btn">
          회원가입
        </SubmitBtn>
      </RegisterFormWrap>
    </Main>
  );
};
export default Register;
