import { PropsWithChildren } from "react";
import styled from "styled-components";
import Logo__Img from "../../../../../../public/img/common/logo/Petbook_logo.svg";

const LogoButtonA = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 11px;

  min-width: 116px;

  padding: 0 35px;

  .Petbook__Logo__Img {
    position: relative;

    width: 28px;
    height: 28px;

    span {
      position: absolute;
      top: -5px;
      left: -12px;

      font-size: 25px;
    }
  }

  .Petbook__Logo__Text {
    min-width: 77px;
    height: 30px;
  }
`;

const LogoButton = (props: PropsWithChildren<any>) => {
  const { children } = props;
  return (
    <LogoButtonA {...props}>
      <span className="Petbook__Logo__Img">
        <span>🐇</span> {/* 나중에 로고이미지 생기면 교체 */}
      </span>
      <img
        className="Petbook__Logo__Text"
        srcSet={`${Logo__Img.src as string} 1920w`}
        sizes="77px"
        src={Logo__Img.src}
        alt=""
      />
      {children}
    </LogoButtonA>
  );
};

export default LogoButton;
