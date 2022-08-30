import { PropsWithChildren } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const HeaderBox = styled.div`
  display: flex;
  gap: 30px;

  width: 100%;
  max-width: 1280px;
  height: 60px;
`;

const HeaderWrap = (props: PropsWithChildren<{}>) => {
  return (
    <HeaderContainer>
      <HeaderBox {...props}>{props.children}</HeaderBox>
    </HeaderContainer>
  );
};

export default HeaderWrap;
