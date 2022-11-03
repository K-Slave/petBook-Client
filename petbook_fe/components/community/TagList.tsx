import getRandomKey from "@lib/utils/getRandomKey";
import styled, { css } from "styled-components";

interface Props {
  tags: string[];
  width: number;
  height: number;
  fontSize: number;
}

const TagList = ({ tags, width, height, fontSize }: Props) => {
  return (
    <TagListUl>
      {tags.map((tag) => (
        <TagListLi
          width={width}
          height={height}
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
  width: number;
  height: number;
  fontSize: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  background-color: #f0f0f0;
  color: #7c7c7c;
  font-weight: 500;
  ${({ width, height, fontSize }) => css`
    width: ${width}px;
    height: ${height}px;
    font-size: ${fontSize}px;
  `}
`;

export default TagList;
