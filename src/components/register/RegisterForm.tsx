import Image from "next/image";
import RegisterEmail from "@components/register/RegisterEmail";
import RegisterNameForm from "@components/register/RegisterNameForm";
import RegisterPasswordForm from "@components/register/RegisterPasswordForm";
import RegisterTerms from "@components/register/RegisterTerms";
import { registerRequest } from "@lib/API/petBookAPI";
import { createRequest } from "@lib/hooks/common/useResource";
import RegisterButton from "./RegisterButton";
import { Main, RegisterFormWrap } from "./styled/styledRegisterForm";

// reponse 정의
export const REGISTER_CREATE = createRequest({
  key: ["REGISTER_CREATE"],
  requester: registerRequest.register,
});
export const REGISTER_CHECK_EMAIL = createRequest({
  key: ["REGISTER_CHECK_EMAIL"],
  requester: registerRequest.registerCheckEmail,
});
export const REGISTER_CHECK_NICKNAME = {
  key: ["REGISTER_CHECK_NICKNAME"],
  requester: registerRequest.registerCheckNickname,
};

const RegisterContainer = () => {
  return (
    <Main>
      <RegisterFormWrap>
        <RegisterContainer.RegisterTitleImg />
        <RegisterContainer.Register />
        <RegisterContainer.TermsWrap />
        <RegisterContainer.RegisterButton />
      </RegisterFormWrap>
    </Main>
  );
};

const RegisterTitleImg = () => {
  return (
    <div className="Login_Title">
      <Image
        src="/img/common/logo/logo.svg"
        alt="Picture of the author"
        width={160}
        height={27}
      />
    </div>
  );
};

const Register = () => {
  return (
    <div>
      <RegisterEmail />
      <RegisterPasswordForm />
      <RegisterNameForm />
    </div>
  );
};

RegisterContainer.Register = Register;
RegisterContainer.RegisterTitleImg = RegisterTitleImg;
RegisterContainer.TermsWrap = RegisterTerms;
RegisterContainer.RegisterButton = RegisterButton;

export default RegisterContainer;
