import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { registerFormState } from "@atoms/pageAtoms/login/userState";

import useSelectorState from "@lib/hooks/common/useSelectorState";
import { passwordCheck } from "@lib/utils/checkValidationRegister";
import {
  IconBox,
  InputBox,
  RegisterInfoText,
  SpaceTopWrap,
} from "./styled/styledRegisterForm";

const RegisterPasswordForm = () => {
  const [success, setSuccess] = useState(false);
  const [passInfoMsg, setPassInfoMsg] = useState("");
  const pass2Ref = useRef<HTMLInputElement | null>(null);
  const [checkPass, setCheckPass] = useState(false);
  const [passval, setPass] = useState({
    pass1: "",
    pass2: "",
  });
  const [registerForm, setRegisterForm] = useSelectorState(registerFormState, {
    password: "",
  });

  const onChangePass2: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setPass((pass) => ({
      ...pass,
      [`${e.target.id}`]: e.target.value,
    }));
  };
  const onChangePass1: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setPass((el) => ({ ...el, pass2: "" }));
    setCheckPass(false);
    setPass((pass) => ({
      ...pass,
      [`${e.target.id}`]: e.target.value,
    }));
  };
  const onBlur: ChangeEventHandler<HTMLInputElement> = () => {
    let checkValidationText = passwordCheck(passval.pass1);
    if (checkValidationText === "") {
      setSuccess(false);
      setCheckPass(true); // 두번째 필드
    } else {
      setPassInfoMsg(checkValidationText);
      setSuccess(true);
      setCheckPass(false); // 두번째 필드
      setTimeout(() => {
        if (pass2Ref && pass2Ref.current) {
          pass2Ref.current.blur();
        }
      }, 0);

      setPass((el) => ({ ...el, pass2: "" }));
    }
  };

  useEffect(() => {
    let successState = false;
    if (passval.pass1 === passval.pass2 && passval.pass1 !== "") {
      successState = true;
      setRegisterForm((el) => ({
        ...el,
        password: successState === true ? passval.pass2 : "",
      }));
    } else {
      successState = false;
    }
    setSuccess(successState);
    setPassInfoMsg("비밀번호가 일치합니다");
  }, [passval.pass2]);

  return (
    <SpaceTopWrap>
      <InputBox>
        <IconBox>
          <div className="Password" />
        </IconBox>
        <input
          id="pass1"
          type="Password"
          value={passval.pass1}
          placeholder="비밀번호를 입력해주세요.(대소문자/숫자/특수문자 8~20자)"
          onChange={onChangePass1}
          onBlur={onBlur}
          maxLength={20}
        />
      </InputBox>
      <InputBox checkPass={checkPass}>
        <IconBox>
          <div className="Password_Check_Disabled" />
        </IconBox>
        <input
          id="pass2"
          type="Password"
          value={passval.pass2}
          placeholder="비밀번호를 확인해주세요.(대소문자/숫자/특수문자 8~20자)"
          onChange={onChangePass2}
          maxLength={20}
          ref={pass2Ref}
        />
      </InputBox>
      <RegisterInfoText state={success}>
        <p>{passInfoMsg}</p>
      </RegisterInfoText>
    </SpaceTopWrap>
  );
};

export default RegisterPasswordForm;
