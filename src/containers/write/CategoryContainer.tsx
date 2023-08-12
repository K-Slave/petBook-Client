import React from "react";
import WriteCategory from "@components/write/WriteCategory";
import { useResource } from "@lib/hooks/common/useResource";
import { CATEGORY_LIST } from "@lib/resources/commonResource";

const CategoryContainer = () => {
  const category = useResource({
    resource: CATEGORY_LIST,
  });

  if (category.status === "success") {
    return <WriteCategory />;
  }

  return <></>;
};

export default React.memo(CategoryContainer);
