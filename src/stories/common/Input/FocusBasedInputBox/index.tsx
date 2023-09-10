import React, { PropsWithChildren, useMemo } from "react";
import inputEventHelperMethod from "@lib/modules/login/inputEventHelperMethod";
import { CommonInputProps } from "../CommonInput/CommonInput";
import {
  ConfirmButton,
  FocusBasedAlginCenterLabel,
  FocusBasedBgSpan,
  FocusBasedInputBoxElem,
  FocusBasedInputBoxElemWrapper,
} from "./style";

// 포커스 기반 Input Box
// Label 태그로 감싸져 있음
export interface FocusBasedInputBoxProps extends CommonInputProps {
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isTyping?: boolean;
  bgUrl?: string;
  bgWidth?: string;
  bgHeight?: string;
  onConfirmClick?: () => void;
}

const FocusBasedInputBox = (
  props: PropsWithChildren<FocusBasedInputBoxProps>
) => {
  const {
    children,
    type,
    bgUrl,
    bgWidth,
    bgHeight,
    register,
    onChange,
    onConfirmClick,
  } = props;
  const inputProps = { ...props };
  delete inputProps.children;

  const onBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const handler = new inputEventHelperMethod(e);

    handler.setFocused("remove");
    if (e.target.validity.valid) {
      handler.setValid("add");
    } else if (!e.target.validity.valid && e.target.value.length > 0) {
      e.target.classList.add("invalid");
      handler.setInvalid("add");
    }
  };

  const onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const handler = new inputEventHelperMethod(e);

    handler.setFocused("add");
    handler.setValid("remove");
    handler.setInvalid("remove");
  };

  const dataType = useMemo(() => type, []);

  return (
    <FocusBasedAlginCenterLabel data-type={dataType}>
      {children}
      {bgUrl && (
        <FocusBasedBgSpan
          url={bgUrl || ""}
          width={bgWidth || "1rem"}
          height={bgHeight || "1rem"}
        />
      )}
      <FocusBasedInputBoxElemWrapper>
        <FocusBasedInputBoxElem
          {...inputProps}
          type={type}
          onChange={register ? register.onChange : onChange}
          onBlur={register ? register.onBlur : onBlur}
          onFocus={onFocus}
          bgWidth={bgWidth}
          register={register}
          placeholderColor="var(--black_06)"
        />
        {onConfirmClick && (
          <ConfirmButton type="button" onClick={onConfirmClick}>
            확인
          </ConfirmButton>
        )}
      </FocusBasedInputBoxElemWrapper>
    </FocusBasedAlginCenterLabel>
  );
};

export default FocusBasedInputBox;
