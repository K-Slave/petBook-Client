import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { createRequest, useSetResource } from "@lib/hooks/useResource";
import { registerRequest } from "@lib/API/petBookAPI";
import { registerFormState } from "@atoms/pageAtoms/login/userState";

import ValidationInput from "@components/common/ValidationInput";
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
  background-color: var(--main);
  cursor: pointer;
`;

const Register = () => {
  const user = useRecoilValue(registerFormState);
  const REGISTER_CREATE = createRequest({
    key: "REGISTER_CREATE",
    requester: registerRequest.register,
  });

  const { data, isLoading, isError, isSuccess, mutate } =
    useSetResource(REGISTER_CREATE);

  const Sign = () => {
    mutate(user);
  };

  // const setRegisterForm = useSetRecoilState(registerFormState);
  // const setLoginForm = useSetRecoilState(loginFormState);
  return (
    <Main>
      <RegisterFormWrap>
        <ValidationInput
          submitType="register"
          axiosValue="email"
          current="이메일"
        />
        <ValidationInput
          submitType="register"
          axiosValue=""
          current="이메일 확인"
        />
        <PasswordInput />
        <ValidationInput
          submitType="register"
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
