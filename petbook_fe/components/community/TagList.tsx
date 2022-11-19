import getRandomKey from "@lib/utils/getRandomKey";
import styled from "styled-components";

interface Props {
  tags: string[];
  fontSize: number;
}

const TagList = ({ tags, fontSize }: Props) => {
  return (
    <TagListUl>
      {tags.map((tag) => (
        <TagListLi
          fontSize={fontSize}
          key={getRandomKey()}
        >
          {tag}
        </TagListLi>
      ))}
    </TagListUl>
  );
};

const TagListUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TagListLi = styled.li<{
  fontSize: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: #7c7c7c;
  font-weight: 500;
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;

export default TagList;
