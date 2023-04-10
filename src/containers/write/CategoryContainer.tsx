import WriteCategory from "@components/write/WriteCategory";
import { useResource } from "@lib/hooks/common/useResource";
import { CATEGORY_LIST } from "@lib/queries/category";
import React from "react";

const CategoryContainer = () => {
  const category = useResource({
    key: CATEGORY_LIST.createKey(),
    fetcher: () => CATEGORY_LIST.fetcher(),
  });

  if (category.status === "success") {
    return <WriteCategory />;
  }

  return <></>;
};

export default React.memo(CategoryContainer);
