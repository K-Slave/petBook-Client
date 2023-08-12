import React from "react";
import inputImg from "@/image/inputImg";
import { PasswordShowHideButtonStyle } from "./style";

interface Props {
  isTyping: boolean;
  isPWHide: boolean;
  onClick: React.MouseEventHandler;
  width?: string;
  height?: string;
}

const PWShowHideButton = ({
  isTyping,
  isPWHide,
  onClick,
  width,
  height,
}: Props) => {
  const bgUrl = isPWHide ? inputImg.password_hide : inputImg.password_show;

  return (
    <>
      {isTyping && (
        <PasswordShowHideButtonStyle
          type="button"
          tabIndex={-1}
          className="Show__Hide__Button"
          url={bgUrl || ""}
          width={width || "1rem"}
          height={height || "1rem"}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default PWShowHideButton;
