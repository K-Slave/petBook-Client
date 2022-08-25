import { useRef } from "react";
import styled from "styled-components";
import { useOnScreen } from "./useOnScreen";
import VoteItem from "./VoteItem";

const tagList = ["태그", "태그"];
const title =
  "동물을 키울 때 이것이 중요하다? 최대 2줄 동물을 키울 때 이것이 중요하다? 최대 2줄";
const description =
  "딱 한 줄만 상세 설명 딱 한 줄만 상세 설명 딱 한 줄만 상세 설명 딱 한 줄만 상세 설명 딱 한 줄만 상세 설명";
const participant = 124;

const VoteList = () => {
  const leftSide = useRef<HTMLDivElement | null>(null);
  const rightSide = useRef<HTMLDivElement | null>(null);
  const [isLeftMost] = useOnScreen(leftSide);
  const [isRightMost] = useOnScreen(rightSide);
  const dummy = [
    {
      image: "image",
      title,
      tagList,
      description,
      participant,
    },
    {
      image: "",
      title,
      tagList,
      description,
      participant,
    },
    {
      image: "",
      title,
      tagList,
      description,
      participant,
    },
    {
      image: "",
      title,
      tagList,
      description,
      participant,
    },
    {
      image: "image",
      title,
      tagList,
      description,
      participant,
    },
    {
      image: "",
      title,
      tagList,
      description,
      participant,
    },
  ];
  return (
    <Wrapper>
      <LeftBox isLeftMost={isLeftMost} />
      <List>
        <div ref={leftSide} />
        {dummy.map((item, index) => (
          <VoteItem {...item} key={index} />
        ))}
        <div ref={rightSide} />
      </List>
      <RightBox isRightMost={isRightMost} />
    </Wrapper>
  );
};

export default VoteList;

const Wrapper = styled.div`
  position: relative;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const LeftBox = styled.div<{ isLeftMost: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 150px;
  background: linear-gradient(90deg, #fffbf4 0%, rgba(255, 251, 244, 0) 100%);
  opacity: ${({ isLeftMost }) => (isLeftMost ? "0" : "1")};
`;

const RightBox = styled.div<{ isRightMost: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 150px;
  background: linear-gradient(270deg, #fffbf4 0%, rgba(255, 251, 244, 0) 100%);
  opacity: ${({ isRightMost }) => (isRightMost ? "0" : "1")};
`;
