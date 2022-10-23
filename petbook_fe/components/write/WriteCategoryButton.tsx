import { MouseEventHandler } from "react";
import styled from "styled-components";

interface ButtonProps {
  selected: string;
  keyword: string;
}

const WriteCategoryButtonBox = styled.button`
  padding: 8.5px 14px;

  ${(props: ButtonProps) => {
    if (!props) return { backgroundColor: "#fff4e0", color: "#000" };
    if (props.selected === props.keyword) {
      return { backgroundColor: "#FF6847", color: "#fff" };
    }
    if (props.selected !== props.keyword) {
      return { backgroundColor: "#fff4e0", color: "#000" };
    }

    return { backgroundColor: "#fff4e0", color: "#000" };
  }}

  border-radius: 18px;
`;

interface Props {
  keyword: string;
  selected: string;
  onClick: MouseEventHandler;
}

const WriteCategoryButton = ({ keyword, selected, onClick }: Props) => (
  <WriteCategoryButtonBox
    selected={selected}
    keyword={keyword}
    onClick={onClick}
  >
    {keyword}
  </WriteCategoryButtonBox>
);

export default WriteCategoryButton;
