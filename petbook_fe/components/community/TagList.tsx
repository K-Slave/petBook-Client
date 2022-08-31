import styled, { css } from "styled-components";

interface TagListProps {
  tags: string[];
  width: number;
  height: number;
  fontSize: number;
}

const TagList = ({ tags, width, height, fontSize }: TagListProps) => {
  return (
    <List>
      {tags.map((tag) => (
        <Item width={width} height={height} fontSize={fontSize}>
          {tag}
        </Item>
      ))}
    </List>
  );
};

export default TagList;

const List = styled.ul`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Item = styled.li<{ width: number; height: number; fontSize: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 5px;
  color: #7c7c7c;
  font-weight: 500;
  ${({ width, height, fontSize }) => css`
    width: ${width}px;
    height: ${height}px;
    font-size: ${fontSize}px;
  `}
`;
