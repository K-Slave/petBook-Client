import styled from "styled-components";
import { MdPersonOutline } from "react-icons/md";
import { MutableRefObject } from "react";
import TagList from "../TagList";

const Item = styled.li`
  display: flex;
  align-items: center;
  height: 300px;
  background-color: white;
  border-radius: 16px;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin: 16px 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Image = styled.div`
  width: 263px;
  height: 258px;
  background: #ffefef;
  border-radius: 16px;
  flex-shrink: 0;
  margin-left: 20px;
`;

const Column = styled.div<{ image: string }>`
  width: ${({ image }) => (image === "" ? "305px" : "347px")};
  padding: 0 24px;
`;

const Desc = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #707070;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 42px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Deadline = styled.p`
  color: #ff6e4e;
  font-weight: 700;
  font-size: 14px;
`;

const Participant = styled.p`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 1px;
  svg {
    width: 18px;
    height: 18px;
  }
`;

interface VoteItemProps {
  image: string;
  title: string;
  description: string;
  participant: number;
  tagList: string[];
  itemRef: MutableRefObject<HTMLLIElement | null> | null;
}

const VoteItem = ({
  image,
  title,
  description,
  participant,
  tagList,
  itemRef,
}: VoteItemProps) => {
  return (
    <Item ref={itemRef}>
      {image === "" ? null : <Image />}
      <Column image={image}>
        <TagList tags={tagList} width={90} height={36} fontSize={16} />
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        <Bottom>
          <Deadline>오늘 마감</Deadline>
          <Participant>
            <MdPersonOutline />
            {participant}명 참여
          </Participant>
        </Bottom>
      </Column>
    </Item>
  );
};

export default VoteItem;
