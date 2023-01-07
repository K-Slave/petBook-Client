import { useEffect, useState } from "react";
import RegisterInputBox from "@components/register/RegisterInputBox";
import { useRecoilValue } from "recoil";
import { registerFormState } from "@atoms/pageAtoms/login/userState";
import { RegisterInfoText } from "./styled/styledRegisterForm";

const PasswordInput = () => {
  const [success, setSuccess] = useState(false);
  const registerForm = useRecoilValue(registerFormState);

  useEffect(() => {
    if (registerForm.password === registerForm.password_check) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [registerForm]);

  return (
    <>
      <RegisterInputBox
        IconType="Password"
        axiosValue="password"
        current="비밀번호를 입력해주세요"
      />
      <RegisterInputBox
        IconType="Password_Check_Disabled"
        axiosValue="password_check"
        current="비밀번호를 입력해주세요"
      />
      <RegisterInfoText state={success}>
        <p>비밀번호가 일치합니다</p>
      </RegisterInfoText>
    </>
  );
};

export default PasswordInput;
