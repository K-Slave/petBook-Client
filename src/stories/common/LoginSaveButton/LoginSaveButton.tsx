import React from "react";
import { BackgroundImageSpan } from "../Image/BackgroundImage/BackgroundImage.style";
import inputImg from "@/image/inputImg";
import { LoginSaveCheckutton } from "./LoginSaveButton.style";

interface Props {
  check: boolean;
  onClick: () => void;
  text?: string;
}

const LoginSaveButton = ({ check, onClick, text }: Props) => {
  return (
    <LoginSaveCheckutton type="button" check={check} onClick={onClick}>
      <BackgroundImageSpan
        url={check ? inputImg.check_true : inputImg.check_false}
        width="0.875rem"
        height="0.875rem"
      />
      {text}
    </LoginSaveCheckutton>
  );
};

export default LoginSaveButton;
