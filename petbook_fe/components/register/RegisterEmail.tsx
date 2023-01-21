import React, { useState } from "react";
import RegisterInputBox from "@components/register/RegisterInputBox";
import { SpaceTopWrap } from "./styled/styledRegisterForm";

const RegisterEmail = () => {
  const handleInputChange = (e: string) => {
    console.log(e);
  };
  return (
    <SpaceTopWrap>
      <RegisterInputBox
        handleInputChange={handleInputChange}
        IconType="Login"
        axiosValue="email"
        current="이메일을 입력해주세요"
      />
    </SpaceTopWrap>
  );
};
export default RegisterEmail;
