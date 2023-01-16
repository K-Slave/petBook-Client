import useClientReady from "@lib/hooks/common/useClientReady";
import React, { PropsWithChildren } from "react";
import {
  ToastMessageBoxDiv,
  ToastMessageStartPointDiv,
} from "./ToastMessage.style";

export type ToastAnimate = "none" | "fade_in_out" | "slide_right";

interface ToastMessageProps {
  push: boolean;
  marginLeft?: number;
}

const ToastMessage = ({
  children,
  push,
  marginLeft,
}: PropsWithChildren<ToastMessageProps>) => {
  const { ready } = useClientReady();

  return (
    <>
      {ready && (
        <ToastMessage.StartPoint marginLeft={marginLeft}>
          {push && <ToastMessage.MsgBox>{children}</ToastMessage.MsgBox>}
        </ToastMessage.StartPoint>
      )}
    </>
  );
};

ToastMessage.defaultProps = {
  marginLeft: 0,
};

interface StartPointProps {
  marginLeft?: number;
}

const StartPoint = ({
  children,
  marginLeft,
}: PropsWithChildren<StartPointProps>) => {
  return (
    <ToastMessageStartPointDiv className="ToastMessage" marginLeft={marginLeft}>
      {children}
    </ToastMessageStartPointDiv>
  );
};

StartPoint.defaultProps = {
  marginLeft: 0,
};

const MsgBox = ({ children }: PropsWithChildren<any>) => {
  return (
    <ToastMessageBoxDiv className="Toast__Message__Box">
      <div className="Toast__EndPoint__Arrow" />
      <div className="Toast__Content__Box">{children}</div>
    </ToastMessageBoxDiv>
  );
};

ToastMessage.StartPoint = React.memo(StartPoint);
ToastMessage.MsgBox = React.memo(MsgBox);

export default ToastMessage;
