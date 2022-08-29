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
    width: 28px;
    height: 28px;

    white-space: nowrap;
  }

  .Petbook__Logo__Text {
    min-width: 77px;
    height: 30px;

    white-space: nowrap;
  }
`;

const LogoButton = (props: PropsWithChildren<{}>) => {
  return (
    <LogoButtonA {...props}>
      <img className="Petbook__Logo__Img" src="" alt="" />
      <img
        className="Petbook__Logo__Text"
        srcSet={`${Logo__Img.src} 1920w`}
        sizes={"77px"}
        src={Logo__Img.src}
        alt=""
      />
      {props.children}
    </LogoButtonA>
  );
};

export default LogoButton;
