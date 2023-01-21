import { useEffect, useState } from "react";
import RegisterInputBox from "@components/register/RegisterInputBox";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  registerFormState,
  validationRegisterState,
} from "@atoms/pageAtoms/login/userState";
import { RegisterInfoText } from "./styled/styledRegisterForm";

const PasswordInput = () => {
  const [success, setSuccess] = useState(false);
  const registerForm = useRecoilValue(registerFormState);
  const validationRegister = useSetRecoilState(validationRegisterState);

  // pass1 * pass2 동일시 체크
  useEffect(() => {
    let successState = false;
    if (registerForm.password === registerForm.password_check) {
      successState = true;
    } else {
      successState = false;
    }
    setSuccess(successState);
  }, [registerForm]);

  // 성공시 회원가입 버튼 활성
  useEffect(() => {
    validationRegister((el) => ({ ...el, password: success }));
  }, [success]);

  return (
    <>
      <RegisterInputBox
        IconType="Password"
        axiosValue="password"
        current="비밀번호를 입력해주세요.(대소문자/숫자/특수문자 8~20자)"
      />
      <RegisterInputBox
        IconType="Password_Check_Disabled"
        axiosValue="password_check"
        current="비밀번호를 입력해주세요.(대소문자/숫자/특수문자 8~20자)"
      />
      <RegisterInfoText state={success}>
        <p>비밀번호가 일치합니다</p>
      </RegisterInfoText>
    </>
  );
};

export default PasswordInput;
