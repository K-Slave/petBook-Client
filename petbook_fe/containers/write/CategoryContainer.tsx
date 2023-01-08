import WriteCategory from "@components/write/WriteCategory";
import useResource from "@lib/hooks/common/useResource";
import { CATEGORY_LIST } from "@pages/community/write";
import React from "react";

const CategoryContainer = () => {
  const category = useResource({
    ...CATEGORY_LIST,
    key: [`CATEGORY_LIST`],
  });

  if (category.status === "success") {
    return <WriteCategory />;
  }

  return <></>;
};

export default React.memo(CategoryContainer);
