import useSelectorState from "@lib/hooks/common/useSelectorState";
import React, { MouseEventHandler, useEffect } from "react";
import Skeleton from "@components/common/Skeleton/Skeleton";
import useResource from "@lib/hooks/common/useResource";
import { CATEGORY_LIST } from "@pages/community/write";
import writeState from "../../atoms/pageAtoms/community/writeState";
import {
  ListDiv,
  WriteCategoryButtonBox,
  WriteCategorySection,
} from "./styled/WriteCategory.style";

const WriteCategory = () => {
  return (
    <WriteCategorySection>
      <p className="Category__Section__Title">카테고리를 선택해주세요</p>
      <WriteCategory.List />
    </WriteCategorySection>
  );
};

const List = () => {
  const { data, status } = useResource(CATEGORY_LIST);

  const categoryList = data?.data ? data?.data : [];

  const [{ selectedCategory }, setWrite] = useSelectorState(writeState, {
    selectedCategory: {
      idx: 0,
      name: "",
    },
  });

  const onClick: MouseEventHandler = (e) => {
    const value = e.currentTarget.childNodes[0].textContent;
    const resultValue = value || categoryList[0].name;

    setWrite((write) => ({
      ...write,
      selectedCategory: {
        idx: categoryList.findIndex(
          (category) => category.name && category.name === resultValue
        ),

        name:
          categoryList[
            categoryList.findIndex(
              (category) => category.name && category.name === resultValue
            )
          ].name || "",
      },
    }));
  };

  useEffect(() => {
    setWrite((write) => ({
      ...write,
      selectedCategory: {
        idx: write.selectedCategory.idx,
        name: categoryList[selectedCategory.idx].name || "",
      },
    }));
  }, []);

  return (
    <ListDiv className="Category__Keyword__List">
      {status === "loading" && (
        <Skeleton width="80px" height="32px" borderRadius="40px" copy={5} />
      )}
      {categoryList.map((keyword) => (
        <WriteCategory.Item
          key={keyword.name}
          selected={categoryList[selectedCategory.idx].name || ""}
          keyword={keyword.name || ""}
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
