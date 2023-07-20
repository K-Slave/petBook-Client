import React, { MouseEventHandler } from "react";
import {
  CommonCheckBoxInput,
  CommonCheckBoxLabel,
} from "./CommonCheckBox.style";
import layoutCalculator from "@lib/utils/layoutCalculator";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  register?: UseFormRegisterReturn<"checkbox">;
  text?: string;
  checkState?: boolean;
  onCheckClick?: MouseEventHandler<HTMLInputElement>;
  width?: string;
  height?: string;
  checkBoxBgUrl?: {
    checked: string;
    unChecked: string;
  };
  checkBoxWidth?: string | number;
  checkBoxHeight?: string | number;
  labelStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

const CommonCheckBox = ({
  register,
  text,
  checkState,
  onCheckClick,
  width,
  height,
  labelStyle,
  inputStyle,
  checkBoxBgUrl,
  checkBoxWidth,
  checkBoxHeight,
}: Props) => {
  const [check, setCheck] = React.useState(false);

  const getBgUrl = () => {
    if (typeof checkState === "boolean") {
      return checkState ? checkBoxBgUrl?.checked : checkBoxBgUrl?.unChecked;
    }

    return check ? checkBoxBgUrl?.checked : checkBoxBgUrl?.unChecked;
  };

  const onClick = onCheckClick ? onCheckClick : () => setCheck((prev) => !prev);

  return (
    <CommonCheckBoxLabel
      check={typeof checkState === "boolean" ? checkState : check}
      width={width}
      height={height}
      style={labelStyle}
    >
      <CommonCheckBoxInput
        url={getBgUrl() || ""}
        type="checkbox"
        onClick={onClick}
        width={checkBoxWidth?.toString() || "0.875rem"}
        height={checkBoxHeight?.toString() || "0.875rem"}
        name={text}
        checked={typeof checkState === "boolean" ? checkState : check}
        style={inputStyle}
        {...register}
      />
      {text}
    </CommonCheckBoxLabel>
  );
};

export default CommonCheckBox;
