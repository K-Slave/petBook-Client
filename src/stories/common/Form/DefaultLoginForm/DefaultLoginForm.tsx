import React from "react";
import { LoginSubmitButton } from "./DefaultLoginForm.style";

const DefaultLoginForm = () => {
  return (
    <>
      <DefaultLoginForm.Submit />
    </>
  );
};

const Submit = () => {
  return <LoginSubmitButton type="submit">로그인</LoginSubmitButton>;
};

DefaultLoginForm.Submit = Submit;

export default DefaultLoginForm;
