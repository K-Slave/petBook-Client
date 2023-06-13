import React, { PropsWithChildren, useState } from "react";
import {
  FocusBasedAlginCenterLabel,
  FocusBasedBgSpan,
  FocusBasedInputElem,
  PasswordShowHideButton,
} from "./FocusBasedInput.style";
import { CommonInputProps } from "../CommonInput/CommonInput";
import localConsole from "@lib/utils/localConsole";
import { UseFormRegisterReturn } from "react-hook-form";

// 포커스 기반 비제어 컴포넌트
export interface FocusBasedInputProps extends CommonInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bgUrl?: string;
  bgWidth?: string;
  bgHeight?: string;
}

const FocusBasedInput = (props: PropsWithChildren<FocusBasedInputProps>) => {
  const { children, type, bgUrl, bgWidth, bgHeight, register, onChange } =
    props;
  const inputProps = { ...props };
  delete inputProps.children;

  const [isPWHide, setPWHide] = useState(true);

  const inputType = () => {
    if (type === "password" && isPWHide) {
      return "password";
    }

    if (type === "password" && !isPWHide) {
      return "text";
    }

    return type;
  };

  const onBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (e.target.validity.valid) {
      e.target.classList.add("valid");
    } else if (!e.target.validity.valid && e.target.value.length > 0) {
      e.target.classList.add("invalid");
    }
  };

  const onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    e.target.classList.remove("valid");
    e.target.classList.remove("invalid");
  };

  return (
    <FocusBasedAlginCenterLabel>
      {children}
      {bgUrl && (
        <FocusBasedBgSpan
          url={bgUrl || ""}
          width={bgWidth || "1rem"}
          height={bgHeight || "1rem"}
        />
      )}
      <FocusBasedInputElem
        {...inputProps}
        type={inputType()}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        bgWidth={bgWidth}
        register={register}
      />
      {type === "password" && (
        <PasswordShowHideButton
          type="button"
          url={bgUrl || ""}
          width={bgWidth || "1rem"}
          height={bgHeight || "1rem"}
          onClick={() => {
            setPWHide(!isPWHide);
          }}
        />
      )}
    </FocusBasedAlginCenterLabel>
  );
};

export default FocusBasedInput;
