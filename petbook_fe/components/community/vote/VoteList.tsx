import { useRef } from "react";
import styled from "styled-components";
import { useOnScreen } from "../useOnScreen";
import VoteItem from "./VoteItem";
import { HiPlus } from "react-icons/hi";

const tagList = ["태그", "태그"];
const title =
  "동물을 키울 때 이것이 중요하다? 최대 2줄 동물을 키울 때 이것이 중요하다? 최대 2줄";
const description =
  "딱 한 줄만 상세 설명 딱 한 줄만 상세 설명 딱 한 줄만 상세 설명 딱 한 줄만 상세 설명 딱 한 줄만 상세 설명";
const participant = 124;

const VoteList = () => {
  const root = useRef<HTMLUListElement | null>(null);
  const leftSide = useRef<HTMLLIElement | null>(null);
  const rightSide = useRef<HTMLButtonElement | null>(null);
  const [isLeftMost] = useOnScreen(root, leftSide);
  const [isRightMost] = useOnScreen(root, rightSide);
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
      <List ref={root}>
        {dummy.map((item, index) => (
          <VoteItem
            {...item}
            key={index}
            itemRef={index === 0 ? leftSide : null}
          />
        ))}
        <MoreBox ref={rightSide}>
          <HiPlus />
          <span>더보기</span>
        </MoreBox>
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
  width: 100px;
  background: linear-gradient(90deg, #fffbf4 0%, rgba(255, 251, 244, 0) 100%);
  opacity: ${({ isLeftMost }) => (isLeftMost ? "0" : "1")};
`;

const RightBox = styled.div<{ isRightMost: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, #fffbf4 0%, rgba(255, 251, 244, 0) 100%);
  opacity: ${({ isRightMost }) => (isRightMost ? "0" : "1")};
`;

const MoreBox = styled.button`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  flex-shrink: 0;
  align-self: center;
  font-weight: 700;
  margin-left: 30px;
  font-size: 16px;
  svg {
    font-size: 21px;
  }
`;
