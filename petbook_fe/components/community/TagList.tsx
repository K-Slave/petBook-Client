import styled, { css } from "styled-components";

const ListUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ItemLi = styled.li<{ width: number; height: number; fontSize: number }>`
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

interface Props {
  tags: string[];
  width: number;
  height: number;
  fontSize: number;
}

const TagList = ({ tags, width, height, fontSize }: Props) => {
  return (
    <ListUl>
      {tags.map((tag, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ItemLi width={width} height={height} fontSize={fontSize} key={index}>
          {tag}
        </ItemLi>
      ))}
    </ListUl>
  );
};

export default TagList;
