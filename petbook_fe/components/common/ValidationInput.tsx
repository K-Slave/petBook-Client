import {
  loginFormState,
  registerFormState,
} from "@atoms/pageAtoms/login/userState";
import React, { ChangeEventHandler } from "react";
import { useSetRecoilState } from "recoil";

interface ValidationProps {
  current: string;
  axiosValue: string;
  submitType: string;
}

const ValidationInput = ({
  current,
  axiosValue,
  submitType,
}: ValidationProps) => {
  const setRegisterForm = useSetRecoilState(registerFormState);
  const setLoginForm = useSetRecoilState(loginFormState);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (axiosValue !== "") {
      switch (submitType) {
        case "login": {
          setLoginForm((user) => ({
            ...user,
            [`${axiosValue}`]: e.target.value,
          }));
          break;
        }
        case "register": {
          setRegisterForm((user) => ({
            ...user,
            [`${axiosValue}`]: e.target.value,
          }));
          break;
        }
        default: {
          break;
        }
      }
    }
  };

  return (
    <div>
      <div className="box">
        <label htmlFor={`${current}`}>{current}</label>
        <input
          type={`${axiosValue}`}
          id={`${current}`}
          placeholder={`${current}을 입력해주세요 `}
          onChange={onChange}
        />
      </div>
      {current !== "비밀번호" ? (
        <div className="err_box">* 오류 메세지가 나옵니다</div>
      ) : (
        <></>
      )}
    </div>
  );
};

// ValidationInput.defaultProps = {
//   submitType: "",
// };

export default ValidationInput;
