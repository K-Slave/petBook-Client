import React from "react";
import styled from "styled-components";

interface Props {
  textColor: string;
  bgColor: string;
}

const Badge = ({
  textColor,
  bgColor,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <StyledBadge textColor={textColor} bgColor={bgColor}>
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  color: ${({ textColor }) => textColor};
  background: ${({ bgColor }) => bgColor};
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
`;

export default Badge;
