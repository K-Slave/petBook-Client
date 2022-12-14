import getRandomKey from "@lib/utils/getRandomKey";
import styled from "styled-components";

interface Props {
  tags: string[];
}

const TagList = ({ tags }: Props) => {
  return (
    <TagListUl>
      {tags.map((tag) => (
        <TagListLi key={getRandomKey()}>{tag}</TagListLi>
      ))}
    </TagListUl>
  );
};

const TagListUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TagListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  border-radius: 40px;
  background-color: var(--bg_white_02);
  color: var(--black_03);
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

export default TagList;
