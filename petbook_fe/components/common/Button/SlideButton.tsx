import { Button } from "./Button";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import styled from "styled-components";
import { MouseEventHandler } from "react";

const SlideButtonBox = styled.div`
  display: flex;
  align-items: center;

  height: 14.875rem;

  margin-top: 3.1875rem;
`;

const SlidePushButton = styled(Button)`
  display: flex;
  align-items: center;

  padding: 1rem 0.3rem;

  border-radius: 1rem;

  background: #cecece;
  color: #fff;
`;

type SlideButtonProps = {
  direction: string;
  onClick?: MouseEventHandler;
};

export default function SlideButton(props: SlideButtonProps) {
  const { direction, onClick } = props;

  return (
    <SlideButtonBox onClick={onClick}>
      <SlidePushButton>
        {direction === "left" && <AiOutlineLeft />}
        {direction === "right" && <AiOutlineRight />}
      </SlidePushButton>
    </SlideButtonBox>
  );
}
