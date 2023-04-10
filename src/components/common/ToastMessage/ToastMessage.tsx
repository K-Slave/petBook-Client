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
  height?: number;
  bgColor?: string;
  color?: string;
}

/**
 * 토스트 메시지
 *
 * 외부에서 생성하는 useToastMessage 에 의해 라이프사이클이 관리됩니다
 * useToastMessage 의 isToastView 가 true 가 되면 나타납니다
 * 현재는 오른쪽으로 붙는 메시지만 지원됩니다
 *
 * @param props.push : useToastMessage 의 상태값을 받아옵니다
 * @param props.marginLeft : ToastMessage 시작점으로부터의 margin 값
 * @param props.height : ToastMessage 의 높이 값
 * @param props.bgColor : ToastMessage 의 배경색
 * @param props.color : ToastMessage 의 글자색
 * @returns
 */
const ToastMessage = (props: PropsWithChildren<ToastMessageProps>) => {
  const { children, push, marginLeft } = props;
  const { ready } = useClientReady();

  return (
    <>
      {ready && (
        <ToastMessage.StartPoint marginLeft={marginLeft}>
          {push && (
            <ToastMessage.MsgBox {...props}>{children}</ToastMessage.MsgBox>
          )}
        </ToastMessage.StartPoint>
      )}
    </>
  );
};

ToastMessage.defaultProps = {
  marginLeft: 12,
  height: 32,
  bgColor: "#383835",
  color: "#fff",
};

export interface StartPointProps {
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
  marginLeft: 12,
};

export interface MsgBoxProps {
  height?: number;
  bgColor?: string;
  color?: string;
}

const MsgBox = (props: PropsWithChildren<MsgBoxProps>) => {
  const { children } = props;
  const styledProps = {
    ...props,
  };
  delete styledProps.children;

  return (
    <ToastMessageBoxDiv className="Toast__Message__Box" {...styledProps}>
      <div className="Toast__EndPoint__Arrow" />
      <div className="Toast__Content__Box">{children}</div>
    </ToastMessageBoxDiv>
  );
};

MsgBox.defaultProps = {
  height: 32,
  bgColor: "#383835",
  color: "#fff",
};

ToastMessage.StartPoint = React.memo(StartPoint);
ToastMessage.MsgBox = React.memo(MsgBox);

export default ToastMessage;
