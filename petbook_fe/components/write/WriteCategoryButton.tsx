import { useRouter } from "next/router";
import { MouseEventHandler, useEffect, useState } from "react";
import styled from "styled-components";
import useResource from "../../hooks/useResource";
import { board_list_defaults } from "../../pages/api/petBook_API/boardRequest";
import { board_list } from "../../pages/community";

const WriteCategoryButtonBox = styled.button`
  padding: 8.5px 14px;

  ${(props: Props) => {
    if (!props) return { backgroundColor: "#fff4e0", color: "#000" };
    if (props.selected === props.keyword) {
      return { backgroundColor: "#FF6847", color: "#fff" };
    }
    if (props.selected !== props.keyword) {
      return { backgroundColor: "#fff4e0", color: "#000" };
    }
  }}

  border-radius: 18px;
`;

type Props = {
  keyword: string;
  idx: number;
  selected: string;
  onClick: MouseEventHandler;
};

const WriteCategoryButton = ({ keyword, idx, selected, onClick }: Props) => {
  return (
    <WriteCategoryButtonBox
      selected={selected}
      idx={idx}
      keyword={keyword}
      onClick={onClick}
    >
      {keyword}
    </WriteCategoryButtonBox>
  );
};

export default WriteCategoryButton;
