import { useRouter } from "next/router";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import writeState from "../../atoms/componentAtoms/community/writeState";
import useResource from "../../hooks/useResource";
import { board_list } from "../../pages/community/write";
import WriteCategoryButton from "./WriteCategoryButton";

const WriteCategorySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 100%;
  height: auto;

  margin-top: 52px;
  margin-bottom: 32px;

  .Category__Section__Title {
    font-weight: bold;
  }

  .Category__Keyword__List {
    display: flex;
    gap: 12px;

    width: 100%;
  }
  .testttttttt {
    position: absolute;
    bottom: 82vw;
    z-index: 99;
  }
`;

const WriteCategory = () => {
  console.log("Category render");

  const categoryKeyword = [
    "질문과 답변",
    "잡담",
    "나눔활동",
    "정보공유",
    "실종신고",
    "기타",
  ];
  const [selected, setSelected] = useState(categoryKeyword[0]);
  const setWrite = useSetRecoilState(writeState);

  const onClick: MouseEventHandler = (e) => {
    const value = e.currentTarget.childNodes[0].textContent;
    setSelected(value ? value : categoryKeyword[categoryKeyword.length - 1]);
    setWrite((write) => ({
      ...write,
      selectedCategory: value
        ? value
        : categoryKeyword[categoryKeyword.length - 1],
    }));
  };

  const board = useResource({
    ...board_list,
    key: `board_list_${
      categoryKeyword.findIndex((elem) => elem === selected) + 1
    }`,
    params: {
      id: 0,
      category_id: 0,
      visible_status: "Y",
      currentPage: categoryKeyword.findIndex((elem) => elem === selected) + 1,
      numPerPage: 10,
    },
  });
  console.log(board, "board");

  const router = useRouter();

  useEffect(() => {
    router.push(
      `/community/write?currentPage=${
        categoryKeyword.findIndex((elem) => elem === selected) + 1
      }`,
      undefined,
      { shallow: true }
    );
  }, [selected]);

  return (
    <>
      <WriteCategorySection>
        <label className='Category__Section__Title'>
          카테고리를 선택해주세요
        </label>
        <div className='Category__Keyword__List'>
          {categoryKeyword.map((keyword, idx) => {
            return (
              <WriteCategoryButton
                key={keyword}
                idx={idx}
                keyword={keyword}
                selected={selected}
                onClick={onClick}
              />
            );
          })}
        </div>
        {board.status === "success" && (
          <div className='testttttttt'>
            {board &&
              board.data &&
              board.data.data &&
              board.data.data.items &&
              board.data.data.items.map((elem) => elem.content)}
          </div>
        )}
      </WriteCategorySection>
    </>
  );
};

export default React.memo(WriteCategory);
