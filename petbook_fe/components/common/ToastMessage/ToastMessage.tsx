import useClientReady from "@lib/hooks/common/useClientReady";
import React, { PropsWithChildren } from "react";
import {
  ToastMessageBoxDiv,
  ToastMessageStartPointDiv,
} from "./ToastMessage.style";

export type ToastAnimate = "none" | "fade_in_out" | "slide_right";

interface ToastMessageProps {
  push: boolean;
  content: string;
  // animation?: ToastAnimate;
  marginLeft?: number;
}

const ToastMessage = ({
  push,
  content,
  // animation,
  marginLeft,
}: ToastMessageProps) => {
  const { ready } = useClientReady();

  return (
    // animation={animation}
    <>
      {ready && (
        <ToastMessage.StartPoint marginLeft={marginLeft}>
          {push && <ToastMessage.MsgBox content={content} />}
        </ToastMessage.StartPoint>
      )}
    </>
  );
};

ToastMessage.defaultProps = {
  marginLeft: 0,
  // animation: "fade_in_out",
};

interface StartPointProps {
  marginLeft?: number;
  // animation?: ToastAnimate;
}

const StartPoint = ({
  children,
  // animation,
  marginLeft,
}: PropsWithChildren<StartPointProps>) => {
  return (
    <ToastMessageStartPointDiv
      className="ToastMessage"
      marginLeft={marginLeft}
      // style={{ width: 0, height: 0 }}
      // animation={animation}
    >
      {children}
    </ToastMessageStartPointDiv>
  );
};

StartPoint.defaultProps = {
  marginLeft: 0,
  // animation: "fade_in_out",
};

const MsgBox = ({ content }: PropsWithChildren<{ content: string }>) => {
  return (
    <ToastMessageBoxDiv className="Toast__Message__Box">
      <div className="Toast__EndPoint__Arrow" />
      <div className="Toast__Content__Box">{content}</div>
    </ToastMessageBoxDiv>
  );
};

ToastMessage.StartPoint = React.memo(StartPoint);
ToastMessage.MsgBox = React.memo(MsgBox);

export default ToastMessage;
