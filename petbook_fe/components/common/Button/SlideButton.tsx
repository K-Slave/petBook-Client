import { Button } from "./Button";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import styled from "styled-components";
import { MouseEventHandler } from "react";

const SlideButtonBox = styled(Button)`
  height: 14.875rem;

  margin-top: 3.1875rem;
`;

type SlideButtonProps = {
  direction: string;
  onClick?: MouseEventHandler;
};

export default function SlideButton(props: SlideButtonProps) {
  const { direction, onClick } = props;

  return (
    <SlideButtonBox onClick={onClick}>
      {direction === "left" && <AiOutlineLeft />}
      {direction === "right" && <AiOutlineRight />}
    </SlideButtonBox>
  );
}
