import { CategoryListResponse } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import useSelectorState from "@lib/hooks/common/useSelectorState";
import { AxiosResponse } from "axios";
import React, { MouseEventHandler } from "react";
import { useQuery } from "react-query";
import writeState, {
  WriteStateType,
} from "../../atoms/pageAtoms/community/writeState";
import {
  ListDiv,
  WriteCategoryButtonBox,
  WriteCategorySection,
} from "./styled/styledWriteCategory";

const WriteCategory = () => {
  return (
    <WriteCategorySection>
      <p className="Category__Section__Title">카테고리를 선택해주세요</p>
      <WriteCategory.List />
    </WriteCategorySection>
  );
};

const List = () => {
  const { data } =
    useQuery<AxiosResponse<CategoryListResponse>>("CATEGORY_LIST");

  const [selectedCategory, setWrite] = useSelectorState<
    WriteStateType["selectedCategory"],
    WriteStateType
  >(writeState, "selectedCategory");

  const categoryList = data?.data as CategoryListResponse;

  const onClick: MouseEventHandler = (e) => {
    const value = e.currentTarget.childNodes[0].textContent;
    const resultValue = value || categoryList[0].name;

    setWrite((write) => ({
      ...write,
      selectedCategory: categoryList.findIndex(
        (category) => category.name === resultValue
      ),
    }));
  };
  return (
    <ListDiv className="Category__Keyword__List">
      {categoryList.map((keyword) => (
        <WriteCategory.Item
          key={keyword.name}
          selected={categoryList[selectedCategory].name}
          keyword={keyword.name}
          onClick={onClick}
        />
      ))}
    </ListDiv>
  );
};

interface ItemProps {
  keyword: string;
  selected: string;
  onClick: MouseEventHandler;
}

const Item = React.memo(({ keyword, selected, onClick }: ItemProps) => (
  <WriteCategoryButtonBox
    selected={selected}
    keyword={keyword}
    onClick={onClick}
  >
    {keyword}
  </WriteCategoryButtonBox>
));

WriteCategory.List = List;
WriteCategory.Item = Item;

export default React.memo(WriteCategory);
