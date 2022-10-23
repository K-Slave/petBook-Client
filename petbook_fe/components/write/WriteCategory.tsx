import { ArticleListResponse } from "@lib/API/petBookAPI/types/articleRequest";
import { CategoryListResponse } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import navigator from "@lib/modules/navigator";
import { useRouter } from "next/router";
import React, { MouseEventHandler, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import writeState from "../../atoms/pageAtoms/community/writeState";
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
  .test {
    position: absolute;
    bottom: 82vw;
    z-index: 99;
  }
`;

interface Props {
  categoryList: CategoryListResponse;
  articleList: ArticleListResponse;
}

const WriteCategory = ({ categoryList, articleList }: Props) => {
  console.log("Category render");

  const router = useRouter();

  const [selected, setSelected] = useState(
    router?.query.page
      ? categoryList[Number(router?.query.page) - 1].name
      : categoryList[0].name
  );

  const setWrite = useSetRecoilState(writeState);

  const onClick: MouseEventHandler = (e) => {
    const value = e.currentTarget.childNodes[0].textContent;
    const resultValue = value || categoryList[categoryList.length - 1].name;

    navigator(
      `/community/write?page=${
        categoryList.findIndex((elem) => elem.name === resultValue) + 1
      }`,
      undefined,
      { shallow: true }
    );

    setSelected(resultValue);
    setWrite((write) => ({
      ...write,
      selectedCategory: resultValue,
    }));
  };

  return (
    <WriteCategorySection>
      <p className="Category__Section__Title">카테고리를 선택해주세요</p>
      <div className="Category__Keyword__List">
        {categoryList.map((keyword, idx) => (
          <WriteCategoryButton
            key={keyword.name}
            keyword={keyword.name}
            selected={selected}
            onClick={onClick}
          />
        ))}
      </div>
      <div className="test">
        {articleList.map((article) => article.content)}
      </div>
    </WriteCategorySection>
  );
};

export default React.memo(WriteCategory);
