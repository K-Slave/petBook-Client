import styled from "styled-components";
import { Position } from ".";

export const Button = styled.button<{ position: Position }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 52px;
  padding: 13px 28px 13px 19px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 25.6px;
  background-color: #fff;
  color: var(--black_02);
  align-self: ${({ position }) =>
    position === "start" ? "flex-start" : "flex-end"};
`;

export const ChevronLeft = styled.span`
  width: 24px;
  height: 24px;
  background: url("/img/common/chevron_left.svg") no-repeat center center;
`;
