import { MouseEventHandler, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import writeState from "../../atoms/componentAtoms/community/writeState";
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
`;

const WriteCategory = () => {
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

  return (
    <WriteCategorySection>
      <label className='Category__Section__Title'>
        카테고리를 선택해주세요
      </label>
      <div className='Category__Keyword__List'>
        {categoryKeyword.map((keyword) => {
          return (
            <WriteCategoryButton
              key={keyword}
              keyword={keyword}
              selected={selected}
              onClick={onClick}
            />
          );
        })}
      </div>
    </WriteCategorySection>
  );
};

export default WriteCategory;
